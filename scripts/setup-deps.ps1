# setup-deps.ps1: Universal Dependency Installer untuk Windows
# Mendukung: Windows 10/11 (Winget) dan Fallback Portable Binary

[CmdletBinding()]
param (
    [switch]$Force,
    [switch]$CheckOnly
)

$ErrorActionPreference = "Stop"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "   LAPORAN GENERATOR - WINDOWS DEPENDENCY SETUP           " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host ""

$packages = @(
    @{ Id = "Typst.Typst"; Name = "Typst Typesetting Engine"; Cmd = "typst" },
    @{ Id = "JohnMacFarlane.Pandoc"; Name = "Pandoc Document Converter"; Cmd = "pandoc" },
    @{ Id = "ImageMagick.ImageMagick"; Name = "ImageMagick"; Cmd = "magick" }
)

Write-Host "[1/3] Memeriksa dependensi saat ini..." -ForegroundColor Yellow
$missing = @()
foreach ($pkg in $packages) {
    $found = Get-Command $pkg.Cmd -ErrorAction SilentlyContinue
    if (-not $found -and $pkg.Cmd -eq "magick") {
        $found = Get-Command "convert" -ErrorAction SilentlyContinue
    }

    if ($found) {
        Write-Host "  [OK] $($pkg.Name) ($($pkg.Cmd)) terpasang." -ForegroundColor Green
    } else {
        Write-Host "  [MISSING] $($pkg.Name) belum terpasang." -ForegroundColor Red
        $missing += $pkg
    }
}

if ($missing.Count -eq 0 -and -not $Force) {
    Write-Host ""
    Write-Host "✔ Semua dependensi utama sudah lengkap dan siap digunakan!" -ForegroundColor Green
    exit 0
}

if ($CheckOnly) {
    Write-Host ""
    Write-Host "Ada $($missing.Count) dependensi yang belum terpasang." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "[2/3] Memasang dependensi yang dibutuhkan..." -ForegroundColor Yellow

$hasWinget = Get-Command "winget" -ErrorAction SilentlyContinue

if ($hasWinget) {
    Write-Host "Menggunakan Windows Package Manager (Winget)..." -ForegroundColor Cyan
    foreach ($pkg in $missing) {
        Write-Host "--> Memasang $($pkg.Name) [$($pkg.Id)]..." -ForegroundColor White
        try {
            $process = Start-Process -FilePath "winget" -ArgumentList "install --id $($pkg.Id) --silent --accept-package-agreements --accept-source-agreements" -Wait -PassThru -NoNewWindow
            if ($process.ExitCode -eq 0) {
                Write-Host "    [SUKSES] $($pkg.Name) berhasil dipasang." -ForegroundColor Green
            } else {
                Write-Host "    [INFO] Winget exit code: $($process.ExitCode)." -ForegroundColor Yellow
            }
        } catch {
            Write-Host "    [GAGAL] Gagal memasang $($pkg.Name): $_" -ForegroundColor Red
        }
    }
} else {
    Write-Host "[WARN] Winget tidak ditemukan di sistem ini." -ForegroundColor Yellow
    Write-Host "Memulai pemasangan portable ke folder lokal..." -ForegroundColor Cyan

    $localBin = Join-Path $env:LOCALAPPDATA "laporan-generator\bin"
    if (-not (Test-Path $localBin)) {
        New-Item -ItemType Directory -Path $localBin -Force | Out-Null
    }

    # Unduh Typst standalone jika belum ada
    if (-not (Get-Command "typst" -ErrorAction SilentlyContinue)) {
        Write-Host "--> Mengunduh Typst standalone release..." -ForegroundColor White
        $typstZip = Join-Path $env:TEMP "typst-x86_64-pc-windows-msvc.zip"
        $typstUrl = "https://github.com/typst/typst/releases/latest/download/typst-x86_64-pc-windows-msvc.zip"
        Invoke-WebRequest -Uri $typstUrl -OutFile $typstZip
        Expand-Archive -Path $typstZip -DestinationPath (Join-Path $env:TEMP "typst-extracted") -Force
        $typstExe = Get-ChildItem -Path (Join-Path $env:TEMP "typst-extracted") -Filter "typst.exe" -Recurse | Select-Object -First 1
        if ($typstExe) {
            Copy-Item -Path $typstExe.FullName -Destination (Join-Path $localBin "typst.exe") -Force
            Write-Host "    [SUKSES] Typst tersimpan di $localBin" -ForegroundColor Green
        }
        Remove-Item -Path $typstZip -Force -ErrorAction SilentlyContinue
    }

    # Tambahkan localBin ke User PATH jika belum terdaftar
    $userPath = [Environment]::GetEnvironmentVariable("Path", "User")
    if ($userPath -notlike "*$localBin*") {
        [Environment]::SetEnvironmentVariable("Path", "$userPath;$localBin", "User")
        Write-Host "    [OK] Ditambahkan ke User PATH: $localBin" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "[3/3] Memperbarui sesi Environment PATH..." -ForegroundColor Yellow
$machinePath = [Environment]::GetEnvironmentVariable("Path", "Machine")
$userPath = [Environment]::GetEnvironmentVariable("Path", "User")
$env:Path = "$machinePath;$userPath"

Write-Host ""
Write-Host "==========================================================" -ForegroundColor Green
Write-Host "   PEMASANGAN SELESAI! SILAKAN JALANKAN BUILD DOKUMEN     " -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Green

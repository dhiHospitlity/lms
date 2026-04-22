$ErrorActionPreference = 'Continue'
$root = $PSScriptRoot
$pollSeconds = 5
$email = 'dhihospitalitysolutions@gmail.com'
$name  = 'Prakash K'

Set-Location $root

Write-Host ''
Write-Host '================================================' -ForegroundColor Cyan
Write-Host '    Dusit Learning  -  Auto Deploy Watcher' -ForegroundColor Cyan
Write-Host '================================================' -ForegroundColor Cyan
Write-Host ''
Write-Host "Watching:  $root"
Write-Host "Polling:   every $pollSeconds seconds"
Write-Host "Live URL:  https://lmsdusit.dhihospitality.com/"
Write-Host ''
Write-Host 'Leave this window open. Press Ctrl+C or close window to stop.'
Write-Host ''

while ($true) {
    Start-Sleep -Seconds $pollSeconds

    $status = git status --porcelain 2>$null
    if (-not $status) { continue }

    $ts = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
    Write-Host ''
    Write-Host "[$ts] Changes detected:" -ForegroundColor Yellow
    $status | ForEach-Object { Write-Host "  $_" -ForegroundColor Gray }

    git add -A | Out-Null
    $msg = "auto: $ts"
    git -c user.email=$email -c user.name=$name commit -m $msg | Out-Null

    if ($LASTEXITCODE -ne 0) {
        Write-Host '  commit skipped (nothing staged or hook failure)' -ForegroundColor DarkGray
        continue
    }

    Write-Host '  committed, pushing...' -ForegroundColor Yellow
    $pushOutput = git push origin main 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host '  [OK] live in ~30s at https://lmsdusit.dhihospitality.com/' -ForegroundColor Green
    } else {
        Write-Host '  [FAIL] push failed:' -ForegroundColor Red
        $pushOutput | ForEach-Object { Write-Host "    $_" -ForegroundColor Red }
    }
}

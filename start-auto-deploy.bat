@echo off
title Dusit Learning - Auto Deploy
cd /d "%~dp0"
powershell -ExecutionPolicy Bypass -File "%~dp0auto-deploy.ps1"
echo.
echo Watcher stopped. Press any key to close.
pause >nul

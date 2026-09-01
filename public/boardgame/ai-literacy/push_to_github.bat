@echo off
chcp 65001 >nul
title Push Game to GitHub
color 0b

echo ========================================================
echo   Mastering Generative AI Creative Design - Board Game
echo   Uploading project files to GitHub (Snowdollce/boardgameai)
echo ========================================================
echo.

git remote remove origin 2>nul
git remote add origin https://github.com/Snowdollce/boardgameai.git
git branch -M main

echo Uploading files to GitHub...
echo (If a browser window appears, please click 'Sign in with your browser')
echo.

git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo   SUCCESS! All files uploaded to GitHub successfully!
    echo   You can now go to https://vercel.com/new and Deploy!
    echo ========================================================
) else (
    echo.
    echo Upload paused. Please check your GitHub login.
)

echo.
pause

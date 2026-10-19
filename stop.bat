@echo off
chcp 65001 > nul
echo ========================================================
echo   [Gemini CLI 대시보드 심화 26] 서버 안전 종료기
echo ========================================================
echo.
echo 포트 10211에서 실행 중인 Flask 서버를 종료합니다...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":10211"') do (
    taskkill /F /PID %%a 2>nul
)
echo 서버가 안전하게 종료되었습니다.
pause

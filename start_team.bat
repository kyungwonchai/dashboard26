@echo off
chcp 65001 > nul
echo ========================================================
echo   [Gemini CLI 대시보드 심화 26] 사내망 팀 공유 실행기
echo ========================================================
echo.

cd /d "%~dp0"

if not exist "venv\Scripts\python.exe" (
    echo [알림] 가상환경을 준비합니다...
    python -m venv venv
    call venv\Scripts\activate.bat
    pip install -r requirements.txt
) else (
    call venv\Scripts\activate.bat
)

for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /i "ipv4"') do (
    set IP=%%a
    goto :found_ip
)
:found_ip
set IP=%IP: =%

echo [안내] 팀원 공유 접속 주소: http://%IP%:10211/
echo [안내] 내 PC 로컬 주소: http://127.0.0.1:10211/
echo.
echo * 팀원이 접속하지 못할 경우: 윈도우 방화벽 인바운드 10211 포트 허용 여부를 확인하세요.
echo.

start http://127.0.0.1:10211/

python app.py --team
pause

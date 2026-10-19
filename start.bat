@echo off
chcp 65001 > nul
echo ========================================================
echo   [Gemini CLI 대시보드 심화 26] 로컬 원클릭 실행기
echo ========================================================
echo.

cd /d "%~dp0"

REM 1. 가상환경 점검
if not exist "venv\Scripts\python.exe" (
    echo [알림] 가상환경(venv)을 생성하고 패키지를 설치합니다...
    python -m venv venv
    call venv\Scripts\activate.bat
    pip install -r requirements.txt
) else (
    call venv\Scripts\activate.bat
)

echo [1/2] 브라우저를 엽니다...
start http://127.0.0.1:10211/

echo [2/2] Flask 서버를 시작합니다 (내 PC 전용 모드)...
python app.py
pause

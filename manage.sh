#!/usr/bin/env bash
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PIDFILE="$DIR/.app.pid"
LOGFILE="$DIR/app.log"
PORT=10211

start() {
  if [ -f "$PIDFILE" ] && kill -0 "$(cat "$PIDFILE")" 2>/dev/null; then
    echo "dashboard26 is already running (PID: $(cat "$PIDFILE"))"
    return 0
  fi
  echo "Starting dashboard26 on port $PORT..."
  cd "$DIR" || exit 1
  python3 -c "import subprocess, os; env = os.environ.copy(); env['PORT'] = '$PORT'; env['TEAM_SHARE'] = '1'; p = subprocess.Popen(['$DIR/venv/bin/python', '$DIR/app.py'], cwd='$DIR', env=env, start_new_session=True, stdout=open('$LOGFILE', 'a'), stderr=subprocess.STDOUT); open('$PIDFILE', 'w').write(str(p.pid))"
  echo "Started (PID: $(cat "$PIDFILE"), Port: $PORT)"
}

stop() {
  if [ -f "$PIDFILE" ]; then
    PID="$(cat "$PIDFILE")"
    if kill -0 "$PID" 2>/dev/null; then
      kill "$PID" 2>/dev/null
      rm -f "$PIDFILE"
      echo "Stopped."
      return 0
    fi
    rm -f "$PIDFILE"
  fi
  fuser -k ${PORT}/tcp 2>/dev/null || true
  echo "Stopped."
}

status() {
  if [ -f "$PIDFILE" ] && kill -0 "$(cat "$PIDFILE")" 2>/dev/null; then
    echo "Running (PID: $(cat "$PIDFILE"))"
    exit 0
  else
    echo "Stopped"
    exit 1
  fi
}

case "$1" in
  start)   start ;;
  stop)    stop ;;
  restart) stop; sleep 1; start ;;
  status)  status ;;
  *) echo "Usage: $0 {start|stop|restart|status}"; exit 1 ;;
esac

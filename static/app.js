// app.js - Gemini CLI 대시보드 심화 프론트엔드 제어 스크립트

// 전역 상태
let currentUser = localStorage.getItem('dash26_user') || '채경원';
let myTasksOnly = localStorage.getItem('dash26_myonly') === 'true';
let membersList = [];
let charts = {};
let selectedExcelFile = null;

// API 베이스 URL (Nginx 서브패스 호환 처리)
const API_BASE = window.location.pathname.startsWith('/dashboard26') ? '/dashboard26/api' : '/api';

// 초기화
document.addEventListener('DOMContentLoaded', async () => {
  setupTabs();
  await loadMembers();
  setupCurrentUser();
  loadSummary();
  loadTasks();
  setupDates();

  // 30초마다 팀 현황 및 홈 요약 실시간 갱신 (STEP 05 요구사항)
  setInterval(() => {
    loadSummary();
    if (document.getElementById('tab-team').classList.contains('active')) {
      loadTeamStatus();
    }
  }, 30000);
});

// 날짜 입력 기본값 (오늘)
function setupDates() {
  const today = new Date().toISOString().split('T')[0];
  if (document.getElementById('wl-date')) document.getElementById('wl-date').value = today;
  if (document.getElementById('task-modal-due')) document.getElementById('task-modal-due').value = today;
  if (document.getElementById('sched-modal-start')) document.getElementById('sched-modal-start').value = today;
  if (document.getElementById('sched-modal-end')) document.getElementById('sched-modal-end').value = today;
}

// 탭 전환 처리
function setupTabs() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(n => n.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

      item.classList.add('active');
      const tabId = item.dataset.tab;
      const targetPane = document.getElementById(tabId);
      if (targetPane) targetPane.classList.add('active');

      // 탭 진입 시 데이터 로드
      if (tabId === 'tab-tasks') loadTasks();
      if (tabId === 'tab-team') loadTeamStatus();
      if (tabId === 'tab-logs') loadWorklogs();
      if (tabId === 'tab-stats') loadStats();
      if (tabId === 'tab-gallery') loadGallery();
      if (tabId === 'tab-calendar') loadSchedules();
      if (tabId === 'tab-qna') loadAdminQnA();
      if (tabId === 'tab-note') loadLecturerNote();
      if (tabId === 'tab-system') loadBackups();
    });
  });
}

// 현재 탭 새로고침
function refreshCurrentTab() {
  const activeTab = document.querySelector('.nav-item.active');
  if (activeTab) activeTab.click();
  loadSummary();
}

// 팀원 목록 로드
async function loadMembers() {
  try {
    const res = await fetch(`${API_BASE}/members`);
    membersList = await res.json();

    // 콤보박스들 갱신
    const userSelect = document.getElementById('current-user-select');
    const taskAssignee = document.getElementById('task-modal-assignee');
    const taskFilter = document.getElementById('task-filter-assignee');
    const wlMember = document.getElementById('wl-member');

    if (userSelect) {
      userSelect.innerHTML = membersList.map(m => `<option value="${m.name}">${m.name} (${m.part})</option>`).join('');
    }
    if (taskAssignee) {
      taskAssignee.innerHTML = membersList.map(m => `<option value="${m.name}">${m.name}</option>`).join('');
    }
    if (taskFilter) {
      taskFilter.innerHTML = `<option value="전체">모든 담당자</option>` + membersList.map(m => `<option value="${m.name}">${m.name}</option>`).join('');
    }
    if (wlMember) {
      wlMember.innerHTML = membersList.map(m => `<option value="${m.name}">${m.name}</option>`).join('');
    }
  } catch (err) {
    console.error('팀원 로드 실패:', err);
  }
}

// "나는 누구?" 사용자 설정
function setupCurrentUser() {
  const select = document.getElementById('current-user-select');
  if (select) select.value = currentUser;
  updateUserUI();
}

function changeCurrentUser(name) {
  currentUser = name;
  localStorage.setItem('dash26_user', name);
  updateUserUI();
  loadTasks();
}

function updateUserUI() {
  const badge = document.getElementById('whoami-badge');
  const greeting = document.getElementById('greeting-text');
  if (badge) badge.textContent = currentUser;
  if (greeting) greeting.innerHTML = `안녕하세요, <span class="grad-text">${currentUser}님!</span>`;
  updateMyFilterBtn();
}

function toggleMyTasksOnly() {
  myTasksOnly = !myTasksOnly;
  localStorage.setItem('dash26_myonly', myTasksOnly);
  updateMyFilterBtn();
  loadTasks();
}

function updateMyFilterBtn() {
  const btn = document.getElementById('my-task-filter-btn');
  if (btn) {
    if (myTasksOnly) {
      btn.textContent = `✅ ${currentUser}님 할 일만 보는 중`;
      btn.style.borderColor = 'var(--accent)';
      btn.style.color = 'var(--accent)';
    } else {
      btn.textContent = `🔍 내 할 일만 보기`;
      btn.style.borderColor = 'var(--border)';
      btn.style.color = 'var(--text)';
    }
  }
}

// 4대 요약 카드 로드
async function loadSummary() {
  try {
    const res = await fetch(`${API_BASE}/summary`);
    const data = await res.json();
    document.getElementById('stat-total').textContent = data.total;
    document.getElementById('stat-due-today').textContent = data.due_today;
    document.getElementById('stat-overdue').textContent = data.overdue;
    document.getElementById('stat-week-completed').textContent = data.week_completed;
    document.getElementById('today-due-count').textContent = data.due_today;
  } catch (err) {
    console.error('요약 카드 로드 실패:', err);
  }
}

// 팀 할 일 목록 로드
async function loadTasks() {
  try {
    let url = `${API_BASE}/tasks?`;
    const search = document.getElementById('task-search-input')?.value.trim();
    const status = document.getElementById('task-filter-status')?.value;
    let assignee = document.getElementById('task-filter-assignee')?.value;

    if (myTasksOnly) {
      assignee = currentUser;
    }

    if (search) url += `search=${encodeURIComponent(search)}&`;
    if (status && status !== '전체') url += `status=${encodeURIComponent(status)}&`;
    if (assignee && assignee !== '전체') url += `assignee=${encodeURIComponent(assignee)}&`;

    const res = await fetch(url);
    const tasks = await res.json();

    renderTasksTable(tasks);
    renderHomeRecent(tasks.slice(0, 5));
  } catch (err) {
    console.error('할 일 로드 실패:', err);
  }
}

function renderTasksTable(tasks) {
  const tbody = document.getElementById('tasks-table-body');
  if (!tbody) return;

  if (tasks.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:30px; color:var(--text-dim);">등록된 할 일이 없습니다.</td></tr>`;
    return;
  }

  const todayStr = new Date().toISOString().split('T')[0];

  tbody.innerHTML = tasks.map(t => {
    const isDone = t.status === '완료';
    const isOverdue = !isDone && t.due_date < todayStr;
    const pTag = t.priority === '높음' ? 'tag-high' : t.priority === '낮음' ? 'tag-low' : 'tag-mid';

    return `
      <tr style="${isDone ? 'opacity:0.6;' : ''}">
        <td>
          <input type="checkbox" ${isDone ? 'checked' : ''} onchange="toggleTaskDone(${t.id}, this.checked)" style="cursor:pointer; width:16px; height:16px;">
        </td>
        <td style="${isDone ? 'text-decoration:line-through;' : 'font-weight:600;'}">${escapeHtml(t.title)}</td>
        <td><span style="color:var(--text-muted); font-size:12px;">📁 ${escapeHtml(t.project || '-')}</span></td>
        <td><b>${escapeHtml(t.assignee)}</b></td>
        <td><span class="tag ${pTag}">${t.priority}</span></td>
        <td>${t.due_date}</td>
        <td>
          ${isDone ? '<span class="tag tag-done">완료</span>' : isOverdue ? '<span class="tag tag-overdue">지연🚨</span>' : '<span class="tag tag-mid">진행중</span>'}
        </td>
        <td>
          <button class="btn btn-danger" onclick="deleteTask(${t.id})" style="padding:4px 8px; font-size:11px;">삭제</button>
        </td>
      </tr>
    `;
  }).join('');
}

function renderHomeRecent(tasks) {
  const box = document.getElementById('home-recent-tasks');
  if (!box) return;
  if (tasks.length === 0) {
    box.innerHTML = `<p style="color:var(--text-dim); font-size:13px;">최근 과제가 없습니다.</p>`;
    return;
  }
  box.innerHTML = tasks.map(t => `
    <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid var(--border);">
      <div>
        <div style="font-size:14px; font-weight:600; color:var(--text);">${escapeHtml(t.title)}</div>
        <div style="font-size:11px; color:var(--text-dim); margin-top:2px;">담당: ${escapeHtml(t.assignee)} · 마감: ${t.due_date}</div>
      </div>
      <div>
        <span class="tag ${t.status === '완료' ? 'tag-done' : 'tag-mid'}">${t.status}</span>
      </div>
    </div>
  `).join('');
}

async function toggleTaskDone(id, isChecked) {
  try {
    await fetch(`${API_BASE}/tasks/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: isChecked ? '완료' : '진행중' })
    });
    loadTasks();
    loadSummary();
  } catch (err) {
    alert('할 일 상태 업데이트 실패');
  }
}

async function deleteTask(id) {
  if (!confirm('정말 이 할 일을 삭제하시겠습니까?')) return;
  try {
    await fetch(`${API_BASE}/tasks/${id}`, { method: 'DELETE' });
    loadTasks();
    loadSummary();
  } catch (err) {
    alert('삭제 실패');
  }
}

// 새 할 일 등록 모달 처리
function openNewTaskModal() {
  document.getElementById('task-modal').classList.add('active');
}

async function saveNewTask(e) {
  e.preventDefault();
  const title = document.getElementById('task-modal-title').value.trim();
  const assignee = document.getElementById('task-modal-assignee').value;
  const project = document.getElementById('task-modal-project').value.trim();
  const priority = document.getElementById('task-modal-priority').value;
  const due_date = document.getElementById('task-modal-due').value;

  try {
    const res = await fetch(`${API_BASE}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, assignee, project, priority, due_date })
    });
    const data = await res.json();
    if (res.ok) {
      closeModal('task-modal');
      document.getElementById('task-modal-title').value = '';
      loadTasks();
      loadSummary();
    } else {
      alert(data.error || '등록 실패');
    }
  } catch (err) {
    alert('서버 통신 오류');
  }
}

// 팀 현황판 (STEP 05)
async function loadTeamStatus() {
  try {
    const res = await fetch(`${API_BASE}/team-status`);
    const list = await res.json();
    const container = document.getElementById('team-cards-grid');
    if (!container) return;

    container.innerHTML = list.map(item => {
      const m = item.member;
      const isOverdue = item.overdue > 0;
      return `
        <div class="glass" style="padding:22px; border: 1px solid ${isOverdue ? '#ef4444' : 'var(--border)'}; box-shadow: ${isOverdue ? '0 0 20px rgba(239, 68, 68, 0.25)' : 'var(--shadow)'};">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
            <div style="display:flex; align-items:center; gap:10px;">
              <div style="width:36px; height:36px; border-radius:50%; background:${m.avatar_color}; display:flex; align-items:center; justify-content:center; font-weight:700; color:#fff;">
                ${m.name.substring(0, 1)}
              </div>
              <div>
                <h4 style="font-size:15px; font-weight:700;">${escapeHtml(m.name)} <span style="font-size:11px; color:var(--text-dim);">(${m.role})</span></h4>
                <p style="font-size:11px; color:var(--text-muted);">${m.part}</p>
              </div>
            </div>
            ${isOverdue ? '<span class="tag tag-overdue">지연 발생!</span>' : '<span class="tag tag-low">순항중</span>'}
          </div>

          <div style="margin-bottom:14px;">
            <div style="display:flex; justify-content:space-between; font-size:11px; color:var(--text-dim); margin-bottom:4px;">
              <span>완료율</span>
              <b>${item.rate}%</b>
            </div>
            <div style="width:100%; height:8px; background:var(--bg-soft); border-radius:4px; overflow:hidden;">
              <div style="width:${item.rate}%; height:100%; background:var(--grad-brand); border-radius:4px; transition:width 0.4s;"></div>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px; text-align:center; background:var(--bg-soft); padding:10px; border-radius:8px; margin-bottom:14px;">
            <div>
              <div style="font-size:11px; color:var(--text-dim);">진행중</div>
              <b style="font-size:16px;">${item.in_progress}</b>
            </div>
            <div>
              <div style="font-size:11px; color:var(--text-dim);">금주완료</div>
              <b style="font-size:16px; color:#10b981;">${item.week_completed}</b>
            </div>
            <div>
              <div style="font-size:11px; color:var(--text-dim);">지연</div>
              <b style="font-size:16px; color:${isOverdue ? '#ef4444' : 'var(--text-muted)'};">${item.overdue}</b>
            </div>
          </div>

          <details style="font-size:12px; color:var(--text-muted);">
            <summary style="cursor:pointer; font-weight:600; color:var(--accent);">🔍 담당 할 일 목록 (${item.tasks.length}건)</summary>
            <div style="margin-top:8px; display:flex; flex-direction:column; gap:4px;">
              ${item.tasks.map(t => `
                <div style="padding:4px 0; border-bottom:1px dashed var(--border); display:flex; justify-content:space-between;">
                  <span>${escapeHtml(t.title)}</span>
                  <span style="font-size:10px; color:${t.status==='완료'?'#10b981':'#f59e0b'};">${t.status}</span>
                </div>
              `).join('')}
            </div>
          </details>
        </div>
      `;
    }).join('');
  } catch (err) {
    console.error('팀 현황 로드 실패:', err);
  }
}

// TV 모드 토글 (STEP 05 변형미션)
function toggleTVMode() {
  document.body.classList.toggle('tv-mode');
  if (document.body.classList.contains('tv-mode')) {
    document.getElementById('sidebar').style.display = 'none';
    document.body.style.fontSize = '18px';
  } else {
    document.getElementById('sidebar').style.display = 'flex';
    document.body.style.fontSize = '';
  }
}

// 업무일지 (STEP 06)
async function loadWorklogs() {
  try {
    const res = await fetch(`${API_BASE}/worklogs`);
    const logs = await res.json();
    const tbody = document.getElementById('worklogs-table-body');
    if (!tbody) return;

    tbody.innerHTML = logs.map(l => `
      <tr>
        <td>${l.log_date}</td>
        <td><b>${escapeHtml(l.member_name)}</b></td>
        <td><span class="tag tag-mid">${escapeHtml(l.category)}</span></td>
        <td>${l.hours}시간</td>
        <td>${escapeHtml(l.content)}</td>
      </tr>
    `).join('');
  } catch (err) {
    console.error('업무일지 로드 실패:', err);
  }
}

async function submitWorklog(e) {
  e.preventDefault();
  const log_date = document.getElementById('wl-date').value;
  const member_name = document.getElementById('wl-member').value;
  const category = document.getElementById('wl-cat').value;
  const hours = document.getElementById('wl-hours').value;
  const content = document.getElementById('wl-content').value.trim();

  try {
    const res = await fetch(`${API_BASE}/worklogs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ log_date, member_name, category, hours, content })
    });
    if (res.ok) {
      document.getElementById('wl-content').value = '';
      loadWorklogs();
      alert('업무일지가 저장되었습니다.');
    }
  } catch (err) {
    alert('일지 저장 오류');
  }
}

// 엑셀 선택 및 미리보기 (STEP 06)
async function handleExcelSelected(e) {
  selectedExcelFile = e.target.files[0];
  if (!selectedExcelFile) return;

  document.getElementById('excel-selected-name').textContent = `선택된 파일: ${selectedExcelFile.name}`;

  const formData = new FormData();
  formData.append('file', selectedExcelFile);

  try {
    const res = await fetch(`${API_BASE}/worklogs/excel-upload`, {
      method: 'POST',
      body: formData
    });
    const data = await res.json();

    if (res.ok) {
      const box = document.getElementById('excel-preview-box');
      box.style.display = 'block';
      document.getElementById('excel-preview-count').textContent = data.total_valid;

      const errDiv = document.getElementById('excel-error-msg');
      if (data.errors && data.errors.length > 0) {
        errDiv.innerHTML = data.errors.join('<br>');
      } else {
        errDiv.innerHTML = '';
      }

      const tbody = document.querySelector('#excel-preview-table tbody');
      tbody.innerHTML = data.preview.map(p => `
        <tr>
          <td>${p.row}</td>
          <td>${p.log_date}</td>
          <td>${p.member}</td>
          <td>${p.category}</td>
          <td>${p.hours}</td>
          <td>${escapeHtml(p.content)}</td>
        </tr>
      `).join('');
    } else {
      alert(data.error || '엑셀 분석 실패');
    }
  } catch (err) {
    alert('엑셀 파일 처리 오류');
  }
}

async function confirmExcelUpload() {
  if (!selectedExcelFile) return;
  const formData = new FormData();
  formData.append('file', selectedExcelFile);
  formData.append('commit', 'true');

  try {
    const res = await fetch(`${API_BASE}/worklogs/excel-upload`, {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
    if (res.ok) {
      alert(`🎉 ${data.count}건의 업무일지가 DB에 등록되었습니다!`);
      document.getElementById('excel-preview-box').style.display = 'none';
      document.getElementById('excel-selected-name').textContent = '선택된 파일 없음';
      selectedExcelFile = null;
      loadWorklogs();
    } else {
      alert(data.error || '저장 실패');
    }
  } catch (err) {
    alert('최종 저장 통신 실패');
  }
}

// 통계 차트 (STEP 07 - Chart.js)
async function loadStats() {
  try {
    const res = await fetch(`${API_BASE}/stats`);
    const data = await res.json();

    // 차트 1: 팀원별 완료 건수 (막대)
    renderChartMembers(data.assignee_stats);
    // 차트 2: 업무 구분별 소요 시간 비율 (도넛)
    renderChartCategories(data.category_stats);
    // 차트 3: 최근 4주 주간 완료 추이 (선)
    renderChartTrend(data.weekly_trend);
  } catch (err) {
    console.error('통계 로드 실패:', err);
  }
}

function renderChartMembers(stats) {
  const ctx = document.getElementById('chart-members')?.getContext('2d');
  if (!ctx) return;
  if (charts.members) charts.members.destroy();

  charts.members = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: stats.map(s => s.assignee),
      datasets: [{
        label: '완료 건수',
        data: stats.map(s => s.cnt),
        backgroundColor: '#8b5cf6',
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { ticks: { stepSize: 1, color: '#9ba1b6' }, grid: { color: 'rgba(255,255,255,0.05)' } },
        x: { ticks: { color: '#9ba1b6' }, grid: { display: false } }
      }
    }
  });
}

function renderChartCategories(stats) {
  const ctx = document.getElementById('chart-categories')?.getContext('2d');
  if (!ctx) return;
  if (charts.categories) charts.categories.destroy();

  charts.categories = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: stats.map(s => s.category),
      datasets: [{
        data: stats.map(s => s.total_hours),
        backgroundColor: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b', '#ef4444', '#64748b']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'right', labels: { color: '#9ba1b6' } }
      }
    }
  });
}

function renderChartTrend(trend) {
  const ctx = document.getElementById('chart-trend')?.getContext('2d');
  if (!ctx) return;
  if (charts.trend) charts.trend.destroy();

  charts.trend = new Chart(ctx, {
    type: 'line',
    data: {
      labels: trend.map(t => t.label),
      datasets: [{
        label: '주간 완료 건수',
        data: trend.map(t => t.completed),
        borderColor: '#06b6d4',
        backgroundColor: 'rgba(6, 182, 212, 0.1)',
        tension: 0.3,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: '#06b6d4'
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { ticks: { stepSize: 1, color: '#9ba1b6' }, grid: { color: 'rgba(255,255,255,0.05)' } },
        x: { ticks: { color: '#9ba1b6' }, grid: { display: false } }
      }
    }
  });
}

// 주간보고 초안 생성 (STEP 08)
async function generateWeeklyReport() {
  try {
    const res = await fetch(`${API_BASE}/weekly-report`);
    const data = await res.json();

    let text = `=========================================\n`;
    text += `📢 [AI 혁신 파트] 주간 업무 실적 보고서\n`;
    text += `작성일: ${new Date().toISOString().split('T')[0]}\n`;
    text += `=========================================\n\n`;

    data.forEach(m => {
      text += `[${m.member} (${m.part})]\n`;
      text += `1. 완료 업무 (${m.done.length}건):\n`;
      text += m.done.length ? m.done.map(d => `   - ${d}`).join('\n') + '\n' : '   - 없음\n';

      text += `2. 진행 중 업무 (${m.ongoing.length}건):\n`;
      text += m.ongoing.length ? m.ongoing.map(d => `   - ${d}`).join('\n') + '\n' : '   - 없음\n';

      if (m.delayed.length > 0) {
        text += `3. 지연 업무 (${m.delayed.length}건 🚨):\n`;
        text += m.delayed.map(d => `   - ${d}`).join('\n') + '\n';
      }

      text += `4. 업무 구분별 투입 시간:\n`;
      for (const [cat, h] of Object.entries(m.hours)) {
        text += `   • ${cat}: ${h}시간\n`;
      }
      text += `\n-----------------------------------------\n\n`;
    });

    document.getElementById('report-text-area').textContent = text;
    document.getElementById('report-preview-card').style.display = 'block';
  } catch (err) {
    alert('보고서 생성 실패');
  }
}

function copyReportToClipboard() {
  const text = document.getElementById('report-text-area').textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert('📋 주간보고 텍스트가 클립보드에 복사되었습니다!');
  });
}

// 심화: 이미지 갤러리 아카이브
async function loadGallery() {
  try {
    const res = await fetch(`${API_BASE}/gallery`);
    const items = await res.json();
    const container = document.getElementById('gallery-container');
    if (!container) return;

    if (items.length === 0) {
      container.innerHTML = `<p style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-dim);">보관된 이미지가 없습니다.</p>`;
      return;
    }

    const uploadBase = window.location.pathname.startsWith('/dashboard26') ? '/dashboard26/uploads' : '/uploads';

    container.innerHTML = items.map(item => `
      <div class="glass gallery-item">
        <img src="${uploadBase}/${item.filename}" class="gallery-thumb" alt="${escapeHtml(item.title)}">
        <div class="gallery-info">
          <h4 style="font-size:14px; font-weight:700;">${escapeHtml(item.title)}</h4>
          <p style="font-size:11px; color:var(--text-muted);">${item.memo || '메모 없음'}</p>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
            <span style="font-size:10px; color:var(--text-dim);">${item.uploader} · ${(item.filesize / 1024).toFixed(1)} KB</span>
            <button class="btn btn-danger" onclick="deleteGalleryItem(${item.id})" style="padding:3px 8px; font-size:11px;">삭제</button>
          </div>
        </div>
      </div>
    `).join('');
  } catch (err) {
    console.error('갤러리 로드 실패:', err);
  }
}

function openNewImageModal() {
  document.getElementById('image-modal').classList.add('active');
}

async function saveNewImage(e) {
  e.preventDefault();
  const file = document.getElementById('img-modal-file').files[0];
  const title = document.getElementById('img-modal-title').value.trim();
  const memo = document.getElementById('img-modal-memo').value.trim();

  if (!file) return;

  const formData = new FormData();
  formData.append('image', file);
  formData.append('title', title);
  formData.append('uploader', currentUser);
  formData.append('memo', memo);

  try {
    const res = await fetch(`${API_BASE}/gallery`, {
      method: 'POST',
      body: formData
    });
    if (res.ok) {
      closeModal('image-modal');
      document.getElementById('img-modal-title').value = '';
      document.getElementById('img-modal-memo').value = '';
      loadGallery();
      alert('이미지가 안전하게 보관되었습니다.');
    }
  } catch (err) {
    alert('이미지 업로드 실패');
  }
}

async function deleteGalleryItem(id) {
  if (!confirm('정말 이 이미지를 영구 삭제하시겠습니까?')) return;
  try {
    await fetch(`${API_BASE}/gallery/${id}`, { method: 'DELETE' });
    loadGallery();
  } catch (err) {
    alert('삭제 실패');
  }
}

// 심화: 일정 캘린더
async function loadSchedules() {
  try {
    const res = await fetch(`${API_BASE}/schedules`);
    const list = await res.json();
    const container = document.getElementById('schedule-list');
    if (!container) return;

    if (list.length === 0) {
      container.innerHTML = `<p style="text-align:center; padding:30px; color:var(--text-dim);">등록된 일정이 없습니다.</p>`;
      return;
    }

    container.innerHTML = list.map(s => `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:12px 16px; background:var(--bg-soft); border-left:4px solid ${s.color}; border-radius:8px;">
        <div>
          <div style="font-size:14px; font-weight:700;">${escapeHtml(s.title)} <span class="tag tag-mid" style="font-size:10px; margin-left:6px;">${s.category}</span></div>
          <div style="font-size:11px; color:var(--text-dim); margin-top:2px;">기간: ${s.start_date} ~ ${s.end_date || s.start_date} | 담당: ${s.member_name} ${s.memo ? '| ' + escapeHtml(s.memo) : ''}</div>
        </div>
        <button class="btn btn-danger" onclick="deleteSchedule(${s.id})" style="padding:4px 8px; font-size:11px;">삭제</button>
      </div>
    `).join('');
  } catch (err) {
    console.error('일정 로드 실패:', err);
  }
}

function openNewScheduleModal() {
  document.getElementById('sched-modal').classList.add('active');
}

async function saveNewSchedule(e) {
  e.preventDefault();
  const title = document.getElementById('sched-modal-title').value.trim();
  const start_date = document.getElementById('sched-modal-start').value;
  const end_date = document.getElementById('sched-modal-end').value;
  const category = document.getElementById('sched-modal-cat').value;
  const color = document.getElementById('sched-modal-color').value;
  const memo = document.getElementById('sched-modal-memo').value.trim();

  try {
    const res = await fetch(`${API_BASE}/schedules`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, start_date, end_date, member_name: currentUser, category, color, memo })
    });
    if (res.ok) {
      closeModal('sched-modal');
      document.getElementById('sched-modal-title').value = '';
      loadSchedules();
    }
  } catch (err) {
    alert('일정 등록 실패');
  }
}

async function deleteSchedule(id) {
  if (!confirm('이 일정을 삭제하시겠습니까?')) return;
  try {
    await fetch(`${API_BASE}/schedules/${id}`, { method: 'DELETE' });
    loadSchedules();
  } catch (err) {
    alert('삭제 실패');
  }
}

// 백업 관리 (STEP 10)
async function loadBackups() {
  try {
    const res = await fetch(`${API_BASE}/backup/list`);
    const list = await res.json();
    const box = document.getElementById('backup-list');
    if (!box) return;

    if (list.length === 0) {
      box.innerHTML = `<p style="font-size:12px; color:var(--text-dim);">백업 파일이 없습니다.</p>`;
      return;
    }

    box.innerHTML = list.map(b => `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 12px; background:var(--bg-soft); border-radius:6px; font-size:12px;">
        <div>
          <b>${b.filename}</b>
          <span style="color:var(--text-dim); margin-left:8px;">(${(b.size / 1024).toFixed(1)} KB)</span>
        </div>
        <span style="color:var(--text-dim); font-size:11px;">${b.modified}</span>
      </div>
    `).join('');
  } catch (err) {
    console.error('백업 로드 실패:', err);
  }
}

async function triggerManualBackup() {
  try {
    const res = await fetch(`${API_BASE}/backup/trigger`, { method: 'POST' });
    if (res.ok) {
      alert('💾 SQLite DB가 backup/ 폴더에 안전하게 백업되었습니다!');
      loadBackups();
    }
  } catch (err) {
    alert('백업 실패');
  }
}

// Q&A 관리자 화면 로직
let currentAdminQnAList = [];

async function loadAdminQnA() {
  try {
    const res = await fetch(`${API_BASE}/qna`);
    currentAdminQnAList = await res.json();
    const container = document.getElementById('qna-admin-list');
    const countEl = document.getElementById('qna-admin-count');
    if (countEl) countEl.textContent = `총 ${currentAdminQnAList.length}건`;
    if (!container) return;

    if (currentAdminQnAList.length === 0) {
      container.innerHTML = `<p style="text-align:center; padding:30px; color:var(--text-dim); font-size:13px;">등록된 학생 질문이 없습니다.</p>`;
      return;
    }

    container.innerHTML = currentAdminQnAList.map(item => `
      <div style="background:var(--bg-soft); border:1px solid ${item.reply ? 'var(--border)' : 'var(--accent)'}; border-radius:8px; padding:14px; display:flex; flex-direction:column; gap:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div style="display:flex; align-items:center; gap:10px;">
            <input type="checkbox" class="qna-item-check" value="${item.id}" ${!item.reply ? 'checked' : ''} style="cursor:pointer; width:16px; height:16px;">
            <span class="tag ${item.type === '강사메모' ? 'tag-high' : 'tag-mid'}">${item.type}</span>
            <b style="font-size:13px;">${escapeHtml(item.author)}</b>
            <span style="font-size:11px; color:var(--text-dim);">${item.created_at}</span>
          </div>
          <div>
            ${item.reply ? '<span style="color:#10b981; font-size:11px; font-weight:600;">답변완료 ✅</span>' : '<span style="color:#ef4444; font-size:11px; font-weight:700;">답변대기 ⏳</span>'}
            <button class="btn btn-danger" onclick="deleteAdminQnA(${item.id})" style="padding:2px 8px; font-size:11px; margin-left:8px;">삭제</button>
          </div>
        </div>

        <p style="font-size:13px; color:var(--text); line-height:1.5;">${escapeHtml(item.content)}</p>

        <div style="margin-top:4px;">
          <div style="display:flex; gap:8px;">
            <input type="text" id="qna-reply-input-${item.id}" value="${escapeHtml(item.reply || '')}" placeholder="답변을 입력하거나 아래 AI 일괄 답변 버튼을 누르세요..." style="flex:1; font-size:12px; padding:6px 10px;">
            <button class="btn btn-secondary" onclick="saveSingleReply(${item.id})" style="padding:4px 10px; font-size:12px;">답변저장</button>
          </div>
        </div>
      </div>
    `).join('');
  } catch (err) {
    console.error('Q&A 로드 실패:', err);
  }
}

function toggleAllQnAChecks(checked) {
  document.querySelectorAll('.qna-item-check').forEach(cb => cb.checked = checked);
}

async function triggerAIBatchReply() {
  const checkedBoxes = Array.from(document.querySelectorAll('.qna-item-check:checked'));
  const ids = checkedBoxes.map(cb => parseInt(cb.value));

  if (ids.length === 0) {
    alert('답변을 달 질문을 하나 이상 선택해주세요.');
    return;
  }

  if (!confirm(`선택한 ${ids.length}건의 질문에 대해 제미나이 AI 일괄 답변을 생성하시겠습니까?`)) return;

  try {
    const res = await fetch(`${API_BASE}/qna/ai-batch-reply`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ids: ids })
    });
    const data = await res.json();
    alert(`🎉 ${data.message}`);
    loadAdminQnA();
  } catch (err) {
    alert('AI 답변 생성 오류');
  }
}

async function saveSingleReply(id) {
  const reply = document.getElementById(`qna-reply-input-${id}`).value.trim();
  try {
    const res = await fetch(`${API_BASE}/qna/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply: reply })
    });
    if (res.ok) {
      alert('답변이 저장되었습니다.');
      loadAdminQnA();
    }
  } catch (err) {
    alert('답변 저장 실패');
  }
}

async function deleteAdminQnA(id) {
  if (!confirm('정말 이 항목을 삭제하시겠습니까?')) return;
  try {
    await fetch(`${API_BASE}/qna/${id}`, { method: 'DELETE' });
    loadAdminQnA();
  } catch (err) {
    alert('삭제 실패');
  }
}

// 강사 특별 노트 (종이 한 장 메모) 관리
async function loadLecturerNote() {
  try {
    const res = await fetch(`${API_BASE}/note`);
    const data = await res.json();
    const titleInput = document.getElementById('admin-note-title');
    const contentText = document.getElementById('admin-note-content');
    const updatedEl = document.getElementById('note-last-updated');

    if (titleInput) titleInput.value = data.title || '';
    if (contentText) contentText.value = data.content || '';
    if (updatedEl) updatedEl.textContent = `최근 저장: ${data.updated_at || '-'}`;
  } catch (err) {
    console.error('노트 로드 실패:', err);
  }
}

async function saveLecturerNote() {
  const title = document.getElementById('admin-note-title').value.trim();
  const content = document.getElementById('admin-note-content').value.trim();

  if (!title || !content) {
    alert('노트 제목과 내용을 모두 입력해주세요.');
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/note`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    });
    const data = await res.json();
    if (res.ok) {
      alert('📜 강사 특별 노트가 저장되었습니다!\n깃허브 공개 페이지 상단에 실시간으로 즉시 반영됩니다.');
      const updatedEl = document.getElementById('note-last-updated');
      if (updatedEl) updatedEl.textContent = `최근 저장: ${data.updated_at}`;
    }
  } catch (err) {
    alert('노트 저장 오류');
  }
}

// 모달 닫기
function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}

// XSS 방지 유틸
function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[m]);
}



// 搜索功能
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', () => {
  const keyword = searchInput.value.trim();
  if (keyword) {
    alert('你搜索了：' + keyword);
  } else {
    alert('请输入搜索内容');
  }
});

// 标签切换
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// 按钮点击反馈
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert(btn.innerText + ' 功能点击成功！');
  });
});

// 查看详情
const details = document.querySelectorAll('.detail-btn');
details.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('打开美食详情页');
  });
});
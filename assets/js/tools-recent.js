/* 工具站「最近使用」记录与渲染 */
(function () {
  const TOOL_NAMES = {
    'serial-debugger.html': 'STM32 串口调试',
    'keyboard-mouse-test.html': '键盘鼠标检测',
    'hash-checker.html': '哈希校验',
    'video-to-gif.html': '视频转 GIF',
    'video-quick-convert.html': '视频快速转换',
    'file-transfer.html': '局域网文件传输',
    'qr-tool.html': '二维码工具',
    'image-compressor.html': '图片压缩',
    'hardware-info.html': '硬件信息查看',
    'ascii-table.html': 'ASCII 码表',
    'base-converter.html': '进制转换',
    'mc-player-query.html': 'MC 玩家查询',
    'mc-server-query.html': 'MC 服务器查询',
    'howtofish-save-editor.html': '渔力全开存档工具'
  };
  const KEY = 'tools_recent';
  const MAX = 8;

  function getList() {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]'); }
    catch (e) { return []; }
  }

  function record(file) {
    if (!file || !TOOL_NAMES[file]) return;
    const list = [file].concat(getList().filter(f => f !== file)).slice(0, MAX);
    try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {}
  }

  function render(el) {
    if (!el) return;
    const list = getList().filter(f => TOOL_NAMES[f]);
    if (!list.length) { el.style.display = 'none'; return; }
    el.style.display = '';
    el.innerHTML = '<span class="recent-label">最近使用</span>' +
      list.map(f => '<a class="recent-chip" href="tools/' + f + '">' + TOOL_NAMES[f] + '</a>').join('') +
      '<button class="recent-clear" id="recentClear" title="清空记录">清空</button>';
    const btn = el.querySelector('#recentClear');
    if (btn) btn.addEventListener('click', () => { localStorage.removeItem(KEY); render(el); });
  }

  window.ToolsRecent = { record: record, render: render };

  // 工具页自动记录当前页面（按文件名匹配，兼容任意部署路径）
  const file = (location.pathname.split('/').pop() || '');
  if (file && TOOL_NAMES[file]) {
    record(file);
  }
})();

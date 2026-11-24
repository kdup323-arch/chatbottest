/* 예시 홈페이지에 챗봇 붙이기: 주소의 ?t=회사아이디 (&s=서버주소) 를 읽어 위젯 한 줄을 넣는다.
   실제 고객 홈페이지에 넣는 코드와 똑같은 한 줄이다. */
(function () {
  var q = new URLSearchParams(location.search), tid = q.get("t");
  var server = q.get("s") || "https://inquiry-desk-production-aaa6e4ea.up.railway.app";
  if (!/^https:\/\/[a-z0-9.-]+(:\d+)?$/i.test(server) && !/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(server)) return;
  if (!tid) {
    var hint = document.createElement("div");
    hint.className = "pg-hint";
    hint.textContent = "위쪽에 회사 아이디를 넣고 붙이면, 여기 오른쪽 아래에 챗봇이 떠요.";
    document.body.appendChild(hint);
    return;
  }
  var s = document.createElement("script");
  s.src = server + "/widget.js";
  s.setAttribute("data-tenant", tid);
  s.defer = true;
  document.body.appendChild(s);
})();

function detectIE() {
    var n = window.navigator.userAgent, e = n.indexOf("MSIE ");
    if (e > 0) {
      return parseInt(n.substring(e + 5, n.indexOf(".", e)), 10);
    }
    if (n.indexOf("Trident/") > 0) {
      var r = n.indexOf("rv:");
      return parseInt(n.substring(r + 3, n.indexOf(".", r)), 10);
    }
    var i = n.indexOf("Edge/");
    return i > 0 && parseInt(n.substring(i + 5, n.indexOf(".", i)), 10);
  };
  detectIE() && (alert('当前站点不支持IE浏览器或您开启了兼容模式，请使用其他浏览器访问或关闭兼容模式。'), (location.href = 'https://www.baidu.com'));
console.log("Welcom to My blog —— 小陈")
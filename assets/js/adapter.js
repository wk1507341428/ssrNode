module.exports = `var
    PAGE_MAX_WIDTH = 750,
    BASE_FONT_SIZE = 75
;
//在窗口各宽情况时，动态计算出html的font-size
if(window) {
  !function(){
    var
        DOC_ROOT_STYLE = document.documentElement.style,
        docEle = document.documentElement || document.body;  // 获取html元素

    window.addEventListener('load', resizeFontSize);
    window.addEventListener('resize', resizeFontSize);
    resizeFontSize();

    function resizeFontSize() {
        var clientWidth = docEle.getBoundingClientRect().width || 0     // 获取html元素的宽度也就是屏幕宽度
        DOC_ROOT_STYLE.fontSize = Math.min(clientWidth / PAGE_MAX_WIDTH * BASE_FONT_SIZE, BASE_FONT_SIZE) + 'px';
    }

    window.alert = function(name){
        var iframe = document.createElement("IFRAME");
        iframe.style.display="none";
        iframe.setAttribute("src", 'data:text/plain,');
        document.documentElement.appendChild(iframe);
        window.frames[0].window.alert(name);
        iframe.parentNode.removeChild(iframe);
    };
    
    // 安卓手机禁止字体放大 加载页面会延迟1s  这是防止微信调整浏览器自带字体造成页面布局混乱
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
      handleFontSize();
    } else {
      if (document.addEventListener) {
        document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
      } else if (document.attachEvent) {
        document.attachEvent("WeixinJSBridgeReady", handleFontSize);
        document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
      }
    }
    
    function handleFontSize() {
      // 设置网页字体为默认大小
      WeixinJSBridge.invoke('setFontSizeCallback', {
        'fontSize': 0
      });
      // 重写设置网页字体大小的事件
      WeixinJSBridge.on('menu:setfont', function () {
        WeixinJSBridge.invoke('setFontSizeCallback', {
          'fontSize': 0
        });
      });
    }
}();
}`
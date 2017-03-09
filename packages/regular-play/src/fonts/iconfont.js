;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-code" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M256 768c-6.5536 0-13.1072-2.5088-18.1248-7.4752l-204.8-204.8c-9.984-9.984-9.984-26.2144 0-36.1984l204.8-204.8c9.984-9.984 26.2144-9.984 36.1984 0s9.984 26.2144 0 36.1984l-186.6752 186.6752 186.6752 186.6752c9.984 9.984 9.984 26.2144 0 36.1984-5.0176 5.0176-11.5712 7.4752-18.1248 7.4752z"  ></path>'+
      ''+
      '<path d="M768 768c-6.5536 0-13.1072-2.5088-18.1248-7.4752-9.984-9.984-9.984-26.2144 0-36.1984l186.6752-186.6752-186.6752-186.6752c-9.984-9.984-9.984-26.2144 0-36.1984s26.2144-9.984 36.1984 0l204.8 204.8c9.984 9.984 9.984 26.2144 0 36.1984l-204.8 204.8c-5.0176 5.0176-11.5712 7.4752-18.1248 7.4752z"  ></path>'+
      ''+
      '<path d="M384 768c-4.6592 0-9.3184-1.28-13.568-3.8912-11.9808-7.4752-15.616-23.296-8.1408-35.2768l256-409.6c7.4752-11.9808 23.296-15.616 35.2768-8.1408s15.616 23.296 8.1408 35.2768l-256 409.6c-4.864 7.7824-13.2096 12.032-21.7088 12.032z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-4" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M633.333416 531.809161l96.356558 96.343255c26.606984 26.603915 26.606984 69.733201 0 96.340185L513.100054 941.063079c-26.610054 26.600845-69.742411 26.600845-96.353488 0L79.483262 603.830475c-26.610054-26.606984-26.610054-69.733201 0-96.384188l96.106872-96.097662 48.179302-48.163953 72.26486-72.261791c26.606984-26.606984 69.739341-26.606984 96.349395 0l96.356558 96.340185L797.152459 78.847789c26.610054-26.606984 69.742411-26.606984 96.353488 0l48.173163 48.170093c26.613124 26.600845 26.613124 69.736271 0 96.340185L633.333416 531.809161 633.333416 531.809161zM151.508669 531.809161c-13.32447 13.3214-13.32447 34.886555 0 48.167023l24.081465 24.091698 48.182372-48.170093 48.176233 48.170093-48.176233 48.170093 48.176233 48.170093 72.261791-72.255651 48.173163 48.170093-72.26486 72.255651 48.176233 48.176233 48.176233-48.176233 48.173163 48.176233-48.173163 48.170093 24.085558 24.085558c13.33061 13.3214 34.890648 13.3214 48.182372 0l72.261791-72.255651L223.738737 459.490066 151.508669 531.809161 151.508669 531.809161zM881.548614 163.16515l-24.088628-24.091698c-6.644327-6.641257-17.443277-6.641257-24.091698 0L488.803695 483.604276l-41.494043-41.494043-30.767747-30.761608-48.173163-48.163953c-13.3214-13.3214-34.890648-13.3214-48.173163 0l-48.176233 48.163953 337.264327 337.229534 48.173163-48.170093c13.292748-13.279445 13.292748-34.880415 0-48.170093l-48.173163-48.170093-30.764678-30.761608-41.500183-41.497113L881.583406 187.278337C888.189871 180.605358 888.189871 169.83813 881.548614 163.16515L881.548614 163.16515zM881.548614 163.16515"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-console" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M0 64l0 896 1024 0L1024 64 0 64zM960 896 64 896 64 128l896 0L960 896zM896 192 128 192l0 640 768 0L896 192zM448 512l-64 0 0 64-64 0 0 64-64 0 0-64 64 0 0-64 64 0 0-64-64 0 0-64-64 0 0-64 64 0 0 64 64 0 0 64 64 0L448 512zM704 640l-192 0 0-64 192 0L704 640z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-mini" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M742.243895 537.582655l-460.487789 0c-14.128789 0-25.582655-11.453866-25.582655-25.582655s11.453866-25.582655 25.582655-25.582655l460.487789 0c14.129812 0 25.582655 11.453866 25.582655 25.582655S756.372683 537.582655 742.243895 537.582655z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-forbid" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512.000512 78.565357c-238.303454 0-431.493431 193.174628-431.493431 431.471942 0 238.299361 193.189977 431.471942 431.493431 431.471942 238.297314 0 431.491385-193.171558 431.491385-431.471942C943.491896 271.741008 750.297826 78.565357 512.000512 78.565357L512.000512 78.565357zM835.614957 510.037299c0 69.716828-22.240537 134.296659-59.880809 187.184193L324.811202 246.307755c52.881394-37.646412 117.469412-59.875692 187.18931-59.875692C690.4426 186.432063 835.614957 331.60442 835.614957 510.037299L835.614957 510.037299zM188.378903 510.037299c0-70.211085 22.553669-135.223774 60.705594-188.32518l451.245288 451.236078c-53.092195 38.140669-118.114095 60.695361-188.329273 60.695361C333.556377 833.642534 188.378903 688.475294 188.378903 510.037299L188.378903 510.037299zM188.378903 510.037299"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-max" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M88.583524 85.554538l61.398372 0 0 853.91423-61.398372 0 0-853.91423ZM873.464495 86.577844l61.398372 0 0 852.890924-61.398372 0 0-852.890924ZM99.839893 85.554538l835.022974 0 0 61.398372-835.022974 0 0-61.398372ZM99.839893 878.070396l833.999668 0 0 61.398372-833.999668 0 0-61.398372Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)

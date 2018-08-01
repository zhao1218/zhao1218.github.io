!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={"i":moduleId,"l":!1,"exports":{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{"configurable":!1,"enumerable":!0,"get":getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module["default"]}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=5)}([function(module,exports){function cubeadImgGet(url){var image=document.createElement("img");images.push(image),image.src=url}exports.__esModule=!0,exports.cubeadImgGet=cubeadImgGet;var images=[]},function(module,exports,__webpack_require__){function cubeadDoGet(url,query){var seq=Math.floor(1e8*Math.random()),url2=url.replace("pv.geekca.cubead.com","bpv.geekca.cubead.com"),requestUrl=url+"?"+query+"&seq="+seq,requestUrl2=url2+"?"+query+"&seq="+seq;(0,_utils.cubeadImgGet)(requestUrl),(0,_utils.cubeadImgGet)(requestUrl2)}function cubeadMakeUID(num){num||(num=10);for(var str="",arr=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],idx=0;idx<num;idx++){str+=arr[Math.round(Math.random()*(arr.length-1))]}var time=(new Date).getTime()+"";return str+time.substring(8,time.length)}function cubeadMainDomain(url){var domain=void 0;domain=url.indexOf("://")>-1?url.split("/")[2]:url;var matches=domain.match(/^([^\/?#:]+)/i);return domain=matches&&matches[1],matches=domain.match(/([^.]*)[.](com[.]cn|net[.]cn|org[.]cn|gov[.]cn|com|cn|tel|mobi|gov|net|org|asia|me|cc|name|info|tv)$/i),domain=matches&&matches[0]}function cubeadAddCookie(name,value,expired,domain){var tmp="";if(tmp=domain?name+"="+value+"; Path=/;domain="+domain+";":name+"="+value+"; Path=/;",expired>0){var date=new Date;date.setTime(date.getTime()+6e4*expired),tmp=tmp+" expires="+date.toGMTString()}document.cookie=tmp}function cubeadGetCookie(name){var reg=new RegExp("(^|;)[ ]*"+name+"[ ]*=[ ]*[^;]+","i");if(!document.cookie.match(reg))return"";var tmp=document.cookie.match(reg)[0],pos=tmp.indexOf("=");return pos>0?tmp.substring(pos+1).replace(/^\s+|\s+$/g,""):void 0}function cubeadExGetCookie(name,index){var reg=new RegExp("(^|;)[ ]*"+name+"[ ]*=[ ]*[^;]+","i");if(!document.cookie.match(reg))return"";var tmp=document.cookie.match(reg)[0],pos=tmp.indexOf("=");if(pos>0){tmp=tmp.substring(pos+1).replace(/^\s+|\s+$/g,"");return tmp.split("|")[index]}}function cubeadGetCAUrlParam(name,index){var urlParamValue="",reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)","i"),source=window.location.search||window.location.hash,results=source.substr(1).match(reg);if(source.indexOf("#")>-1&&(results=source.substr(source.indexOf("?")+1).match(reg)),null!=results){urlParamValue=encodeURI(decodeURI(results[2]));var value=cubeadGetCookie(CUBEAD_COOKIE_KEY);if(null!=value&&""!=value){var cubeadCookies=value.split("|");cubeadCookies[index]=urlParamValue,cubeadAddCookie(CUBEAD_COOKIE_KEY,cubeadCookies.join("|"),cubeadCookieTimeOut,cubeadMainDomain(cubeadDomain))}}else urlParamValue=cubeadExGetCookie(CUBEAD_COOKIE_KEY,index);return urlParamValue}function cubeadTraceBuildData(){var query=new Array;query.push("ca_tenant="+encodeURI(cubeadClientTenantID)),query.push("ptype=N"),query.push("session_id="+encodeURI(cubeadGetCookie("ca_sessionid"))),query.push("user_id="+encodeURI(cubeadExGetCookie(CUBEAD_COOKIE_KEY,0))),query.push("title="+encodeURI(document.title,"UTF-8")),query.push("pv_id="+encodeURI(cubeadPid)),query.push("pf=web"),query.push("refer="+encodeURIComponent(cubeadCurrentReferrer)),query.push("ca_cv="+encodeURI(cubeadGetCAUrlParam("ca_cv",1))),query.push("ca_kid="+encodeURI(cubeadGetCAUrlParam("ca_kid",2))),query.push("utm_source="+encodeURI(cubeadGetCAUrlParam("utm_source",3))),query.push("hash_url="+encodeURIComponent(document.location.hash)),query.push("ca_source="+encodeURI(cubeadGetCAUrlParam("ca_source",3))),query.push("sw="+cubeadGetCAUrlParam("wd",4)),query.push("join_key="+cubeadPid);var ck="1"==cubeadGetCAUrlParam("ck")?"1":"0";return query.push("ck="+ck),query}function IEWrapper(event,callback){callback(event)}function cubeadAddEvent(eventType,listener,eventTarget){eventTarget=eventTarget||window;var ieEventType="on"+eventType;"function"==typeof eventTarget.addEventListener?eventTarget.addEventListener(eventType,listener,!0):eventTarget.attachEvent&&eventTarget.attachEvent(ieEventType,function(){IEWrapper(window.event,listener)})}function clientAddition(){clientAdditionExecuted||(clientAdditionWork&&clientAdditionWork(),clientAdditionExecuted=!0)}function geekCAInit(tenantID,tenantLabel,callback){cubeadClientTenantID=tenantID,clientAdditionWork=callback,cubeadDoGet(GEEKCA_PV_API,cubeadTraceBuildData().join("&")),cubeadAddEvent("load",clientAddition);var ElementInterval=setInterval(function(){clientAddition(),clearInterval(ElementInterval)},5e3);cubeadAddEvent("unload",clientAddition)}exports.__esModule=!0,exports.cubeadSessionCookieTimeOut=exports.cubeadDomain=exports.cubeadPid=exports.CUBEAD_COOKIE_KEY=void 0,exports.cubeadDoGet=cubeadDoGet,exports.cubeadMakeUID=cubeadMakeUID,exports.cubeadMainDomain=cubeadMainDomain,exports.cubeadAddCookie=cubeadAddCookie,exports.cubeadGetCookie=cubeadGetCookie,exports.cubeadExGetCookie=cubeadExGetCookie,exports.cubeadGetCAUrlParam=cubeadGetCAUrlParam,exports.geekCAInit=geekCAInit;var _utils=__webpack_require__(0),GEEKCA_PV_API=(__webpack_require__(2),"http://pv.geekca.cubead.com/pv/trace.do"),cubeadCookieTimeOut=1555200,CUBEAD_COOKIE_KEY=exports.CUBEAD_COOKIE_KEY="uid_cv_k_u_s",cubeadPid=exports.cubeadPid=cubeadMakeUID(15),cubeadDomain=exports.cubeadDomain=document.domain,cubeadCurrentReferrer=document.referrer,cubeadSessionCookieTimeOut=exports.cubeadSessionCookieTimeOut=30,clientAdditionExecuted=!1,cubeadClientTenantID=void 0,clientAdditionWork=void 0;!function(){var key=cubeadGetCookie(CUBEAD_COOKIE_KEY);""!=key&&null!=key||cubeadAddCookie(CUBEAD_COOKIE_KEY,"||||",cubeadCookieTimeOut,cubeadMainDomain(cubeadDomain))}(),function(index){var reg=new RegExp("(^|&)wd=([^&]*)(&|$)","i");cubeadCurrentReferrer.indexOf("www.so.com")>-1?reg=new RegExp("(^|&)q=([^&]*)(&|$)","i"):cubeadCurrentReferrer.indexOf("www.sogou.com")>-1&&(reg=new RegExp("(^|&)query=([^&]*)(&|$)","i"));var sub_index=cubeadCurrentReferrer.indexOf("?")+1,results=cubeadCurrentReferrer.substr(sub_index).match(reg);if(null!=results){var urlParamValue=encodeURI(decodeURI(results[2])),value=cubeadGetCookie(CUBEAD_COOKIE_KEY);if(null!=value&&""!=value){var cubeadCookies=value.split("|");cubeadCookies[index]=urlParamValue,cubeadAddCookie(CUBEAD_COOKIE_KEY,cubeadCookies.join("|"),cubeadCookieTimeOut,cubeadMainDomain(cubeadDomain))}}}(4),function(){var id=cubeadGetCookie("ca_sessionid");""!=id&&null!=id||cubeadAddCookie("ca_sessionid",cubeadMakeUID(15),cubeadSessionCookieTimeOut,cubeadMainDomain(cubeadDomain))}(),function(){if(""==cubeadExGetCookie(CUBEAD_COOKIE_KEY,0)){var value=cubeadGetCookie(CUBEAD_COOKIE_KEY);if(null!=value&&""!=value){var cubeadCookies=value.split("|");""==cubeadCookies[0]&&(cubeadCookies[0]=cubeadMakeUID(15)),cubeadAddCookie(CUBEAD_COOKIE_KEY,cubeadCookies.join("|"),cubeadCookieTimeOut,cubeadMainDomain(cubeadDomain))}}}(),function(source){function needUpdateCookie(source){return source.indexOf("ca_source")>-1||source.indexOf("utm_source")>-1}if(needUpdateCookie){var names=["ca_cv","ca_kid","utm_source","ca_source"],nameValues=["","","",""];source=source.substr(source.indexOf("?"));for(var idx=0,len=names.length;idx<len;idx++){var reg=new RegExp("(^|&)"+names[idx]+"=([^&]*)(&|$)","i"),results=source.substr(1).match(reg);source.indexOf("#")>-1&&(results=source.substr(source.indexOf("?")+1).match(reg)),null!=results&&(nameValues[idx]=results[2])}var value=cubeadGetCookie(CUBEAD_COOKIE_KEY);if(null!=value&&""!=value){for(var cubeadCookies=value.split("|"),_idx=1;_idx<4;_idx++)""!=nameValues[_idx-1]&&(cubeadCookies[_idx]=nameValues[_idx-1]);""!=nameValues[3]&&(cubeadCookies[3]=nameValues[3]),cubeadAddCookie(CUBEAD_COOKIE_KEY,cubeadCookies.join("|"),cubeadCookieTimeOut,cubeadMainDomain(cubeadDomain))}}}(cubeadCurrentReferrer)},function(module,exports,__webpack_require__){function loadBaiduIDMappingImage(pid,uid){var tid=_settings.BAIDU_ID_MAPPING_TID,randomNum=(new Date).getTime(),url="http://idm.bce.baidu.com/t/ping.gif?dm=bce.baidu.com/"+tid+"&ac="+uid+"&v=bce-1.0&rnd="+randomNum+"&ext_bce_tid="+tid+"&ext_bce_pid="+pid+"&ext_bce_uid="+uid;(0,_utils.cubeadImgGet)(url)}exports.__esModule=!0,exports.loadBaiduIDMappingImage=loadBaiduIDMappingImage;var _settings=__webpack_require__(3),_utils=__webpack_require__(0)},function(module,exports){exports.__esModule=!0;exports.BAIDU_ID_MAPPING_TID="a1026"},,function(module,exports,__webpack_require__){function _makeUID(){for(var sources=[],hexDigits="0123456789ABCDEF",i=0;i<32;i++)sources[i]=hexDigits.substr(Math.floor(16*Math.random()),1);return sources[12]="4",sources[16]=hexDigits.substr(3&sources[16]|8,1),sources.join("")}function createJoninKey(){var logtime=(new Date).getTime();window.join_key=_makeUID()+"_"+logtime,_vds.push(["setAccountId","9de550852858bc45"]),_vds.push(["setCS1","join_key",window.join_key]);var vds=document.createElement("script");vds.type="text/javascript",vds.async=!0,vds.src=("https:"==document.location.protocol?"https://":"http://")+"dn-growing.qbox.me/vds.js";var $script=document.getElementsByTagName("script")[0];$script.parentNode.insertBefore(vds,$script)}function addWindowReadyEvent(){var ie=!(!window.attachEvent||window.opera),wk=/webkit\/(\d+)/i.test(navigator.userAgent)&&RegExp.$1<525,fn=[],run=function(){for(var i=0;i<fn.length;i++)fn[i]()},doc=document;doc.ready=function(f){if(!ie&&!wk&&doc.addEventListener)return doc.addEventListener("DOMContentLoaded",f,!1);if(!(fn.push(f)>1))if(ie)try{doc.documentElement.doScroll("left"),run()}catch(err){setTimeout(arguments.callee,0)}else if(wk)var t=setInterval(function(){/^(loaded|complete)$/.test(doc.readyState)&&(clearInterval(t),run())},0)}}function _change53URL(){for(var aElements=document.getElementsByTagName("a"),idx=0;idx<aElements.length;idx++)if(-1!=aElements[idx].href.indexOf("53kf.com")){var symbol="?";-1!=aElements[idx].href.indexOf("?")&&(symbol="&"),aElements[idx].href=""+aElements[idx].href+symbol+"u_stat_id="+window.join_key}for(var divElements=document.getElementsByTagName("div"),_idx=0;_idx<divElements.length;_idx++)if(null!=divElements[_idx].onclick){var functionString=divElements[_idx].onclick.toString();-1!=functionString.indexOf("webCompany.php")&&function(){var s=functionString.replace(/webCompany.php%3F/,"webCompany.php%3Fu_stat_id="+window.join_key+"%26");s=s.replace(/function\s*onclick\(event\)\s*{\s*/,""),s=s.replace(/}/,""),divElements[_idx].onclick=function(){eval(s)}}()}}var _pv=__webpack_require__(1),_vds=_vds||[];window._vds=_vds;var tenantID="136193";(0,_pv.geekCAInit)(tenantID,"danei"),createJoninKey(),addWindowReadyEvent(),document.ready(_change53URL)}]);
//# sourceMappingURL=danei.min.js.map
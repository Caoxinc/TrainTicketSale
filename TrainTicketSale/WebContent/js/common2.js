var cellPhoneRegExp=/^1[3-8]\d{9}$/;var checkCHRegExp=/^ch\d{9}$/i;var commonAccountRegExp=/^0\d{8,11}$/;var checkWRegExp=/^w\d{11}$/i;var base64Ver=true;String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g,"")};String.prototype.endWith=function(a){if(a==null||a==""||this.length==0||a.length>this.length){return false}if(this.substring(this.length-a.length)==a){return true}else{return false}return true};String.prototype.startWith=function(a){if(a==null||a==""||this.length==0||a.length>this.length){return false}if(this.substr(0,a.length)==a){return true}else{return false}return true};Number.prototype.formatToDate=function(){h=Math.floor(this/3600);m=Math.floor(this/60)%60;s=Math.floor(this%60);h<0?h=0:h=h;m<0?m=0:m=m;s<0?s=0:s=s;h.toString().length<2?hstr="0"+h.toString():hstr=h;m.toString().length<2?mstr="0"+m.toString():mstr=m;s.toString().length<2?sstr="0"+s.toString():sstr=s;timestr=hstr+":"+mstr+":"+sstr;return timestr};function writeCookie(b,c){if((c!=null)&&(b!=null)){var a=new Date();a.setTime(a.getTime()+60000*60*24*30);document.cookie=b+"="+escape(c)+";expires="+a.toGMTString()+";path=/"}}function writeCookieSecure(b,c){if((c!=null)&&(b!=null)){var a=new Date();a.setTime(a.getTime()+60000*60*24*30);document.cookie=b+"="+escape(c)+";expires="+a.toGMTString()+";secure"}}function writeCookieOnce(a,b){if((b!=null)&&(a!=null)){document.cookie=a+"="+escape(b)+";path=/"}}function clearCookie(b){var a=new Date();a.setTime(a.getTime()-1);document.cookie=b+"="+escape("")+";expires="+a.toGMTString()+";path=/"}function readCookie(a){var c="";var b=a+"=";if(document.cookie.length>0){offset=document.cookie.indexOf(b);if(offset!=-1){offset+=b.length;end=document.cookie.indexOf(";",offset);if(end==-1){end=document.cookie.length}c=unescape(document.cookie.substring(offset,end))}}return c}function getJSLocale(key,params){var result="";var paramsObj={};if(params){paramsObj=params}if(typeof(key)!="undefined"&&typeof(JSLocale)!="undefined"){key=key.replace("-","e");if(JSLocale[key]!=undefined){result=JSLocale[key]}else{if(JSLocale.msgDefault!=undefined){result=JSLocale.msgDefault}else{result=key}}var regExp=new RegExp();for(var k in paramsObj){regExp=eval("/{{:"+k+"}}/g");result=result.replace(regExp,paramsObj[k])}if(/{{:[a-zA-Z]+}}/.test(result)){result=result.replace(/{{:[a-zA-Z]+}}/g,"No Value")}}return result}function makJData(){$("#jSession").data(Enc,"")}function buildEnc(){return"wlanAcName="+$("#wlanAcName").val()+"&wlanAcIp="+$("#wlanAcIp").val()+"&wlanUserIp="+$("#wlanUserIp").val()+"&ssid="+$("#ssid").val()}function addEncToForm(b){var a=$(b).has("#Enc");if(a.val()==undefined){$(b).append("<input id='Enc' name='Enc' type='hidden' value='"+readEnc()+"' />")}else{a.val(readEnc())}return true}function addEncToHref(a){var b=$(a).attr("href");$(a).attr("href",b+"&Enc="+readEnc());return true}function gainVerifyCode(b,a){$.ajax({type:"post",url:vcUrl,success:function(c){$(b).attr("src",ctxPath+c.url);$(a).val(c.verifyCode)},error:function(){alert("系统正忙，请稍候再试")}})}function cancelPartKeyDown(){var a=window.event||arguments.callee.caller.arguments[0];if((a.keyCode==8)||(a.keyCode==114)||(a.keyCode==116)||(a.keyCode==122)){a.keyCode=0;a.returnValue=false}}function checkKeyDown(b){b=window.event||b;var a=b.keyCode||b.which;if(checkIsNotInput(b,a)||a==114||a==116||a==122){if(window.event){try{b.keyCode=0}catch(b){}b.returnValue=false}else{b.preventDefault()}}checkOtherKDown(b,a)}function checkIsNotInput(c,a){if(a==8){var b=c.srcElement||c.target;if(b.tagName!="INPUT"||b.type=="checkbox"){return true}}return false}function checkOtherKDown(c,a){var b=false;if((c.altKey)&&((a==37)||(a==39))){b=true}if(c.ctrlKey||(c.shiftKey)&&(a==121)){b=true}if(b==true){if(window.event){c.returnValue=false}else{c.preventDefault()}}}function checkCharsNotInBag(d,e){var a=true;for(var b=0;b<d.length;b++){var f=d.charAt(b);if(e.indexOf(f)==-1){a=false}}return a}function checkCharsInBag(d,e){var a=true;for(var b=0;b<d.length;b++){var f=d.charAt(b);if(e.indexOf(f)!=-1){a=false}}return a}function check_para(c,e){if(e=="1"){var d=c;var b=true;for(i=0;i<d.length;i++){var a=d.charAt(i);if("0">a||a>"9"){b=false;break}}return b}else{if(e=="2"){var d=c.toLowerCase();var b=true;for(i=0;i<d.length;i++){var a=d.charAt(i);if("a">a||a>"z"){b=false;break}}return b}else{if(e=="3"){var d=c.toLowerCase();var b=true;for(i=0;i<d.length;i++){var a=d.charAt(i);if(("0"<=a&&a<="9")||a=="."||a=="_"||a==" "||a=="-"||a==";"||a=="+"||("a"<=a&&a<="z")){continue}else{b=false;break}}return b}}}}function check_time(c){var d=c;var b=true;for(i=0;i<d.length;i++){var a=d.charAt(i);if(a=="-"||a==" "||a==":"||("0"<=a&&a<="9")){continue}else{b=false;break}}return b}function check_ip(a){var c=a.split(".");if(c.length<4||c.length>4){return false}for(i=0;i<c.length;i++){var b=c[i];if(isNaN(b)){return false}if(b<0||b>255){return false}}return true}function check_mobilenum(a){var b="0123456789";if(typeof(a)=="undefined"){alert(a+" is not an object");return false}else{if(a.length==0){alert(getJSLocale("e001"));return false}if(a.length!=11){alert(getJSLocale("e002"));return false}if(!checkCharsNotInBag(a,b)){alert(getJSLocale("e008"));return false}return true}}function check_validate(a){if(typeof(a)=="undefined"){alert(a+" is not an object");return false}else{if(a.length==0){alert(getJSLocale("e006"));return false}if(a.length>4){alert(getJSLocale("e034"));return false}if(a.length<4){alert(getJSLocale("e035"));return false}return true}}function check_passwd(b){var a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";if(typeof(b)=="undefined"){alert(b+" is not an object");return false}else{if(b.length==0){alert(getJSLocale("e009"));return false}if(!checkCharsNotInBag(b,a)){alert(getJSLocale("e060"));return false}return true}}function beforeLeave(a){if(a){if(window.Event){window.onbeforeunload=function(b){return"在本页面直接访问其他网址会造成您非正常下线，如需访问其他网页，请按“取消”按钮，并打开新的IE窗口进行后续访问。"}}else{window.onbeforeunload=function(){return"在本页面直接访问其他网址会造成您非正常下线，如需访问其他网页，请按“取消”按钮，并打开新的IE窗口进行后续访问。"}}}else{window.onbeforeunload=null}}function closeWindow(){var a=navigator.appName;if(a=="Netscape"){window.top.open("","_parent","");window.top.close()}else{if(a=="Microsoft Internet Explorer"){window.top.opener=null;window.top.open("","_self");window.top.close();window.close()}}};
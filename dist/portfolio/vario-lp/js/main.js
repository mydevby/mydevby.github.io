!function(t){var e={};function a(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,a){a(1),t.exports=a(2)},function(t,e,a){"use strict";var o=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}();$(document).ready((function(){var t=this;setTimeout((function(){switch(!1){case window.innerWidth<=991:$(".vlp-logo-white").removeClass("vlp-logo-disabled"),$(".vlp-logo-white").css({height:"12.58188em"});break;case window.innerWidth<=767:$(".vlp-logo-white").removeClass("vlp-logo-disabled"),$(".vlp-logo-white").css({height:"8.23em"}),$(".vlp-logo-text").css({top:"51.30312em",opacity:"1"});break;case window.innerWidth>767:$(".vlp-logo-white").removeClass("vlp-logo-disabled"),$(".vlp-logo-white").css({height:"4.10625em"}),$(".vlp-logo-text").css({top:"24em",opacity:"1"})}}),1e3),$(document).scroll((function(){switch($(".vlp-vlp-logo-text").removeClass("vlp-logo-disabled"),!1){case window.innerWidth<=991:$(".vlp-logo-text").css({top:"64.30312em",opacity:"1"});break;case window.innerWidth<=767:$(".vlp-logo-text").css({top:"51.30312em",opacity:"1"})}var e=$(t).scrollTop()/2;$("#vlp-constructorSpinner").prop("style","transform: rotate("+e+"deg)")})),$("#vlp-videoBtn").click((function(){$("#vlp-video").prop("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),$("#vlp-video").prop("src","https://www.youtube.com/embed/_DOjqv1MOuE?rel=0&controls=0&showinfo=0&autoplay=1&modestbranding=0"),$("#vlp-video").prop("hidden",!1)}));for(var e=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},a=function(){function t(e,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=e,this.img=a}return o(t,[{key:"setId",value:function(t){this.id=t}},{key:"drawFrame",value:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;$("#f"+t+" > .vlp-img-item-"+e).prop("style","background: url(./img/img-container/"+e+".png);\n\t\t\t\tbackground-size: cover;\n\t\t\t\tbackground-position: center;\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tposition: absolute;\n\t\t\t\topacity: "+a+";")}},{key:"buildFrames",value:function(){for(var t=0;t<24;t++)$("#f"+this.id).append('<div class="vlp-img-item-'+t+'"></div>'),this.drawFrame(this.id,t);$("#f"+this.id).data("data-value",this.id)}},{key:"clearFrame",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.id,e=$("#f"+t).data("data-value");this.drawFrame(t,e,0),$("#f"+t).data("data-value",0)}},{key:"updateFrame",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.img,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.id;this.clearFrame(e),this.drawFrame(e,t,1),$("#f"+e).data("data-value",t),null!=t&&null!=e||console.warn("ShortFrame missing data")}},{key:"updateLongFrame",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.img,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.id;5!=t&&17!=t||(this.clearFrame(e),this.drawFrame(e,t,1),this.clearFrame(e+1),this.drawFrame(e+1,t+1,1),$("#f"+e).data("data-value",t),$("#f"+(e+1)).data("data-value",parseInt(t+1))),6!=t&&18!=t||(this.clearFrame(e),this.drawFrame(e,t,1),this.clearFrame(e-1),this.drawFrame(e-1,t-1,1),$("#f"+e).data("data-value",t),$("#f"+(e-1)).data("data-value",parseInt(t-1))),null!=t&&null!=e||console.warn("LongFrame missing data")}},{key:"refreshLongFrame",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.img,e=arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.id;5!=$("#f"+a).data("data-value")&&17!=$("#f"+a).data("data-value")||(this.clearFrame(a),this.drawFrame(a,t,1),this.clearFrame(a+1),this.drawFrame(a+1,e,1),$("#f"+a).data("data-value",t),$("#f"+(a+1)).data("data-value",e)),6!=$("#f"+a).data("data-value")&&18!=$("#f"+a).data("data-value")||(this.clearFrame(a),this.drawFrame(a,t,1),this.clearFrame(a-1),this.drawFrame(a-1,e,1),$("#f"+a).data("data-value",t),$("#f"+(a-1)).data("data-value",e)),null!=t&&null!=a||console.warn("Long Short Frames missing data")}}]),t}(),n=[],i=new a,d=0;d<10;d++){i.setId(d);var s=d;i.buildFrames(),i.updateFrame(d),n.splice(s,1,$("#f"+s).data("data-value"))}e(5,15);setInterval((function(){var t=e(0,10);i.setId(t);var a=void 0;do{a=e(0,23)}while(!0===n.includes(a));if((5==a&&2!=t&&3!=t&&4!=t&&7!=t&&8!=t||17==a&&2!=t&&3!=t&&4!=t&&7!=t&&8!=t)&&i.updateLongFrame(a,t),6==a&&0!=t&&3!=t&&4!=t&&5!=t&&8!=t||18==a&&0!=t&&3!=t&&4!=t&&5!=t&&8!=t);if(!1===n.includes(a)&&5!=a&&17!=a&&6!=a&&18!=a){if(5==$("#f"+t).data("data-value")||6==$("#f"+t).data("data-value")||17==$("#f"+t).data("data-value")||18==$("#f"+t).data("data-value")){var o=void 0;do{o=e(0,23)}while(!0===n.includes(o)&&5!=o&&o==a||!0===n.includes(o)&&17!=o&&o==a||!0===n.includes(o)&&6!=o&&o==a||!0===n.includes(o)&&18!=o&&o==a);i.refreshLongFrame(a,o,t)}i.updateFrame(a,t)}if(!0===n.includes(a)&&5!=a&&17!=a&&6!=a&&18!=a){for(;!0===n.includes(a);)a=e(0,23);if(5==$("#f"+t).data("data-value")||6==$("#f"+t).data("data-value")||17==$("#f"+t).data("data-value")||18==$("#f"+t).data("data-value")){console.log($("#f"+t).data("data-value")),console.log($("#f"+(t+1)).data("data-value"));var d=void 0;do{d=e(0,23)}while(!0===n.includes(d)&&5!=d&&d==a||!0===n.includes(d)&&17!=d&&d==a||!0===n.includes(d)&&6!=d&&d==a||!0===n.includes(d)&&18!=d&&d==a);i.refreshLongFrame(a,d,t)}i.updateFrame(a,t)}n.splice(t,1,$("#f"+t).data("data-value")),5!=$("#f"+t).data("data-value")&&17!=$("#f"+t).data("data-value")||n.splice(t+1,1,$("#f"+(t+1)).data("data-value")),6!=$("#f"+t).data("data-value")&&18!=$("#f"+t).data("data-value")||n.splice(t-1,1,$("#f"+(t-1)).data("data-value"))}),1850)}))},function(t,e,a){"use strict";$(document).ready((function(){function t(t){var e=.5+Math.random()*(t-1+1);return Math.round(e)-1}function e(t){$(".modal-box-info .information-item").removeClass("show"),$('.modal-box-info .information-item[data-item="'+t+'"]').addClass("show"),$(".modal-box-info").modalBox("open")}var a=[0,0,0,0],o=[0,0],n=[0,0,0,0],i=new Swiper(".swiper-1",{slidesPerView:"auto",touchReleaseOnEdges:!0}),d=new Swiper(".swiper-2",{slidesPerView:"auto",touchReleaseOnEdges:!0});$(".vlp-open-modal").on("click",(function(){$(".modal-box-test *").removeClass("show"),$(this).hasClass("vlp-independent")?($(".modal-box-test .independent").addClass("show"),$('.modal-box-test .independent .options-item[data-option="1"]').addClass("show"),$('.modal-box-test .independent .options-item[data-option="1"]').attr("data-select",0),$(".modal-box-test").modalBox("open")):$(this).hasClass("vlp-experts")&&($(".modal-box-test .experts").addClass("show"),$('.modal-box-test .experts .question-item[data-question="1"]').addClass("show"),$(".modal-box-test").modalBox("open"))})),$(".modal-box-test").on("modalBox:afterOpen",(function(){$(".modal-box-test .independent").hasClass("show")&&i.update()})),$(".modal-box-test .experts .btn-answer").on("click",(function(){var t=parseInt($(".modal-box-test .experts .question-item.show").data("question"));1==t?($('.modal-box-test .experts .question-item[data-question="1"] .btn-more').removeClass("disabled"),$('.modal-box-test .experts .question-item[data-question="1"] .btn-answer.active').length>=2&&$(".modal-box-test .experts .btn-answer.active:first").removeClass("active"),$(this).addClass("active")):($('.modal-box-test .experts .question-item[data-question="'+t+'"] .btn-more').removeClass("disabled"),$(".modal-box-test .experts .btn-answer.active").removeClass("active"),$(this).addClass("active"))})),$(".modal-box-test .experts .btn-more").on("click",(function(){if($(this).hasClass("disabled"))return!1;var e=parseInt($(this).data("next"));if($('.modal-box-test .experts .question-item[data-question="'+e+'"] .btn-answer.active').each((function(){for(var t=$(this).data("cream").toString(),e=$(this).data("elixir").toString(),a=0;a<t.length;a++)o[a]=o[a]+parseInt(t[a]);for(var i=0;i<e.length;i++)n[i]=n[i]+parseInt(e[i])})),e<8)$('.modal-box-test .experts .question-item[data-question="'+e+'"]').removeClass("show"),$('.modal-box-test .experts .question-item[data-question="'+(e+1)+'"]').addClass("show");else{console.log(o,n);var i=t(o.length),d=t(n.length),s=o[i],l=n[d];o.forEach((function(t,e){t>s&&(s=t,i=e)})),n.forEach((function(t,e){t>l&&(l=t,d=e)}));var p=n;p[d]=-100;var r=t(p.length),c=n[r];p.forEach((function(t,e){t>c&&(c=t,r=e)})),a=[i,d,r,0],$(".modal-box-test .experts").removeClass("show"),$(".modal-box-test .results").addClass("show"),$('.modal-box-test .results .result-item[data-result-cream="'+a[0]+'"]').addClass("show"),$('.modal-box-test .results .result-item[data-result-elixir="'+a[1]+'"]').addClass("show"),$('.modal-box-test .results .result-item[data-result-elixir="'+a[2]+'"]').addClass("show"),$('.modal-box-test .results .result-item[data-result-all="'+a[3]+'"]').addClass("show"),$(".modal-box-test .results .select-block").addClass("select-block-"+a[0]+a[1]+a[2]+a[3]),$(".modal-box-test .results .link-download").attr("href","doc/"+a[0]+a[1]+a[2]+a[3]+".pdf")}})),$(".modal-box-test").on("modalBox:afterClose",(function(){$(".modal-box-test .results .select-block").removeClass("select-block-"+a[0]+a[1]+a[2]+a[3]),a=[1,1,1,1],o=[0,0],n=[0,0,0,0],console.log(o,n),$('.independent .options-item[data-option="1"]').attr("data-select",0),$('.independent .options-item[data-option="2"]').attr("data-select",0),$('.independent .options-item[data-option="2"]').attr("data-select-one",0),$('.independent .options-item[data-option="2"]').attr("data-select-two",0),$(".modal-box-test *").removeClass("show"),$(".modal-box-test *").removeClass("active"),$(".modal-box-test *").removeClass("active-1"),$(".modal-box-test *").removeClass("active-2"),$(".modal-box-test *").removeClass("active-3"),$(".modal-box-test *").removeClass("active-4"),$(".modal-box-test *").removeClass("hidden"),$(".modal-box-test .experts .btn-more").addClass("disabled"),$(".modal-box-test .results .link-download").attr("href","doc/0000.pdf")})),$('.independent .options-item[data-option="1"] .btn-select').on("click",(function(){var t=parseInt($(this).attr("data-select")),e=parseInt($('.independent .options-item[data-option="1"]').attr("data-select"));if(e==t)return!1;0==e&&1==t?($('.independent .options-item[data-option="1"] .btn-select').removeClass("active"),$('.independent .options-item[data-option="1"]').attr("data-select",1),$('.independent .options-item[data-option="1"] .sheet-1').addClass("active"),$('.independent .options-item[data-option="1"] .content-image').addClass("active-1")):1==t?($('.independent .options-item[data-option="1"] .btn-select').removeClass("active"),$('.independent .options-item[data-option="1"]').attr("data-select",1),$('.independent .options-item[data-option="1"] .text').animate({opacity:0},500),$('.independent .options-item[data-option="1"] .sheet-2').removeClass("active"),i.slideTo(0),setTimeout((function(){$('.independent .options-item[data-option="1"] .content-image').removeClass("active-2"),$('.independent .options-item[data-option="1"] .content-image').addClass("active-1"),$('.independent .options-item[data-option="1"] .text').removeClass("active-2"),$('.independent .options-item[data-option="1"] .text').addClass("active-1")}),1e3),setTimeout((function(){$('.independent .options-item[data-option="1"] .sheet-1').addClass("active"),$('.independent .options-item[data-option="1"] .text').animate({opacity:1},500)}),1500)):($('.independent .options-item[data-option="1"] .btn-select').removeClass("active"),$('.independent .options-item[data-option="1"]').attr("data-select",2),$('.independent .options-item[data-option="1"] .text').animate({opacity:0},500),$('.independent .options-item[data-option="1"] .sheet-1').removeClass("active"),i.slideTo(1),setTimeout((function(){$('.independent .options-item[data-option="1"] .content-image').removeClass("active-1"),$('.independent .options-item[data-option="1"] .content-image').addClass("active-2"),$('.independent .options-item[data-option="1"] .text').removeClass("active-1"),$('.independent .options-item[data-option="1"] .text').addClass("active-2")}),1e3),setTimeout((function(){$('.independent .options-item[data-option="1"] .sheet-2').addClass("active"),$('.independent .options-item[data-option="1"] .text').animate({opacity:1},500)}),1500))})),$('.independent .options-item[data-option="1"] .next').on("click",(function(){$('.independent .options-item[data-option="1"]').removeClass("show"),$('.independent .options-item[data-option="2"]').addClass("show"),d.update()})),$('.independent .options-item[data-option="2"] .prev').on("click",(function(){$('.independent .options-item[data-option="2"]').removeClass("show"),$('.independent .options-item[data-option="1"]').addClass("show"),i.update()})),$('.independent .options-item[data-option="2"] .next').on("click",(function(){$('.independent .options-item[data-option="2"]').removeClass("show"),$('.independent .options-item[data-option="3"]').addClass("show")})),$('.independent .options-item[data-option="3"] .prev').on("click",(function(){$('.independent .options-item[data-option="3"]').removeClass("show"),$('.independent .options-item[data-option="2"]').addClass("show"),d.update()})),$('.independent .options-item[data-option="2"] .btn-select').on("click",(function(){var t=parseInt($(this).attr("data-select")),e=parseInt($('.independent .options-item[data-option="2"]').attr("data-select"));if($(this).hasClass("active"))$(this).removeClass("active");else{var a=$('.independent .options-item[data-option="2"] .btn-select.active').length;if(1==t&&0==e)return $('.independent .options-item[data-option="2"]').attr("data-select",1),$('.independent .options-item[data-option="2"]').attr("data-select-one",1),$('.independent .options-item[data-option="2"] .content').addClass("active-1"),$('.independent .options-item[data-option="2"] .content-image').addClass("active-1"),$('.independent .options-item[data-option="2"] .btn-more-info').animate({opacity:1},500),$(this).addClass("active"),!1;1==t&&e!=t?($('.independent .options-item[data-option="2"] .btn-more-info').animate({opacity:0},500),$('.independent .options-item[data-option="2"] .text').animate({opacity:0},500),$('.independent .options-item[data-option="2"] .content').removeClass("active-2 active-3 active-4"),d.slideTo(0),setTimeout((function(){$('.independent .options-item[data-option="2"] .content-image').removeClass("active-2 active-3 active-4"),$('.independent .options-item[data-option="2"] .content-image').addClass("active-1")}),500),setTimeout((function(){$('.independent .options-item[data-option="2"] .content').addClass("active-1"),$('.independent .options-item[data-option="2"]').attr("data-select",1),$('.independent .options-item[data-option="2"] .btn-more-info').animate({opacity:1},500),$('.independent .options-item[data-option="2"] .text').animate({opacity:1},500)}),1e3)):2==t&&e!=t?($('.independent .options-item[data-option="2"] .btn-more-info').animate({opacity:0},500),$('.independent .options-item[data-option="2"] .text').animate({opacity:0},500),$('.independent .options-item[data-option="2"] .content').removeClass("active-1 active-3 active-4"),d.slideTo(1),setTimeout((function(){$('.independent .options-item[data-option="2"] .content-image').removeClass("active-1 active-3 active-4"),$('.independent .options-item[data-option="2"] .content-image').addClass("active-2")}),500),setTimeout((function(){$('.independent .options-item[data-option="2"] .content').addClass("active-2"),$('.independent .options-item[data-option="2"]').attr("data-select",2),$('.independent .options-item[data-option="2"] .btn-more-info').animate({opacity:1},500),$('.independent .options-item[data-option="2"] .text').animate({opacity:1},500)}),1e3)):3==t&&e!=t?($('.independent .options-item[data-option="2"] .btn-more-info').animate({opacity:0},500),$('.independent .options-item[data-option="2"] .text').animate({opacity:0},500),$('.independent .options-item[data-option="2"] .content').removeClass("active-1 active-2 active-4"),d.slideTo(2),setTimeout((function(){$('.independent .options-item[data-option="2"] .content-image').removeClass("active-1 active-2 active-4"),$('.independent .options-item[data-option="2"] .content-image').addClass("active-3")}),500),setTimeout((function(){$('.independent .options-item[data-option="2"] .content').addClass("active-3"),$('.independent .options-item[data-option="2"]').attr("data-select",3),$('.independent .options-item[data-option="2"] .btn-more-info').animate({opacity:1},500),$('.independent .options-item[data-option="2"] .text').animate({opacity:1},500)}),1e3)):4==t&&e!=t&&($('.independent .options-item[data-option="2"] .btn-more-info').animate({opacity:0},500),$('.independent .options-item[data-option="2"] .text').animate({opacity:0},500),$('.independent .options-item[data-option="2"] .content').removeClass("active-1 active-2 active-3"),d.slideTo(3),setTimeout((function(){$('.independent .options-item[data-option="2"] .content-image').removeClass("active-1 active-2 active-3"),$('.independent .options-item[data-option="2"] .content-image').addClass("active-4")}),500),setTimeout((function(){$('.independent .options-item[data-option="2"] .content').addClass("active-4"),$('.independent .options-item[data-option="2"]').attr("data-select",4),$('.independent .options-item[data-option="2"] .btn-more-info').animate({opacity:1},500),$('.independent .options-item[data-option="2"] .text').animate({opacity:1},500)}),1e3)),a>=2&&$('.independent .options-item[data-option="2"] .btn-select.active').first().removeClass("active"),$(this).addClass("active")}var o=$('.independent .options-item[data-option="2"] .btn-select.active').length;0==o?($('.independent .options-item[data-option="2"]').attr("data-select-one",0),$('.independent .options-item[data-option="2"]').attr("data-select-two",0)):1==o?($('.independent .options-item[data-option="2"]').attr("data-select-one",parseInt($('.independent .options-item[data-option="2"] .btn-select.active').first().attr("data-select"))),$('.independent .options-item[data-option="2"]').attr("data-select-two",0)):2==o&&($('.independent .options-item[data-option="2"]').attr("data-select-one",parseInt($('.independent .options-item[data-option="2"] .btn-select.active').first().attr("data-select"))),$('.independent .options-item[data-option="2"]').attr("data-select-two",parseInt($('.independent .options-item[data-option="2"] .btn-select.active').last().attr("data-select"))))})),$('.independent .options-item[data-option="3"] .next').on("click",(function(){var t=parseInt($('.independent .options-item[data-option="1"]').attr("data-select")),e=parseInt($('.independent .options-item[data-option="2"]').attr("data-select-one")),o=parseInt($('.independent .options-item[data-option="2"]').attr("data-select-two"));a[0]=t-1,a[1]=e-1,a[2]=0!=o?o-1:e-1,a[3]=0,$(".modal-box-test .independent").removeClass("show"),$(".modal-box-test .results").addClass("show"),$('.modal-box-test .results .result-item[data-result-cream="'+a[0]+'"]').addClass("show"),$('.modal-box-test .results .result-item[data-result-elixir="'+a[1]+'"]').addClass("show"),$('.modal-box-test .results .result-item[data-result-elixir="'+a[2]+'"]').addClass("show"),$('.modal-box-test .results .result-item[data-result-all="'+a[3]+'"]').addClass("show"),$(".modal-box-test .results .select-block").addClass("select-block-"+a[0]+a[1]+a[2]+a[3]),$(".modal-box-test .results .link-download").attr("href","doc/"+a[0]+a[1]+a[2]+a[3]+".pdf")})),$(".modal-box-test .results .btn-new-test").on("click",(function(){$(".modal-box-test").modalBox("close")})),$('.modal-box-test .options-item[data-option="2"] .js-open-modal-info').on("click",(function(){switch(parseInt($('.modal-box-test .options-item[data-option="2"]').attr("data-select"))){case 0:case 1:e(1);break;case 2:e(2);break;case 3:e(3);break;case 4:e(4);break;default:console.log("Error!")}})),$('.modal-box-test .options-item[data-option="3"] .js-open-modal-info').on("click",(function(){e(5)})),$(".open-modal-info").on("click",(function(){e(5)})),$('.modal-box-test .options-item[data-option="2"] .btn-more-info-slider').on("click",(function(){e(parseInt($(this).attr("data-elixir")))})),$(".modal-box-info .js-close-modal-info").on("click",(function(){$(".modal-box-info").modalBox("close")})),$(".independent .options-item .js-btn-top").on("click",(function(){$(".modal-box-test").animate({scrollTop:0},300)}))}))}]);
!function(l){var b=!1;location.hash;var v=["Days","Hours","Minutes","Seconds"],a={Seconds:"Minutes",Minutes:"Hours",Hours:"Days",Days:"Years"},g={Seconds:1,Minutes:60,Hours:3600,Days:86400,Months:2678400,Years:31536e3};function n(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function y(t,i,a,e,s){var n={},o={},r={},h={},d={},u={},l=null;for(var c in e){var f,m=e[c];f=null===l?a/g[m]:g[l]/g[m];var p=t/g[m],_=i/g[m];s&&(p=Math.floor(p)),s&&(_=Math.floor(_)),"Days"!==m&&(p%=f,_%=f),n[m]=p,r[m]=Math.abs(p),o[m]=_,u[m]=Math.abs(_),h[m]=Math.abs(p)/f,d[m]=Math.abs(_)/f,l=m}return{raw_time:n,raw_old_time:o,time:r,old_time:u,pct:h,old_pct:d}}Array.prototype.indexOf||(Array.prototype.indexOf=function(t){var i=this.length>>>0,a=Number(arguments[1])||0;for((a=a<0?Math.ceil(a):Math.floor(a))<0&&(a+=i);a<i;a++)if(a in this&&this[a]===t)return a;return-1});var o={};window!==window.top&&void 0!==window.top.TC_Instance_List?o=window.top.TC_Instance_List:window.top.TC_Instance_List=o,function(){for(var t=["webkit","moz"],i=0;i<t.length&&!window.top.requestAnimationFrame;++i)window.top.requestAnimationFrame=window.top[t[i]+"RequestAnimationFrame"],window.top.cancelAnimationFrame=window.top[t[i]+"CancelAnimationFrame"];window.top.requestAnimationFrame&&window.top.cancelAnimationFrame||(window.top.requestAnimationFrame=function(t,i,a){void 0===a&&(a={data:{last_frame:0}});var e=(new Date).getTime(),s=Math.max(0,16-(e-a.data.last_frame)),n=window.top.setTimeout(function(){t(e+s)},s);return a.data.last_frame=e+s,n},window.top.cancelAnimationFrame=function(t){clearTimeout(t)})}();function r(t,i){this.element=t,this.container,this.listeners=null,this.data={paused:!1,last_frame:0,animation_frame:null,timer:!1,total_duration:null,prev_time:null,drawn_units:[],text_elements:{Days:null,Hours:null,Minutes:null,Seconds:null},attributes:{canvas:null,context:null,item_size:null,line_width:null,radius:null,outer_radius:null},state:{fading:{Days:!1,Hours:!1,Minutes:!1,Seconds:!1}}},this.config=null,this.setOptions(i),this.initialize()}r.prototype.initialize=function(t){for(var i in this.data.drawn_units=[],this.config.time)this.config.time[i].show&&this.data.drawn_units.push(i);l(this.element).children("div.time_circles").remove(),void 0===t&&(t=!0),!t&&null!==this.listeners||(this.listeners={all:[],visible:[]}),this.container=l("<div>"),this.container.addClass("time_circles"),this.container.appendTo(this.element);var a=this.element.offsetHeight,e=this.element.offsetWidth;0===a&&(a=l(this.element).height()),0===e&&(e=l(this.element).width()),0===a&&0<e?a=e/this.data.drawn_units.length:0===e&&0<a&&(e=a*this.data.drawn_units.length);var s=document.createElement("canvas");s.width=e,s.height=a,this.data.attributes.canvas=l(s),this.data.attributes.canvas.appendTo(this.container);var n=function(){var t=document.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))}();n||"undefined"==typeof G_vmlCanvasManager||(G_vmlCanvasManager.initElement(s),n=b=!0),n&&(this.data.attributes.context=s.getContext("2d")),this.data.attributes.item_size=Math.min(e/this.data.drawn_units.length,a),this.data.attributes.line_width=this.data.attributes.item_size*this.config.fg_width,this.data.attributes.radius=(.8*this.data.attributes.item_size-this.data.attributes.line_width)/2,this.data.attributes.outer_radius=this.data.attributes.radius+.5*Math.max(this.data.attributes.line_width,this.data.attributes.line_width*this.config.bg_width);var o=0;for(var r in this.data.text_elements)if(this.config.time[r].show){var h=l("<div>");h.addClass("textDiv_"+r),h.css("top",Math.round(.35*this.data.attributes.item_size)),h.css("left",Math.round(o++*this.data.attributes.item_size)),h.css("width",this.data.attributes.item_size);var d=l("<span>");d.css("font-size",Math.round(.21*this.data.attributes.item_size)),d.css("line-height",Math.round(.07*this.data.attributes.item_size)+"px"),d.appendTo(h),h.appendTo(this.container);var u=l("<h4>");u.text(this.config.time[r].text),u.css("font-size",Math.round(.07*this.data.attributes.item_size)),u.css("line-height",Math.round(.07*this.data.attributes.item_size)+"px"),u.appendTo(h),this.data.text_elements[r]=d}this.config.start&&!1===this.data.paused&&this.start()},r.prototype.update=function(){var t,i;b&&this.data.attributes.context.clearRect(0,0,this.data.attributes.canvas[0].width,this.data.attributes.canvas[0].hright);var a=this.data.prev_time,e=new Date;if(this.data.prev_time=e,null===a&&(a=e),!this.config.count_past_zero&&e>this.data.attributes.ref_date){for(var s in this.data.drawn_units){var n=this.data.drawn_units[s];this.data.text_elements[n].text("0");var o=s*this.data.attributes.item_size+this.data.attributes.item_size/2,r=this.data.attributes.item_size/2,h=this.config.time[n].color;this.drawArc(o,r,h,0)}this.stop()}else{t=(this.data.attributes.ref_date-e)/1e3,i=(this.data.attributes.ref_date-a)/1e3;var d="smooth"!==this.config.animation,u=y(t,i,this.data.total_duration,this.data.drawn_units,d),l=y(t,i,g.Years,v,d),c=(s=0,0),f=null,m=this.data.drawn_units.slice();for(var s in v){n=v[s];if(Math.floor(l.raw_time[n])!==Math.floor(l.raw_old_time[n])&&this.notifyListeners(n,Math.floor(l.time[n]),Math.floor(t),"all"),!(m.indexOf(n)<0)){Math.floor(u.raw_time[n])!==Math.floor(u.raw_old_time[n])&&this.notifyListeners(n,Math.floor(u.time[n]),Math.floor(t),"visible"),this.data.text_elements[n].text(Math.floor(Math.abs(u.time[n])));o=c*this.data.attributes.item_size+this.data.attributes.item_size/2,r=this.data.attributes.item_size/2,h=this.config.time[n].color;"smooth"===this.config.animation?(null===f||b||(Math.floor(u.time[f])>Math.floor(u.old_time[f])?(this.radialFade(o,r,h,1,n),this.data.state.fading[n]=!0):Math.floor(u.time[f])<Math.floor(u.old_time[f])&&(this.radialFade(o,r,h,0,n),this.data.state.fading[n]=!0)),this.data.state.fading[n]||this.drawArc(o,r,h,u.pct[n])):this.animateArc(o,r,h,u.pct[n],u.old_pct[n],(new Date).getTime()+200),f=n,c++}}function p(){_.update.call(_)}var _=this;if("smooth"===this.config.animation)this.data.animation_frame=window.top.requestAnimationFrame(p,_.element,_);else{var w=t%1*1e3;w<0&&(w=1e3+w),w+=50,_.data.animation_frame=window.top.setTimeout(function(){_.data.animation_frame=window.top.requestAnimationFrame(p,_.element,_)},w)}}},r.prototype.animateArc=function(t,i,a,e,s,n){if(null!==this.data.attributes.context){var o=s-e;if(.5<Math.abs(o))0===e?this.radialFade(t,i,a,1):this.radialFade(t,i,a,0);else{var r=(200-(n-(new Date).getTime()))/200;1<r&&(r=1);var h=s*(1-r)+e*r;if(this.drawArc(t,i,a,h),1<=r)return;var d=this;window.top.requestAnimationFrame(function(){d.animateArc(t,i,a,e,s,n)},this.element)}}},r.prototype.drawArc=function(t,i,a,e){if(null!==this.data.attributes.context){var s,n,o,r=Math.max(this.data.attributes.outer_radius,this.data.attributes.item_size/2);b||this.data.attributes.context.clearRect(t-r,i-r,2*r,2*r),this.config.use_background&&(this.data.attributes.context.beginPath(),this.data.attributes.context.arc(t,i,this.data.attributes.radius,0,2*Math.PI,!1),this.data.attributes.context.lineWidth=this.data.attributes.line_width*this.config.bg_width,this.data.attributes.context.fillStyle=this.config.circle_bg_fill_color,this.data.attributes.context.fill(),this.data.attributes.context.strokeStyle=this.config.circle_bg_color,this.data.attributes.context.stroke());var h=-.5*Math.PI,d=2*Math.PI;s=h+this.config.start_angle/360*d;var u=2*e*Math.PI;n="Both"===this.config.direction?(o=!1,(s-=u/2)+u):"Clockwise"===this.config.direction?(o=!1,s+u):(o=!0,s-u),this.data.attributes.context.beginPath(),this.data.attributes.context.arc(t,i,this.data.attributes.radius,s,n,o),this.data.attributes.context.lineWidth=this.data.attributes.line_width,this.data.attributes.context.strokeStyle=a,this.data.attributes.context.stroke()}},r.prototype.radialFade=function(a,e,t,s,i){var n,o=function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,i,a,e){return i+i+a+a+e+e});var i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return i?{r:parseInt(i[1],16),g:parseInt(i[2],16),b:parseInt(i[3],16)}:null}(t),r=this,h=.2*(1===s?-1:1);for(n=0;s<=1&&0<=s;n++)!function(){var t=50*n,i="rgba("+o.r+", "+o.g+", "+o.b+", "+Math.round(10*s)/10+")";window.top.setTimeout(function(){r.drawArc(a,e,i,1)},t)}(),s+=h;window.top.setTimeout(function(){r.data.state.fading[i]=!1},50*n)},r.prototype.timeLeft=function(){var t=new Date;return(this.data.attributes.ref_date-t)/1e3},r.prototype.start=function(){window.top.cancelAnimationFrame(this.data.animation_frame),window.top.clearTimeout(this.data.animation_frame);var t=l(this.element).data("date");if(void 0===t&&(t=l(this.element).attr("data-date")),"string"==typeof t)this.data.attributes.ref_date=function(t){var i=t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{1,2}:[0-9]{2}:[0-9]{2}$/);if(null!==i&&0<i.length){var a=t.split(" "),e=a[0].split("-"),s=a[1].split(":");return new Date(e[0],e[1]-1,e[2],s[0],s[1],s[2])}var n=Date.parse(t);return isNaN(n)?(n=Date.parse(t.replace(/-/g,"/").replace("T"," ")),isNaN(n)?new Date:n):n}(t);else if("number"==typeof this.data.timer)this.data.paused&&(this.data.attributes.ref_date=(new Date).getTime()+1e3*this.data.timer);else{var i=l(this.element).data("timer");void 0===i&&(i=l(this.element).attr("data-timer")),"string"==typeof i&&(i=parseFloat(i)),"number"==typeof i?(this.data.timer=i,this.data.attributes.ref_date=(new Date).getTime()+1e3*i):this.data.attributes.ref_date=this.config.ref_date}this.data.paused=!1,this.update.call(this)},r.prototype.restart=function(){this.data.timer=!1,this.start()},r.prototype.stop=function(){"number"==typeof this.data.timer&&(this.data.timer=this.timeLeft(this)),this.data.paused=!0,window.top.cancelAnimationFrame(this.data.animation_frame)},r.prototype.destroy=function(){this.stop(),this.container.remove(),l(this.element).removeAttr("data-tc-id"),l(this.element).removeData("tc-id")},r.prototype.setOptions=function(t){if(null===this.config&&(this.default_options.ref_date=new Date,this.config=l.extend(!0,{},this.default_options)),l.extend(!0,this.config,t),this.data.total_duration=this.config.total_duration,"string"==typeof this.data.total_duration)if(void 0!==g[this.data.total_duration])this.data.total_duration=g[this.data.total_duration];else if("Auto"===this.data.total_duration){for(var i in this.config.time)if(this.config.time[i].show){this.data.total_duration=g[a[i]];break}}else this.data.total_duration=g.Years,console.error("Valid values for TimeCircles config.total_duration are either numeric, or (string) Years, Months, Days, Hours, Minutes, Auto")},r.prototype.addListener=function(t,i,a){"function"==typeof t&&(void 0===a&&(a="visible"),this.listeners[a].push({func:t,scope:i}))},r.prototype.notifyListeners=function(t,i,a,e){for(var s=0;s<this.listeners[e].length;s++){var n=this.listeners[e][s];n.func.apply(n.scope,[t,i,a])}},r.prototype.default_options={ref_date:new Date,start:!0,animation:"smooth",count_past_zero:!0,circle_bg_color:"#60686F",circle_bg_fill_color:"#ffffff",use_background:!0,fg_width:.1,bg_width:1.2,total_duration:"Auto",direction:"Clockwise",start_angle:0,time:{Days:{show:!0,text:"Days",color:"#FC6"},Hours:{show:!0,text:"Hours",color:"#9CF"},Minutes:{show:!0,text:"Minutes",color:"#BFB"},Seconds:{show:!0,text:"Seconds",color:"#F99"}}};function i(t,i){this.elements=t,this.options=i,this.foreach()}i.prototype.getInstance=function(t){var i,a=l(t).data("tc-id");if(void 0===a&&(a=n()+n()+"-"+n()+"-"+n()+"-"+n()+"-"+n()+n()+n(),l(t).attr("data-tc-id",a)),void 0===o[a]){var e=this.options,s=l(t).data("options");"string"==typeof s&&(s=JSON.parse(s)),"object"==typeof s&&(e=l.extend(!0,{},this.options,s)),i=new r(t,e),o[a]=i}else i=o[a],void 0!==this.options&&i.setOptions(this.options);return i},i.prototype.foreach=function(i){var a=this;return this.elements.each(function(){var t=a.getInstance(this);"function"==typeof i&&i(t)}),this},i.prototype.start=function(){return this.foreach(function(t){t.start()}),this},i.prototype.stop=function(){return this.foreach(function(t){t.stop()}),this},i.prototype.restart=function(){return this.foreach(function(t){t.restart()}),this},i.prototype.rebuild=function(){return this.foreach(function(t){t.initialize(!1)}),this},i.prototype.getTime=function(){return this.getInstance(this.elements[0]).timeLeft()},i.prototype.addListener=function(i,a){void 0===a&&(a="visible");var e=this;return this.foreach(function(t){t.addListener(i,e.elements,a)}),this},i.prototype.destroy=function(){return this.foreach(function(t){t.destroy()}),this},i.prototype.end=function(){return this.elements},l.fn.TimeCircles=function(t){return new i(this,t)}}(jQuery);
!function(t){var o=t(window),e=o.height();o.resize(function(){e=o.height()}),t.fn.parally=function(n){function s(t){return n.outer?t.outerHeight(!0):t.height()}defaults={speed:.2,mode:"background",xpos:"50%",outer:!0,offset:0},n=t.extend({},defaults,n),t(this).each(function(){function r(){var t=o.scrollTop(),r=a.offset().top,i=s(a),u=0;t>r+i||r>t+e||(u=(f-t)*n.speed+n.offset,"background"==n.mode?a.css("background-position",n.xpos+" "+u+"px"):"transform"==n.mode?a.css({"-webkit-transform":"translate(0,"+u+"px)","-moz-transform":"translate(0,"+u+"px)","-ms-transform":"translate(0,"+u+"px)",transform:"translate(0,"+u+"px)"}):"function"==typeof n.mode&&n.mode(n.xpos,u))}var a=t(this),f=a.offset().top;o.bind("scroll",r).resize(r),r()})}}(jQuery);

var scaleBg = $(".scale-bg");
var textWrapper = $(".title-wrapper");
var textWrapperHeight = $(textWrapper).height();
var manTop = $(".man").offset().top;
var manHeight = $(".man").height();

$(document).scroll(function() {
    var top = $(document).scrollTop();
    var width = $(window).width();
    var height = $(window).height();
    var heightText = (1 - (top / height * 1.4));
    heightText = textWrapperHeight * heightText;
    if (width > 1025) {
        var scale = 1 + (top / height / 4);
        if (scale < 1.2) {
            scaleBg.css({
                '-webkit-transform' : 'scale(' + scale + ')',
                '-moz-transform'    : 'scale(' + scale + ')',
                '-ms-transform'     : 'scale(' + scale + ')',
                '-o-transform'      : 'scale(' + scale + ')',
                'transform'         : 'scale(' + scale + ')'
            });
        }
        if (heightText >= 0) {
            $(textWrapper).css('height', heightText);
        }
        if ((manTop - manHeight / 1.2) < top) {
            var manHeightNew = top - (manTop - manHeight * 0.3);
            $('.man-hidden').css('height', manHeightNew + 'px');
        }
    }

});

function customParallax() {
    if ($(window).width() > 1125) {

        $('.js-people-img').parally({ mode: 'transform', speed: 0.4 });

        $('.js-people-photo').parally({ mode: 'transform', speed: 0.2 });

        $('.js-people-name').parally({ mode: 'transform', speed: 0.1, });
    } else {

        $('.js-people-img').parally({ mode: 'transform', speed: 0, });

        $('.js-people-photo').parally({ mode: 'transform', speed: 0, });

        $('.js-people-name').parally({ mode: 'transform', speed: 0, });
    }
}

$(function() {

    customParallax();

    var share_url = 'https://new.faberlic.com/ru/welcome?bs=RUS_8787&targetUrl=';
    var share_title = 'Faberlic дарит аромат за первую покупку';
    $('.js-share, .js-share-bottom, .js-share-result-1, .js-share-result-2').on('click', function(e){

        e.preventDefault();
        var name = $(this).data('share');
        switch (name) {
            case 'vk':
                Share.vkontakte(share_url+'vk', share_title);
                break;
            case 'fb':
                Share.facebook(share_url+'fb', share_title);
                break;
            case 'ok':
                Share.odnoklassniki(share_url+'ok', share_title);
                break;
            case 'tg':
                Share.telegram(share_url+'tg', share_title);
                break;
            case 'wa':
                Share.whatsapp(share_url+'wa', share_title);
                break;
            case 'vi':
                Share.viber(share_url+'vi', share_title);
                break;
            default:
                return false;
        }
    });

    var Share = {
        vkontakte: function(share_url, share_title) {
            var new_share_url  = "https://www.addtoany.com/add_to/vk?linkurl=" + encodeURIComponent(share_url) + "&amp;linkname=" + encodeURIComponent(share_title) + "&amp;linknote=";
            Share.popup(new_share_url);
        },
        odnoklassniki: function(share_url, share_title) {
            var new_share_url  = "https://www.addtoany.com/add_to/odnoklassniki?linkurl=" + encodeURIComponent(share_url) + "&amp;linkname=" + encodeURIComponent(share_title) + "&amp;linknote=";
            Share.popup(new_share_url);
        },
        facebook: function(share_url, share_title) {
            var new_share_url  = "https://www.addtoany.com/add_to/facebook?linkurl=" + encodeURIComponent(share_url) + "&amp;linkname=" + encodeURIComponent(share_title) + "&amp;linknote=";
            Share.popup(new_share_url);
        },
        telegram: function(share_url, share_title) {
            var new_share_url  = "https://www.addtoany.com/add_to/telegram?linkurl=" + encodeURIComponent(share_url) + "&amp;linkname=" + encodeURIComponent(share_title) + "&amp;linknote=";
            Share.popup(new_share_url);
        },
        whatsapp: function(share_url, share_title) {
            var new_share_url  = "https://www.addtoany.com/add_to/whatsapp?linkurl=" + encodeURIComponent(share_url) + "&amp;linkname=" + encodeURIComponent(share_title) + "&amp;linknote=";
            Share.popup(new_share_url);
        },
        viber: function(share_url, share_title) {
            var new_share_url  = 'viber://forward?text=' + encodeURIComponent(share_title) + ' ' + encodeURIComponent(share_url);
            Share.popup(new_share_url);
        },

        popup: function(url) {
            window.open(url,'','toolbar=0,status=0,width=626,height=436');
        }
    };

    $(".video .video-wrap").click(function () {
        $(this).find(".video-poster").hide();
        $(this).find(".video-play").hide();
        var videoURL = $(this).find(".video-iframe").prop('src');
        videoURL += "&autoplay=1";
        $(this).find(".video-iframe").prop('src',videoURL);
    });

    initTimer();

    $(window).resize(function () {
        initTimer();
        customParallax();
    });

    function initTimer() {

        var day = $(".blab_countdown").data("date-text"),
            hour = $(".blab_countdown").data("hour-text"),
            minute = $(".blab_countdown").data("minute-text"),
            second = $(".blab_countdown").data("second-text");

        $(".counter").TimeCircles().destroy();

        $(".counter").TimeCircles({
            "direction": "Clockwise",
            "animation": "Tricks",
            "bg_width": 0.01,
            "fg_width": 0.024,
            "circle_bg_color": "#D2D2D2",
            "circle_bg_fill_color": "#fff",
            "time": {
                "Days": {"text": day, "color": "#F33C3C", "show": true},
                "Hours": {"text": hour, "color": "#F33C3C", "show": true},
                "Minutes": {"text": minute, "color": "#F33C3C", "show": true},
                "Seconds": {"text": second, "color": "#F33C3C", "show": true}
            }
        });
    }



    $(".test .test-top-btn").on("click", function () {
        $(this).addClass("none");
        $(".test-section-wrapper").removeClass('mb');
        $(".test .question-1").removeClass("none");
        $('html, body').animate({scrollTop:$('.test .question-1').position().top}, 1000);
    });

    $(".banner-btn-share").on("click", function () {
        $('html, body').animate({scrollTop:$('section.share').position().top}, 3000);
    });

    $(".test .answer").on("click", function () {
        var question = parseInt($(this).data("question")),
            answer = parseInt($(this).data("answer"));
        $(this).addClass("active");
        $(".test .test-bottom").addClass("disable");
        localStorage.setItem("answer-" + question, answer.toString());
        setTimeout ( function ()  {
            $(".test .answer").removeClass("active");
            $(".test .test-bottom").removeClass("disable");
            switch (question) {
                case 1:
                    $('.question-1').addClass("none");
                    $('.question-2').removeClass("none");
                    break;
                case 2:
                    $('.question-2').addClass("none");
                    $('.question-3').removeClass("none");
                    break;
                case 3:
                    $('.question-3').addClass("none");
                    $('.question-4').removeClass("none");
                    break;
                case 4:
                    $('.question-4').addClass("none");
                    $('.question-5').removeClass("none");
                    break;
                case 5:
                    $('.question-5').addClass("none");
                    var res1 = 0,
                        res2 = 0,
                        answer01 = parseInt(localStorage.getItem('answer-1')),
                        answer02 = parseInt(localStorage.getItem('answer-2')),
                        answer03 = parseInt(localStorage.getItem('answer-3')),
                        answer04 = parseInt(localStorage.getItem('answer-4')),
                        answer05 = parseInt(localStorage.getItem('answer-5'));
                    if (answer01 == 1 || answer01 == 2) {
                        res1++;
                    } else if (answer01 == 3 || answer01 == 4){
                        res2++;
                    }
                    if (answer02 == 1 || answer02 == 3) {
                        res1++;
                    } else if (answer02 == 2 || answer02 == 4){
                        res2++;
                    }
                    if (answer03 == 3 || answer03 == 4) {
                        res1++;
                    } else if (answer03 == 1 || answer03 == 2){
                        res2++;
                    }
                    if (answer04 == 2 || answer04 == 3) {
                        res1++;
                    } else if (answer04 == 1 || answer04 == 4){
                        res2++;
                    }
                    if (answer05 == 1 || answer05 == 2) {
                        res1++;
                    } else if (answer05 == 3 || answer05 == 4){
                        res2++;
                    }
                    if (res1 < res2) {
                        $('.result-1 ').removeClass("none");
                    } else {
                        $('.result-2 ').removeClass("none");
                    }
                    break;
                default:
                    console.log('ошибка в тесте');
            }
        }, 500, question);
    });

    $(".test .back-test").on("click", function () {
        $('.test .result').addClass("none");
        $('.question-1').removeClass("none");
        $('html, body').animate({scrollTop:$('.test .question').position().top}, 1000);
    });

    $(".test .question-back").on("click", function () {
        var question = parseInt($(this).data("question"));
        switch (question) {
            case 1:
                $('.question-2').addClass("none");
                $('.question-1').removeClass("none");
                break;
            case 2:
                $('.question-3').addClass("none");
                $('.question-2').removeClass("none");
                break;
            case 3:
                $('.question-4').addClass("none");
                $('.question-3').removeClass("none");
                break;
            case 4:
                $('.question-5').addClass("none");
                $('.question-4').removeClass("none");
                break;
            default:
                console.log('ошибка при нажатии на кнопку "назад"');
        }
    });
});

$(document).ready(function () {

    var mobile = false;
    var desktop = false;

    var windowWidth = $(window).width();
    if(windowWidth <= 992) {
        enableMob();
    } else {
        enableDesk();
    }

    $(window).resize(function () {
        var windowWidth = $(window).width();
        if(windowWidth <= 992 && desktop == true) {
            enableMob();
        } else if(windowWidth > 992 && mobile == true) {
            enableDesk();
        }
    });

    function enableMob() {
        $.scrollify({
            section:".ref-manager-ozon-ref-mob section",
            scrollbars:false,
            standardScrollElements: 'input',
            afterRender:function() {
                var fs = parseInt($('.ref-manager-video-mob').css('font-size'), 10);
                var w = screen.width;
                var h = screen.height;
                if (w/h > 0.6) {
                    $(".ref-manager-ozon-ref-mob section, .modal-box").css("font-size", fs +'px');
                } else {
                    fs = fs - 1;
                    $(".ref-manager-ozon-ref-mob section, .modal-box:not('#ref-manager-question, #ref-manager-lk, #ref-manager-ooops')").css("font-size", fs +'px');
                    $(".ref-manager-calculator-mob").css("font-size", fs - 1 +'px');
                }
                $.scrollify.setOptions({setHeights: false});
                var feedbackHeight = $('.ref-manager-feedback-mob').css('height');
                var feedbackpaddingTop = $('.ref-manager-feedback-mob').css('paddingTop');
                var feedbackTitleHeight = $('.ref-manager-feedback-mob .ref-manager-title').css('height');
                var feedbackTitleMB = $('.ref-manager-feedback-mob .ref-manager-title').css('marginBottom');
                var calcHeight = parseInt(feedbackHeight, 10) - parseInt(feedbackpaddingTop, 10) - parseInt(feedbackTitleHeight, 10) - parseInt(feedbackTitleMB, 10);
                $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob .swiper-container').css('maxHeight', calcHeight);
                $(".ref-manager-menu-mob .ref-manager-link:not(.ref-manager-link-new-page), .ref-manager-scroll-to-feedback-mob").on('click', function (e) {
                    e.preventDefault();
                    var id = $(this).attr("href");
                    $.scrollify.move(id);
                    $(".ref-manager-menu-mob").fadeOut();
                });

                setTimeout(function () {
                    $("#ref-manager").css("opacity", "1");
                    $(".pre-loader").fadeOut();
                }, 2000);
            },
            after:function(i,panels) {
                pauseVideoMob();
                var height = window.innerHeight;
                $(panels[$.scrollify.currentIndex()]).css("height", height);
                $.scrollify.update();

                // dataLayer.push({
                // 'event': pageView,
                // 'eventLabel': panels[i].context.dataset.gtm
                // });
            },
            before:function(i,panels) {
                var height = window.innerHeight;
                $(panels[$.scrollify.currentIndex()]).css("height", height);
                $.scrollify.update();
            },
            afterResize:function() {
                $.scrollify.update();
            }
        });

        mobile = true;
        desktop = false;
    }

    function enableDesk() {
        $.scrollify({
            section:".ref-manager-ozon-ref section",
            scrollbars:false,
            before:function(i,panels) {
                stopScroll();
                var ref = panels[i].attr("data-section-name");

                $(".ref-manager-pagination .ref-manager-active").removeClass("ref-manager-active");

                $(".ref-manager-pagination").find("a[href=\"#" + ref + "\"]").addClass("ref-manager-active");
            },
            after:function(i,panels) {
                if(panels[i].context.dataset.sectionName == "calculator" || panels[i].context.dataset.sectionName == "startEarning"){
                    pauseVideo();
                };

                // dataLayer.push({
                // 'event': pageView,
                // 'eventLabel': panels[i].context.dataset.gtm
                // });
            },
            afterRender:function() {
                var pagination = "<ul class=\"ref-manager-pagination\">";
                var activeClass = "";
                $(".ref-manager-ozon-ref section").each(function(i) {
                    activeClass = "";
                    if(i===0) {
                        activeClass = "ref-manager-active";
                    }
                    pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"></a></li>";
                });

                pagination += "</ul>";

                $(".ref-manager-ozon-ref").append(pagination);
                $(".ref-manager-pagination a").on("click",$.scrollify.move);

                $(".ref-manager-ozon-ref .ref-manager-menu .ref-manager-link:not(.ref-manager-link-new-page)").on('click', function (e) {
                    e.preventDefault();
                    var id = $(this).attr("href");
                    $.scrollify.move(id);
                });

                $(".ref-manager-ozon-ref .ref-manager-story .ref-manager-btn-go-feedback, .ref-manager-ozon-ref .ref-manager-scroll-to-feedback").on('click', function (e) {
                    e.preventDefault();
                    var id = $(this).attr("href");
                    $.scrollify.move(id);
                });

                setFontSize();
                setTimeout(function () {
                    $("#ref-manager").css("opacity", "1");
                    $(".pre-loader").fadeOut();
                }, 2000);
            },
            afterResize:function() {
                setFontSize();
            }
        });

        $.scrollify.update();

        desktop = true;
        mobile = false;
    }

    var i = 1;

    firstScreenAnimation();

    function firstScreenAnimation() {
        $('.ref-manager-start-earning').on('wheel mousewheel', function(e){
            if(e.originalEvent.deltaY > 0) {
                if(i < 4) {
                    $.scrollify.disable();
                    ++i;
                    $('.ref-manager-start-earning').removeClass("ref-manager-start-earning-1");
                    $('.ref-manager-start-earning').removeClass("ref-manager-start-earning-2");
                    $('.ref-manager-start-earning').removeClass("ref-manager-start-earning-3");
                    $('.ref-manager-start-earning').removeClass("ref-manager-start-earning-4");
                    $('.ref-manager-start-earning').removeClass("ref-manager-start-earning-5");
                    $('.ref-manager-start-earning').addClass("ref-manager-start-earning-" + i );
                    $('.ref-manager-start-earning').find(".ref-manager-text-container").hide();
                    $('.ref-manager-start-earning').find(".ref-manager-text-container-" + i).fadeIn(1000);
                    stopScroll();
                    // dataLayer.push({
                    //     'event': pageView,
                    //     'eventLabel': 'Начните зарабатывать ' + i
                    // });
                } else if (i == 4) {
                    ++i;
                    $('.ref-manager-start-earning').removeClass("ref-manager-start-earning-1");
                    $('.ref-manager-start-earning').removeClass("ref-manager-start-earning-2");
                    $('.ref-manager-start-earning').removeClass("ref-manager-start-earning-3");
                    $('.ref-manager-start-earning').removeClass("ref-manager-start-earning-4");
                    $('.ref-manager-start-earning').removeClass("ref-manager-start-earning-5");
                    $('.ref-manager-start-earning').addClass("ref-manager-start-earning-" + i );
                    $('.ref-manager-start-earning').find(".ref-manager-text-container").hide();
                    $('.ref-manager-start-earning').find(".ref-manager-text-container-" + i).fadeIn(1000);
                    scrollifyEnable();
                    // dataLayer.push({
                    //     'event': pageView,
                    //     'eventLabel': 'Начните зарабатывать ' + i
                    // });
                }

            } else if(e.originalEvent.deltaY < 0) {
                if(i > 1) {
                    $.scrollify.disable();
                    --i;
                    $('.ref-manager-start-earning').removeClass("ref-manager-start-earning-1");
                    $('.ref-manager-start-earning').removeClass("ref-manager-start-earning-2");
                    $('.ref-manager-start-earning').removeClass("ref-manager-start-earning-3");
                    $('.ref-manager-start-earning').removeClass("ref-manager-start-earning-4");
                    $('.ref-manager-start-earning').removeClass("ref-manager-start-earning-5");
                    $('.ref-manager-start-earning').addClass("ref-manager-start-earning-" + i );
                    $('.ref-manager-start-earning').find(".ref-manager-text-container").hide();
                    $('.ref-manager-start-earning').find(".ref-manager-text-container-" + i).fadeIn(1000);
                    stopScroll();
                    // dataLayer.push({
                    //     'event': pageView,
                    //     'eventLabel': 'Начните зарабатывать ' + i
                    // });
                } else {
                    $.scrollify.enable();
                }
            }
        });
    }

    var flag = true;

    function scrollifyEnable() {
        if(flag == true) {
            $.scrollify.enable();
            flag = false;
            setTimeout(function (){
                flag = true;
            }, 1000);
        }
    }

    function stopScroll() {
        $('.ref-manager-start-earning').off('wheel mousewheel');
        setTimeout(function (){
            firstScreenAnimation();
        }, 1000);
    }

    $(".ref-manager-start-earning .ref-manager-scroll-to-feedback, .ref-manager-start-earning .ref-manager-link:not(.ref-manager-link-new-page), .ref-manager-pagination a").click(function (e) {
        $.scrollify.enable();
        e.preventDefault();
        var id = $(this).attr("href");
        $.scrollify.move(id);
    });

    function setFontSize() {
        var width = $(window).width();
        var height = $(window).height();

        if(width > 992) {
            var fs1 = width  / 100;
            var fs2 = height  / 51;

            if(fs1 > fs2) {
                $("section").css("font-size", fs2);
                $(".ref-manager-feedback").css("font-size", height  / 52);
            } else {
                $("section").css("font-size", fs1);
            }
        }
        $.scrollify.instantMove("#" + $.scrollify.current().data("section-name"));
    }
});

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player, playerMob;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('ref-manager-player', {
        videoId: 'Qis_jP3ud0A',
        playerVars: {rel: 0}
    });

    playerMob = new YT.Player('ref-manager-player-mob', {
        videoId: 'Qis_jP3ud0A',
        playerVars: {rel: 0}
    });
}

function pauseVideo() {
    if (player !== undefined && player.pauseVideo !== undefined) {
        player.pauseVideo();
    }
}

function playVideo() {
    player.playVideo();
}

function getPlayerState() {
    var state = player.getPlayerState();
    return state;
}

function pauseVideoMob() {
    console.log();
    if (playerMob !== undefined && playerMob.pauseVideo !== undefined) {
        playerMob.pauseVideo();
    }
}

function playVideoMob() {
    playerMob.playVideo();
}

function getPlayerStateMob() {
    var stateMob = playerMob.getPlayerState();
    return stateMob;
}

$(document).ready(function () {

    $(".ref-manager-video .ref-manager-overlay").click(function (e) {
        e.preventDefault();
        if (getPlayerState() == 2 || getPlayerState() == 5) {
            $(this).css("opacity", "0");
            $(this).addClass("ref-manager-open");
            playVideo();
        } else if (getPlayerState() == 1) {
            pauseVideo();
        }
    });

    $(".ref-manager-video-mob .ref-manager-overlay").click(function (e) {
        e.preventDefault();
        if (getPlayerStateMob() == 2 || getPlayerStateMob() == 5) {
            playVideoMob();
        } else if (getPlayerStateMob() == 1) {
            pauseVideoMob();
        }
    });

    $(".ref-manager-video-wrap-mob .ref-manager-btn.ref-manager-watch").click(function (e) {
        e.preventDefault();
        $(".ref-manager-video-wrap").addClass("ref-manager-open");
        playVideoMob();
    })

    $(".ref-manager-clients-desk").slider({
        range: "min",
        min: 0,
        max: 400,
        step: 5,
        value: 5,
        animate: true,
        slide: function (event, ui) {
            $(".ref-manager-clients-desk + input").val(ui.value);
            var newClientsDesktop = $(".ref-manager-new-clients-desk").slider("option", "value");
            if (newClientsDesktop >= ui.value) {
                $(".ref-manager-new-clients-desk").slider("option", "value", ui.value);
                $('.ref-manager-count-new-clients-desk').val(ui.value);
            }
            calcDesk();

            // dataLayer.push({
            //     'event': 'gaEventTrigger',
            //     'eventCategory': 'input',
            //     'eventAction': 'click',
            //     'eventLabel': 'Калькулятор';
            // });
        }
    });

    $(".ref-manager-new-clients-desk").slider({
        range: "min",
        min: 0,
        max: 400,
        step: 5,
        value: 1,
        animate: true,
        slide: function (event, ui) {
            if (ui.value <= $(".ref-manager-clients-desk").slider("option", "value")) {
                $(".ref-manager-new-clients-desk + input").val(ui.value);
                calcDesk();
            } else {
                $(".ref-manager-new-clients-desk").slider("option", $(".ref-manager-clients-desk").slider("option", "value"));
                $(".ref-manager-new-clients-desk + input").val($(".ref-manager-clients-desk").slider("option", "value"));
                calcDesk();
                return false;
            }

            // dataLayer.push({
            //     'event': 'gaEventTrigger',
            //     'eventCategory': 'input',
            //     'eventAction': 'click',
            //     'eventLabel': 'Калькулятор';
            // });
        }
    });

    $(".ref-manager-order-per-clients-desk").slider({
        range: "min",
        min: 0,
        max: 10,
        step: 1,
        value: 1,
        animate: true,
        slide: function (event, ui) {
            $(".ref-manager-order-per-clients-desk + input").val(ui.value);
            calcDesk();

            // dataLayer.push({
            //     'event': 'gaEventTrigger',
            //     'eventCategory': 'input',
            //     'eventAction': 'click',
            //     'eventLabel': 'Калькулятор';
            // });
        }
    });

    $(".ref-manager-AOV-client-desk").slider({
        range: "min",
        min: 0,
        max: 300000,
        step: 500,
        value: 3000,
        animate: true,
        slide: function (event, ui) {
            $(".ref-manager-AOV-client-desk + input").val(ui.value);
            calcDesk();

            // dataLayer.push({
            //     'event': 'gaEventTrigger',
            //     'eventCategory': 'input',
            //     'eventAction': 'click',
            //     'eventLabel': 'Калькулятор';
            // });
        }
    });

    $(".ref-manager-NS-manager-desk").slider({
        range: "min",
        min: 0,
        max: 300000,
        step: 500,
        value: 2500,
        animate: true,
        slide: function (event, ui) {
            $(".ref-manager-NS-manager-desk + input").val(ui.value);
            calcDesk();

            // dataLayer.push({
            //     'event': 'gaEventTrigger',
            //     'eventCategory': 'input',
            //     'eventAction': 'click',
            //     'eventLabel': 'Калькулятор';
            // });
        }
    });

    $(".ref-manager-clients-desk").next("input").on("input", function () {
        letterCheck($(this));

        if ($(this).val() < $(".ref-manager-new-clients-desk").slider("option", "value")) {
            $(".ref-manager-new-clients-desk").slider("option", "value", $(this).val());
            $(".ref-manager-clients-desk").slider("option", "value", $(this).val());
            if ($(this).val() == "") {
                $(".ref-manager-new-clients-desk + input").val("0");
            } else {
                $(".ref-manager-new-clients-desk + input").val($(this).val());
            }
        } else {
            $(".ref-manager-clients-desk").slider("option", "value", $(this).val());
        }
        calcDesk();

        // dataLayer.push({
        //     'event': 'gaEventTrigger',
        //     'eventCategory': 'input',
        //     'eventAction': 'click',
        //     'eventLabel': 'Калькулятор';
        // });
    });

    $(".ref-manager-new-clients-desk").next("input").on("input", function () {
        letterCheck($(this));

        if (+$(this).val() >= +$(".ref-manager-clients-desk").slider("option", "value")) {
            $(this).val($(".ref-manager-clients-desk").slider("option", "value"));
            $(".ref-manager-new-clients-desk").slider("option", "value", $(".ref-manager-clients-desk").slider("option", "value"));
        } else {
            $(".ref-manager-new-clients-desk").slider("option", "value", $(this).val());
        }
        calcDesk();

        // dataLayer.push({
        //     'event': 'gaEventTrigger',
        //     'eventCategory': 'input',
        //     'eventAction': 'click',
        //     'eventLabel': 'Калькулятор';
        // });
    });

    $(".ref-manager-order-per-clients-desk").next("input").on("input", function () {
        letterCheck($(this));

        $(".ref-manager-order-per-clients-desk").slider("option", "value", $(this).val());
        calcDesk();

        // dataLayer.push({
        //     'event': 'gaEventTrigger',
        //     'eventCategory': 'input',
        //     'eventAction': 'click',
        //     'eventLabel': 'Калькулятор';
        // });
    });

    $(".ref-manager-AOV-client-desk").next("input").on("input", function () {
        letterCheck($(this));

        $(".ref-manager-AOV-client-desk").slider("option", "value", $(this).val());
        calcDesk();

        // dataLayer.push({
        //     'event': 'gaEventTrigger',
        //     'eventCategory': 'input',
        //     'eventAction': 'click',
        //     'eventLabel': 'Калькулятор';
        // });
    });

    $(".ref-manager-NS-manager-desk").next("input").on("input", function () {
        letterCheck($(this));

        $(".ref-manager-NS-manager-desk").slider("option", "value", $(this).val());
        calcDesk();

        // dataLayer.push({
        //     'event': 'gaEventTrigger',
        //     'eventCategory': 'input',
        //     'eventAction': 'click',
        //     'eventLabel': 'Калькулятор';
        // });
    });

    function letterCheck(input) {
        var value = $(input).val();
        var rep = /[-\.;/?,\[\]}{|":'a-zA-Zа-яА-Я]/;
        if (rep.test(value)) {
            value = value.replace(rep, '');
            $(input).val(value);
        }
    }

    $(".ref-manager-check").keypress(function (e) {
        if ($(this).val() == 0) {
            $(this).val('');
        }

        if (e.which == 43 || e.which == 45 || e.which == 46 || e.which == 46 || e.which == 101 || e.which == 69) {
            return false;
        } else {
            return true;
        }
    });

    $(".ref-manager-check").change(function () {
        if ($(this).val() == '') {
            $(this).val("0");
        }
    });

    function calcDesk() {

        var clientsDesktop = $(".ref-manager-clients-desk + input").val();
        var newClientsDesktop = $(".ref-manager-new-clients-desk + input").val();
        var orderPerClientsDesk = $(".ref-manager-order-per-clients-desk + input").val();
        var AOVclientDesk = $(".ref-manager-AOV-client-desk + input").val();
        var NSManagerDesk = $(".ref-manager-NS-manager-desk + input").val();
        var task = 2;
        var resultDesktop = 0;

        if (NSManagerDesk >= 2500 && AOVclientDesk >= 2500) {
            resultDesktop = newClientsDesktop * 500;
            resultDesktop += Math.floor((clientsDesktop - newClientsDesktop) * orderPerClientsDesk * AOVclientDesk / 4000) * 200;
            resultDesktop += Math.floor((clientsDesktop - newClientsDesktop) * orderPerClientsDesk * AOVclientDesk / 50000) * 500;
            resultDesktop += (clientsDesktop < 5 || (clientsDesktop * AOVclientDesk) < 15000) ? 0 : (NSManagerDesk / 100 * 3);
            resultDesktop += task * 1000;
        }

        $(".ref-manager-result-desktop").text(resultDesktop.toLocaleString());
    }

    calcDesk();


    $(".ref-manager-clients-mob").slider({
        range: "min",
        min: 0,
        max: 400,
        step: 5,
        value: 5,
        animate: true,
        slide: function (event, ui) {
            $(".ref-manager-clients-mob + input").val(ui.value);
            var newClientsMob = $(".ref-manager-new-clients-mob").slider("option", "value");
            if (newClientsMob >= ui.value) {
                $(".ref-manager-new-clients-mob").slider("option", "value", ui.value);
                $('.ref-manager-count-new-clients-mob').val(ui.value);
            }
            calcMob();

            // dataLayer.push({
            //     'event': 'gaEventTrigger',
            //     'eventCategory': 'input',
            //     'eventAction': 'click',
            //     'eventLabel': 'Калькулятор';
            // });
        }
    });

    $(".ref-manager-new-clients-mob").slider({
        range: "min",
        min: 0,
        max: 400,
        step: 5,
        value: 1,
        animate: true,
        slide: function (event, ui) {
            if (ui.value <= $(".ref-manager-clients-mob").slider("option", "value")) {
                $(".ref-manager-new-clients-mob + input").val(ui.value);
                calcMob();
            } else {
                $(".ref-manager-new-clients-mob").slider("option", $(".ref-manager-clients-mob").slider("option", "value"));
                $(".ref-manager-new-clients-mob + input").val($(".ref-manager-clients-mob").slider("option", "value"));
                calcMob();
                return false;
            }

            // dataLayer.push({
            //     'event': 'gaEventTrigger',
            //     'eventCategory': 'input',
            //     'eventAction': 'click',
            //     'eventLabel': 'Калькулятор';
            // });
        }
    });

    $(".ref-manager-order-per-clients-mob").slider({
        range: "min",
        min: 0,
        max: 10,
        step: 1,
        value: 1,
        animate: true,
        slide: function (event, ui) {
            $(".ref-manager-order-per-clients-mob + input").val(ui.value);
            calcMob();

            // dataLayer.push({
            //     'event': 'gaEventTrigger',
            //     'eventCategory': 'input',
            //     'eventAction': 'click',
            //     'eventLabel': 'Калькулятор';
            // });
        }
    });

    $(".ref-manager-AOV-client-mob").slider({
        range: "min",
        min: 0,
        max: 300000,
        step: 500,
        value: 3000,
        animate: true,
        slide: function (event, ui) {
            $(".ref-manager-AOV-client-mob + input").val(ui.value);
            calcMob();

            // dataLayer.push({
            //     'event': 'gaEventTrigger',
            //     'eventCategory': 'input',
            //     'eventAction': 'click',
            //     'eventLabel': 'Калькулятор';
            // });
        }
    });

    $(".ref-manager-NS-manager-mob").slider({
        range: "min",
        min: 0,
        max: 300000,
        step: 500,
        value: 2500,
        animate: true,
        slide: function (event, ui) {
            $(".ref-manager-NS-manager-mob + input").val(ui.value);
            calcMob();

            // dataLayer.push({
            //     'event': 'gaEventTrigger',
            //     'eventCategory': 'input',
            //     'eventAction': 'click',
            //     'eventLabel': 'Калькулятор';
            // });
        }
    });


    $(".ref-manager-clients-mob").next("input").on("input", function () {
        letterCheck($(this));

        if ($(this).val() < $(".ref-manager-new-clients-mob").slider("option", "value")) {
            $(".ref-manager-new-clients-mob").slider("option", "value", $(this).val());
            $(".ref-manager-clients-mob").slider("option", "value", $(this).val());
            if ($(this).val() == "") {
                $(".ref-manager-new-clients-mob + input").val("0");
            } else {
                $(".ref-manager-new-clients-mob + input").val($(this).val());
            }
        } else {
            $(".ref-manager-clients-mob").slider("option", "value", $(this).val());
        }
        calcMob();

        // dataLayer.push({
        //     'event': 'gaEventTrigger',
        //     'eventCategory': 'input',
        //     'eventAction': 'click',
        //     'eventLabel': 'Калькулятор';
        // });
    });

    $(".ref-manager-new-clients-mob").next("input").on("input", function () {
        letterCheck($(this));

        if (+$(this).val() >= +$(".ref-manager-clients-mob").slider("option", "value")) {
            $(this).val($(".ref-manager-clients-mob").slider("option", "value"));
            $(".ref-manager-new-clients-mob").slider("option", "value", $(".ref-manager-clients-mob").slider("option", "value"));
        } else {
            $(".ref-manager-new-clients-mob").slider("option", "value", $(this).val());
        }
        calcMob();

        // dataLayer.push({
        //     'event': 'gaEventTrigger',
        //     'eventCategory': 'input',
        //     'eventAction': 'click',
        //     'eventLabel': 'Калькулятор';
        // });
    });

    $(".ref-manager-order-per-clients-mob").next("input").on("input", function () {
        letterCheck($(this));

        $(".ref-manager-order-per-clients-mob").slider("option", "value", $(this).val());
        calcMob();

        // dataLayer.push({
        //     'event': 'gaEventTrigger',
        //     'eventCategory': 'input',
        //     'eventAction': 'click',
        //     'eventLabel': 'Калькулятор';
        // });
    });

    $(".ref-manager-AOV-client-mob").next("input").on("input", function () {
        letterCheck($(this));

        $(".ref-manager-AOV-client-mob").slider("option", "value", $(this).val());
        calcMob();

        // dataLayer.push({
        //     'event': 'gaEventTrigger',
        //     'eventCategory': 'input',
        //     'eventAction': 'click',
        //     'eventLabel': 'Калькулятор';
        // });
    });

    $(".ref-manager-NS-manager-mob").next("input").on("input", function () {
        letterCheck($(this));

        $(".ref-manager-NS-manager-mob").slider("option", "value", $(this).val());
        calcMob();

        // dataLayer.push({
        //     'event': 'gaEventTrigger',
        //     'eventCategory': 'input',
        //     'eventAction': 'click',
        //     'eventLabel': 'Калькулятор';
        // });
    });

    function calcMob() {

        var clientsMob = $(".ref-manager-clients-mob + input").val();
        var newClientsMob = $(".ref-manager-new-clients-mob + input").val();
        var orderPerClientsMob = $(".ref-manager-order-per-clients-mob + input").val();
        var AOVclientMob = $(".ref-manager-AOV-client-mob + input").val();
        var NSManagerMob = $(".ref-manager-NS-manager-mob + input").val();
        var task = 2;
        var resultMob = 0;

        if (NSManagerMob >= 2500 && AOVclientMob >= 2500) {
            resultMob = newClientsMob * 500;
            resultMob += Math.floor((clientsMob - newClientsMob) * orderPerClientsMob * AOVclientMob / 4000) * 200;
            resultMob += Math.floor((clientsMob - newClientsMob) * orderPerClientsMob * AOVclientMob / 50000) * 500;
            resultMob += (clientsMob < 5 || (clientsMob * AOVclientMob) < 15000) ? 0 : (NSManagerMob / 100 * 3);
            resultMob += task * 1000;
        }

        $(".ref-manager-result-mob").text(resultMob.toLocaleString());
    }

    calcMob();

    var startEarningMob = new Swiper('.ref-manager-start-earning-mob .swiper-container', {
        resistanceRatio: 0,
        pagination: {
            el: '.ref-manager-start-earning-mob .swiper-pagination',
        },
    });

    var calculatorMob = new Swiper('.ref-manager-calculator-mob .swiper-container', {
        resistanceRatio: 0,
        pagination: {
            el: '.ref-manager-calculator-mob .swiper-pagination',
        },
        noSwipingClass: 'ui-widget-content',
    });

    $(".ref-manager-menu-icon").click(function (e) {
        e.preventDefault();
        $(".ref-manager-menu-mob").fadeIn();
    });

    $(".ref-manager-menu-close").click(function (e) {
        e.preventDefault();
        $(".ref-manager-menu-mob").fadeOut();
    });
});

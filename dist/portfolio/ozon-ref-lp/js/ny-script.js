$(document).ready(function () {

    var expense = 2500;
    var clientWay = 1;

    way(clientWay);

    function way(clientWay) {
        if (clientWay == 1) {
            $('.ref-manager-way').removeClass('ref-manager-way-visible');
            $('.ref-manager-way-one').addClass('ref-manager-way-visible');
        } else if (clientWay == 2) {
            $('.ref-manager-way').removeClass('ref-manager-way-visible');
            $('.ref-manager-way-two').addClass('ref-manager-way-visible');
        } else {
            $('.ref-manager-way').removeClass('ref-manager-way-visible');
            $('.ref-manager-way-three').addClass('ref-manager-way-visible');
        }
    }


    var maxDate = new Date();
    maxDate.setFullYear( maxDate.getFullYear() - 18 );

    $('.ref-manager-air-date-picker').datepicker({
        autoClose: true,
        maxDate: maxDate,
        language: 'ru',
        view: "years",

        onSelect: function onSelect(fd, date) {
            // dataLayer.push({
            //     'event': 'gaEventTrigger',
            //     'eventCategory': 'input/birth',
            //     'eventAction': 'click',
            //     'eventLabel': fd;
            // });
        }
    });

    $('.ref-manager-input-mask-phone').inputmask({"mask": "+7 (999) 999-99-99"});

    $( "#ref-manager-city" ).autocomplete({
        source: function( request, response ) {

            var city = $('#ref-manager-city').val();
            $.ajax( {
                type: 'GET',
                url: "https://www.ozon.ru/api/location/v2/search?query="+city,
                success: function( data ) {
                    $("#ref-manager-city-list-desktop li").remove();
                    for (var i = 0; i < data.length; i++) {
                        $("#ref-manager-city-list-desktop").append('<li class="ref-manager-city-item">'+data[i].city+'</li>');
                        $('#ref-manager-city-list-desktop .ref-manager-city-item').off('click').on('click',function(){
                            var city = $(this).text();
                            $('input#ref-manager-city').val(city);
                            $.scrollify.enable();
                            $("#ref-manager-city-list-desktop li").remove();
                        });
                    }
                    new SimpleBar($('.ref-manager-wrapper-city-list')[0]);
                    if (data.length > 0) {
                        $.scrollify.disable();
                    }
                }
            } );
        },
        minLength: 1,
        select: function( event, ui ) {
            console.log('work');
        }
    });

    $('input#ref-manager-city').on('blur', function () {
        setTimeout(function() {
            $.scrollify.enable();
            $("#ref-manager-city-list-desktop li").remove();
        }, 200);
    });

    $( "#ref-manager-cityMob" ).autocomplete({
        source: function( request, response ) {

            var city = $('#ref-manager-cityMob').val();
            $.ajax( {
                type: 'GET',
                url: "https://www.ozon.ru/api/location/v2/search?query="+city,
                success: function( data ) {
                    $("#ref-manager-cityListMob li").remove();
                    for (var i = 0; i < data.length; i++) {
                        $("#ref-manager-cityListMob").append('<li class="ref-manager-city-item">'+data[i].city+'</li>');
                        $('#ref-manager-cityListMob .ref-manager-city-item').off('click').on('click',function(){
                            var city = $(this).text();
                            $('input#ref-manager-cityMob').val(city);
                            $.scrollify.enable();
                            $("#ref-manager-cityListMob li").remove();
                        });
                    }
                    new SimpleBar($('.ref-manager-wrapper-city-list-mob')[0]);
                    if (data.length > 0) {
                        $.scrollify.disable();
                    }
                }
            } );
        },
        minLength: 1,
        select: function( event, ui ) {
            console.log('work');
        }
    });

    $('input#ref-manager-cityMob').on('blur', function () {
        setTimeout(function() {
            $.scrollify.enable();
            $("#ref-manager-cityListMob li").remove();
        }, 200);
    });

    $('.ref-manager-ozon-ref .ref-manager-feedback-form:not(.ref-manager-invalid) .ref-manager-btn.ref-manager-show-modal').on('click', function(){
        checkDeskForm(expense);
    });

    $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob input').on('focus', function () {
        $(this).removeClass('ref-manager-invalid');
    });

    $('.ref-manager-ozon-ref-mob .ref-manager-feedback-form:not(.ref-manager-invalid) .ref-manager-btn.ref-manager-show-modal').on('click', function(){
        checkMobForm(expense);
    });

    $('.ref-manager-ozon-ref .ref-manager-feedback input').on('focus', function () {
        $(this).removeClass('ref-manager-invalid');
    });

    $('.ref-manager-ozon-ref .ref-manager-feedback .ref-manager-checkbox-area input').change(function () {
        if($(this).prop('checked')){
            $(this).removeClass('ref-manager-invalid');
        }
    });

    function checkDeskForm() {
        var nameDesk = $('.ref-manager-ozon-ref .ref-manager-feedback #ref-manager-name').val();
        var dateDesk = $('.ref-manager-ozon-ref .ref-manager-feedback #ref-manager-date').val();
        var cityDesk = $('.ref-manager-ozon-ref .ref-manager-feedback #ref-manager-city').val();
        var phoneDesk = $('.ref-manager-ozon-ref .ref-manager-feedback #ref-manager-phone').val();
        var emailDesk = $('.ref-manager-ozon-ref .ref-manager-feedback #ref-manager-email').val();
        var consentDesk = $('.ref-manager-ozon-ref .ref-manager-feedback #ref-manager-consent').prop( "checked" );
        var confirmationDesk = $('.ref-manager-ozon-ref .ref-manager-feedback #ref-manager-confirmation').prop( "checked" );

        var showModal = true;

        if (expense < 2500){
            $('#ref-manager-ooops').modalBox("open");
            return false;
        }

        if (!consentDesk) {
            $('.ref-manager-ozon-ref .ref-manager-feedback #ref-manager-consent').addClass('ref-manager-invalid');
            showModal = false;
        }

        if (!confirmationDesk) {
            $('.ref-manager-ozon-ref .ref-manager-feedback #ref-manager-confirmation').addClass('ref-manager-invalid');
            showModal = false;
        }

        if (dateDesk.length <= 0) {
            $('.ref-manager-ozon-ref .ref-manager-feedback #ref-manager-date').addClass('ref-manager-invalid');
            showModal = false;
        }

        if (nameDesk.length <= 2 || nameDesk.split(" ").length < 2) {
            $('.ref-manager-ozon-ref .ref-manager-feedback #ref-manager-name').addClass('ref-manager-invalid');
            showModal = false;
        }
        if (cityDesk.length <= 2) {
            $('.ref-manager-ozon-ref .ref-manager-feedback #ref-manager-city').addClass('ref-manager-invalid');
            showModal = false;
        }
        if (phoneDesk.indexOf('_') != -1 || phoneDesk.length == 0) {
            $('.ref-manager-ozon-ref .ref-manager-feedback #ref-manager-phone').addClass('ref-manager-invalid');
        }
        if ((emailDesk.indexOf('@') == -1) || (emailDesk.indexOf('.') == -1) || (emailDesk.length < 5)) {
            $('.ref-manager-ozon-ref .ref-manager-feedback #ref-manager-email').addClass('ref-manager-invalid');
        }
        if (showModal) {
            alert('Отправить форму');
        } else {
            $('#ref-manager-question').modalBox("open");
        };
    };

    function checkMobForm(expense) {
        var nameMob = $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob #ref-manager-nameMob').val();
        var cityMob = $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob #ref-manager-cityMob').val();
        var phoneMob = $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob #ref-manager-phoneMob').val();
        var dateMob = $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob #ref-manager-dateMob').val();
        var emailMob = $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob #ref-manager-emailMob').val();
        var consentMob = $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob #ref-manager-consentMob').prop( "checked" );
        var confirmationMob = $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob #ref-manager-confirmationMob').prop( "checked" );

        var showModalMob = true;

        if (expense < 2500){
            $('#ref-manager-ooops').modalBox("open");
            return false;
        }

        if (!consentMob) {
            $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob #ref-manager-consentMob').addClass('ref-manager-invalid');
            showModalMob = false;
        }

        if (!confirmationMob) {
            $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob #ref-manager-confirmationMob').addClass('ref-manager-invalid');
            showModalMob = false;
        }

        if (dateMob.length <= 0) {
            $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob #ref-manager-dateMob').addClass('ref-manager-invalid');
            showModalMob = false;
        }

        if (nameMob.length <= 2 || nameMob.split(" ").length < 2) {
            $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob #ref-manager-nameMob').addClass('ref-manager-invalid');
            showModalMob = false;
        }
        if (cityMob.length <= 2) {
            $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob #ref-manager-cityMob').addClass('ref-manager-invalid');
            showModalMob = false;
        }
        if (phoneMob.indexOf('_') != -1 || phoneMob.length == 0) {
            $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob #ref-manager-phoneMob').addClass('ref-manager-invalid');
            showModalMob = false;
        }
        if ((emailMob.indexOf('@') == -1) || (emailMob.indexOf('.') == -1) || (emailMob.length < 5)) {
            $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob #ref-manager-emailMob').addClass('ref-manager-invalid');
            showModalMob = false;
        }
        if (showModalMob) {
            alert('Отправить форму');
        } else {
            $('#ref-manager-question').modalBox("open");
        }
    };

    $('.ref-manager-js-edit').on('click', function(){
        $('#ref-manager-question').modalBox("close");
    });

    $('.ref-manager-js-submit').on('click', function(){

        if($('.ref-manager-ozon-ref-mob').is(":hidden")){
            // dataLayer.push({
            //     'event': 'gaEventTrigger',
            //     'eventCategory': 'form ',
            //     'eventAction': 'click',
            //     'eventLabel': $("#ref-manager-name").val() + "/" + $("#ref-manager-date").val() + "/" + $("#ref-manager-city").val() + "/" + $("#ref-manager-phone").val() + "/" + $("#ref-manager-email").val() + "/" + $(".ref-manager-input-mask-vk[name='vk']").val() + "/" + $(".ref-manager-input-mask-ok[name='ok']").val() + "/" + $(".ref-manager-input-mask-fb[name='fb']").val() + "/" + $(".ref-manager-input-mask-in[name='in']").val();
            // });

        } else {
            // dataLayer.push({
            //     'event': 'gaEventTrigger',
            //     'eventCategory': 'form ',
            //     'eventAction': 'click',
            //     'eventLabel': $("#ref-manager-nameMob").val() + "/" + $("#ref-manager-dateMob").val() + "/" + $("#ref-manager-cityMob").val() + "/" + $("#ref-manager-phoneMob").val() + "/" + $("#ref-manager-emailMob").val() + "/" + $(".ref-manager-input-mask-vk[name='vk-mob']").val() + "/" + $(".ref-manager-input-mask-ok[name='ok-mob']").val() + "/" + $(".ref-manager-input-mask-fb[name='fb-mob']").val() + "/" + $(".ref-manager-input-mask-in[name='in-mob']").val();
            // });
        }


    });

    var faqSimpleBar;

    $('.ref-manager-js-show-faq').on('click', function(){
        $('#ref-manager-faq').modalBox("open");
        faqSimpleBar = new SimpleBar($('#ref-manager-faq .ref-manager-faq-list-wrap')[0]);

        // dataLayer.push({
        //     'event': 'gaEventTrigger',
        //     'eventCategory': 'faq',
        //     'eventAction': 'click',
        //     'eventLabel': $(this).text();
        // });
    });

    $('#ref-manager-faq .ref-manager-js-question').on('click', function(){
        $(this).toggleClass('ref-manager-active');
        var el = faqSimpleBar.getScrollElement();
        faqSimpleBar.recalculate();
        var positionTop = $(this).position().top;
        var modalHeight = faqSimpleBar.offsetEl.clientHeight;
        var positionActiveEl = modalHeight - positionTop;
        if($(this).hasClass("ref-manager-active") && positionActiveEl < 150){
            $(el).scrollTop($(el).scrollTop() + 180);
        }
    });

    $(function() {

        var question = $('#ref-manager-question'),
            height = question.height(),
            scrollHeight = question.get(0).scrollHeight;

        question.bind('mousewheel', function(e, d) {
            if((this.scrollTop === (scrollHeight - height) && d < 0) || (this.scrollTop === 0 && d > 0)) {
                e.preventDefault();
            }
        });

    });

    $('.modal-box').on('modalBox:beforeOpen', function() {
        $.scrollify.disable()
    });

    $('.modal-box').on('modalBox:afterClose', function(){
        $.scrollify.enable();
    });

    var storyMob = new Swiper('.ref-manager-story-mob .swiper-container', {
        resistanceRatio: 0,
        pagination: {
            el: '.ref-manager-story-mob .swiper-pagination',
        },
    });

    var academyMob = new Swiper('.ref-manager-academy-mob .swiper-container', {
        resistanceRatio: 0,
        pagination: {
            el: '.ref-manager-academy-mob .swiper-pagination',
        },
    });

    var feedbackMob = new Swiper('.ref-manager-feedback-mob .swiper-container', {
        resistanceRatio: 0,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        resizeReInit: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true,
    });

    var touchstartX = 0;
    var touchstartY = 0;
    var touchendX = 0;
    var touchendY = 0;

    feedbackMob.on('touchStart', function (e) {
        touchstartX = e.changedTouches[event.changedTouches.length-1].screenX;
        touchstartY = e.changedTouches[event.changedTouches.length-1].screenY;
    });


    feedbackMob.on('touchEnd', function (e) {
        touchendX = e.changedTouches[event.changedTouches.length-1].screenX;
        touchendY = e.changedTouches[event.changedTouches.length-1].screenY;
        handleGesure();
    });

    function handleGesure() {
        if (touchendY > touchstartY && feedbackMob.progress == 0) {
            $(".ref-manager-feedback input").blur();
            $.scrollify.move("#academyMob");
        }
    }

    setTimeout(function () {
        var elem = $('.ref-manager-ozon-ref .ref-manager-story'),
            pos = elem.offset(),
            elem_left = pos.left,
            elem_top = pos.top,
            elem_width = elem.width(),
            elem_height = elem.height();
        $('.ref-manager-ozon-ref section').mousemove(function (e) {
            x_center = (elem_width / 2) - (e.pageX - elem_left);
            y_center = (elem_height / 2) - (e.pageY - elem_top);
            $(this).find('.ref-manager-mouse-parallax').each(
                function () {
                    var speed = $(this).attr('data-speed'),
                        num = $(this).attr('data-num'),
                        xPos = Math.round(num * x_center / 80 * speed),
                        yPos = Math.round(num * y_center / 80 * speed);
                    $(this).css('transform', 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0px)');
                });
        });
    }, 2000);

    $('.ref-manager-ozon-ref-mob .ref-manager-calculator-mob input').on('blur', function (e) {
        setTimeout( function() {
            $.scrollify.enable();
            $.scrollify.move($.scrollify.currentIndex());
        }, 50);
    });

    $('.ref-manager-ozon-ref-mob .ref-manager-calculator-mob input').on('focus', function (e) {
        $.scrollify.disable();
    });

    $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob input:not([type=\'checkbox\'])').on('blur', function (e) {
        $.scrollify.setOptions({setHeights: false});
        $.scrollify.enable();
        $.scrollify.move($.scrollify.currentIndex());
        setTimeout( function()  {
            feedbackMob.init();
        }, 50)
    });

    $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob input').on('focus', function (e) {
        $.scrollify.disable();
    });

    var nameDesk = $('.ref-manager-ozon-ref .ref-manager-feedback #ref-manager-name').val();
    var cityDesk = $('.ref-manager-ozon-ref .ref-manager-feedback #ref-manager-city').val();
    var phoneDesk = $('.ref-manager-ozon-ref .ref-manager-feedback #ref-manager-phone').val();
    var emailDesk = $('.ref-manager-ozon-ref .ref-manager-feedback #ref-manager-email').val();
    var nameMob = $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob #ref-manager-nameMob').val();
    var cityMob = $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob #ref-manager-cityMob').val();
    var phoneMob = $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob #ref-manager-phoneMob').val();
    var emailMob = $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob #ref-manager-emailMob').val();
    btnDeskActive(nameDesk, cityDesk, phoneDesk, emailDesk);
    btnMobActive(nameMob, cityMob, phoneMob, emailMob);

    $(".ref-manager-ozon-ref .ref-manager-feedback input").on('keyup', function(){
        var nameDesk = $('.ref-manager-ozon-ref .ref-manager-feedback #ref-manager-name').val();
        var cityDesk = $('.ref-manager-ozon-ref .ref-manager-feedback #ref-manager-city').val();
        var phoneDesk = $('.ref-manager-ozon-ref .ref-manager-feedback #ref-manager-phone').val();
        var emailDesk = $('.ref-manager-ozon-ref .ref-manager-feedback #ref-manager-email').val();

        btnDeskActive(nameDesk, cityDesk, phoneDesk, emailDesk);
    });

    $(".ref-manager-ozon-ref-mob .ref-manager-feedback-mob input").on('keyup input', function(){
        var nameMob = $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob #ref-manager-nameMob').val();
        var cityMob = $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob #ref-manager-cityMob').val();
        var phoneMob = $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob #ref-manager-phoneMob').val();
        var emailMob = $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob #ref-manager-emailMob').val();

        btnMobActive(nameMob, cityMob, phoneMob, emailMob);
    });

    function btnDeskActive(nameDesk, cityDesk, phoneDesk, emailDesk) {
        if (nameDesk.length > 0 && cityDesk.length > 0 && phoneDesk.indexOf('_') == -1 && phoneDesk.length > 0 && emailDesk.length > 0) {
            $('.ref-manager-ozon-ref .ref-manager-feedback .ref-manager-feedback-form.ref-manager-invalid').removeClass('ref-manager-invalid');
        } else {

        }
    }

    function btnMobActive(nameMob, cityMob, phoneMob, emailMob) {

        if (nameMob.length > 0 && cityMob.length > 0 && phoneMob.indexOf('_') == -1 && phoneMob.length > 0 && emailMob.length > 0) {
            $('.ref-manager-ozon-ref-mob .ref-manager-feedback-mob .ref-manager-feedback-form.ref-manager-invalid').removeClass('ref-manager-invalid');
        } else {

        }
    }

    $(".ref-manager-feedback-mob .ref-manager-feedback-form input:not([type='checkbox'])").change(function () {
        // dataLayer.push({
        //     'event': 'gaEventTrigger',
        //     'eventCategory': 'input/' + $(this).data("gtm"),
        //     'eventAction': 'click',
        //     'eventLabel': $(this).val();
        // });
    });

    $(".ref-manager-feedback-mob .ref-manager-feedback-form input[type='checkbox']").change(function () {
        // dataLayer.push({
        //     'event': 'gaEventTrigger',
        //     'eventCategory': 'checkbox'),
        //     'eventAction': 'click',
        //     'eventLabel': $(this).data("gtm");
        // });
    });

    $(".ref-manager-feedback .ref-manager-feedback-form input:not([type='checkbox'])").change(function () {
        // dataLayer.push({
        //     'event': 'gaEventTrigger',
        //     'eventCategory': 'input/' + $(this).data("gtm"),
        //     'eventAction': 'click',
        //     'eventLabel': $(this).val();
        // });
    });

    $(".ref-manager-feedback .ref-manager-feedback-form input[type='checkbox']").change(function () {
        // dataLayer.push({
        //     'event': 'gaEventTrigger',
        //     'eventCategory': 'checkbox'),
        //     'eventAction': 'click',
        //     'eventLabel': $(this).data("gtm");
        // });
    });

    $(".ref-manager-bottom-link, .ref-manager-checkbox-area a, .ref-manager-story .ref-manager-info-text a, .ref-manager-menu .ref-manager-link, .ref-manager-btn-go-feedback, .ref-manager-scroll-to-feedback, .ref-manager-scroll-to-feedback-mob, .ref-manager-menu-mob .ref-manager-link").click(function () {
        // dataLayer.push({
        //     'event': 'gaEventTrigger',
        //     'eventCategory': 'link',
        //     'eventAction': 'click',
        //     'eventLabel': $(this).text();
        // });
    });
});

$(document).ready(function () {

    $(".ref-user-form .ref-user-activate").click(function (e) {
        e.preventDefault();

        // $(this).addClass("ref-user-error").text("Ошибка");
        $(this).addClass("ref-user-activated").text("Активирован");

        // $(".ref-user-log-in").addClass("ref-user-active").siblings(".ref-user-hint").removeClass("ref-user-active");
        // $(".ref-user-mobile-app").addClass("ref-user-active").siblings(".ref-user-hint").removeClass("ref-user-active");
        // $(".ref-user-code-not-registered").addClass("ref-user-active").siblings(".ref-user-hint").removeClass("ref-user-active");
        $(".ref-user-current-promotions").addClass("ref-user-active").siblings(".ref-user-hint").removeClass("ref-user-active");


        //dataLayer.push({
        //     'event': 'gaEventTrigger',
        //     'eventCategory': 'form',
        //     'eventAction': 'click',
        //     'eventLabel': $(".ref-user-input").val()
        // });
    });

    $(document).mouseup(function (e){
        var hint = $(".ref-user-hint");
        if (!hint.is(e.target)
            && hint.has(e.target).length === 0) {
            $(hint).removeClass("ref-user-active");
        }
    });

    $(".ref-user-apple").click(function () {
        // dataLayer.push({
        //     'event': 'gaEventTrigger',
        //     'eventCategory': 'link',
        //     'eventAction': 'click',
        //     'eventLabel': 'AppStore'
        // });
    });

    $(".ref-user-android").click(function () {
        // dataLayer.push({
        //     'event': 'gaEventTrigger',
        //     'eventCategory': 'link',
        //     'eventAction': 'click',
        //     'eventLabel': 'GooglePlay'
        // });
    });

    $(".ref-user-referral-program .ref-user-btn").click(function () {
        // dataLayer.push({
        //     'event': 'gaEventTrigger',
        //     'eventCategory': 'link',
        //     'eventAction': 'click',
        //     'eventLabel': $(this).text()
        // });
    });

    $(".ref-user-start-earning").click(function () {
        // dataLayer.push({
        //     'event': 'gaEventTrigger',
        //     'eventCategory': 'link',
        //     'eventAction': 'click',
        //     'eventLabel': $(this).text()
        // });
    });
});

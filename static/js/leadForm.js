(function (win, $) {
    $(".lead-message span").click(function () {
        // $(".lead-form").show();
        $(".lead-form").css({
            display: 'inline-block'
        });
    });

    $(".button-collapse").click(function () {
        $(".lead-form").hide();
    });
})(window, Zepto);
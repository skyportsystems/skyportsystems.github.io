(function (win, $) {
    // Shows sales lead form
    $(".lead-message span").click(function () {
        $(".lead-form").css({
            display: 'inline-block'
        });
    });

    // Collapse sales lead form
    $(".button-collapse").click(function () {
        $(".lead-form").hide();
    });

    // Captures the event of form submission
    // and post an ajax request to sales force
    $(".lead-form form.pure-form").submit(function () {
        // $.ajax({
        //     type: "POST",
        //     dataType: "jsonp",
        //     // jsonpCallback: jsonpResp,
        //     url: "https://www.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
        //     data: $(this).serialize(),
        //     success: function (data) {
        //         console.log('success', data);
        //     },
        //     error: function (xhr, type) {
        //         console.log('ERROR');
        //     }
        // });

        return false;
    });
})(window, Zepto);
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
        // Further documentation here: https://developer.salesforce.com/page/Ajax_Proxy
        // https://naX.salesforce.com/soap/ajax/32.0/connection.js
        sforce.connection.remoteFunction({
            url : "https://www.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
            requestData: $(this).serialize(),
            method: "POST",
            onSuccess : function(response) {
                console.lg('success');
            },
            onFailure : function(response) {
                console.log('error');
            }
        });

        return false;
    });
})(window, Zepto);
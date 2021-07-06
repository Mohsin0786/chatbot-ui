$(document).ready(function () {
    $(".chatbot-icon").click(function () {
        $(".chatbot-container").fadeIn(1000, function () {
            $(".header-part").fadeIn(1000, function () {
                $(".header-content").fadeIn(1000)
                $(".header-content").css("display", "flex");
                $(".bot-icon-part").fadeIn(1000, function () {
                    $(".question-section").fadeIn(1000, function () {
                        $('.question-box-1').fadeTo(2000, 1, function () {
                            $('.question-box-2').fadeTo(2000, 1, function () {
                                $('.question-box-3').fadeTo(2000, 1, function () {
                                    $('.question-box-4').fadeTo(2000, 1, function () {
                                        $('.button').fadeTo(2000, 1)
                                    })
                                })
                            })
                        });

                    })
                    $(".question-content").css("display", "flex");
                    $(".question-section").css("display", "flex");
                })
                $(".bot-icon-part").css("display", "flex");
            });
        });
    });
});

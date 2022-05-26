$(document).ready(function() {
    $(".offers__link-see-more").click(function() {
        $(".content").html($(this).prev(".offers__item-text-wrapper").html());
        $(".offers-wrapper-cont").addClass("activated");
        $("body").css("overflow","hidden");
    })
    $(".offers").on('click', ".fas", function() {
        $(".offers-wrapper-cont").removeClass("activated")
        $("body").css("overflow","auto");
    })

    let filter = $(".offers__filter-button[data-filter]");

    filter.click(function (){
        let cat = $(this).attr('data-filter');
        $(this).addClass("active").siblings().removeClass("active")
        $(".offers__cards-block").fadeToggle(300, function() {
            if (cat == 'all') {
                $(".offers__item").removeClass('hide');
            } else {
                $(`.offers__item[data-cat="${cat}"]`).removeClass("hide");
                $(`.offers__item[data-cat!="${cat}"]`).addClass("hide");
            }
        }).fadeToggle(300);
    });
});

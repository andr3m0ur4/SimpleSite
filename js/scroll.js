$(() => {

    $(window).scroll(() => {
        let windowOffY = $(window).scrollTop()
        let windowHeight = $(window).height()
        $('section').each(function() {
            let elementOffY = $(this).offset().top

            if (elementOffY + 200 < (windowOffY + windowHeight) && elementOffY + 200 + $(this).height() > windowOffY) {
                $('nav ul li a').css('border-bottom', '0')
                let target = $(this).attr('id')
                $('a[href="#' + target + '"]').css('border-bottom', '2px solid #fff')
                return
            }
        })
    })

})
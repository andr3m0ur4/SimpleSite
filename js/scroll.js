$(() => {

    // Animar menu através do scrollTop
    $(window).scroll(() => {
        let windowOffY = $(window).scrollTop()
        let windowHeight = $(window).height()
        $('section').each((index, element) => {
            let elementOffY = $(element).offset().top

            if (elementOffY + 300 < (windowOffY + windowHeight) && elementOffY + 300 + $(element).height() > windowOffY) {
                $('nav ul li a').css('border-bottom', '0')
                let target = $(element).attr('id')
                $('a[href="#' + target + '"]').css('border-bottom', '2px solid #fff')
                return
            }
        })
    })

    // Scroll dinâmico nos menus
    $('nav a').click(e => {
        let href = $(e.target).attr('href')
        let offSetTop = $(href).offset().top

        $('html, body').animate({
            'scrollTop': offSetTop
        })
    })

})
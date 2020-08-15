let delay = 3000
let currentIndex = 0
let amount

$(() => {

    iniciarSlider()
    autoPlay()

    $(window).resize(() => {
        $('.scroll-equipe').stop().animate({'scrollLeft': 0})
    })

})

function iniciarSlider() {
    amount = $('.sobre-autor').length
    let sizeContainer = 100 * amount
    let sizeBoxSingle = 100 / amount
    $('.sobre-autor').css('width', sizeBoxSingle + '%')
    $('.scroll-wrapper').css('width', sizeContainer + '%')

    for (let i = 0; i < amount; i++) {
        if (i == 0) {
            $('.slider-bullets').append('<span class="ativo"></span>')
        } else {
            $('.slider-bullets').append('<span></span>')
        }
    }
}

function autoPlay() {
    setInterval(() => {
        currentIndex++

        if (currentIndex == amount) {
            currentIndex = 0
        }
        goToSlider(currentIndex)
    }, delay)
}

function goToSlider(currentIndex) {
    let offSetX = $('.sobre-autor').eq(currentIndex).offset().left - $('.scroll-wrapper').offset().left

    $('.slider-bullets span').removeClass('ativo')
    $('.slider-bullets span').eq(currentIndex).addClass('ativo')
    $('.scroll-equipe').animate({'scrollLeft': offSetX})
}
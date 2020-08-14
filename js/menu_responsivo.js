$(() => {

    $('#menu').click(e => {
        $(e.target).find('ul').slideToggle()
    })

})
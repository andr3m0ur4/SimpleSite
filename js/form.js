$(() => {

    $('form').submit(e => {
        $(e.target).ajaxSubmit({
            beforeSubmit: () => {
                $(e.target).find('button').attr('disabled', 'true')
                $(e.target).find('button').animate({ 'opacity': '0.4' })
                $(e.target).find('button').html('Enviando')
            },
            success: () => {
                // Aqui você pode inserir uma idv, por exemplo.
                // Qualquer mensagem de sucesso, após o formulário ter sido enviado.
                alert('Formulário foi enviado com sucesso!')
                $(e.target).find('button').removeAttr('disabled')
                $(e.target).find('button').animate({ 'opacity': '1' })
                $(e.target).find('button').html('Enviar')
                $(e.target)[0].reset()
            }
        })

        e.preventDefault()
    })

})
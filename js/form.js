$(() => {

    $('form').ajaxForm({
        success: () => {
            alert('Formulário enviado com sucesso!')
        }
    })

})
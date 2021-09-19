let cep = document.getElementById("cep")

cep.addEventListener('input', function buscaCep(event) {
    event.preventDefault();

    $.ajax({
        url: `http://viacep.com.br/ws/${cep.value}/json/`,
        success: function(req) {
            console.log(req)
            if (req.erro) {
                $('#erro').val(req.erro)
                $('#col').html(`<strong>Insert a valid CEP</strong>`)
            } else {
                $('#complemento').val(req.complemento)
                $('#logradouro').val(req.logradouro)
                $('#bairro').val(req.bairro)
                $('#uf').val(req.uf)
                $('#municipio').val(req.localidade)
            }
        }

    })
})
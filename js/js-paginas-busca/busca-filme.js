let pesquisar = document.querySelector('#pesquisar-filme'); //botao
let movie = document.getElementById('busca-filme') //input

pesquisar.addEventListener('click', function filme(evento) {

    evento.preventDefault();

    $.ajax({
        url: `http://www.omdbapi.com/?i=tt3896198&apikey=1c22c5f3&t=${movie.value}`,
        success: function(req) {
            console.log(req)
            if (req.Error) {
                $('#erro-filme').html(`${req.Error}`);
                $('#container-filme').css('display', `none`)
            } else {
                $('#container-filme').css('display', `block`)
                $('#titulo-filme').html(req.Title)
                $('#duracao-filme').html(`<strong>Duração:</strong> ${req.Runtime}`)
                $('#ano-lancamento').html(`Lançamento: ${req.Released}`)
                $('#genero-filme').html(`Gênero: ${req.Genre}`)
                $('#diretores').html(`Direção: ${req.Director}`)
                $('#elenco').html(`Elenco: ${req.Actors}`)
                $('#rating-filme').html(`Ratings: ${req.Ratings[0].Value}`)
                $('#classificacao-filme').html(` | ${req.imdbVotes}`)
                $('#textos-filme').html(`Sinopse ${req.Plot}`)
                $('#imagem-filme').html(`<img src="${req.Poster}"/>`)
            }
        },
        error: function(req) {
            $('#erro-filme').html(`Error: ${req.Error}`)
        }
    })
})
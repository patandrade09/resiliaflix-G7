let pesquisar = document.querySelector('#pesquisar-filme');
let movie = document.getElementById('busca-filme')

pesquisar.addEventListener('click', function filme(evento) {

    evento.preventDefault();

    $.ajax({
        url: `https://www.omdbapi.com/?i=tt3896198&apikey=1c22c5f3&t=${movie.value}`,
        success: function(req) {
            console.log(req)
            if (req.Error) {
                $('#erro-filme').html(`${req.Error}`)
                $('#container-filme').css('display', `none`)
            } else if (movie.value == '') {
                $('#invalido-filme').html(`| Insert a valid movie |`);
                $('#container-filme').css('display', `none`)
            } else {
                $('#erro-filme').css('display', `none`)
                $('#invalido-filme').css('display', `none`)
                $('#container-filme').css('display', `block`)
                $('#titulo-filme').html(req.Title)
                $('#duracao-filme').html(`<strong>Runtime: </strong> ${req.Runtime}`)
                $('#ano-lancamento').html(`<strong>Released: </strong> ${req.Released}`)
                $('#genero-filme').html(`<strong>Genre: </strong> ${req.Genre}`)
                $('#diretores').html(`<strong>Director: </strong> ${req.Director}`)
                $('#elenco').html(`<strong>Actors: </strong> ${req.Actors}`)
                $('#rating-filme').html(`<strong>Ratings : </strong>${req.Ratings[0].Value} <i class="fas fa-star"></i>`)
                $('#classificacao-filme').html(`<strong>Votes :</strong> ${req.imdbVotes} <i class="fas fa-video"></i>`)
                $('#textos-filme').html(`<strong>Plot: </strong> ${req.Plot}`)
                $('#imagem-filme').html(`<img src="${req.Poster}"/>`)
            }
        },
        error: function(req) {
            $('#erro-filme').html(`Error: ${req.Error}`)
        }
    })
})
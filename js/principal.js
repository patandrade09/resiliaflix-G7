const busca = document.querySelector('#busca-rapida');
const buscar = document.getElementById('botao-busca-rapida');

function mostraModal(req) {
    $('#titulo').html(req.Title)
    $('#duracao-filme').html(`<strong>Duração:</strong> ${req.Runtime}`)
    $('#ano-lancamento').html(`Lançamento: ${req.Released}`)
    $('#genero-filme').html(`Gênero: ${req.Genre}`)
    $('#diretores').html(`Direção: ${req.Director}`)
    $('#elenco').html(`Elenco: ${req.Actors}`)
    $('#rating-filme').html(`Ratings: ${req.Ratings[0].Value}`)
    $('#classificacao-filme').html(` | ${req.imdbVotes}`)
    $('#textos-filme').html(`Sinopse ${req.Plot}`)
    $('#poster').html(`<img src="${req.Poster}"/>`)
    $('#error-busca').css('display', `none`);
    $('#modal-filme').css('display', `block`);
}

function removeModal() {
    $('#titulo').html('')
    $('#duracao-filme').html('')
    $('#ano-lancamento').html('')
    $('#genero-filme').html('')
    $('#diretores').html('')
    $('#elenco').html('')
    $('#rating-filme').html('')
    $('#classificacao-filme').html('')
    $('#textos-filme').html('')
    $('#poster').html('')
    $('#error-busca').css('');
    $('#modal-filme').css('');
}

buscar.addEventListener('click', function pesquisaFilme (evento) {

      
    evento.preventDefault();

    $.ajax({
        url: `http://www.omdbapi.com/?i=tt3896198&apikey=1c22c5f3&t=${busca.value}`,
        success: function(req) {
            console.log(req)
            if (req.Error) {
                $('#erro-filme').html(`${req.Error}`);
                $('#exampleModal').css('display', `none`)
            } else if (busca.value == '') {
                $('#exampleModal').css('display', `none`);
            } else {
               
                mostraModal(req);
                $('#exampleModal').on('hidden.bs.modal', () => {removeModal(); console.log('fechou modal')});  
            }
        },
        error: function(req) {
            $('#erro-filme').html(`Error: ${req.Error}`)
        }
    })
})

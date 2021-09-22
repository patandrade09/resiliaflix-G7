const busca = document.querySelector('#busca-rapida');
const buscar = document.getElementById('botao-busca-rapida');
const form = document.getElementById('formulario');

function mudaValue(valor){
    busca.value = valor
    buscar.click()
}

function mostraModal(req) {
    $('#titulo').html(req.Title)
    $('#duracao-filme').html(`<strong>Duração:</strong> ${req.Runtime}`);
    $('#ano-lancamento').html(`<strong>Lançamento:</strong> ${req.Released}`);
    $('#genero-filme').html(`<strong>Gênero</strong> ${req.Genre}`);
    $('#diretores').html(`<strong>Direção:</strong> ${req.Director}`);
    $('#cast').html(`<strong>Elenco:</strong> ${req.Actors}`);
    $('#rating-filme').html(`<strong>Rating:</strong> ${req.Ratings[0].Value}`);
    $('#classificacao-filme').html(` | ${req.imdbVotes}`);
    $('#textos-filme').html(`<strong>Sinopse:</strong> ${req.Plot}`);
    $('#poster').html(`<img src="${req.Poster}"/>`);
    $('#error-busca').css('display', `none`);
    $('#modal-filme').css('display', `block`);
}


function removeModal() {
    $('#titulo').html('')
    $('#duracao-filme').html('')
    $('#ano-lancamento').html('')
    $('#genero-filme').html('')
    $('#diretores').html('')
    $('#cast').html('')
    $('#rating-filme').html('')
    $('#classificacao-filme').html('')
    $('#textos-filme').html('')
    $('#poster').html('')
    $('#error-busca').css('');
    $('#modal-filme').css('');
}

form.addEventListener('submit', function pesquisaFilme (evento) {

      
    evento.preventDefault();

    $.ajax({
        url: `https://www.omdbapi.com/?i=tt3896198&apikey=1c22c5f3&t=${busca.value}`,
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


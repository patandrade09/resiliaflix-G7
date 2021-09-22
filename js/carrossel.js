function pegaPoster(movie) {
    for (let i = 0; i < movie.length; i++) {
        $.ajax({
            url: `https://www.omdbapi.com/?i=tt3896198&apikey=1c22c5f3&t=${movie[i]}`,
            success: function (req) {
                $(`#${i + 1}`).append(
                    `<img src="${req.Poster}" alt="move"><h6>${req.Title}`
                )
                if (i + 1 == 12){
                    criaCarrossel()
                }
            },
        });
    }
}

const nomeFilmes = [
    "Phantom Menace",
    "of the clones",
    "Revenge of the Sith",
    "star wars",
    "The Empire Strikes Back",
    "Return of the Jedi",
    "The Force Awakens",
    "rogue one",
    "The Last Jedi",
    "A Star Wars Story",
    "clone wars",
    "mandalorian",
];

pegaPoster(nomeFilmes);

function criaCarrossel() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        mouseDrag:false,
        autoplay: true,
        margin:10,
        nav:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
}

// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

//////////////// Rick and Morty API ////////////////

$(document).on("ready", function () {
    axios({
        method: "get",
        url: 'https://rickandmortyapi.com/api/character',
      })
        .then((res) => {
            return res.data.results.slice(0, 5)
        })
        .then((mainFamily)=>{
            
            $('#random').on('click',()=>{
                $('.container').empty(); // remove all previous children so it cant be repeated
                $('body').css('background','#010101');

                mainFamily.forEach(ele => { 
                    $('.container').append(`<div class="item">
                    <h2>${ele.name}</h2><img src="${ele.image}" alt=""></div>`).css('color','#f1f1f1');
                });
            })
        })
        .catch((err) => {
          console.log(err);
        });
    });

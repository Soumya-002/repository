const API_KEY='api_key=ff2c79bd02686cfefb9cf9e6294c86df';
const BASE_URL='https://api.themoviedb.org/3';
const API_URL=BASE_URL+'/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL='https://image.tmdb.org/t/p/w500';
const searchURL=BASE_URL+'/search/movie?'+API_KEY;
const container=document.getElementById('container');
const form=document.getElementById('form');
const search=document.getElementById('search');

showMovies(API_URL);
function showMovies(url){
    fetch(url).then(res => res.json())
    .then(data =>{
        console.log(data.results)
        console.log(data)
        getmovies(data.results);
    })
    }
    
   function getmovies(data){
      container.innerHTML='';
       data.forEach(movie => {
    const {title,poster_path,overview,vote_average,genre_ids} =movie;
    const Element =document.createElement('div');
    Element.classList.add('card');
Element.innerHTML=`
<img src="${IMG_URL+poster_path}" alt="${title}">

<div class="movie-info">
   <h3 class="heading">${title}</h3>
   <span class="heading">***${vote_average}***</span>
</div>
<span class="genre">${genre_id(genre_ids[0])}</span>
<div class="overview">
   <h1 class="heading">Overview</h1>
${overview}
   <br> 
  

</div>`

container.appendChild(Element)
}
);
    }

    form.addEventListener('submit',(e) => {
e.preventDefault();

 const searchTerm=search.value;
 if(searchTerm && searchTerm!==''){
   showMovies(searchURL+'&query="'+searchTerm)
 }
else{
   showMovies(API_URL);
}
    } )
    function genre_id(value){

      if(value==28){
         return 'Action'
      }
      else if(value==12){
         return 'Adventure'
      }
      else if(value==14){
         return 'Fantasy'
      }
      else if(value==80){
         return 'Crime'
      }
      else if(value==16){
         return 'Animation'
      }
      else if(value==35){
         return 'Comedy'
      }
      else if(value==878){
         return 'Science Fiction'
      }
      else if(value==10752){
         return 'Drama'
      }
      else if(value==27){
         return 'Horror'
      }
      else{
         return 'History'
      }









    }
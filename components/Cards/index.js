// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//


  


//card.appendChild(cardHeadLine);
//card.appendChild(avatar);
//card.appendChild(cardImg);
//card.appendChild(createCard(articles))

//}


//const cards = document.querySelector('.cards-container');
//const promise =
//axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
//.then(articles => {

//for(let i = 0; i < articles.length; i++){

//return articles[i]+ "<br>";
 // }
 var text ="";
var article;
for (article in articles) {
  
  var articleContainer = document.querySelector('.cards-container');
  document.body.onload = 
  axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(articles => {
  

  function createElement() { 
      var card = document.createElement("div");
      card.classList.add('card');
      card.appendChild(articleContainer);
      document.body.appendChild(card.article);   
      
  });
  
})






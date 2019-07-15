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
const card_url = 'https://lambda-times-backend.herokuapp.com/articles';
axios.get(card_url).then(response =>{
  
 response.articles.forEach(article =>{
   console.log(articles);
   const articleContainer = document.querySelector('.cards-container');
 
 .catch(err =>{

 })
 function articleCard(){
   //card
    let newCard = document.createElement('div');
    newCard.textContent = "";
    newCard.classList.add('card');
    articleContainer.appendChild(newCard);
    //header
    let cardHeading = document.createElement('div');
    cardHeading.classList.add('headline');
    cardHeading.textContent=`${articles.headline};
    article.appendChild(cardHeading);

    //author
    let cardAuthor = document.createElement('div')
  
    img.src = author.data.authorPhoto;
    span.textContent = `${data.articles.authorName}`; 
   
  
   
   articleContainer.appendChild(cardHeading);
  body.appendChild(cardHeading)
 

   


 
  
  

   return newCard;
  } 
 }
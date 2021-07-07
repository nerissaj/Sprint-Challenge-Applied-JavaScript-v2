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

const articleContainer = document.querySelector('.cards-container');
const card_url = 'https://lambda-times-backend.herokuapp.com/articles';
axios.get(card_url).then(promise =>{
  
 promise.data.data.articles.forEach(article =>{
   const newCard = newCard(item)
   cardsContainer.appendChild(cardsContainer)
   console.log(cardsContainer)
 })
 })
 .catch(err =>{
  console.log('ERROR', error) 

 })
 function articleCard(object){
   //card
    let card = document.createElement('div')
    let cardHeading = document.createElement('div') 
    let cardAuthor = document.createElement('div')
    let imageContainer = document.createElement('div')
     let image = document.createElement('img')
    let authorName = document.createElement('span')

card.appendChild(cardHeading);
card.appendChild(cardAuthor);
cardAuthor.appendChild(imageContainer);
imageContainer.appendChild(image);
cardAuthor.appendChild(authorName);
card.classList.add('card')
cardHeading.classList.add('headline');
cardAuthor.classList.add('author')
imageContainer.classList.add('img-container')
  
   
    
    cardHeading.textContent=`${object.headline}`;

    img.src = `${object.authorPhoto}`;
    authorName.textContent = `${object.authorName}`; 

   return newCard;
  } 
 
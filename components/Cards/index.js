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



 
  const articleContainer = document.querySelector('.cards-container');
  const card_url = 'https://lambda-times-backend.herokuapp.com/articles';
axios.get(card_url).then(promise => {
console.log(promise);

promise.data.data.articles.forEach(articles =>{
  console.log(articles);
  const card = document.createElement('div');
  card.classList.add('card');
  card.textContent = articles;
  articleContainer.appendChild(card);
  const cardHeading = document.createElement('div');
   //cardHeading.classList.add('headline');
  const cardAuthor = document.createElement('div');
  var  cardImg = document.createElement('div');
  cardImg.src = promise.data.articles.authorPhoto;
  var cardSpan = document.createElement('span');
  cardSpan.textContent = `By ${authorName}`

  
  
  //card.textContent = 
 
  
 
  
   cardImg.classList.add('img-container');
  articleContainer.appendChild(card);
  //body.appendChild(card);
  //body.appendChild(cardHeading)

}) 
  }) 

  
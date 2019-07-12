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
// Create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector('.cards-container');
const info =
axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(articles => {

  
  console.log(articles);
  //articles.forEach((obj, index) => {
   // articles.appendChild(createCard(obj, index));
 // })
  async function createCard() {
    let cards = document.querySelector('.cards-container');
    for(let current of articles) {
      try {
        let cardStop = await axios.get(`${template_addr}${current}`);
        cards.appendChild(createCard(obj));
      } catch(e) { console.log(e); }
    }
  }
  


  
function createCard(obj) {
const  card = document.createElement('div');
const cardHeadLine = document.createElement('div');
const cardAuthor = document.createElement('div')
const cardImgContainer = document.createElement('div')
const cardImg = document.createElement('img');
const cardsName = document.createElement('span');
//append

card.appendChild(cards);
card.appendChild(cardHeadLine);
card.appendChild(cardImg);
card.appendChild(cardImg);
card.appendChild(para1);
card.appendChild(createCard(articles))
//ClassList
card.classList.add('card');
cardHeadLine.classList.add('headline');
cardAuthor.classList.add('author');
cardImgContainer.classList.add('img-container')
cardsName.setAttribute('span', `articles-${authorName}`);
cardImg.src = obj.authorPhoto;
cardHeadLine.textContent = Object.headline;
cardAuthor.textContent = articles.authorName;
card.textContent
}
})
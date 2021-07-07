// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
var body = document.querySelector('body');
const tabs = document.querySelector('.tabs');
let backend_url = 'https://lambda-times-backend.herokuapp.com/topics';
axios.get(backend_url).then(promise =>{
  //console.log(promise);
 promise.data.topics.forEach(topics =>{
   //console.log(topics);
   const element = document.createElement('div');
   element.textContent = topics;
   body.appendChild(element);
 })
})


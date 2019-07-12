// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const tabs = document.querySelector('.topics');
const template_addr =
axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(topics=>
    
    
    //tabinfo.forEach(topic => {
       // topic
       // .then(topics =>{
        //    const props = obj;
        //    const element = createTab(props);
        //    tabs.appendChild(element);
       // })
       // console.log(topics)
   //})

   async function Tab() {
    let tabs = document.querySelector('.topics');
    for(let current of topics) {
      try {
        let tabStop = await axios.get(`${template_addr}${current}`);
        tabs.appendChild(Tab(tab));
      } catch(e) { console.log(e); }
    }
  })
  

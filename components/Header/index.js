// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
const headerContainer = document.querySelector('.header-container');
document.body.onload = addElement;

function addElement (element) { 
    var headerTop = document.createElement("div");
    headerTop.classList.add('header');
    headerTop.appendChild(headerContainer);
    document.body.appendChild(headerTop);   
    

var headerDate = document.createElement("span");
headerDate.textContent = ("March 28,2019");
headerDate.classList.add('date');  
headerDate.appendChild(headerContainer);
document.body.appendChild(headerDate);   

console.log(headerDate);                     


var title = document.createElement('h1');
 var titleContent = document.createTextNode("Lambda Times");
 title.appendChild(titleContent);
 document.body.appendChild(title);

 var headerTemp = document.createElement('span');
headerTemp.classList.add('temp');

 headerTemp.textContent = ("98°");
 headerTemp.appendChild(headerContainer);
 document.body.appendChild(headerTemp)

return addElement;
    }

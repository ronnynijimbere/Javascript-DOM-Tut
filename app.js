//interacting with forms
const list = document.querySelector('#book-list ul');

//delete books
list.addEventListener('click', function(e){
    if(e.target.className=='delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = 'none';
    } else {
        list.style.display = 'initial';
    }
})

//filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })

})

//tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
    if(e.target.tagName == "LI"){
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if (panel == targetPanel){
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    }
});

//add book-list
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    //console.log(value);

    //create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    //append to DOM: order is very important
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});


/*Event Bubbling
const list = document.querySelector('#book-list ul');

//delete books
list.addEventListener('click', function(e){
    if(e.target.className=='delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});*/


/*DOM events and removing content
var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(e){

        const li = e.target.parentElement;

        li.parentNode.removeChild(li);
    });
});



//prevent default method
const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
    e.preventDefault();
    console.log('navigation to ', e.target.textContent, ' was prevented');
});*/


/*Traverse through Nodes
const bookList = document.querySelector('#book-list');

console.log('the parent node is:', bookList.parentNode); 
console.log('the parent element is:', bookList.parentElement.parentElement); 

//Traverse downwords to children
console.log(bookList.children);*/


/*Working with Nodes
const banner = document.querySelector('#page-banner');

console.log('page-banner node type is:', banner.nodeType);
console.log('page-banner node name is:', banner.nodeName);
console.log('page-banner has child nodes:', banner.hasChildNodes());//this method returns true or false

//A method that lets you clone a node
const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);*/




/*var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
  book.textContent += '(book title)'; //here we are appending
});

//update html

const bookList = document.querySelector('#book-list');
//console.log(bookList.innerHTML);
//bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p> This is how add HTML</p>';*/




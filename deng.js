
for (let i = 0; i < localStorage.length; i++) {
    const dnb = JSON.parse(localStorage.getItem(Object.keys(localStorage)[i]))
    // bookdb.push(dnb)
    books_db.push(dnb);
    console.log(Object.keys(localStorage)[i])
    console.log(books_db)
  
  }
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
 

function filterBooksByCategory(category) {
    let books = books_db.filter((book) => book.category === category);
    return books;
  }
  
  function loadBooks(category) {
    let toRemove = document.getElementById('toRemove');
    toRemove.remove();
    let books_category = filterBooksByCategory(category);
    // console.log("books_category: " + books_category);
  
    let books_container = document.createElement('div');
    books_container.className = 'books_container';
  
    for (let i = 0; i < books_category.length; i++) {
      let div = document.createElement("div");
      div.className = 'single_book';
      let img = document.createElement('img');
      let title = document.createElement('p');
      let author = document.createElement('p');
      let category = document.createElement('p');
      let year = document.createElement('p');
      let publisher = document.createElement('p');
      title.innerHTML = books_category[i].title;
      author.innerHTML = books_category[i].author;
      category.innerHTML = books_category[i].category;
      year.innerHTML = books_category[i].year;
      publisher.innerHTML = books_category[i].publisher;
      img.src = books_category[i].image;
      div.appendChild(img);
      div.appendChild(title);
      div.appendChild(author);
      div.appendChild(category);
      div.appendChild(publisher);
      div.appendChild(year);
      books_container.appendChild(div);
      document.getElementById("books").appendChild(books_container);
    }
  }
  
  
  
  // The render() function takes an array of JSON objects as its parameter. 
  // It then maps over the array to create an HTML list of books and displays 
  // the list in <div id="app"></div>
  
  let render = function (data) {
    let toRemove = document.getElementById('toRemove');
    toRemove.remove();
    let app = document.getElementById('books');
  
    let booksHTMLString = '<ul>' +
  
      data.map(function (book) {
        return '<li>' +
          `<img src=${book.image} height=200 width=150 >` + '<br/>' +
          '<strong>Title: </strong>' + book.title + '<br/>' +
          '<strong>Year: </strong>' + book.year + '<br/>' +
          '<strong>Author: </strong>' + book.author + '<br/>' +
          '<strong>Category: </strong>' + book.category + '<br/>' +
          '<strong>Publisher: </strong>' + book.publisher + '<br/>' +
  
  
          '</li>';
      }).join('');
    + '</ul>';
  
    app.innerHTML = booksHTMLString;
  }
  
  
  let handleSearch = function (event) {
    event.preventDefault();
    console.log(event)
    // Get the search terms from the input field
    let searchTerm = document.getElementById("search").value;
    // Tokenize the search terms and remove empty spaces
    let tokens = searchTerm
      .toLowerCase()
      .split(' ')
      .filter(function (token) {
        return token.trim() !== '';
      });
    if (tokens.length) {
      //  Create a regular expression of all the search terms
      let searchTermRegex = new RegExp(tokens.join('|'), 'gim');
      let filteredList = books_db.filter(function (book) {
        // Create a string of all object values
        let bookString = [];
        for (let key in book) {
          if (book.hasOwnProperty(key) && book[key] !== '') {
            bookString += book[key].toString().toLowerCase().trim() + ' ';
          }
        }
        // Return book objects where a match with the search regular expression if found
        return bookString.match(searchTermRegex);
      });
      console.log(filteredList);
      // Render the search results
      render(filteredList);
    }
  };
  
  document.getElementById("search-btn").addEventListener('click', handleSearch);
  
 
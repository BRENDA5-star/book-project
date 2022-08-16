




//stores items in the localStorage
function book() { 
 
  var key = document.getElementById('key').value;
  let title1 = document.getElementById('title').value;
  let author1 = document.getElementById('author').value;
  let year1 = document.getElementById('year').value;
  let category1 = document.getElementById('category').value;
  let publisher1 = null;
  let image1 = document.getElementById('image').value;





  const book1 = {
    category: category1,
    author: author1,
    title: title1,
    publisher: publisher1,
    year: year1,
    image: image1,

  }

 
  console.log(book1)
  books_db.push(book1)
  console.log(books_db.length)
  window.localStorage.setItem(key, JSON.stringify(book1));

}


//ensures the page is loaded before functions are executed.
window.onload = function () { 
  document.getElementById("bookForm").addEventListener("submit",function(event){
    event.preventDefault()
    book()
  })

  // document.getElementById("bookForm").onsubmit = book

}

function cFunction() {
  alert("The book is added to the DNB library");
}
for (let i = 0; i < localStorage.length; i++) {
  const dnb = JSON.parse(localStorage.getItem(Object.keys(localStorage)[i]))
  // bookdb.push(dnb)
  books_db.push(dnb);
  console.log(Object.keys(localStorage)[i])
  console.log(books_db)

}




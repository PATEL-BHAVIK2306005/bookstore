async function onSearch () 
{
    var e = document.getElementById("priceDropdown");
    
    var price = Number(e.value);
    if (price === 0) {price = 10000000}

    var searchValue = document.getElementById('searchNav').value

    var e = document.getElementById("firstLetterDropdown");
    var value = e.value;
    var firstLetter = e.options[e.selectedIndex].text;

    var e = document.getElementById("genresDropdown");
    var value = e.value;
    var genre = e.options[e.selectedIndex].text;

    var e = document.getElementById("authorsDropdown");
    var value = e.value;
    var author = e.options[e.selectedIndex].text;


    var container = document.getElementById("container");
    container.innerHTML = ""

    const response = await fetch("http://localhost:3000/books/search", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : "*",
          },
        body: JSON.stringify({
            firstLetterBook: firstLetter,
            price: price,
            author:author,
            genre:genre,
            name:searchValue,
        })
    }).then((value )=> {
        value.json().then((output)=>{
            output.forEach(item => {
                var element = document.createElement("a")
                element.href = "/book/" + item._id
                element.innerHTML = `
                <h2 id="bookTitle" class="bookTitle">${item._id}</h2>
                <img class="bookImageNew" src="${item.cover}"></img>
                <h1 class="innerBook">${item.price}</h1>
                <a class="innerBook" href="/author/${item.author}">${item.author}</a>
                `
                container.appendChild(element)
            })
        })
        
    })




    /*if (searchType === "Books"){
        window.location.replace("/search/books/" + searchValue)
    }
    else if (searchType === "Genre")
    {
        window.location.replace("/search/genre/" + searchValue)
    }
    else if (searchType === "Author")
    {
        window.location.replace("/search/author/" + searchValue)
    }*/
}

function clearSearch(){
    location.reload();
}

function enterEvent () {
var input = document.getElementById("searchNav");
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById("clearSearch").style.visibility = "visible";
      onSearch()
    }
});
}

async function getGenres ()
{
    var genresDropdown = document.getElementById("genresDropdown");
    const response = await fetch("http://localhost:3000/category/listNames", {
        method: 'GET',        
    }).then((value )=> {
        value.json().then((output)=>{
            output.forEach(item => {
                const element = document.createElement('option')
                element.innerHTML=item._id   
                genresDropdown.appendChild(element)
            });
             
        })
        
    })
}

async function getAuthors ()
{
   var authorsDropdown = document.getElementById("authorsDropdown");
   const response = await fetch("http://localhost:3000/authors/listNames", {
        method: 'GET',        
    }).then((value )=> {
        value.json().then((output)=>{
            output.forEach(item => {
                const element = document.createElement('option')
                element.innerHTML=item._id   
                authorsDropdown.appendChild(element)
            });
        })
        
    })
}

async function logout (username, password)
{
   const usernameA = $("#username").val()
   const passwordA =  $("#password").val()
   const response = await fetch("http://localhost:3000/logout", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : "*",
          },
    }).then((value )=> {
        value.json().then((output)=>{
            if (output.status === "Failed"){
            }
            else{
                window.location.replace("/login")
            }    
        })
        
    })
}




enterEvent()
getGenres()
getAuthors()
function onSearch () 
{
    var e = document.getElementById("priceDropdown");
    var value = e.value;
    var searchType = e.options[e.selectedIndex].text;

    var searchValue = document.getElementById('searchNav').value

    var container = document.getElementById("container");
    container.innerHTML = ""
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

   const response = await fetch("http://localhost:3000/books/search", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : "*",
          },
        body: JSON.stringify({
            name: oldPassword,
            newPassword: newPassword,
        })
    }).then((value )=> {
        value.json().then((output)=>{
            if (output.status === "Failed"){
                document.getElementById("wrongPassword").style.visibility = "visible";
            }
            else{
                document.getElementById("changedPassword").style.visibility = "visible";
            }    
        })
        
    })
}

async function getAuthors ()
{

   const response = await fetch("http://localhost:3000/books/search", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : "*",
          },
        body: JSON.stringify({
            name: oldPassword,
            newPassword: newPassword,
        })
    }).then((value )=> {
        value.json().then((output)=>{
            if (output.status === "Failed"){
                document.getElementById("wrongPassword").style.visibility = "visible";
            }
            else{
                document.getElementById("changedPassword").style.visibility = "visible";
            }    
        })
        
    })
}

enterEvent()

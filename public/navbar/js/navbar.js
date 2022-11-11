function onSearch () 
{
    var e = document.getElementById("searchOptions");
    var value = e.value;
    var searchType = e.options[e.selectedIndex].text;

    var searchValue = document.getElementById('searchNav').value

    if (searchType === "Books"){
        window.location.replace("/search/books" + searchValue)
    }
    else if (searchType === "Genre")
    {
        window.location.replace("/search/genre" + searchValue)
    }
    else if (searchType === "Author")
    {
        window.location.replace("/search/author" + searchValue)
    }
}

function test () {
var input = document.getElementById("searchNav");
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      console.log("A");
    }
});
}

test()

async function deleteBook(){
    var deleteBookId = document.getElementById('deleteBookInput').value
    const response = await fetch("http://localhost:3000/books/delete", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : "*",
          },
        body: JSON.stringify({
            name:deleteBookId
        })
    }).then((value )=> {
        value.json().then((output)=>{
            if (output.status === "Failed"){
                alert("Can't delete book, book doesn't exist")
            }
            else{
                alert("Deleted")
            }    
        })
    })
}

async function deleteAuthor(){
    var deleteAuthorId = document.getElementById('deleteAuthorInput').value
    const response = await fetch("http://localhost:3000/author/delete", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : "*",
          },
        body: JSON.stringify({
            name:deleteAuthorId
        })
    }).then((value )=> {
        value.json().then((output)=>{
            if (output.status === "Failed"){
                alert("Can't delete author, book doesn't exist")
            }
            else{
                alert("Deleted")
            }    
        })
    })
}

async function createAuthor(){
    var createAuthorId = document.getElementById('createAuthorInput').value
    var createAuthorBio = document.getElementById('createAuthorBioInput').value
    var createAuthorAge = document.getElementById('createAuthorAgeInput').value
    var createAuthorPicture = document.getElementById('createAuthorPictureInput').value
    const response = await fetch("http://localhost:3000/author/create", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : "*",
          },
        body: JSON.stringify({
            name:createAuthorId,
            bio:createAuthorBio,
            age: createAuthorAge,
            picture:createAuthorPicture
        })
    }).then((value )=> {
        value.json().then((output)=>{
            if (output.status === "Failed"){
                alert("Can't create author, book doesn't exist")
            }
            else{
                alert("Created")
            }    
        })
    })
}

async function createBook(){
    var createBookId = document.getElementById('createBookId').value
    var createBookLength = Number(document.getElementById('createBookLength').value)
    var createBookCover = document.getElementById('createBookCover').value
    var createBookSummary = document.getElementById('createBookSummary').value
    var createBookReleaseDate = new Date(document.getElementById('createBookReleaseDate').value)
    var createBookPrice = Number(document.getElementById('createBookPrice').value)
    var createBookQuantity = Number(document.getElementById('createBookQuantity').value)
    var createBookAuthor = document.getElementById('createBookAuthor').value
    var createBookCategory = document.getElementById('createBookCategory').value

    const response = await fetch("http://localhost:3000/book/create", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : "*",
          },
        body: JSON.stringify({
            name:createBookId,
            summary:createBookSummary,
            cover:createBookCover,
            length:createBookLength,
            releaseDate:createBookReleaseDate,
            price:createBookPrice,
            quantity:createBookQuantity,
            author:createBookAuthor,
            category:createBookCategory,
            
        })
    }).then((value )=> {
        value.json().then((output)=>{
            if (output.status === "Failed"){
                alert("Can't create book, book doesn't exist")
            }
            else{
                alert("Created")
            }    
        })
    })
}


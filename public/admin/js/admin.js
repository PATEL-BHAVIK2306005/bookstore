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
                alert("Can't delete author, author doesn't exist")
            }
            else{
                alert("Deleted")
            }    
        })
    })
}

async function deleteCategory(){
    var deleteCategoryId = document.getElementById('deleteCategoryId').value
    const response = await fetch("http://localhost:3000/category/delete", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : "*",
          },
        body: JSON.stringify({
            name:deleteCategoryId
        })
    }).then((value )=> {
        value.json().then((output)=>{
            if (output.status === "Failed"){
                alert("Can't delete category, category doesn't exist")
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
                alert("Can't create author")
            }
            else{
                alert("Created")
            }    
        })
    })
}

async function createCategory(){
    var createCategoryId = document.getElementById('createCategoryInput').value
    var createCategoryPicture = document.getElementById('createCategoryPicture').value

    const response = await fetch("http://localhost:3000/category/create", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : "*",
          },
        body: JSON.stringify({
            name:createCategoryId,
            url:createCategoryPicture,
        })
    }).then((value )=> {
        value.json().then((output)=>{
            if (output.status === "Failed"){
                alert("Can't create category")
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

    const response = await fetch("http://localhost:3000/books/create", {
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
                alert("Can't create book")
            }
            else{
                alert("Created")
            }    
        })
    })
}

async function updateBook(){
    var updateBookId = document.getElementById('updateBookId').value
    var updateBookLength = Number(document.getElementById('updateBookLength').value)
    var updateBookCover = document.getElementById('updateBookCover').value
    var updateBookSummary = document.getElementById('updateBookSummary').value
    var updateBookReleaseDate = new Date(document.getElementById('updateBookReleaseDate').value)
    var updateBookPrice = Number(document.getElementById('updateBookPrice').value)
    var updateBookQuantity = Number(document.getElementById('updateBookQuantity').value)
    var updateBookAuthor = document.getElementById('updateBookAuthor').value
    var updateBookCategory = document.getElementById('updateBookCategory').value

    const response = await fetch("http://localhost:3000/books/update", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : "*",
          },
        body: JSON.stringify({
            name : updateBookId,
            newSummary : updateBookSummary,
            newCover : updateBookCover,
            newLength : updateBookLength,
            newReleaseDate : updateBookReleaseDate,
            newPrice : updateBookPrice,
            newQuantity : updateBookQuantity,
            newAuthor : updateBookAuthor,
            newCategory : updateBookCategory,
            
        })
    }).then((value )=> {
        value.json().then((output)=>{
            if (output.status === "Failed"){
                alert("Can't update book")
            }
            else{
                alert("Updated")
            }    
        })
    })
}

async function updateCategory(){
    var updateCategoryId = document.getElementById('updateCategoryInput').value
    var updateCategoryPicture = document.getElementById('updateCategoryPicture').value

    const response = await fetch("http://localhost:3000/category/update", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : "*",
          },
        body: JSON.stringify({
            name:updateCategoryId,
            newURL:updateCategoryPicture,
        })
    }).then((value )=> {
        value.json().then((output)=>{
            if (output.status === "Failed"){
                alert("Can't update category")
            }
            else{
                alert("Updated")
            }    
        })
    })
}

async function updateAuthor(){
    var updateAuthorId = document.getElementById('updateAuthorInput').value
    var updateAuthorBio = document.getElementById('updateAuthorBioInput').value
    var updateAuthorAge = document.getElementById('updateAuthorAgeInput').value
    var updateAuthorPicture = document.getElementById('updateAuthorPictureInput').value
    const response = await fetch("http://localhost:3000/author/update", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : "*",
          },
        body: JSON.stringify({
            name:updateAuthorId,
            newBio:updateAuthorBio,
            newAge: updateAuthorAge,
            newPicture:updateAuthorPicture
        })
    }).then((value )=> {
        value.json().then((output)=>{
            if (output.status === "Failed"){
                alert("Can't Update author")
            }
            else{
                alert("Updated")
            }    
        })
    })
}

async function promoteToAdmin(){
    var promoteToAdminID = document.getElementById('promoteToAdminID').value

    const response = await fetch("http://localhost:3000/promoteToAdmin", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : "*",
          },
        body: JSON.stringify({
            name:promoteToAdminID,
            
        })
    }).then((value )=> {
        value.json().then((output)=>{
            if (output.status === "Failed"){
                alert("Can't promote to admin, user doesn't exist")
            }
            else{
                alert("Promoted")
            }    
        })
    })
}



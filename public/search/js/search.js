async function getSearchResults ()
{
   params = window.location.pathname
   const searchType = params[2]
   const searchValue = params[3]
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

getSearchResults()

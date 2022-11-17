async function getAuthorBio ()
{
    var authorName = document.getElementById("authorid").innerHTML;
    const response = await fetch(`http://localhost:3000/authors/${authorName}`, {
        method: 'GET',
    }).then((value )=> {
        value.json().then((output)=>{
           document.getElementById('authorbio').innerHTML = output.bio;
           

        })

    })
    
} 
getAuthorBio()
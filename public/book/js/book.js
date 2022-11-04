async function addToCart ()
{
   const bookID =  document.getElementById("bookTitle").innerHTML
   const response = await fetch("http://localhost:3000/payment/add", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : "*",
          },
        body: JSON.stringify({
            book: bookID,
        })
    }).then((value )=> {
        value.json().then((output)=>{
            console.log(output);
            if (output.status === "Success"){
                document.getElementById("btn").disabled = true;
                document.getElementById("btn").innerHTML = "Added to cart"
            }
            else{
                console.log("Somethings wrong")
            }    
        })
        
    })
}


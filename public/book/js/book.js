async function addToCart ()
{
   const bookID =  $("#bookTitle").text()
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
                $("#btn").prop("disabled", true);
                $("#btn").text("Added to cart")
            }
            else{
                console.log("Somethings wrong")
            }    
        })
        
    })
}


async function completeTransaction(){

    const creditCardNumber = Number(document.getElementById('creditCardNumber'))
    const response = await fetch("http://localhost:3000/payment/completeTransaction", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : "*",
          },
        body: JSON.stringify({
            creditNumber: creditCardNumber,
        })
    }).then((value )=> {
        value.json().then((output)=>{
            if (output.status === "Success")
                alert("Items bought")        
        })
    })
}

async function listCart(){
    const container = document.getElementById('books');
    const totalPriceElement = document.getElementById('totalPrice');
    const response = await fetch("http://localhost:3000/payment/listCartItems", {
            method: 'POST',
        }).then((value )=> {
            value.json().then((output)=>{
                const totalPrice = output.slice(-1)
                output = output. slice(0, -1)
                output.forEach(item => {
                    var element = document.createElement("div")
                    
                    element.innerHTML = `
                    <a class="innerBook" href="/book/${item._id}"> 
                    <h1 class="bookTitle">${item._id}</h1>
                    <img class="bookImage" src="${item.cover}"></img>
                    </a>
                    `
                    container.appendChild(element)
                })
                totalPriceElement.innerHTML = totalPrice

            })
        })
    }

listCart()
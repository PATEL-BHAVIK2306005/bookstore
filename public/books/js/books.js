async function listCart(){
    const container = document.getElementById('books');
    const totalPriceElement = document.getElementById('totalPrice');
    const response = await fetch("http://localhost:3000/payment/listCartItems", {
            method: 'POST',
        }).then((value )=> {
            value.json().then((output)=>{
                const totalPrice = output.slice(-1)
                output = output. slice(0, -1)
                console.log(output)
                output.forEach(item => {
                    var element = document.createElement("div")
                    
                    element.innerHTML = `
                    <h3>${item._id}<h3>
                    <img class="bookImage" src="${item.cover}">
                    <a class="innerBook" href="/book/${item._id}"> 
                    </a>
                    `
                    container.appendChild(element)
                })
                totalPriceElement.innerHTML = totalPrice

            })
        })
    }

listCart()
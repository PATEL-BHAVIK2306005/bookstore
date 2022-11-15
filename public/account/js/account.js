async function changePassword ()
{
   $("#wrongPassword").show();
   $("#changePassword").show();
   const oldPassword = $("#oldPassword").val()
   const newPassword =  $("#newPassword").val()
   const response = await fetch("http://localhost:3000/user/changePassword", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : "*",
          },
        body: JSON.stringify({
            oldPassword: oldPassword,
            newPassword: newPassword,
        })
    }).then((value )=> {
        value.json().then((output)=>{
            if (output.status === "Failed"){
                $("#wrongPassword").show();
            }
            else{
                $("#changedPassword").show();
            }    
        })
        
    })
}

/*async function listCompletedTransactions(){
    const container = document.getElementById('completedTransactions');
    const totalPriceElement = document.getElementById('totalPrice');
    const response = await fetch("http://localhost:3000/payment/listCompletedTransactions", {
            method: 'POST',
        }).then((value )=> {
            value.json().then((output)=>{
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
                

            })
        })
    }
listCompletedTransactions()
*/
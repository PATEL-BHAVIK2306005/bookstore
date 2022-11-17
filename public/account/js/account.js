async function changePassword ()
{
   $("#wrongPassword").css("visibility", "visible");
   $("#changePassword").css("visibility", "visible");
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
                $("#wrongPassword").css("visibility", "visible");
            }
            else{
                $("#changedPassword").css("visibility", "visible");
            }    
        })
        
    })
}

async function showMap(){
    
    
    something = ""
    const response = await fetch("http://localhost:3000/user/getLocation", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : "*",
          },
    }).then((value )=> {
        value.json().then((output)=>{
            url = `https://maps.google.com/maps?q=${output}t=&z=13&ie=UTF8&iwloc=&output=embed`
            $("#gmap_canvas_m").attr("src",url);
            $("#map").css("visibility", "visible");
            if (output.status === "Failed"){
                //$("#wrongPassword").css("visibility", "visible");

            }
            else{
                //$("#changedPassword").css("visibility", "visible");
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
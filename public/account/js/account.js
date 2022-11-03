async function changePassword (username, password)
{
   document.getElementById("wrongPassword").style.visibility = "visible";
   document.getElementById("changePassword").style.visibility = "visible";
   const oldPassword = document.getElementById("oldPassword").value
   const newPassword =  document.getElementById("newPassword").value
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
                document.getElementById("wrongPassword").style.visibility = "visible";
            }
            else{
                document.getElementById("changedPassword").style.visibility = "visible";
            }    
        })
        
    })
}


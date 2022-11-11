async function signUp (username, password)
{
   const usernameA = document.getElementById("username").value
   const passwordA =  document.getElementById("password").value
   const emailA =  document.getElementById("email").value
   const addressA =  document.getElementById("address").value
   const response = await fetch("http://localhost:3000/user/create", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : "*",
          },
        body: JSON.stringify({
            username: usernameA,
            password: passwordA,
            email: emailA,
            address: addressA,
        })
    }).then((value )=> {
        value.json().then((output)=>{
            if (output.status === "Failed"){
                document.getElementById("somethingsWrong").style.visibility = "visible";
            }
            else{
                window.location.replace("/home")
            }    
        })
        
    })
}


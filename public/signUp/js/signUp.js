async function signUp (username, password)
{
   const usernameA = $("#username").val()
   const passwordA =  $("#password").val()
   const emailA =  $("#email").val()
   const addressA =  $("#address").val()
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
                $("#somethingsWrong").css("visibility", "visible");
            }
            else{
                window.location.replace("/home")
            }    
        })
        
    })
}


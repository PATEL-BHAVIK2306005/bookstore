async function login (username, password)
{
   const usernameA = document.getElementById("username").value
   const passwordA =  document.getElementById("password").value
   const response = await fetch("http://localhost:3000/loginAdmin", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : "*",
          },
        body: JSON.stringify({
            username: usernameA,
            password: passwordA
        })
    }).then((value )=> {
        value.json().then((output)=>{
            if (output.status === "Failed"){
                document.getElementById("wrongPassword").style.visibility = "visible";
            }
            else{
                window.location.replace("/admin")
            }    
        })
    })
}


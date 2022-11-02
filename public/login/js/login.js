async function login (username, password)
{
   console.log("a")
   const usernameA = document.getElementById("username").value
   const passwordA =  document.getElementById("password").value
   const response = await fetch("http://localhost:3000/login", {
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
        if (value.status === 404){
            document.getElementById("wrongPassword").style.visibility = "visible";
        }
        else{
            window.location.href = "home"
        }
    })
}


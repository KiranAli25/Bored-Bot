
    let render = document.getElementById("activity")
    let button = document.getElementById("btn");

    button.addEventListener("click", function(){ 
            fetch("https://apis.scrimba.com/bored/api/activity")
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                console.log(data);  
                render.innerHTML = `<p style="color:black">${data.activity}</p>`;
                render.classList.add("after_click");     
            })
    });

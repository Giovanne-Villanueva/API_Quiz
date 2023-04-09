var user= document.querySelector(".user")

function leaderBoard(){
    var player= JSON.parse(localStorage.getItem("Players"))
    var info
    if(player !== null){
        for(var object of Array.prototype.values.call(player)){
            info= document.createElement("li")
            info.textContent=object.name+ " Score: " + object.score + " Time: " + object.time
            user.appendChild(info)
        }
    }
    else{
        info=document.createElement("li")
        info.textContent="No one has played the game yet no score to display"
    }
}

leaderBoard()
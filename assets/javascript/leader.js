var user= document.querySelector(".user")

var players = {
    length:0,
    addElem(element){
        [].push.call(this, element);
    }
};
var order = [];
var maxObject;
var picked=false;

console.log(order.length)
function sortPlayer(){
    var player= JSON.parse(localStorage.getItem("Players"))

    if(player !== null){
        for(var i=0; i<player.length; i++){
            var maxScore=0;
            var minTime=0;
            var j=0;
            for(var object of Array.prototype.values.call(player)){
                if( maxScore <= object.score ){
                    if(minTime<=object.time){
                        for(var k=0; k<order.length;k++){
                            if(order[k]===j){
                                picked=true;
                                break;
                            }
                            else {
                                picked=false;
                            }
                        }
                        if(!picked){
                            maxScore=object.score
                            minTime=object.time
                            order[i+1]=j;
                            maxObject=object;
                        }
                    }
                }
                j++;
            }
            maxScore=0;
            minTime=0;
            info= document.createElement("li")
            info.textContent=maxObject.name+ " Score: " + maxObject.score + " Time: " + maxObject.time
            user.appendChild(info)
            j=0;
        }
    }
    else{
        info=document.createElement("li")
        info.textContent="No one has played the game yet no score to display"
    }
}
sortPlayer()
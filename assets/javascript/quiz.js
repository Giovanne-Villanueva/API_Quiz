var quizEl= document.querySelector(".quiz")
var container = document.querySelector(".container")
var questionEl= document.querySelector(".question")
var headerEl= document.querySelector(".header")
var scoreEl= document.querySelector("#scoreForm")
var endEl= document.querySelector(".endPage")
var userInput, userInput1, userInput2, userInput3, initalInput;


var start=0
var input=0
var leaderBoard= []
var correct = true
var endtime=0

var players = {
    length:0,

    addElem(element){
        [].push.call(this, element);
    },
}
var player = {
    score:0, 
    name:"", 
    time:0 
};

var question = {
    challenge:[],
    option1:[],
    option2:[],
    option3:[],
    option4:[],
    Answer: []
};

question.challenge[0]= "My favorite color is:"
question.option1[0] = "Blue"
question.option2[0] = "Red"
question.option3[0] = "Green"
question.option4[0] = "Purple"
question.Answer[0] = 3

//questions.push(question)

question.challenge[1]= "My favorite Movie is:"
question.option1[1] = "Avatar"
question.option2[1] = "Ted"
question.option3[1] = "Bullet Train"
question.option4[1] = "Scott Piligram: Saves the World"
question.Answer[1] = 1

//questions.push(question)

question.challenge[2]= "My favorite symbol to draw is:"
question.option1[2] = "Heart"
question.option2[2] = "Shapes"
question.option3[2] = "Egg"
question.option4[2] = "Lighting Bolt"
question.Answer[2] = 1

//questions.push(question)

question.challenge[3] = "My favorite video game is:"
question.option1[3] = "Last Spell"
question.option2[3] = "Jak and Dexter 3"
question.option3[3] = "Halo 3"
question.option4[3] = "Final Fantasey X"
question.Answer[3] = 4

//questions.push(question)

start=0
console.log(question)
function startup(){
    //Change the header element to our first question
    //add four different options that users can click on
    questionEl.innerHTML=""
    problem()
    possibleAns()
    possibleAns1()
    possibleAns2()
    possibleAns3()
    if(start > 0){
        ansDisplay()
    }

}

function ansDisplay(){
    var ans= document.createElement("p");
    if(correct){
        ans.textContent="--------Correct-------";
    }
    else{
        ans.textContent="--------Wrong--------";
    }
    questionEl.appendChild(ans);
}

function problem(){
    var problem=document.createElement("h2")
    problem.textContent=question.challenge[start]
    questionEl.appendChild(problem)
}

function possibleAns(){
    userInput=document.createElement("button")
    userInput.textContent=question.option1[start]
    userInput.setAttribute("option", 1)
    questionEl.appendChild(userInput)
}

function possibleAns1(){
    userInput1=document.createElement("button")
    userInput1.textContent=question.option2[start]
    userInput1.setAttribute("option", 2)
    questionEl.appendChild(userInput1)
}

function possibleAns2(){
    userInput2=document.createElement("button")
    userInput2.textContent=question.option3[start]
    userInput2.setAttribute("option", 3)
    questionEl.appendChild(userInput2)
}

function possibleAns3(){
    userInput3=document.createElement("button")
    userInput3.textContent=question.option4[start]
    userInput3.setAttribute("option", 4)
    questionEl.appendChild(userInput3)
}



function scoreCollection(){
    player.time= endtime
    questionEl.innerHTML=""

    
    
    var label= document.createElement("label")
    label.textContent="Please enter your intials here: "
    label.setAttribute("for", "initals")

    initalInput = document.createElement("input")
    initalInput.setAttribute("type", "text")
    initalInput.setAttribute("id", "initals")
    initalInput.setAttribute("name", "initals")

    var submit= document.createElement("input")
    submit.setAttribute("type", "submit")
    submit.setAttribute("value", "Submit")

    scoreEl.appendChild(label)
    scoreEl.appendChild(initalInput)
    scoreEl.appendChild(submit)

}

function endingScreen(){
    scoreEl.innerHTML=""
    console.log(players)
    players.addElem(player);
    

    localStorage.setItem("Players", JSON.stringify(players))

    var header= document.createElement("h1")
    header.textContent="Congratulation on finishing the Quiz"
    var paragraph= document.createElement("p")
    paragraph.textContent= "Now you have two options to do either you can go back to the home page to take the quiz again or view your highscore on the leader board. The buttons below will take you to one of the places";
    var home= document.createElement("button")
    home.textContent="Home Page"
    home.setAttribute("path", "home")
    var leader = document.createElement("button")
    leader.textContent= "HighScore Board"
    leader.setAttribute("path", "leader")

    console.log(player)
    endEl.appendChild(header)
    endEl.appendChild(paragraph)
    endEl.appendChild(home)
    endEl.appendChild(leader)

}

function reset(){
    endEl.innerHTML=""
    var header= document.createElement("h1")
    header.textContent= "Coding Quiz on Web API"
    var paragraph= document.createElement("p")
    paragraph.textContent= "Welcome user to our Web API quiz. In this quiz we will be testing your skills on some javascript fundumentals for web API. This will be a multiple choice test with four options. You will be timed while you're taking your test. After answering a question you will move on to the next question and at the bottom you will be notified if you got the previous question wrong or not. At the very end your score will be added to a leader board and you will get to see your standing compared to others.";
    var button= document.createElement("button")
    button.textContent= "Start Game"
    start=0
    endtime=0
    player.score=0
    player.name=""
    player.time=0
    container.appendChild(header)
    container.appendChild(paragraph)
    container.appendChild(button)
}

function quiz(event){
        var time
        time = 75
        container.innerHTML=""
        if(localStorage.getItem("Players")!=null){
            var temp=JSON.parse(localStorage.getItem("Players"))
            console.log(temp)
            for(var entry of Array.prototype.values.call(temp)){
                console.log(entry)
                players.addElem(entry)
            }
        }

        timer(time)
        startup()
        
    //check answer
        //change user score and decrease timer
    //check to see if this is first question
        //do nothing ask next question
    //else 
        //display Wrong or Correct based on previous response on question
}

function timer(time){    
    var timeInterval = setInterval(function(){
        time--
        headerEl.children[1].textContent= time+" sec"
        if(time>0){
            //Something
            if( (input === 1) && (!correct)){
                input =0
                time= time-15
                correct=true
            }
            if(start >= 4){
                endtime= time
                clearInterval(timeInterval)
                headerEl.children[1].textContent=""
                scoreCollection()
            }
        }
        if(time <= 0){
            //Something
            endtime=0
            clearInterval(timeInterval)
            headerEl.children[1].textContent=""
            scoreCollection()
        }

    }, 1000);
}




container.addEventListener("click", quiz)
questionEl.addEventListener("click", function(event){
    
    var element = event.target;
    
    console.log("I got here" + start )
    if(element.matches("button") === true){
        if(start < 4){
            var response=element.getAttribute("option")
            console.log("I got here" + response)
            if (Number(response) === question.Answer[start]){
                correct=true
                player.score++
            }
            else{
                correct=false
            }
            start++
            input=1
            startup()
        }
        else{
            scoreCollection()
        }
    }
});
scoreEl.addEventListener("submit", function(event){
    event.preventDefault();
    var initals = initalInput.value
    if(initals === ""){
        alert("Please put your initals not leave it blank")
    }
    else{
        player.name=initals
        endingScreen()
    }
});
endEl.addEventListener("click", function(event){
    var element=event.target;
    
    if(element.matches("button")){
        var path= element.getAttribute("path")
        if(path === "leader"){
            //Call function to take us to leader board page
            window.location.href="LeaderBoard/leaderBoard.html"
        }
        else{
            reset()
        }
    }
});

//quizEl.addEventListener("click", quiz)



function maxNum(array){
    var max=0
    for(var i= 0; i < array.length; i++){
        if( array[i] > max){
            max = array[i]
        }
    }
    return max
}

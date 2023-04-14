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
var check = true

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

question.challenge[0]= "Commonly used data types DO NOT include:"
question.option1[0] = "strings"
question.option2[0] = "booleans"
question.option3[0] = "alerts"
question.option4[0] = "numbers"
question.Answer[0] = 3

question.challenge[1]= "The condition in an if / else statement is enclosed within ____."
question.option1[1] = "quotes"
question.option2[1] = "curly brackets"
question.option3[1] = "parentheses"
question.option4[1] = "square brackets"
question.Answer[1] = 3

question.challenge[2]= "Arrays in JavaScript can be used to store ____."
question.option1[2] = "numbers and strings"
question.option2[2] = "other arrays"
question.option3[2] = "booleans"
question.option4[2] = "all of the above"
question.Answer[2] = 4

question.challenge[3] = "String values must be enclosed within ____ when being assigned to variables."
question.option1[3] = "commas"
question.option2[3] = "curly brackets"
question.option3[3] = "quotes"
question.option4[3] = "parentheses"
question.Answer[3] = 3

question.challenge[4] = "A very useful tool used during development and debugging for printing content to the debugger is:"
question.option1[4] = "JavaScript"
question.option2[4] = "terminal / bash"
question.option3[4] = "for loops"
question.option4[4] = "console.log"
question.Answer[4] = 4

start=0

//Here we will be setting up our html to display one of our questions
function startup(){
    //Clear the html in question Element
    //add four different options that users can click on
    //if this is not the first itteration then display correct or wong based on userinput
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

//this function add the Correct or Wong prompt on the html page we have
function ansDisplay(){
    // We create a new html element
    //We must check if the users input from the previous question was correct
        //if so display correct
        //else display wrong
    //Append new html element to the webpage
    var ans= document.createElement("p");
    if(correct){
        ans.textContent="--------Correct-------";
    }
    else{
        ans.textContent="--------Wrong--------";
    }
    questionEl.appendChild(ans);
}

//Here we make a new html element (headding 2) and append it to the html
function problem(){
    var problem=document.createElement("h2")
    problem.textContent=question.challenge[start]
    questionEl.appendChild(problem)
}

//Here we make a new html element (button) and append it to the html
//We also give the button a unique attribute to use for later
function possibleAns(){
    userInput=document.createElement("button")
    userInput.textContent=question.option1[start]
    userInput.setAttribute("option", 1)
    questionEl.appendChild(userInput)
}

//Here we make a new html element (button) and append it to the html
//We also give the button a unique attribute to use for later
function possibleAns1(){
    userInput1=document.createElement("button")
    userInput1.textContent=question.option2[start]
    userInput1.setAttribute("option", 2)
    questionEl.appendChild(userInput1)
}

//Here we make a new html element (button) and append it to the html
//We also give the button a unique attribute to use for later
function possibleAns2(){
    userInput2=document.createElement("button")
    userInput2.textContent=question.option3[start]
    userInput2.setAttribute("option", 3)
    questionEl.appendChild(userInput2)
}

//Here we make a new html element (button) and append it to the html
//We also give the button a unique attribute to use for later
function possibleAns3(){
    userInput3=document.createElement("button")
    userInput3.textContent=question.option4[start]
    userInput3.setAttribute("option", 4)
    questionEl.appendChild(userInput3)
}


//This function will set up our html to ask for user initals to save score and record their completion time for the quiz they took
function scoreCollection(){
    //We must check to see if this function has been called 
        //if not then we change the status of not being called to false
        //Then we create elements for our html web page
        //We make a heading 2, label, input, and a button
        //finally we append the new Elements to the html 
    if(check){
        check = false
        player.time= endtime
        questionEl.innerHTML=""

        
        var header= document.createElement("h2")
        header.textContent="Congratulations"
        

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

        scoreEl.appendChild(header)
        scoreEl.appendChild(label)
        scoreEl.appendChild(initalInput)
        scoreEl.appendChild(submit)
    }

}

//This function changes the html on the webpage to display an ending screen with two buttons
function endingScreen(){
    //We must change the status of check to true, so users can retake the test
    //We clear the html on the page
    //We store the current player to our local Storage
    //We make new html Elements h1, p, button
    //We give the buttons a special attribute
    //We append new html elements to html page
    check=true
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

    //console.log(player)
    endEl.appendChild(header)
    endEl.appendChild(paragraph)
    endEl.appendChild(home)
    endEl.appendChild(leader)

}

//We set up the inital home screen and reset values for a new test
function reset(){
    //We clear any previous html elements
    //We make new html elements h1, p, button
    //We add text content
    //We reset certain variables (play info, starting index for questions, endingtime for players)for a new test run
    //We append new html elements to html page 
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

//Here we are starting the quiz by clearing previous html, starting a timer, collecting previous users, and setup our first set question
function quiz(event){

    //We make a variable for our timmer
    //we set are allotted time for the quiz
    //We clear the previous html content
    //We check to see if there is anything in local storage
        //if there is something we must make sure our players object is empty
        //Then we must get this item from local storage
        //we must add these items to current players array
    //We setup our timer for the quiz
    //We call a function to set the first question of our Quiz
    var time
    time = 75
    container.innerHTML=""
    if(localStorage.getItem("Players")!=null){
        players={
            length:0,

            addElem(element){
                [].push.call(this, element);
            },
        };
        var temp=JSON.parse(localStorage.getItem("Players"))
        console.log(temp)
        for(var entry of Array.prototype.values.call(temp)){
            players.addElem(entry)
        }
    }

    timer(time)
    startup()
}

//This is a timer that checks certain variables to decrease time futher and eventually call a score collection function
function timer(time){    
    //Here we make our time interval
        //the interval has a function that has a decreasing time variable
        //We edit the html text content of one varaiable to display the time left
        //if there is time left we must check 2 things
            //If user input is correctly answering questions
                //if so reset variable used to check for input back to waiting
                //decrease time further
                //reset the variable used to determine correct or wrong response
            //if users are on the last qustion
                //Then I save their ending time
                //Stop the timer
                //reset the html element to have no timer on the screen
                //go to function that collects users initials
        //if time is less than or equal to zero
            //set the users ending time to zero
            //stop the timer
            //reset the html to have no timer on the screen
            //go to function that collects users initials

    var timeInterval = setInterval(function(){
        time--
        headerEl.children[1].textContent= "Time: "+time+"sec"
        if(time>0){
            //Something
            if( (input === 1) && (!correct)){
                input =0
                time= time-15
                correct=true
            }
            if(start >= question.Answer.length){
                //console.log("The timer is at: "+time)
                if(time<0){
                    endtime= 0
                }
                else{
                    endtime=time
                }
                //console.log("We ended on: " +endtime)
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



//We wait for the user to click anywhere on the page to start on the quiz
container.addEventListener("click", quiz)
//We wait for users to click on the questions section and we make sure users click on a button
//if so we set values to display this and set up our next set or questions or just end the quiz if no more question
questionEl.addEventListener("click", function(event){
    
    var element = event.target;
    
    //console.log("I got here" + start )
    if(element.matches("button") === true){
        if(start < question.challenge.length){
            var response=element.getAttribute("option")
            if (Number(response) === question.Answer[start]){
                correct=true
                player.score++
            }
            else{
                correct=false
            }
            start++
            input=1
            if(start < question.challenge.length){
                startup()
            }
        }
        else{
            scoreCollection()
        }
    }
});
//Here we wait for a user to submit something in our form if there is nothing we alert users
//at the very end we save this data for our current play information and call a function to move to the ending screen
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
//Here we just wait for users to click two buttons to either restart the quiz or take users to other html page
endEl.addEventListener("click", function(event){
    var element=event.target;
    
    if(element.matches("button")){
        var path= element.getAttribute("path")
        if(path === "leader"){
            //Call to take us to leader board page
            window.location.href="LeaderBoard/leaderBoard.html"
        }
        else{
            reset()
        }
    }
});
//The buttton on the very top if clicked will take users instanly to our leaderBoard webpage
headerEl.addEventListener("click", function(event){
    var element=event.target

    if(element.matches("button")){
        window.location.href="LeaderBoard/leaderBoard.html"
    }
})

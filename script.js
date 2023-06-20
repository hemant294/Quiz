const quizDB = [
    {
        question: "Q1: What is the full form of HTML",
        a: "Hello To My Local",
        b: "Hey Text Markup Language",
        c: "Hypertext Makeup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartun Style Sheets",
        d: "Cascaing Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP",
        a: "Hyper terminal tracing program",
        b: "Hypertext tracing protocol",
        c: "Hypertext transfer protocol",
        d: "Hypertext transfer program",
        ans: "ans3"
    },
    {
        question: "Q4: What is Java Script",
        a: "    JavaScript is a scripting language used to make the website interactive",
        b: "b) JavaScript is an assembly language used to make the website interactive",
        c: "c) JavaScript is a compiled language used to make the website interactive",
        d: "d) None of the mentioned",
        ans: "ans1"
    },
]

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScor = document.querySelector("#show-scor");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList =  quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();

const getCheckAnswer = () =>{
    let answer;

    answers.forEach((currentEle) =>{
        if(currentEle.checked){
            answer = currentEle.id;
            console.log(answer);
        }
    });
    return answer;
};

const deselectAll = () =>{
    answers.forEach((currentAnsEle) => {
    currentAnsEle.checked = false;
});
}


submit.addEventListener("click", () => {
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    }

    deselectAll();

    questionCount++;
    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScor.innerHTML = 
        ` <h3> your score ${score} / ${quizDB.length}</h3>
          <button class = "btn" onclick="location.reload()"> Play again</button>        
        `;
             
        showScor.classList.remove("scorArea");
    }
}); 


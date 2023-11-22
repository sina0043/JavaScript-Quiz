(function () {
  "use strict";

  let minute = "0",
    secound = "00",
    secondr = secound.split("")[1],
    secondl = secound.split("")[0],
    timer,
    Time = document.querySelector(".time"),
    myNumber = document.querySelector(".number"),
    Question = document.querySelector(".question"),
    Index = 0,
    Answers = document.querySelector(".answers"),
    Start = document.querySelector(".start"),
    Previous = document.querySelector(".previous"),
    Next = document.querySelector(".next"),
    Finish = document.querySelector(".finish"),
    arr = [],
    correct = 0;

  const questions = [
      "Inside which HTML element do we put the JavaScript?",
      `What is the correct JavaScript syntax to change the content of the HTML element below?

      <p id="demo">This is a demonstration.</p>
      `,
      "Where is the correct place to insert a JavaScript?",
      `What is the correct syntax for referring to an external script called "xxx.js"?`,
      'The external JavaScript file must contain the <script> tag.',
      'How do you write "Hello World" in an alert box?',
      'How do you create a function in JavaScript?',
      'How do you call a function named "myFunction"?',
      'How to write an IF statement in JavaScript?',
      `How to write an IF statement for executing some code if "i" is NOT equal to 5?`,
      'How does a WHILE loop start?',
      'How does a FOR loop start?',
      'How can you add a comment in a JavaScript?',
      'How to insert a comment that has more than one line?',
      'What is the correct way to write a JavaScript array?',
      'How do you round the number 7.25, to the nearest integer?',
      'How do you find the number with the highest value of x and y?',
      'What is the correct JavaScript syntax for opening a new window called "w2" ?',
      'JavaScript is the same as Java.',
      `How can you detect the client's browser name?`,
      'Which event occurs when the user clicks on an HTML element?',
      'How do you declare a JavaScript variable?',
      'Which operator is used to assign a value to a variable?',
      'What will the following code return: Boolean(10 > 9)',
      'Is JavaScript case-sensitive?'
    ],
    answers = [
      [
        "<script>",
        "<js>",
        "<scripting>",
        "<javascript>"
      ],
      [
        'document.getElement("p").innerHTML = "Hello World!";',
        'document.getElementById("demo").innerHTML = "Hello World!";',
        'document.getElementByName("p").innerHTML = "Hello World!";',
        '#demo.innerHTML = "Hello World!";'
      ],
      [
        "Both the <head> section and the <body> section are correct",
        "The <head> section",
        "The <body> section"
      ],
      [
        `<script href="xxx.js">`,
        `<script src="xxx.js">`,
        `<script name="xxx.js">`
      ],
      [
        "True",
        "False"
      ],
      [
        `msg("Hello World");`,
        `alert("Hello World");`,
        `alertBox("Hello World");`,
        `msgBox("Hello World");`
      ],
      [
        "function myFunction()",
        "function:myFunction()",
        "function = myFunction()"
      ],
      [
        "call function myFunction()",
        "myFunction()",
        "call myFunction()"
      ],
      [
        "if i == 5 then",
        "if i = 5",
        "if i = 5 then",
        "if (i == 5)"
      ],
      [
        "if (i != 5)",
        "if i <> 5",
        "if (i <> 5)",
        "if i =! 5 then"
      ],
      [
        "while i = 1 to 10",
        "while (i <= 10)",
        "while (i <= 10; i++)"
      ],
      [
        "for (i <= 5; i++)",
        "for (i = 0; i <= 5; i++)",
        "for (i = 0; i <= 5)",
        "for i = 1 to 5"
      ],
      [
        `<!--This is a comment-->`,
        `'This is a comment`,
        "//This is a comment"
      ],
      [
        `/*This comment has
        more than one line*/`,
        `//This comment has
          more than one line//`,
        `<!--This comment has
          more than one line-->`
      ],
      [
        `var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")`,
        `var colors = (1:"red", 2:"green", 3:"blue")`,
        `var colors = "red", "green", "blue"`,
        `var colors = ["red", "green", "blue"]`
      ],
      [
        "round(7.25)",
        "Math.round(7.25)",
        "Math.rnd(7.25)",
        "rnd(7.25)"
      ],
      [
        "top(x, y)",
        "Math.ceil(x, y)",
        "Math.max(x, y)",
        "ceil(x, y)"
      ],
      [
        `w2 = window.open("http://www.w3schools.com");`,
        `w2 = window.new("http://www.w3schools.com");`
      ],
      [
        "True",
        "False"
      ],
      [
        "client.navName",
        "browser.name",
        "navigator.appName"
      ],
      [
        "onmouseover",
        "onchange",
        "onmouseclick",
        "onclick"
      ],
      [
        "var carName;",
        "variable carName;",
        "v carName;"
      ],
      [
        "=",
        "*",
        "x",
        "-"
      ],
      [
        "NaN",
        "false",
        "true"
      ],
      [
        "Yes",
        "No"
      ],
    ],
    correctAnswers = [
      `<script>`,
      `document.getElementById("demo").innerHTML = "Hello World!";`,
      `Both the <head> section and the <body> section are correct`,
      `<script src="xxx.js">`,
      `False`,
      `alert("Hello World");`,
      `function myFunction()`,
      `myFunction()`,
      `if (i == 5)`,
      `if (i != 5)`,
      `while (i <= 10)`,
      `for (i = 0; i <= 5; i++)`,
      `//This is a comment`,
      `/*This comment has
more than one line*/`,
      `var colors = ["red", "green", "blue"]`,
      `Math.round(7.25)`,
      `Math.max(x, y)`,
      `w2 = window.open("http://www.w3schools.com");`,
      `False`,
      `navigator.appName`,
      `onclick`,
      `var carName;`,
      `=`,
      `true`,
      `Yes`
    ]


  Question.innerText = questions[Index];
  Answers.innerHTML = `
    <div class="answer p-sm-3 py-2 d-flex align-items-center">
      <span class="check_1 d-flex align-items-center justify-content-center rounded-circle bg-warning mr-2 mt-n2">
        <span class="check_2 rounded-circle bg-white"></span>
      </span>
      <h6></h6>
    </div>
    <div class="answer p-sm-3 py-2 d-flex align-items-center">
      <span class="check_1 d-flex align-items-center justify-content-center rounded-circle bg-warning mr-2">
        <span class="check_2 rounded-circle bg-white"></span>
      </span>
      <h6></h6>
    </div>
    <div class="answer p-sm-3 py-2 d-flex align-items-center">
      <span class="check_1 d-flex align-items-center justify-content-center rounded-circle bg-warning mr-2">
        <span class="check_2 rounded-circle bg-white"></span>
      </span>
      <h6></h6>
    </div>
    <div class="answer p-sm-3 py-2 d-flex align-items-center">
      <span class="check_1 d-flex align-items-center justify-content-center rounded-circle bg-warning mr-2">
        <span class="check_2 rounded-circle bg-white"></span>
      </span>
      <h6></h6>
    </div>
  `

  let AnswersOne = document.querySelectorAll(".answer")[0].querySelector('h6'),
  AnswersTwo = document.querySelectorAll(".answer")[1].querySelector('h6'),
  AnswersThree = document.querySelectorAll(".answer")[2].querySelector('h6'),
  AnswerFour = document.querySelectorAll(".answer")[3].querySelector('h6'),
  Answer = document.querySelectorAll(".answer");

  AnswersOne.innerText = `${answers[Index][0]}`;
  AnswersTwo.innerText = `${answers[Index][1]}`;
  AnswersThree.innerText = `${answers[Index][2]}`;
  AnswerFour.innerText = `${answers[Index][3]}`;

  myNumber.closest('.questionNumber').style.opacity = '0';
  Question.style.opacity = '0';
  Answers.style.display = 'none';
  
  Answer.forEach(el1 =>{
    el1.addEventListener('click' ,()=>{
      Answer.forEach(el2 =>{
        if(el2.classList.contains('checked')) {
          el2.classList.remove('checked');
        }
      })
      el1.classList.add('checked');
    })
  })

  Start.addEventListener('click',()=>{
    myNumber.closest('.questionNumber').style.opacity = '1';
    Question.style.opacity = '1';
    Answers.style.display = 'block';
    btnDisable(Start);
    btnInable(Next);
    btnInable(Finish);
    timer = setInterval(() => {
      ++secondr;
      ++secound;
  
      let time = `${minute} : ${secondl}${secondr}`;
      if (secondr == 9) {
        secondr = -1;
        ++secondl;
      }
      if (secound == 59) {
        secondr = -1;
        secondl = 0;
        ++minute;
      }
      Time.innerText = time;
    }, 1000);
  },{once : true})

  Next.addEventListener("mousedown", () => {
    Answer.forEach(el =>{
      if(el.classList.contains('checked')) {
        arr[myNumber.innerText-1] = el.querySelector('h6').innerText;
      }
    })
  });

  Previous.addEventListener("mousedown", () => {
    Answer.forEach(el =>{
      if(el.classList.contains('checked')) {
        arr[myNumber.innerText-1] = el.querySelector('h6').innerText;
      }
    })
  });

  Next.addEventListener("click", () => {
    if(!Next.classList.contains('disabled')) {
      Answer.forEach(el =>{
        el.classList.remove('checked');
      })

      setTimeout(() => {
        Answer.forEach(el =>{
          if(arr[myNumber.innerText-1] == el.querySelector('h6').innerText) {
            el.classList.add('checked');
          }
        })
      }, 10);

      ++myNumber.innerText;
      ++Index;

      btnInable(Previous);
  
      if (myNumber.innerText <= 25) {
        if(`${answers[Index][2]}` == 'undefined') {
          AnswersThree.closest('.answer').classList.replace('d-flex','d-none');
        }else {
          AnswersThree.closest('.answer').classList.replace('d-none','d-flex');
        }
        if(`${answers[Index][3]}` == 'undefined') {
          AnswerFour.closest('.answer').classList.replace('d-flex','d-none')
        }else {
          AnswerFour.closest('.answer').classList.replace('d-none','d-flex');
        }
      
        Question.innerText = questions[Index];
        AnswersOne.innerText = `${answers[Index][0]}`;
        AnswersTwo.innerText = `${answers[Index][1]}`;
        AnswersThree.innerText = `${answers[Index][2]}`;
        AnswerFour.innerText = `${answers[Index][3]}`;
      }
  
      if (myNumber.innerText == 25) {
        btnDisable(Next);
      }
    }
  });

  Previous.addEventListener("click", () => {
    if (myNumber.innerText > 1 && !Previous.classList.contains('disabled')) {
      
      Answer.forEach(el =>{
        el.classList.remove('checked');
      })

      setTimeout(() => {
        Answer.forEach(el =>{
          if(arr[myNumber.innerText-1] == el.querySelector('h6').innerText) {
            el.classList.add('checked');
          }
        })
      }, 10);

      --myNumber.innerText;
      --Index;  

      btnInable(Next);

      if(`${answers[Index][2]}` == 'undefined') {
        AnswersThree.closest('.answer').classList.replace('d-flex','d-none');
      }else {
        AnswersThree.closest('.answer').classList.replace('d-none','d-flex');
      }
      if(`${answers[Index][3]}` == 'undefined') {
        AnswerFour.closest('.answer').classList.replace('d-flex','d-none')
      }else {
        AnswerFour.closest('.answer').classList.replace('d-none','d-flex');
      }
    
      Question.innerText = questions[Index];
      AnswersOne.innerText = `${answers[Index][0]}`;
      AnswersTwo.innerText = `${answers[Index][1]}`;
      AnswersThree.innerText = `${answers[Index][2]}`;
      AnswerFour.innerText = `${answers[Index][3]}`;
    }

    if(myNumber.innerText == '1') {
      btnDisable(Previous);
    }
  });

  Finish.addEventListener("mousedown", () => {
    Answer.forEach(el =>{
      if(el.classList.contains('checked')) {
        arr[myNumber.innerText-1] = el.querySelector('h6').innerText;
      }
    })
  });

  Finish.addEventListener('click' ,()=>{
    if(!Finish.classList.contains('disabled')){
      btnDisable(Next);
      btnDisable(Previous);
      btnDisable(Finish);
      clearInterval(timer);
      Question.innerText = "";
      myNumber.closest('.questionNumber').innerText = "";
      
      let 
      a = 0,
      len = correctAnswers.length,
      text = '';

      for (; a < len ; a++) {
        if(correctAnswers[a] == arr[a]){
          ++correct;
        }
      }

      if(correct >= 15) {
        text = 'You can be proud of yourself!'
      }else {
        text = 'You must study much harder!'
      }

      Answers.innerHTML = `
        <h5 class="message text-center">${text}</h5>
        <div class="d-flex justify-content-around my-5">
          <div class="time-spent font-weight-bolder">Time Spent: <span>${Time.innerText}</span></div>
          <div class="percent font-weight-bolder">${(correct * 100) / questions.length}%</div>
          <div class="result font-weight-bolder">Result: <span>${correct}</span> of ${questions.length}</div>
        </div>
        <hr>
        <div class="wrapper mt-5 text-center">
          <button class="show-result btn btn-success p-3">
            Check your answers
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>   
      `
      let Message = document.querySelector('.message'),
      Result = document.querySelector('.result').querySelector('span'),
      timeSpent = document.querySelector('.time-spent').querySelector('span'),
      Percent = document.querySelector('.percent'),
      showResult = document.querySelector('.show-result');

      if(correct >= 15) {
        Message.classList.add('text-success');
        Result.classList.add('text-success');
      }else {
        Message.classList.add('text-danger');
        Result.classList.add('text-danger');
      }

      if(minute <= '10') {
        timeSpent.classList.add('text-success');
      }else {
        timeSpent.classList.add('text-danger');
      }

      if((correct * 100) / questions.length >= '50') {
        Percent.classList.add('text-success');
      }else {
        Percent.classList.add('text-danger');
      }

      showResult.addEventListener('click' , ()=>{
        showResult.style.display = 'none';

        let 
        q = 0,
        len = correctAnswers.length;

        for (; q < len ; q++) {
          Answers.innerHTML += `
            <h5 class="check-question mt-5"><span></span><span></span></h5>  
            <div class="check-answer p-3 mt-3">
              <h6></h6>
            </div>
            <div class="check-answer p-3">
              <h6></h6>
            </div>
            <div class="check-answer p-3">
              <h6></h6>
            </div>
            <div class="check-answer p-3">
              <h6></h6>
            </div>
          `
          let checkQuestion = document.querySelectorAll('.check-question'),
          checkAnswer = document.querySelectorAll('.check-answer');

          checkQuestion[checkQuestion.length-1].querySelectorAll('span')[0].innerText = `${q + 1}. `
          checkQuestion[checkQuestion.length-1].querySelectorAll('span')[1].innerText = `${questions[q]}`

          checkAnswer[checkAnswer.length-4].querySelector('h6').innerText = `${answers[q][0]}`;
          checkAnswer[checkAnswer.length-3].querySelector('h6').innerText = `${answers[q][1]}`;

          if(`${answers[q][2]}` == 'undefined') {
            checkAnswer[checkAnswer.length-2].style.display = 'none'
          } else {
            checkAnswer[checkAnswer.length-2].querySelector('h6').innerText = `${answers[q][2]}`;
          }

          if(`${answers[q][3]}` == 'undefined') {
            checkAnswer[checkAnswer.length-1].style.display = 'none'
          } else {
            checkAnswer[checkAnswer.length-1].querySelector('h6').innerText = `${answers[q][3]}`;
          }

          checkAnswer.forEach(el =>{
            if(correctAnswers[q] == el.innerText) {
              el.classList.add('text-info');
            }

            if(el.innerText == arr[q] && arr[q] == correctAnswers[q]) {
              el.classList.replace('text-info' , 'text-success')
            }

            if(el.innerText == arr[q] && arr[q] != correctAnswers[q]) {
              el.classList.add('text-danger');
            }
          })
        }
      })
    }
  })

  function btnDisable(btn) {
    btn.classList.replace('btn-success' , 'btn-warning');
    btn.classList.add('disabled');
  }

  function btnInable(btn) {
    btn.classList.replace('btn-warning' , 'btn-success');
    btn.classList.remove('disabled');
  }
})();

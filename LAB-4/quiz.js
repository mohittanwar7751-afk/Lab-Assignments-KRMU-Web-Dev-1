// Web Dev I - Lab Assignment 4

// Each question has multiple choices and a correct answer letter.

// 1. Quiz Data 

let quizQuestions = [
  {
    question: "1. What does HTML stand for?",
    options: ["A. Hyper Text Markup Language", "B. Home Tool Markup Language", "C. Hyperlinks and Text Mark Language"],
    answer: "a"
  },
  {
    question: "2. Which language is used to style websites?",
    options: ["A. JavaScript", "B. CSS", "C. Python"],
    answer: "b"
  },
  {
    question: "3. Which tag is used to create a paragraph in HTML?",
    options: ["A. <p>", "B. <h1>", "C. <div>"],
    answer: "a"
  },
  {
    question: "4. Which symbol is used for comments in JavaScript?",
    options: ["A. //", "B. <!-- -->", "C. /* */"],
    answer: "a"
  },
  {
    question: "5. What does CSS stand for?",
    options: ["A. Computer Style Sheets", "B. Cascading Style Sheets", "C. Creative Style System"],
    answer: "b"
  },
  {
    question: "6. Which method shows a pop-up input box in JS?",
    options: ["A. console.log()", "B. prompt()", "C. alert()"],
    answer: "b"
  },
  {
    question: "7. Which method shows a pop-up message in JS?",
    options: ["A. prompt()", "B. alert()", "C. print()"],
    answer: "b"
  },
  {
    question: "8. JavaScript is executed in the _____.",
    options: ["A. Browser", "B. Server only", "C. Terminal only"],
    answer: "a"
  },
  {
    question: "9. Which HTML tag is used for the largest heading?",
    options: ["A. <h6>", "B. <h1>", "C. <head>"],
    answer: "b"
  },
  {
    question: "10. Arrays in JavaScript are enclosed in _____.",
    options: ["A. ( )", "B. { }", "C. [ ]"],
    answer: "c"
  }
];

// ===== 2. Helper Function =====
function askQuestionMCQ(q) {
  // show question + options
  let promptText =
    q.question +
    "\n" +
    q.options.join("\n") +
    "\n\nType A, B, or C:";

  let userInput = prompt(promptText);

  if (userInput === null) {
    alert("No answer selected. Moving on.");
    return 0;
  }

  // normalize: lowercase and trim
  userInput = userInput.toLowerCase().trim();

  if (userInput === q.answer) {
    alert("Correct! 🎉");
    return 1;
  } else {
    alert("Wrong ❌\nCorrect answer: " + q.answer.toUpperCase());
    return 0;
  }
}

//  3. Main Quiz Function 

function runQuiz() {
  let score = 0;

  alert("Welcome to the MCQ Quiz! 🧠\nThere are 10 questions.");

  for (let i = 0; i < quizQuestions.length; i++) {
    score += askQuestionMCQ(quizQuestions[i]);
  }

  alert(
    "Quiz Completed 🎯\n" +
    "Your Score: " + score + " / " + quizQuestions.length +
    "\nPercentage: " + ((score / quizQuestions.length) * 100).toFixed(2) + "%"
  );
}

//  4. Run the quiz in console 

// Type: runQuiz();

function startTimer() {
  // Decrease the time remaining by one second every time the function is called
  timer--;
  
  // If the timer reaches 0, call the gameOver() function
  if (timer <= 0) {
    gameOver();
  }
}

// WHEN I click the start button
function startGame() {
    timer = setInterval(startTimer, 1000);
    presentQuestion();
}

document.getElementById('start-btn').addEventListener("click", startGame);

  // Present the question and the choices
function presentQuestion() {
    // Get the current question
    let question = questions[0];
    
    // Display the question and the choices
    document.getElementById('question').innerHTML = question.question;
    
    document.getElementById('choice1').innerHTML = question.choices[0];
    document.getElementById('choice2').innerHTML = question.choices[1];
    document.getElementById('choice3').innerHTML = question.choices[2];
    document.getElementById('choice4').innerHTML = question.choices[3];
    
    // Set up an event listener to wait for the user to pick an answer
    document.getElementById('choice1').addEventListener("click", e => answerQuestion(e.target.innerHTML));
    document.getElementById('choice2').addEventListener("click", e => answerQuestion(e.target.innerHTML));
    document.getElementById('choice3').addEventListener("click", e => answerQuestion(e.target.innerHTML));
    document.getElementById('choice4').addEventListener("click", e => answerQuestion(e.target.innerHTML));
  }
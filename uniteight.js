function check(event) {
    if (event) event.preventDefault(); 
    var c = 0;
    var form = document.uniteight;
    var q1 = form.question1.value;
    var q2 = form.question2.value;
    var q3 = form.question3.value;
    var q4 = form.question4.value;
    
    if (q1 === "1") c++;
    if (q2 === "7") c++;
    if (q3 === "8") c++;
    if (q4 === "14") c++;
    
    form.style.display = 'none';
    
    var feedbackDiv = document.getElementById('feedback');
    feedbackDiv.innerHTML = ''; 
    
    if (c >= 3) {
        feedbackDiv.innerHTML = `<p>You scored ${c} out of 4. Congratulations, you passed!</p>`;
        
        var nextBtn = document.createElement('button');
        nextBtn.textContent = 'Go to Next Section';
        nextBtn.style.padding = '10px 20px';
        nextBtn.style.fontSize = '16px';
        nextBtn.onclick = function() {
            window.location.href = 'congratulations.html'; 
        };
        feedbackDiv.appendChild(nextBtn);
        
    } else {
        feedbackDiv.innerHTML = `<p>You scored ${c} out of 4. You need at least 3 to pass.</p>`;
        
        var retryBtn = document.createElement('button');
        retryBtn.textContent = 'Continue';
        retryBtn.style.padding = '10px 20px';
        retryBtn.style.fontSize = '16px';
        retryBtn.onclick = function() {
            window.location.href = 'youcandothis.html'
        };
        feedbackDiv.appendChild(retryBtn);
    }
}

window.onload = function () {
    let timeLeft = 8 * 60; 
    const timerDisplay = document.getElementById('timer');
    const doneButton = document.getElementById('done');

    const countdown = setInterval(() => {
        
        timeLeft--;

        
        if (timeLeft < 0) {
            clearInterval(countdown);
            timerDisplay.textContent = "Time's up!";
            doneButton.disabled = true;
            check();
            return;  
        }

        
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        
        timerDisplay.textContent = `Time Remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        
        if (timeLeft <= 60) {
            timerDisplay.style.color = 'red';
        } else {
            timerDisplay.style.color = 'black'; 
        }
    }, 1000);
};









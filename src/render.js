//ALL THE COUNTDOWN FUNCTIONALITY

//? Work on the functionality 

//?Make the variables 
let timer; //timer will change
let timeLeft = 1500; //25 minutes converteted to seconds 

function startTimer() { //function that starts the timer
    timer = setInterval (() => { //function in JS sets specific time intervals in the function
        if (timeLeft <= 0) { //if the time left is less than or equal to 0 
            clearInterval(timer);
            alert("Time to take a break");
        } else {
            timeLeft--; //time decrements
            const minutes = math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById('countdown').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`; //padStart adds the '0' to the front of the number since the length of the
                                                                                                                                        //string is '5' so the legth becomes 2 and now its '05'
        }
    }, 1000);

}

document.getElementById('start').addEventListener('click', startTimer); // addEventListener: on the event the button is 'clicked' the function startTimer will play,
                                                                        // it listens for the event
document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timer); //on the event of the click, the timmer is cleared and reset to 25:00
    timeLeft = 1500;
    document.getElementById('countdown').textContent = '25:00';
});
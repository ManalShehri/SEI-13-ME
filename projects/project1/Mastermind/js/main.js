// const variables:
const colors = ['orange','purple','yellow','green','red','blue']
const secretCode = setRandomArr(colors);
console.log(secretCode);
const guessesMatrix = []
const endPoints = [3,7,11,15,19,23,27,31];
const currentAttempt = [];
const currentHintWhite = [];
const currentHintBlack = [];

var winAudio = new Audio("./audio/win.wav");
var ballTap = new Audio("./audio/ball-tap.wav");
var soundTrucck = new Audio("./audio/soundtruck.mp3");
var loseAudio = new Audio("./audio/lose.wav");


function pauseGame()
{
    // show the popup modal & add content to it
    $('#popup-message').css('display','block');
    $('#message-content').empty();
    $('#message-content').append('<button class="x" id="close-window">x</button>');
    $('#message-content').append('<h5>Are you sure you want to quit the game?</h5>');
    $('#message-content').append('<button class="popup-button green" id="continue" >Continue</button>');
    $('#message-content').append('<button class="popup-button red" id="quit" >Quit</button>');
    
    // add click event to the buttons
    $('#continue').one('click', () => {
        $('#popup-message').css('display','none');
    });
    $('#close-window').one('click', () => {
        $('#popup-message').css('display','none');
    });
    $('#quit').one('click', () => {
        window.location.href = "index.html";
    });
}

// function to return an array without repeated elements
function noRepeat(arr)
{
    var convertedArr = [];
    for(i=0; i < arr.length; i++)
    {
        if(convertedArr.indexOf(arr[i]) === -1) 
        {
            convertedArr.push(arr[i]);
        }
    }
    return convertedArr;
}

// function to set random color-code
function setRandomArr(arr) 
{
    var randomIndex,convertedArr = [];
    for(var i=0; i<4; i++)
    {
        randomIndex = Math.floor(Math.random() * 6);
        convertedArr.push(arr[randomIndex]);
    }
    return convertedArr;
}

function win()
{
    winAudio.play();
    soundTrucck.pause();
    soundTrucck.currentTime = 0;

    // transition
    $('#game-logo').css('top','-100px');
    $('#game-logo').css('transition','top 2s');
    
    // show popup modal
    $('#popup-message').css('display','block');
    $('#message-content').empty();
    $('#message-content').append('<h4>Congratulations! You guesses it right!</h4>');
    $('#message-content').append('<button class="popup-button green" id="play-agian" >Play Again</button>');
    $('#message-content').append('<button class="popup-button red" id="quit" >Quit</button>');
    
    // 
    $('#close-window').one('click', () => {
        $('#popup-message').css('display','none');
    });
    $('#quit').one('click', () => {
        window.location.href = "index.html";
    });
    $('#play-agian').one('click', () => {
        location.reload();
    });
}

function lose()
{
    loseAudio.play();
    soundTrucck.pause();
    soundTrucck.currentTime = 0;

    $('#game-logo').css('top','-100px');
    $('#game-logo').css('transition','top 2s');

    $('#popup-message').css('display','block');
    $('#message-content').empty();

    $('#message-content').append('<h4>Game Over! You consumed all available attempts!</h4>');
    $('#message-content').append('<button class="popup-button green" id="play-agian" >Try Again</button>');
    $('#message-content').append('<button class="popup-button red" id="quit" >Quit</button>');

    $('#close-window').one('click', () => {
        $('#popup-message').css('display','none');
    });
    $('#quit').one('click', () => {
        window.location.href = "index.html";
    });
    $('#play-agian').one('click', () => {
        location.reload();
    });
}

function gameOn(event)
{
    ballTap.play();
    const clickedColor = event.target.className.split(' ')[1];
    guessesMatrix.push(clickedColor);
    currentAttempt.push(clickedColor);
    var noRepeatArr = noRepeat(currentAttempt);

    // for each circle in the board
    for (var i = 0; i<guessesMatrix.length; i++)
    {
        $('.guess-circle').eq(i).addClass(guessesMatrix[i]);
        if (endPoints.includes(i))
        {
            // the black hint
            for (j = 0 ; j< currentAttempt.length; j++)
            {
                if (currentAttempt[j] === secretCode[j])
                {
                    currentHintBlack.push('black');
                }
            }
            // the white hint
            for (j = 0 ; j< noRepeatArr.length; j++)
            {
                if (secretCode.includes(noRepeatArr[j]))
                {
                    currentHintWhite.push('white')
                }
            }
            
            var counter = 0;
            for (k = endPoints[0]-3; k<endPoints[0]+1 ;k++)
            {
                $('.hint-circle').eq(k).addClass(currentHintWhite[counter]);
                $('.hint-circle').eq(k).addClass(currentHintBlack[counter]);
                counter++;
            }
            // win condition 
            if (currentHintBlack[0] == "black" && currentHintBlack[1] == "black" && currentHintBlack[2] == "black" && currentHintBlack[3] == "black"  )
            {
                win();
            }
            else 
            {
                // loss condition
                if (i == 31)
                {
                    lose();
                }
            }
            //  reset current attempt & hints to empty
            while(currentAttempt.length > 0) {
                currentAttempt.pop();
                currentHintBlack.shift();
                currentHintWhite.shift();
            }
            // next row
            endPoints.shift();
        }      
    }
}

// click events
$('#new-game').on('click', () => {
    window.location.href = "new_game.html";
})

$('#instructions').on('click', () => {
    window.location.href = "instructions.html";
})

$('#close-instructions').on('click', () => {
    window.location.href = "index.html";
})

$('.option-circle').on('click', gameOn);

$('#pause-game').on('click', pauseGame);

$('body').on('click', () =>
{
    soundTrucck.play();
    soundTrucck.volume = 0.3;

});

$( document ).ready()
{
    $('#secret1').addClass(secretCode[0]);
    $('#secret2').addClass(secretCode[1]);
    $('#secret3').addClass(secretCode[2]);
    $('#secret4').addClass(secretCode[3]);
    soundTrucck.play();
    soundTrucck.volume = 0.3;
}
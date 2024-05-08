let counterIndex = 0;
let rightAnswers = 0;
let selectedAnswers = {};
let countOfQuestion=questions.length;
let shuffledData = shuffleArray(questions);
/*
// Displaying an array of questions for reference and elements to be used in the quiz
console.log(questions);

// Displaying the question at index 1
console.log(questions[1]['question']);

// Displaying the answers for the question at index 1
console.log(questions[1]['answers']);

// Displaying the total number of questions in the array
console.log(questions.length);

// loop  the answers of the question at index 1
questions[1]['answers'].forEach((ele,ind )=> {

    // Displaying each answer
   console.log(ele['answer'])

    // Displaying the index of the current answer
   console.log(ind)
});*/

function showSlide(data, count) {
    if (counterIndex === count - 1) {
        $('.right').hide();
    } else {
        $('.right').show();
    }
    if (counterIndex === 0) {
        $('.left').hide();
    } else {
        $('.left').show();
    }
    $('.numberOfQuestion').text(counterIndex + 1);
    $('.count span').text(`(${counterIndex + 1} of  ${countOfQuestion})`);
    let question = $(`<h4></h4>`)
    question.text(data['question']);
    $('.quiz-area').html(question);
    data['answers'].forEach((ele, ind) => {
        let mainDiv = $('<div></div>');
        mainDiv.addClass('answer');
        let radioInput = $('<input>').attr({
            id: ind,
            type: 'radio',
            name: 'question',
            'data-answer': ele['answer']
        });
        let label = $('<label></label>').attr({
            for: ind
        }).text(ele['answer']);
        mainDiv.append(radioInput);
        mainDiv.append(label);
        $('.answers-area').append(mainDiv);


    });

    // restoreSelectedAnswer();
}

function nextSlide(){
    storeSelectedAnswer();
    counterIndex++;
    prepareQuizDisplay(shuffledData[counterIndex], countOfQuestion);
    console.log("i++", counterIndex)
}

function previousSlide(){
    storeSelectedAnswer();
    counterIndex--;
    prepareQuizDisplay(shuffledData[counterIndex],countOfQuestion);
    console.log("i--", counterIndex)
}

function addMark()
{
    
    var markedQuestions = $('#markedList ul li').map(function () {
        var numberOnly = $(this).text().match(/\d+/);
        return numberOnly ? parseInt(numberOnly[0], 10) : null;
    }).get();
    if (markedQuestions.indexOf(counterIndex + 1) === -1) {
        $('#markedList ul').append(`<li id="${counterIndex}">question ${counterIndex + 1} </li>`);
    } else {
        $(`#markedList ul li:contains( ${counterIndex + 1})`).remove();
    }
    updateMarkButton();
    $('#markedList ul li').on('click', function () {
        let id = $(this).attr('id');
        counterIndex = parseInt(id);
        prepareQuizDisplay(shuffledData[id],countOfQuestion);
    });

}

function results(){
    storeSelectedAnswer();
    rightAnswers = 0;
    for(ind in shuffledData){
        let theRightAnswer = shuffledData[ind].correctAnswerIndex;
        if (selectedAnswers[ind] === theRightAnswer) {
            rightAnswers++;
        }
    }
    localStorage.setItem('numberOfLength',shuffledData.length)

    localStorage.setItem('score',rightAnswers)
    let halfThreshold = Math.floor(shuffledData.length / 2);
    if(rightAnswers<halfThreshold){
        window.location.replace('sadPage.html');
    }else{
        window.location.replace('scroreReslt.html');
    }
    

}

function prepareQuizDisplay(shuffledData,countOfQuestion){
    $('.quiz-area').empty();
    $('.answers-area').empty();
    showSlide(shuffledData, countOfQuestion);
    restoreSelectedAnswer();
    updateMarkButton();
}

function updateMarkButton() {
    var markedQuestions = $('#markedList ul li').map(function () {
        var numberOnly = $(this).text().match(/\d+/);
        return numberOnly ? parseInt(numberOnly[0], 10) : null;
    }).get();

    let questionNumber = counterIndex + 1;

    if (markedQuestions.indexOf(questionNumber) === -1) {
        $('.mark').text('Mark');
        $('.mark').css({left:'90%'})
    } else {
        $('.mark').text('Unmark');
        $('.mark').css({left:'87%'})
    }
}

function storeSelectedAnswer() {
    let selectedRadio = $("input[name='question']:checked");
    if (selectedRadio.length > 0) {
        selectedAnswers[counterIndex] = selectedRadio[0].dataset.answer;
    } else {
        selectedAnswers[counterIndex] = null;
    }
}

function restoreSelectedAnswer() {
    let storedAnswer = selectedAnswers[counterIndex];
    if (storedAnswer !== null && storedAnswer !== undefined) {
        $(`input[data-answer='${storedAnswer}']`).prop('checked', true);
    }
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function calculateResult(duration){
    let min,sec;
    counin=setInterval(function(){
      min=parseInt(duration/60);
      sec=parseInt(duration%60);
      min=min<10 ?`0${min}`:min;
      sec=sec<10 ?`0${sec}`:sec;
      $(`.countdown`).text(`${min}:${sec}`);
    //   countdownElement.innerHTML = `${minutes}:${seconds}`;
      if(--duration<0 ){
        clearInterval(counin);
        window.location.replace('timeout.html');
        //console.log('finsj');
      }else{
        $('.submit-button').on('click',results ); 
       
      }
  
  
    },1000)
  }

// Display Slides
showSlide(shuffledData[counterIndex], countOfQuestion);

// Click to show next or previous slides
$('.right').on('click',nextSlide);
$('.left').on('click',previousSlide);

// Click to Marq Curent slides
$('.mark').on('click',addMark);

// click submit, show results
// $('.submit-button').on('click',results ); 
//  console.log(('.submit-button').click());

// calculateResult(60*.2);
calculateResult(60*5);
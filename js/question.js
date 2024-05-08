class Question {
    constructor(_question, _answers, _correctAnswerIndex = '') {
        this.question = _question;
        this.answers = _answers;
        this.correctAnswerIndex = _correctAnswerIndex;
    }

    addCorrectAnswer() {
        this.answers.forEach(ele => {
            if (ele['isCorrect']) {
                this.correctAnswerIndex = ele['answer'];
                //  console.log(ele);
                // console.log(ele['answer']);
            }
        });
    }
}

class Answer {
    constructor(_answer, _isCorrect) {
        this.answer = _answer;
        this.isCorrect = _isCorrect;
    }
}

let question1 = new Question("1-Why We Use <br> Element",
    [new Answer("To Make Text Bold", false),
        new Answer("To Make Text Italic", false),
        new Answer("To Add Breakline", true),
        new Answer("To Create Horizontal Line", false)
    ]);


let question2 = new Question("2-Is <img> Element Has Attribute href",
    [new Answer("Yes", false),
        new Answer("No Its For Anchor Tag <a>", true),
        new Answer("All Elements Has This Attribute",false),
        new Answer("Answer 1 And 3 Is Right", false)
    ]);
    
let question3 = new Question("3-How Can We Make Element Text Bold",
    [new Answer("Yes", false),
        new Answer("Putting It Inside <b> Tag", false),
        new Answer("Customizing It With Font-Weight Property In CSS",false),
        new Answer("All Answers Is Right", true)
    ]);  

let question4 = new Question("4-What Is The Right Hierarchy For Creating Part Of Page",
    [new Answer("<h2> Then <p> Then <h1> Then <p> Then <h3> Then <p> Then <img>", false),
        new Answer("<h1> Then <p> Then <h3> Then <p> Then <h2> Then <p> Then <img>", false),
        new Answer("<h2> Then <p> Then <h3> Then <p> Then <h1> Then <p> Then <img>",false),
        new Answer("All Solutions Is Wrong",true)
    ]); 
   
let question5 = new Question("5-How Can We Include External Page Inside Our HTML Page",
    [new Answer("By Using Include in HTML", false),
        new Answer("By Using Load In HTML",false),
        new Answer("By Using iFrame Tag",true),
        new Answer("All Solutions Is Wrong",false)
    ]); 
  
// let question6 = new Question("6-What Is The Tag That Not Exists in HTML",
//     [new Answer("<object>",false),
//         new Answer("<basefont>",false),
//         new Answer("<abbr>",false),
//         new Answer("All Tags Is Exists in HTML",true)
//     ]);
   
// let question7 = new Question("7-How We Specify Document Type Of HTML5 Page",
//     [new Answer("<DOCTYPE html>",false),
//         new Answer("<DOCTYPE html5>",false),
//         new Answer("<!DOCTYPE html5>",false),
//         new Answer("<!DOCTYPE html>",true)
//     ]); 
   
// let question8 = new Question("8-What Is The Element Thats Not Exists in HTML5 Semantics",
//     [new Answer("<article>",false),
//         new Answer("<section>",false),
//         new Answer("<blockquote>",true),
//         new Answer("<aside>",false)
//     ]); 
  
// let question9 = new Question("9-In HTML Can We Use This Way To Add Attributes",
//     [new Answer("<div class='class-name'>",false),
//         new Answer("<div class=class-name>",false),
//         new Answer("<div class=\"class-name\">",false),
//         new Answer("All Is Right",true)
//     ]);    
            
question1.addCorrectAnswer();
question2.addCorrectAnswer();
question3.addCorrectAnswer();
question4.addCorrectAnswer();
question5.addCorrectAnswer();
// question6.addCorrectAnswer();
// question7.addCorrectAnswer();
// question8.addCorrectAnswer();
// question9.addCorrectAnswer();

// let questions=[question1,question2,question3,question4,question5,question6,question7,question8,question9]
let questions=[question1,question2,question3,question4,question5]

console.log(questions);

// Add correct answer
// question1.addCorrectAnswer();

// Now the correct answer index is set
// console.log(question1);

// console.log(question1);
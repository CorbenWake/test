let answers = [];
    questions =[
        'Whats your name?',
        'Whats your surname?',
        'How old are you?'
    ];

for (let i = 0; i < questions.length; i++) {
    answers[i] = prompt(questions[i], '');
}

document.write(answers);

// answers[0] = prompt('Whats your name?', '');
// answers[1] = prompt('Whats your surname?', '');
// answers[2] = prompt('How old are you?', '');

// document.write("Ваше имя - " + answers[0] + "<br/>");
// document.write("Ваша фамилия - " + answers[1] + "<br/>");
// document.write("Вам - " + answers[2] + " лет");



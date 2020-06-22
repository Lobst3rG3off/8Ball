let userName = "";
// Ternary expression for userName
userName ? console.log(`Hello ${userName}!`) : console.log("Hello!");

const userQuestion = "Will I buy a Mac?";
console.log(`The user asked: ${userQuestion}`);

// Generate random number between 0 and 7
function 8ball() {
let randomNumber = Math.round(Math.random() * 7);
console.log(randomNumber);

let eightBall = "";

if (randomNumber === 0) {
    eightBall = 'It is certain';
}
else if (randomNumber === 1) {
    eightBall = 'It is decidedly so';
}
else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again';
}
else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
}
else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
}
else if (randomNumber === 5) {
    eightBall = 'My sources say no';
}
else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
}
else if (randomNumber === 7) {
    eightBall = 'Signs point to yes';
}

console.log(eightBall);
}

// // appender
// app.movieAppend = (sortedMovies) => {
//     $('.movieList').empty()
//     $('.queryResult').empty()
//     $('.queryResult').append(`<h2>You searched for: ${app.searchTerm}</h2>
//     <p> Click Poster for More Infomation</p>
//     `);

//     // app initter
//     app.init = () => {
//         $('form').on('submit', function (event) {
//             event.preventDefault();
//             if ($("#search").val() != '') {
//                 app.searchTerm = $('#search').val();
//                 app.getMovies(app.searchTerm);
//                 $('html, body').animate({
//                     scrollTop: $(".movieList").offset().top
//                 }, 2000);
//                 $("#search").val('');
//             } else {
//                 alert("Please enter a word!");
//             }
//         });
//     }
    
    
//     $(function () {
//         app.init()
//     });

    addEventListener('click', 8ball)
//variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote:"The only person you are destined to become is the person you decide to be.",
    person: 'Ralph Waldo Emerson',
},
{
    quote:"Believe you can and you're halfway there.",
    person:' Theodore Roosevelt',
},
{
    quote:"Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person:'Winston Churchill',
},
{
    quote:"You must be the change you wish to see in the world.",
    person:'Mahatma Gandhi',
},
{
    quote:"Your time is limited, don't waste it living someone else's life.",
    person:'Steve Jobs',
},
{
    quote:"The only limit to our realization of tomorrow will be our doubts of today.",
    person:'Franklin D. Roosevelt',
},
{
    quote:"Success is walking from failure to failure with no loss of enthusiasm.",
    person:'Winston Churchill',
},
{
    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person:'Nelson Mandela',
},
{
    quote:"In the end, it's not the years in your life that count. It's the life in your years.",
    person:'Abraham Lincoln',
},
{
    quote:"The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    person:'Jordan Belfort',
},
{
    quote:"The secret of getting ahead is getting started.",
    person:'Mark Twain',
},
{
    quote:"Strive not to be a success, but rather to be of value.",
    person:'Albert Einstein',
},
{
    quote:"The only way to do great work is to love what you do.",
    person:'Steve Jobs',
},
{
    quote:"The best revenge is massive success.",
    person:'Frank Sinatra',
},
{
    quote:"Life is 10% what happens to us and 90% how we react to it.",
    person:'Charles R. Swindoll',
},
{
    quote:"Don't watch the clock; do what it does. Keep going.",
    person:'Sam Levenson',
},
{
    quote:"Whatever the mind can conceive and believe, it can achieve.",
    person:'Napoleon Hill',
},
{
    quote:"We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    person:'Aristotle',
},
{
    quote:"The future belongs to those who believe in the beauty of their dreams.",
    person:'Eleanor Roosevelt',
},
{
    quote:"The only limit to our realization of tomorrow will be our doubts of today.",
    person:'Franklin D. Roosevelt',
},
{
    quote:"You miss 100% of the shots you don't take.",
    person:'Wayne Gretzky',
},
{
    quote:"The only way to achieve the impossible is to believe it is possible.",
    person:'Charles Kingsleigh',
},
{
    quote:"The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    person:'Jordan Belfort',
},
{
    quote:"The best way to predict the future is to create it.",
    person:'Peter Drucker',
},
{
    quote:"The only person you are destined to become is the person you decide to be.",
    person:'Ralph Waldo Emerson',
}];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
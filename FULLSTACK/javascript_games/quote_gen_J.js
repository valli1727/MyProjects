let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let btn = document.querySelector('#new-quote');

const quotes = [
    {quote: "All that we are is the result of what we have thought.",
    person:"Buddha"}, 
    {quote: "If you judge people, you have no time to love them.",
    person:"Mother Teresa"}, 
    {quote: "The most courageous act is still to think for yourself Aloud.",
    person:"Coco Chanel"}, 
    {quote: "The greatest wealth is to live content with little.",
    person:" Plato"}, 
    {quote: "The future belongs to those who prepare for it today. ",
    person:"Malcolm"}, 
    {quote: "I have no special talent. I am only passionately curious. ",
    person:"Albert Einstein"}, 
    {quote: "The successful warrior is the average man, with laser-like focus.",
    person:"Bruce Lee"}, 
    {quote: "Those who dare to fail miserably can achieve greatly.",
    person:" John F. Kennedy"}, 
    {quote: "A great man is always willing to be little.",
    person:" Ralph Waldo Emerson"}, 
    {quote: "The root of suffering is attachment.",
    person:"Buddha"},];

btn.addEventListener('click',function(){

    let random = Math.floor(Math.random()* quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

});
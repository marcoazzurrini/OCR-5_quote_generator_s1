// SENTENCES ARRAYS
const sentenceA = [
    'Mens',
    'Women',
    'Some Girls',
    'Monkeys',
    'Lots of Walls',
    'Some Horses',
    'The Stars',
    'Plenty Lighters',
    'Many Computers',
    'Lots of Smartphones'
]

const sentenceB = [
    'are',
    'are going to',
    'are like a',
    'will do',
    'fell down from',
    'energise like a',
    'will be',
    'have done',
    'drive to',
    'are from'
]

const sentenceC = [
    'Mars',
    'Pistacchios',
    'lorem Ipsum',
    'credit cards',
    'the kings',
    'France',
    'Italy',
    'Donkeys',
    'the Universe',
    'the Game Of Thrones'
]

// GET UI VARS
const quoteList = document.getElementById('quoteList');
const generateBtn = document.getElementById('generateBtn');
const quoteItem = document.getElementById('quoteItem');

// LOAD EVENT LISTENERS
generateBtn.addEventListener('click', generateQuote);

// GENERATE QUOTE FUNCTION
function generateQuote() {

    // GENERATE RANDOM NUMBER TO CALL ARRAY ITEM
    sentenceALength = sentenceA.length;
    sentenceBLength = sentenceB.length;
    sentenceCLength = sentenceC.length;

    const x = Math.floor(Math.random() * sentenceALength);
    const y = Math.floor(Math.random() * sentenceBLength);
    const z = Math.floor(Math.random() * sentenceCLength);

    console.log(`${x} ${y} ${z}`);

    quoteItem.innerHTML = `${sentenceA[x]} ${sentenceB[y]} ${sentenceC[z]}`;
}
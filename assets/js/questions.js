/**This is where all the questions for the quiz are stored. Each quiz category has an array where the questions
 * are stored as dictionaries.
 */

// Here is where the questions for the geography quiz are stored
let geographyQuestions = [
    {
        question: 'Which country has the largest landmass in the world?',
        answers: ['Russia', 'China', 'Canada', 'United States of America'],
        correctAnswer: 'Russia',
        answered: 'n'
    },
    {
        question: 'Which is the largest country in South America?',
        answers: ['Columbia', 'Brazil', 'Argentina', 'Peru'],
        correctAnswer: 'Brazil',
        answered: 'n'
    },
    {
        question: 'Which city is the capital of Australia?',
        answers: ['Melbourne', 'Perth', 'Sydney', 'Canberra'],
        correctAnswer: 'Sydney',
        answered: 'n'
    },
    {
        question: 'Which is the largest city in the world based on surface area?',
        answers: ['Hulunbuir', 'Mumbai', 'Shanghai', 'New York'],
        correctAnswer: 'Hulunbuir',
        answered: 'n'
    },
    {
        question: 'Which river runs through Paris?',
        answers: ['Danube', 'Elbe', 'Thames', 'Seine'],
        correctAnswer: 'Seine',
        answered: 'n'
    },
    {
        question: 'In which country is the region of Transilvania located?',
        answers: ['Croatia', 'Moldavia', 'Romania', 'Albania'],
        correctAnswer: 'Romania',
        answered: 'n'
    },
    {
        question: 'Which country is NOT part of the Scandinavian Peninsula?',
        answers: ['Finland', 'Denmark', 'Sweden', 'Norway'],
        correctAnswer: 'Denmark',
        answered: 'n'
    },
    {
        question: 'In which body of water is the Isle of Man located?',
        answers: ['The Irish Sea', 'The North Sea', 'The Atlantic Ocean', 'The English Channel'],
        correctAnswer: 'The Irish Sea',
        answered: 'n'
    },
    {
        question: 'Which is Earth\'s largest continent?',
        answers: ['Asia', 'Africa', 'Australia', 'Antarctica'],
        correctAnswer: 'Asia',
        answered: 'n'
    },
    {
        question: 'What percentage of the River Nile is located in Egypt?',
        answers: ['9%', '86%', '22%', '100%'],
        correctAnswer: '22%',
        answered: 'n'
    },
]

let scienceQuestions = [
    {
        question: 'How many bones are in the human body?',
        answers: ['154', '112', '206', '287'],
        correctAnswer: '206',
        answered: 'n'
    },
    {
        question: 'What is the hardest natural substance on Earth?',
        answers: ['Lead', 'Diamond', 'Steel', 'Rock'],
        correctAnswer: 'Diamond',
        answered: 'n'
    },
    {
        question: 'At what temperature are Celsius and Fahrenheit equal?',
        answers: ['-70', '-50', '-60', '-40'],
        correctAnswer: '-40',
        answered: 'n'
    },
    {
        question: 'What is the study of mushrooms called?',
        answers: ['Mycology', 'Ornithology', 'Carcinology', 'Malacology'],
        correctAnswer: 'Mycology',
        answered: 'n'
    },
    {
        question: 'Which of the following planets does NOT have rings?',
        answers: ['Saturn', 'Venus', 'Uranus', 'Neptune'],
        correctAnswer: 'Venus',
        answered: 'n'
    },
    {
        question: 'What does USB stand for in computer science?',
        answers: ['Universal serial bus', 'Universal signal bringer', 'Universal songo bongo', 'Universal sign barometer'],
        correctAnswer: 'Universal serial bus',
        answered: 'n'
    },
    {
        question: 'If you get scurvy, what vitamin are you deficient in?',
        answers: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
        correctAnswer: 'Vitamin C',
        answered: 'n'
    },
    {
        question: 'What does the word dinosaur mean?',
        answers: ['Angry lizard', 'Monster lizard', 'Giant lizard', 'Terrible lizard'],
        correctAnswer: 'Terrible lizard',
        answered: 'n'
    },
    {
        question: 'How many seconds does it take for light to travel from the Earth to the Sun?',
        answers: ['240 seconds', '500 seconds', '170 seconds', '630 seconds'],
        correctAnswer: '500 seconds',
        answered: 'n'
    },
    {
        question: 'How much salt does the human body contain on average?',
        answers: ['1 Kilo', '500 grams', '250 grams', '10 grams'],
        correctAnswer: '250 grams',
        answered: 'n'
    },
]

let musicQuestions = [
    {
        question: 'Who was the first drummer of The Beatles?',
        answers: ['Pete Best', 'Ringo Starr', 'John Bonham', 'Tom Johnson'],
        correctAnswer: 'Pete Best',
        answered: 'n'
    },
    {
        question: 'Which mathematical symbol was the title of Ed Sheeran’s first album in 2011?',
        answers: ['-', '+', 'x', '/'],
        correctAnswer: '+',
        answered: 'n'
    },
    {
        question: 'According to the lyrics of Kelis\' "Milkshake", where does her milkshake bring all the boys?',
        answers: ['To the pub', 'To the street', 'To the yard', 'To the hall'],
        correctAnswer: 'To the yard',
        answered: 'n'
    },
    {
        question: 'What is David Bowie\'s real surname?',
        answers: ['Roberts', 'James', 'Rudolph', 'Jones'],
        correctAnswer: 'Jones',
        answered: 'n'
    },
    {
        question: 'How old was Mozart when he wrote his first piece?',
        answers: ['5', '7', '13', '15'],
        correctAnswer: '5',
        answered: 'n'
    },
    {
        question: 'Who was the most streamed artist on Spotify in 2019?',
        answers: ['Skrillex', 'Post Malone', 'Lil Nas X', 'Billie Eilish'],
        correctAnswer: 'Post Malone',
        answered: 'n'
    },
    {
        question: 'What is Taylor Swift’s middle name?',
        answers: ['Jennifer', 'Katherine', 'Alison', 'Beth'],
        correctAnswer: 'Alison',
        answered: 'n'
    },
    {
        question: 'What is the name of Pearl Jam\'s first album?',
        answers: ['Ten', 'Vs.', 'Vitalogy', 'No Code'],
        correctAnswer: 'Ten',
        answered: 'n'
    },
    {
        question: 'Which band wrote the songs "The Less I Know The Better" and "Elephant"?',
        answers: ['Cage the Elephant', 'System of a Down', 'Queens of the Stone Age', 'Tame Impala'],
        correctAnswer: 'Tame Impala',
        answered: 'n'
    },
    {
        question: 'When translated, what does "Karaoke" mean?',
        answers: ['Empty orchestra', 'Sing along', 'Silent singer', 'Loud voice'],
        correctAnswer: 'Empty orchestra',
        answered: 'n'
    },
]

let animalsQuestions = [
    {
        question: 'For how long can a snail sleep?',
        answers: ['Up to 3 years', 'Up to 6 months', 'Up to 4 weeks', 'Up to 5 days'],
        correctAnswer: 'Up to 3 years',
        answered: 'n'
    },
    {
        question: 'What is a group of lions called?',
        answers: ['A murder', 'A herd', 'A flock', 'A Pride'],
        correctAnswer: 'A Pride',
        answered: 'n'
    },
    {
        question: 'Which is the largest mammal on earth?',
        answers: ['Elephant', 'Blue Whale', 'Rhino', 'Sperm Whale'],
        correctAnswer: 'Blue Whale',
        answered: 'n'
    },
    {
        question: 'Which animal has the strongest bite?',
        answers: ['Hyena', 'Shark', 'Saltwater crocodile', 'Bulldog'],
        correctAnswer: 'Saltwater crocodile',
        answered: 'n'
    },
    {
        question: 'how many hearts does an octopus have?',
        answers: ['1', '2', '3', '4'],
        correctAnswer: '3',
        answered: 'n'
    },
    {
        question: 'Where is a shrimp\'s heart located?',
        answers: ['In its head', 'In its tail', 'In its stomach', 'In one of its legs'],
        correctAnswer: 'In its head',
        answered: 'n'
    },
    {
        question: 'Which animal has the highest blood pressure?',
        answers: ['Hippo', 'Giraffe', 'Hummingbird', 'Elephant'],
        correctAnswer: 'Giraffe',
        answered: 'n'
    },
    {
        question: 'Which animal does NOT have eyelids?',
        answers: ['Duck', 'Crocodile', 'Snake', 'Lemming'],
        correctAnswer: 'Snake',
        answered: 'n'
    },
    {
        question: 'The Gombe war was a violent conflict between two groups of which animal?',
        answers: ['Chimpanzees', 'Lions', 'Hyenas', 'Gorillas'],
        correctAnswer: 'Chimpanzees',
        answered: 'n'
    },
    {
        question: 'What color is a Polar Bear\'s skin?',
        answers: ['Pink', 'White', 'Yellow', 'Black'],
        correctAnswer: 'Black',
        answered: 'n'
    },
]


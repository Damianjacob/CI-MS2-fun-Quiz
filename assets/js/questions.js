/**This is where all the questions for the quiz are stored. Each quiz category has an array where the questions
 * are stored as dictionaries.
 */

// Here is where the questions for the geography quiz are stored
let geographyQuestions = [
    {
        question: 'Which country has the largest landmass in the world?',
        answers: ['Russia', 'China', 'Canada', 'United States of America'],
        correctAnswer: 'Russia',
    },
    {
        question: 'Which is the largest country in South America?',
        answers: ['Columbia', 'Brazil', 'Argentina', 'Peru'],
        correctAnswer: 'Brazil',
    },
    {
        question: 'Which city is the capital of Australia?',
        answers: ['Melbourne', 'Perth', 'Sydney', 'Canberra'],
        correctAnswer: 'Sydney',
    },
    {
        question: 'Which is the largest city in the world based on surface area?',
        answers: ['Hulunbuir', 'Mumbai', 'Shanghai', 'New York'],
        correctAnswer: 'Hulunbuir',
    },
    {
        question: 'Which river runs through Paris?',
        answers: ['Danube', 'Elbe', 'Thames', 'Seine'],
        correctAnswer: 'Seine',
    },
    {
        question: 'In which country is the region of Transilvania located?',
        answers: ['Croatia', 'Moldavia', 'Romania', 'Albania'],
        correctAnswer: 'Romania',
    },
    {
        question: 'Which country is NOT part of the Scandinavian Peninsula?',
        answers: ['Finland', 'Denmark', 'Sweden', 'Norway'],
        correctAnswer: 'Denmark',
    },
    {
        question: 'In which body of water is the Isle of Man located?',
        answers: ['The Irish Sea', 'The North Sea', 'The Atlantic Ocean', 'The English Channel'],
        correctAnswer: 'The Irish Sea',
    },
    {
        question: 'Which is Earth\'s largest continent?',
        answers: ['Asia', 'Africa', 'Australia', 'Antarctica'],
        correctAnswer: 'Asia',
    },
    {
        question: 'What percentage of the River Nile is located in Egypt?',
        answers: ['9%', '86%', '22%', '100%'],
        correctAnswer: '22%',
    },
]

let scienceQuestions = [
    {
        question: 'How many bones are in the human body?',
        answers: ['154', '112', '206', '287'],
        correctAnswer: '206',
    },
    {
        question: 'What is the hardest natural substance on Earth?',
        answers: ['Lead', 'Diamond', 'Steel', 'Rock'],
        correctAnswer: 'Diamond',
    },
    {
        question: 'At what temperature are Celsius and Fahrenheit equal?',
        answers: ['-70', '-50', '-60', '-40'],
        correctAnswer: '-40',
    },
    {
        question: 'What is the study of mushrooms called?',
        answers: ['Mycology', 'Ornithology', 'Carcinology', 'Malacology'],
        correctAnswer: 'Mycology',
    },
    {
        question: 'Which of the following planets does NOT have rings?',
        answers: ['Saturn', 'Venus', 'Uranus', 'Neptune'],
        correctAnswer: 'Venus',
    },
    {
        question: 'What does USB stand for in computer science?',
        answers: ['Universal serial bus', 'Universal signal bringer', 'Universal songo bongo', 'Universal sign barometer'],
        correctAnswer: 'Universal serial bus',
    },
    {
        question: 'If you get scurvy, what vitamin are you deficient in?',
        answers: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
        correctAnswer: 'Vitamin C',
    },
    {
        question: 'What does the word dinosaur mean?',
        answers: ['Angry lizard', 'Monster lizard', 'Giant lizard', 'Terrible lizard'],
        correctAnswer: 'Terrible lizard',
    },
    {
        question: 'How many seconds does it take for light to travel from the Earth to the Sun?',
        answers: ['240 seconds', '500 seconds', '170 seconds', '630 seconds'],
        correctAnswer: '500 seconds',
    },
    {
        question: 'How much salt does the human body contain on average?',
        answers: ['1 Kilo', '500 grams', '250 grams', '10 grams'],
        correctAnswer: '250 grams',
    },
]

let musicQuestions = [
    {
        question: 'Who was the first drummer of The Beatles?',
        answers: ['Pete Best', 'Ringo Starr', 'John Bonham', 'Tom Johnson'],
        correctAnswer: 'Pete Best',
    },
    {
        question: 'Which mathematical symbol was the title of Ed Sheeran’s first album in 2011?',
        answers: ['-', '+', 'x', '/'],
        correctAnswer: '+',
    },
    {
        question: 'According to the lyrics of Kelis\' "Milkshake", where does her milkshake bring all the boys?',
        answers: ['To the pub', 'To the street', 'To the yard', 'To the hall'],
        correctAnswer: 'To the yard',
    },
    {
        question: 'What is David Bowie\'s real surname?',
        answers: ['Roberts', 'James', 'Rudolph', 'Jones'],
        correctAnswer: 'Jones',
    },
    {
        question: 'How old was Mozart when he wrote his first piece?',
        answers: ['5', '7', '13', '15'],
        correctAnswer: '5',
    },
    {
        question: 'Who was the most streamed artist on Spotify in 2019?',
        answers: ['Skrillex', 'Post Malone', 'Lil Nas X', 'Billie Eilish'],
        correctAnswer: 'Post Malone',
    },
    {
        question: 'What is Taylor Swift’s middle name?',
        answers: ['Jennifer', 'Katherine', 'Alison', 'Beth'],
        correctAnswer: 'Alison',
    },
    {
        question: 'What is the name of Pearl Jam\'s first album?',
        answers: ['Ten', 'Vs.', 'Vitalogy', 'No Code'],
        correctAnswer: 'Ten',
    },
    {
        question: 'Which band wrote the songs "The Less I Know The Better" and "Elephant"?',
        answers: ['Cage the Elephant', 'System of a Down', 'Queens of the Stone Age', 'Tame Impala'],
        correctAnswer: 'Tame Impala',
    },
    {
        question: 'When translated, what does "Karaoke" mean?',
        answers: ['Empty orchestra', 'Sing along', 'Silent singer', 'Loud voice'],
        correctAnswer: 'Empty orchestra',
    },
]

let animalsQuestions = [
    {
        question: 'For how long can a snail sleep?',
        answers: ['Up to 3 years', 'Up to 6 months', 'Up to 4 weeks', 'Up to 5 days'],
        correctAnswer: 'Up to 3 years',
    },
    {
        question: 'What is a group of lions called?',
        answers: ['A murder', 'A herd', 'A flock', 'A Pride'],
        correctAnswer: 'A Pride',
    },
    {
        question: 'Which is the largest mammal on earth?',
        answers: ['Elephant', 'Blue Whale', 'Rhino', 'Sperm Whale'],
        correctAnswer: 'Blue Whale',
    },
    {
        question: 'Which animal has the strongest bite?',
        answers: ['Hyena', 'Shark', 'Saltwater crocodile', 'Bulldog'],
        correctAnswer: 'Saltwater crocodile',
    },
    {
        question: 'how many hearts does an octopus have?',
        answers: ['1', '2', '3', '4'],
        correctAnswer: '3',
    },
    {
        question: 'Where is a shrimp\'s heart located?',
        answers: ['In its head', 'In its tail', 'In its stomach', 'In one of its legs'],
        correctAnswer: 'In its head',
    },
    {
        question: 'Which animal has the highest blood pressure?',
        answers: ['Hippo', 'Giraffe', 'Hummingbird', 'Elephant'],
        correctAnswer: 'Giraffe',
    },
    {
        question: 'Which animal does NOT have eyelids?',
        answers: ['Duck', 'Crocodile', 'Snake', 'Lemming'],
        correctAnswer: 'Snake',
    },
    {
        question: 'The Gombe war was a violent conflict between two groups of which animal?',
        answers: ['Chimpanzees', 'Lions', 'Hyenas', 'Gorillas'],
        correctAnswer: 'Chimpanzees',
    },
    {
        question: 'What color is a Polar Bear\'s skin?',
        answers: ['Pink', 'White', 'Yellow', 'Black'],
        correctAnswer: 'Black',
    },
]


// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `\nPoints for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some Scrabble!\n");
   let wordToScore = input.question("Enter a word to score:");
   
   let score = oldScrabbleScorer(wordToScore);
   console.log(`Score for '${wordToScore}': ${score}\n`);
   
   };


let newPointStructure;

const scoresByLetter = {
   1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
};
const simpleScorer = function(word) {
  word = word.toUpperCase();
  let letterPoints = '';
  
  for (let i = 0; i < word.length; i++) {
    
   for (const pointValue in scoresByLetter) {
    
    if (scoresByLetter[pointValue].includes(word[i])) {
      letterPoints += `Points for '${word[i]}': $pointValue}\n`;
    }
  }
}
  return letterPoints;
};
  
const scoresForConsAndVowels = {
   3: ['A', 'E', 'I', 'O', 'Y'],
   1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z']
};

const vowelBonusScorer = function(word) {
   word = word.toUpperCase();
   let letterPoints = '';

   for (let i = 0; i < word.length; i++) {

      for (const pointValue in scoresForConsAndVowels) {

         if (scoresForConsAndVowels[pointValue].includes(word[i])) {
            letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
         }
      }
   }
   return letterPoints;
}       
     
     

let scrabbleScorer;

const scoringAlgorithms = [
   {
      Name: 'Simple Score',
      Description: 'Each letter is worth 1 point.',
      ScorerFunction: function simpleScorer(word) {
         word = word.toUpperCase();
         let letterPoints = '';
         
         for (let i = 0; i < word.length; i++) {
           
          for (const pointValue in scoresByLetter) {
           
           if (scoresByLetter[pointValue].includes(word[i])) {
             letterPoints += `Points for '${word[i]}': $pointValue}\n`;
           }
         }
       }
         return letterPoints;
       }
   },
   {
      Name: 'Bonus Vowels',
      Description: 'Vowels are 3 pts, consonants are 1 pt.',
      ScorerFunction: function vowelBonusScorer(word) {
         word = word.toUpperCase();
         let letterPoints = '';
      
         for (let i = 0; i < word.length; i++) {
      
            for (const pointValue in scoresForConsAndVowels) {
      
               if (scoresForConsAndVowels[pointValue].includes(word[i])) {
                  letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
               }
            }
         }
         return letterPoints;
      }  
   },
   {
      Name: 'Scrabble',
      Description: 'The traditional scoring algorithm.',
      ScorerFunction: function oldScrabbleScorer(word) {
         word = word.toUpperCase();
         let letterPoints = "";
       
         for (let i = 0; i < word.length; i++) {
       
           for (const pointValue in oldPointStructure) {
       
             if (oldPointStructure[pointValue].includes(word[i])) {
               letterPoints += `Points for '${word[i]}': ${pointValue}\n`
             }
       
           }
         }
         return letterPoints;
       }
   } 
      ];

   

function scorerPrompt() {
   let algoChoice = input.question('Which scoring algorithm would you like to use?');
   console.log()
}
 
function transform() {};

function runProgram() {
   initialPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

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

   return wordToScore;
   }


let newPointStructure = transform(oldPointStructure);

const scoresByLetter = {
   1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
};
const simpleScorer = function(word) {
  word = word.toUtpperCase();
  let totalPoints = 0;
  
  for (let i = 0; i < word.length; i++) {
   if (scoresByLetter[1].includes(word[i])) {
      totalPoints +=1;
   }
  }    

  return totalPoints;
};
  
const scoresForConsAndVowels = {
   3: ['A', 'E', 'I', 'O', 'Y'],
   1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z']
};

const vowelBonusScorer = function(word) {
   word = word.toUpperCase();
   let totalPoints = 0;

   for (let i = 0; i < word.length; i++) {

      for (const pointValue in scoresForConsAndVowels) {

         if (scoresForConsAndVowels[pointValue].includes(word[i])) {
            totalPoints += Number(pointValue);

         }
      }
   }
   return totalPoints;
}       
     
     

function scrabbleScorer(word) {
   word = word.toLowerCase();
   let totalPoints = 0;

   for (let i = 0; i < word.length; i++) {
      const letter = word[i];

      totalPoints += newPointStructure[letter];
   }
   return totalPoints;
}

const scoringAlgorithms = [
   {
      name: 'Simple Score',
      description: 'Each letter is worth 1 point.',
      scorerFunction: function simpleScorer(word) {
         word = word.toUpperCase();
         let totalPoints = 0;
         
         for (let i = 0; i < word.length; i++) {
          if (scoresByLetter[1].includes(word[i])) {
             totalPoints +=1;
          }
         }    
         return totalPoints;
      }
       },
   {
      name: 'Bonus Vowels',
      description: 'Vowels are 3 pts, consonants are 1 pt.',
      scorerFunction: function vowelBonusScorer(word) {
         word = word.toUpperCase();
         let totalPoints = 0;
      
         for (let i = 0; i < word.length; i++) {
      
            for (const pointValue in scoresForConsAndVowels) {
      
               if (scoresForConsAndVowels[pointValue].includes(word[i])) {
                  totalPoints += Number(pointValue);
               }
            }
         }
         return totalPoints;
      }
   },
   {
      name: 'Scrabble',
      description: 'The traditional scoring algorithm.',
      scorerFunction: function scrabbleScorer(word) {
         word = word.toLowerCase();
         let totalPoints = 0;
      
         for (let i = 0; i < word.length; i++) {
            const letter = word[i];
      
            totalPoints += newPointStructure[letter];
         }
         return totalPoints;
      }
   }
    
      ];

   
  
  
function scorerPrompt() {
   let algoChoice = input.question('Which scoring algorithm would you like to use?\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2:');
   
   if (algoChoice >= 0 && algoChoice <= 2) {
      const selectedAlgo = scoringAlgorithms[algoChoice];
      // Simple scoring
     // console.log("algorithm name: ", scoringAlgorithms[0].name);
   
      return selectedAlgo;
   }
}


function transform(oldPointStructure) {
   let updatedPointStructure = {};
   for (const pointValue in oldPointStructure) {
      let letters = oldPointStructure[pointValue];

      for (let i = 0; i < letters.length; i++) {
         const letter = letters[i];
         
         updatedPointStructure[letter.toLowerCase()] = Number(pointValue);
      }
   }
   return updatedPointStructure;
};
//console.log("Letters with score '4':", oldPointStructure[4]);
//console.log("3rd letter within the key '4' array:", oldPointStructure[4][2]);

//let letters = oldPointStructure[8];
//console.log("Letters with score '8':", letters);
//console.log("2nd letter within the key '8' array:", letters[1]);

function runProgram() {
   let wordToScore = initialPrompt();
   let selectedAlgo = scorerPrompt();
   const totalPoints = selectedAlgo.scorerFunction(wordToScore);   
   console.log(`Score for '${wordToScore}': ${totalPoints}`);  
  
};

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

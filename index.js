// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2? - counter1 stores the count variable within the functional scope while counter2 has the count variable stored in the global scope.
 *
 * 2. Which of the two uses a closure? How can you tell? - counter1 uses closure, you can tell because there is a function being returned within that increments the score variable, but only for that specific instance of counterMaker.
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? - counter1 is more useful if you'd like to keep track of multiple people/teams/scores at once, as they will all have their own data retained. counter2 would be more useful if you simply wanted to find out how many goals were scored across all the teams, for example.
 *
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  return Math.floor(Math.random() * Math.floor(3));
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(scoreCalc, innings) {
  let homeScore = 0;
  let awayScore = 0;
  for (let i = 0; i < innings; i++) {
    homeScore = homeScore + scoreCalc();
    awayScore = awayScore + scoreCalc();
  }
  let scores = {
    Home: homeScore,
    Away: awayScore,
  };
  return scores;
}

finalScore(inning, 9);

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function getInningScore(cb2) {
  let homeTeam = cb2();
  let awayTeam = cb2();
  let currentInning = {
    home: homeTeam,
    away: awayTeam,
  };
  return currentInning;
}

getInningScore(inning);

function scoreboard(cb1, cb2, num) {
  let finalHome = 0;
  let finalAway = 0;
  for (let i = 0; i < num; i++) {
    let thisInning = cb1(cb2);
    finalHome = finalHome + thisInning.home;
    finalAway = finalAway + thisInning.away;
    console.log(`Inning ${i + 1}: ${finalAway} - ${finalHome}`);
  }
  return `Final Score: ${finalAway} - ${finalHome}`;
}

console.log(scoreboard(getInningScore, inning, 9));

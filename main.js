/*import challengeFunctions from './designProblems';
const {randProblem, randConstraint, randBonus} = challengeFunctions;
*/

const designProblems = [
    { location: "the office", problems: ["politely avoid small talks when walking into the pantry", "take a break every 5 min without being caught"]},
    { location: "music festivals", problems: ["go to no1/no2 without giving up your spot in the crowd", "set up a meeting point with friends without internet/cellular connection"]},
    { location: "the kitchen", problems: ["handle onion cutting like a pro without tearing up", "prep a full english (eggs, bacon, tomatoes, mushrooms, hashbrowns...) on a tiny countertop with miminal clean-up"]},
    { location: "the bedroom", problems: ["scroll on your phone hands-free and avoid the phone falling onto your face", "keep sleeping on the cooler side of the pillow throughout the night"]},
    { location: "the bathroom", problems: ["easily obtain toilet roll refill when you're in the loo", "floss hands-free"]},
];

const designConstraints = [
    "look chic so that it can be a decor piece when not in use",
    "be waterproof",
    "be suitable for visually impaired",
    "require no battery/electricity"
];

const bonusPoints = [
    "Create your design under 5 min",
    "Explain your design to your without speaking",
    "Create the packaging for your product"
];

const randProblem = () => {
    const topic = designProblems[Math.floor(Math.random()*designProblems.length)];
    const problem = topic["problems"][Math.floor(Math.random()*2)];
    return `Design a product for ${topic["location"]} so that you can ${problem}. `
}

const randConstraint = () => {
    const constraint = designConstraints[Math.floor(Math.random() * (designConstraints.length))];
    return `The product must ${constraint}. `
}

const randBonus = () => {
    const bonus = bonusPoints[Math.floor(Math.random() * (bonusPoints.length))];
    return `For a bonus point: ${bonus}! `
}

function gameStart(){
    console.log("Welcome to the ingenous invention game! Start with a group of 2+ players with some pen and paper. You have 15 minutes to create (draw) the ultimate invention based on the design problem below. You may choose to take on an extra challenge for 1 extra point (no matter the execution!) After 15 minutes, take turns to present your idea and rate each player's idea out of 5 points. The player with the highest points wins! Your challenge is...");
    console.log(randProblem() + randConstraint() + randBonus());
};

gameStart();
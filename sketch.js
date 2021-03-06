var canvas;
var contestantCount = 0;
var quiz, question;
var database;
var gameState = 0;
var backImage;
var contestant;
var allContestants;

function preload(){

  backImage = loadImage("bts.jpeg");
}

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  contestant = new Contestant();
}


function draw(){
  background(backImage);

  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    quiz.play();
  }
}


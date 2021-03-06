class Quiz{
     constructor(){

     }

     getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        });
     }

     update(state){
        database.ref('/').update({
            gameState: state
          });
     }

     async start(){
         if(gameState === 0){
             var contestant = new Contestant();
             var contestantCountRef = await database.ref('contestantCount').once("value");
             if(contestantCountRef.exists()){
                 contestantCount = contestantCountRef.val();
                 contestant.getCount();
             }
             question = new Question();
             question.display();
         }
     }
     play(){
         background("yellow");
        question.hide();
        textSize(15);
        text("Note: The contestants who have answered correct are highlighted with green",120,100);
        Contestant.getPlayerInfo();
        var yPosition = 150
        for(var plr in allContestants){
            yPosition = yPosition+20;
            var correctAns = "4";
            console.log(allContestants[plr].answer)
            if(allContestants[plr].answer.equals(correctAns)){
                fill("green");
            }
            else{
                fill("red");
            }
            text(allContestants[plr].name, 150,yPosition);
        }
     }
    }

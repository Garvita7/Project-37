class Contestant {
    constructor(){
       
      
      this.answer = null;
      this.index = null;
      
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var playerIndex = "contestants/contestant" + contestantCount;
      database.ref(playerIndex).set({
        name:this.name,
        answe:this.answer
        //distance:this.distance
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('contestants');
      playerInfoRef.on("value",(data)=>{
        allContestants = data.val();
      });
    }
    }
  
  
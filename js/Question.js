class Question {
    constructor() {
  
      this.input1 = createInput("name");
      this.input2 = createInput("Option");
      //this.button = createButton("play");
      this.question = createElement('h2');
      this.option1 = createElement('h2');
      this.option2 = createElement('h2');
      this.option3 = createElement('h2');
      this.option4 = createElement('h2');
      this.button = createButton("play");
      this.title = createElement("h2");
      this.name = null;  
      
    }
    hide(){
      this.question.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();

    }
  
    display(){
      this.title.html("My Quiz");
      this.title.position(130, 0);

      this.question.html("Question- In which year did BTS debut?");
      this.question.position(150, 80);

      this.option1.html("1: 1999");
      this.option1.position(150,100);
      this.option2.html("2: 2000");
      this.option2.position(150,120);
      this.option3.html("3: 2016");
      this.option3.position(150,140);
      this.option4.html("4: 2013");
      this.option4.position(150,160);

      this.input1.position(150,230);
      this.input2.position(250,230);
    
        this.button.position(200, 260);
         this.button.mousePressed(()=>{
             console.log("hi");
             this.title.hide();
             this.input1.hide();
             this.input2.hide();
             this.button.hide();
             contestant.name = this.input1.value();
             contestant.answer = this.input2.value(); 
             contestantCount+=1;
             contestant.index = contestantCount;
             contestant.update();
             contestant.updateCount(contestantCount);
             
 
         });
        }
  }
  
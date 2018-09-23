import { Component, OnInit, ElementRef } from '@angular/core';
import { Gameplay } from './calculations';
import { Directive, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends Gameplay implements OnInit{

  title = 'app';
  optionSelected: number = 0;
  gameResult = {};
  movesMean = {
  	1 : 'Rock',
  	2 : 'Paper',
  	3 : 'Scissors'
  };
  gameResultRulesObj = {
  	1 : 'win',
  	2 : 'lose',
  	3 : 'draw',
  	4 : 'what just happened'
  }
  isLoaderShown: boolean = false;
  constructor(private elRef: ElementRef){
  	super();
  }
  ngOnInit(){
  	// this.isLoaderShown = true;
  }
  selectedOption(option){
  	
  	this.isLoaderShown = true;

  	var moveDivs = this.elRef.nativeElement.querySelectorAll('.optionDiv');
    
    moveDivs.forEach(function(moveDiv){

		if(option == moveDiv.id){
			moveDiv.style.background = 'pink';
		} 
		else{
			moveDiv.style.background = 'black';
		}    	
    });


  	this.optionSelected = option;
  	
	setTimeout( () => {

		this.isLoaderShown = false;
		this.gameResult = this.calculatedTheGame(option);
	    /*
	    switch(this.gameResult.result){

	    	case(1):
				console.log(this.gameResultRulesObj[this.gameResult.result]);
	    		break;
			case(2):
				console.log(this.gameResultRulesObj[this.gameResult.result]);
	    		break;
			case(3):
				console.log(this.gameResultRulesObj[this.gameResult.result]);
	    		break;
	    }	*/
	}, 700 );   
  }
}

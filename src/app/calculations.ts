export class Gameplay {

	winOrLearned =  {

		1: { beats: 3, losesTo: 2  },
		2: { beats: 1, losesTo: 3  },
		3: { beats: 2, losesTo: 1  }
	};
	calculatedTheGame(whatWasChosen){

		// 1 is for winning 
		// 2 is for losing
		// 3 is for a draw
		// 4 is for 'you will be taken to a back room to be interrogated'
		
		let computersMove = this.randomNumberGiver();
		if(whatWasChosen === computersMove){

			return {
				result: 3,
				computersMove: computersMove
			};
		}
		else{
			
			if(this.winOrLearned[whatWasChosen].beats === computersMove  ){
				
				return {
					result: 1,
					computersMove: computersMove
				};
			}
			else if(this.winOrLearned[whatWasChosen].losesTo === computersMove){
				
				return {
					result: 2,
					computersMove: computersMove
				};
			}
			else{
				return {
					result: 4,
					computersMove: computersMove
				};
			}			
		}
		
	}
	randomNumberGiver(){

		let max = 3;
		let min = 1;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}
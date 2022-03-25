import { GameManagerService } from './../services/game-manager.service';
import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.css']
})
export class GamePanelComponent implements OnInit {

  win: boolean = false;
  lost: boolean = false;

  lifes: number = 6;

  imgPath:string = ''

  imgPaths: string[] = [
    '../assets/images/Fase0.png',
    '../assets/images/Fase1.png',
    '../assets/images/Fase2.png',
    '../assets/images/Fase3.png',
    '../assets/images/Fase4.png',
    '../assets/images/Fase5.png',
    '../assets/images/Fase6.png',
  ]

  word:string[] = [];

  guessed: number = 0;
  tentati: number = 0;

  constructor(private gameManager: GameManagerService) { }
  
  ngOnInit(): void {
    this.imgPath = this.imgPaths[0];

    this.gameManager.gameStarted.subscribe(
      () => {
        this.word = this.gameManager.getWord();
        this.lifes = 6;
        this.guessed = 0;
        this.win = false;
        this.lost = false;
        this.tentati = 0;
        this.imgPath = this.imgPaths[0];
      }
    );
    
    this.gameManager.letterInput.subscribe(
      (eventInput: string) => {
        if(!this.word.includes(eventInput)){
          this.tentati += 1;
          this.imgPath = this.imgPaths[this.tentati];
          this.lifes -= 1;
          this.checkLooseCondition();
        }
      }
    );
  }
  
  checkWinCondition(){
    if(this.guessed == this.word.length){
      //YOU WON
      console.log('YOU WIN');
      this.win = true;
      this.gameManager.gameEnded.emit();
    }
  }

  checkLooseCondition(){
    if(this.lifes == 0){
      //Game lost
      console.log('YOU LOST');
      this.lost = true;
      this.gameManager.gameEnded.emit();
    }
  }

  onGuessed(){
    console.log("Guessed")
    this.guessed += 1;
    this.checkWinCondition();
  }

}

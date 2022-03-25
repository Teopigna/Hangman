import { GameManagerService } from './../services/game-manager.service';
import { Component, OnInit } from '@angular/core';

const letts: string[] = [
    'A', 'B', 'C', 'D',
    'E', 'F', 'G', 'H', 
    'I', 'J', 'K', 'L', 
    'M','N', 'O', 'P',
    'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X',
    'Y', 'Z']


@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  letters: string[] = letts;
  gameStarted: boolean = false;
  gameEnded: boolean = false;
  constructor(private gameManager: GameManagerService) { }

  ngOnInit(): void {
    this.gameManager.gameStarted.subscribe(
      () => {this.gameStarted = true
            this.gameEnded = false;
      }
    );

    this.gameManager.gameEnded.subscribe(
      () => {this.gameEnded = true}
    );
  }

  checkLetter(letter: string){
    // console.log('letter pressed:  ' +letter);
    this.gameManager.sendInput(letter);
  }
}

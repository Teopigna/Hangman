import { GameManagerService } from './../services/game-manager.service';
import { Component, OnInit } from '@angular/core';

const defaultDifficulty = 'easy';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  gameStarted: boolean = false;
  difficulty: string = defaultDifficulty;

  constructor(private gameManager: GameManagerService) { }

  ngOnInit(): void {
    this.difficulty = defaultDifficulty;
  }

  setDifficulty(difficulty: string){
    this.difficulty = difficulty;
  }

  startGame(){
    this.gameManager.startGame(this.difficulty);
    this.gameStarted = true;
  }

}

import { GameManagerService } from './../services/game-manager.service';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-word-cell',
  templateUrl: './word-cell.component.html',
  styleUrls: ['./word-cell.component.css']
})
export class WordCellComponent implements OnInit {
  
  @Input() letter: string = '' ;
  @Input() position: number = 0;
  @Input() wordSize: number = 0;

  @Output() guessed = new EventEmitter();

  revealed : boolean = false;
  hintRevealed: boolean = false;

  hinted: boolean = false;

  constructor(private gameManager: GameManagerService) { }

  ngOnInit(): void {
    this.gameManager.gameStarted.subscribe(
      () => {
        this.revealed = false;
        this.hintRevealed = false;
        this.hinted = false;
      }
    );
    this.gameManager.letterInput.subscribe(
      (eventInput: string) => {
        if(this.letter == eventInput){
          if(!this.revealed){
            this.revealed = true;
            this.hintRevealed = false;
            this.guessed.emit();
          }
        }
      }
    );
    this.gameManager.hint.subscribe(
      (eventInput: string) => {
        if(eventInput == 'all'){
          this.hintRevealed = !this.hintRevealed;
        }
        if(eventInput == 'hint'){
          if(!this.hinted){
            if(this.position == 0 || this.position == (this.wordSize-1)){
              this.hinted = true;
              this.revealed = true;
              this.hintRevealed = false;
              this.guessed.emit();
            }
          }           
        }
      }
    );
  }

}

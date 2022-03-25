import { GameManagerService } from './../services/game-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-panel',
  templateUrl: './help-panel.component.html',
  styleUrls: ['./help-panel.component.css']
})
export class HelpPanelComponent implements OnInit {

  shown: boolean = false;
  started: boolean = false;

  constructor(private gameManager : GameManagerService) { }

  ngOnInit(): void {
    this.gameManager.gameStarted.subscribe(
      () => {
        this.started = true;
        this.shown = false;
      }
    )
  }

  hint(type: string){
    if(type=='all') {
      this.shown = !this.shown;
    }
    this.gameManager.show(type);
  }

}

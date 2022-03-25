import { GameManagerService } from './../services/game-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-panel',
  templateUrl: './help-panel.component.html',
  styleUrls: ['./help-panel.component.css']
})
export class HelpPanelComponent implements OnInit {

  constructor(private gameManager : GameManagerService) { }

  ngOnInit(): void {
  }

  hint(type: string){
    this.gameManager.show(type);
  }

}

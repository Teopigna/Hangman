import { GameManagerService } from './services/game-manager.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { GamePanelComponent } from './game-panel/game-panel.component';
import { WordCellComponent } from './word-cell/word-cell.component';
import { OptionsComponent } from './options/options.component';
import { HelpPanelComponent } from './help-panel/help-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    GamePanelComponent,
    WordCellComponent,
    OptionsComponent,
    HelpPanelComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [GameManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

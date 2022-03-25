import { EventEmitter } from '@angular/core';


export class GameManagerService{
    
    setWord : string = 'CIAO';

    wordsListEasy: string[] = [
        'CIAO',
        'CANE',
        'GATTO',
        'LATTE',
        'PANE'
    ]

    wordsListMedium: string[] = [
        'CONDANNA',
        'BISCOTTO',
        'CENTRALE'
    ]

    wordsListHard: string[] = [
        'CONDOMINIO',
        'TRANSATLANTICO',
        'MONDOVISIONE'
    ]

    
    letterInput = new EventEmitter<string>();
    gameStarted = new EventEmitter();
    gameEnded = new EventEmitter();
    hint = new EventEmitter<string>();

    getWord(): string[]{
        return this.setWord.split('');
    }

    sendInput( letter : string) {
        this.letterInput.emit(letter);
    }

    startGame(difficulty: string){
        if(difficulty=='easy'){
            const ind = Math.floor(Math.random() * this.wordsListEasy.length)
            this.setWord = this.wordsListEasy[ind];
            this.gameStarted.emit();
        }
        if(difficulty=='medium'){
            const ind = Math.floor(Math.random() * this.wordsListMedium.length)
            this.setWord = this.wordsListMedium[ind];
            this.gameStarted.emit();
        }
        if(difficulty=='hard'){
            const ind = Math.floor(Math.random() * this.wordsListHard.length)
            this.setWord = this.wordsListHard[ind];
            this.gameStarted.emit();
        } 
    }
    
    show(type: string) {
        this.hint.emit(type);
    }

}
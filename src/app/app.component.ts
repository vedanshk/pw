import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pw';
  password = '';
  includeLetters = false;
  includeSymbols = false;
  includeNumbers = false;
  length = 0;
  onLetterChange() {
    this.includeLetters = !this.includeLetters;
  }

  onSymbolUseChange() {
    this.includeSymbols = !this.includeSymbols;
  }

  onNumberUseChange() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeLength(value: string) {
    this.length = parseInt(value);
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghighklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.length; ++i) {
      const index = Math.floor(Math.random() * validChars.length);

      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
}

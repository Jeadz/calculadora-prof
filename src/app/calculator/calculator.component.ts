import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  expression: string = '';

  appendToExpression(value: string) {
    this.expression += value;
  }

  evaluateExpression() {
    try {
      this.expression = eval(this.expression).toString();
    } catch (error) {
      this.expression = 'Error';
    }
  }

  clearExpression() {
    this.expression = '';
  }
}

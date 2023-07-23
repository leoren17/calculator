import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formula: "0",
            output: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.calculate = this.calculate.bind(this);
    }

    // formula is a string with only one or zero operator
    // returns string
    calculate(formula) {
        // let formulaArr = formula.split(/([\+\-\*\/])/g);
        formula = String(formula);
        if (/NaN/g.test(formula)) { return "NaN" }
        if (!/\d[\+\-\*\/]/g.test(formula)) {
            return formula;
        }
        

        const operator = formula.match(/\d[\+\-\*\/]/)[0].slice(-1);
        const formulaArr = formula.split(operator);    
        const numArr = formulaArr.map((currNum) => {return +currNum});
        let initial = 0 // used in the reduce() method
        if (operator == '+') {
            // return numArr[0] + numArr[1];
            return String(numArr.reduce((acc, curr) => acc + curr, initial));
        } else if (operator == '-') {
            // return numArr[0] - numArr[1];
            return String(numArr.reduce((total, curr) => total - curr));
        } else if (operator == '*') {
            // return numArr[0] * numArr[1];
            initial = 1;
            return String(numArr.reduce((total, curr) => total * curr, initial));
        } else {
            // return numArr[0] / numArr[1];
            return String(numArr.reduce((total, curr) => total / curr));
        }
    }
    
    handleClick(e) {
        let val = e.target.value;
        if (val == "=") {
            this.setState((prevState) => ({
                formula: this.calculate(prevState.formula),
                output: this.calculate(prevState.formula)
            }))
        } else if (val == 'AC') {
            this.setState({
                formula: "0",
                output: 0
            })
        } /* else if (val == '.') {
            this.setState((prevState) => ({
                formula: /\./.test(prevState.formula)
                ? prevState.formula
                : prevState.formula + val,
                output: /\./.test(prevState.output)
                    ? prevState.output
                    : prevState.output + val
            }))
        }*/ else if (val == '/' || val == '*' || val == '+' || val == '-') {
            this.setState((prevState) => ({
                formula: /[\+\-\*\/]/.test(prevState.formula.slice(-1))         // 
                ? prevState.formula.slice(0, prevState.formula.length-1)+val    // ...+
                // last character is number then
                : /[\+\-\*\/]/.test(prevState.formula)                         // ...
                    ? this.calculate(prevState.formula) + val                  // ...+...
                    : prevState.formula + val,                                 // 123

                output: val
            }))
        } else { // if user clicks a number
            this.setState((prevState) => ({
                formula: /^0$/.test(prevState.formula)
                ? val
                : prevState.formula + val,
                output: /^0$|[\+\-\*\/]/.test(prevState.output)
                    ? val
                    : prevState.output + val
            }));
        }
        
    }

    render() {
        return (
            <div className="Calculator">
                <div className="formula">{ this.state.formula }</div>
                <div className="output">{ this.state.output }</div>
                <div className="buttons-grid">
                    <button id="allClear" className="grid-col-span-3" value="AC" onClick={this.handleClick}>AC</button>
                    <button id="divide" value="/" onClick={this.handleClick}>/</button>
                    
                    <button id="seven" value="7" onClick={this.handleClick}>7</button>
                    <button id="eight" value="8" onClick={this.handleClick}>8</button>
                    <button id="nine" value="9" onClick={this.handleClick}>9</button>
                    <button id="multiply" value="*" onClick={this.handleClick}>x</button>
                
                    <button id="four" value="4" onClick={this.handleClick}>4</button>
                    <button id="five" value="5" onClick={this.handleClick}>5</button>
                    <button id="six" value="6" onClick={this.handleClick}>6</button>
                    <button id="subtract" value="-" onClick={this.handleClick}>-</button>
                    
                    <button id="one" value="1" onClick={this.handleClick}>1</button>
                    <button id="two" value="2" onClick={this.handleClick}>2</button>
                    <button id="three" value="3" onClick={this.handleClick}>3</button>
                    <button id="add" value="+" onClick={this.handleClick}>+</button>

                    <button id="zero" className="grid-col-span-3" value="0" onClick={this.handleClick}>0</button>
                    {/* <button id="decimal" value="." onClick={this.handleClick}>.</button> */}
                    <button id="equals" value="=" onClick={this.handleClick}>=</button>
                </div>
            </div>
        );
    }
}

export default Calculator;
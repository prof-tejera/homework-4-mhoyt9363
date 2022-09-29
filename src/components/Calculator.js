//------------------------------------------------------
// This component will create a straight forward
// calculator for user input and results display.
//------------------------------------------------------

import { useState } from "react";
import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";

const Calculator = () => {
  //-----------------------------------------------------
  //  These variables track the state of the
  //  calculator. They track the first number entered
  //  by the user, the operation (+, -, etc.) and the
  //  second number. When '=' is clicked the result
  //  will be determined. If updated colors or other
  //  styling are needed, they are stored here as well.
  //----------------------------------------------------- 
  const [firstNumber, setFirstNum] = useState("");
  const [secondNumber, setSecondNum] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const [updateStyle, setUpdateStyle] = useState({});

  //-----------------------------------------------------
  //  This function handles number entries. It determines if this
  //  is the first number entered or the second.
  //  Then it will determine if this is a multiple-digit
  //  number. If it's multiple digits, then will advance the
  //  number to the next decimal place by multiplying by 10. 
  //-----------------------------------------------------  
  const handleNumberClick = (value) => {

    if (operation === "" && result === "") {
      setFirstNum((firstNumber * 10) + value);
    } else if (operation !== "" && result === "") {
      setSecondNum((secondNumber * 10) + value);
    } else {
      handleClearEvent();
      setFirstNum(value);
    }
  };

  //-----------------------------------------------------
  //  This function will clear the calculator when selected or 
  //  the operation is done, as defined by hitting the '=' key                                                
  //-----------------------------------------------------
  const handleClearEvent = () => {
    setFirstNum("");
    setSecondNum("");
    setOperation("");
    setResult("");
    setUpdateStyle({});
  };

  //-----------------------------------------------------
  //  This function will clear the calculator when selected or 
  //  the operation is done, as defined by hitting the '=' key                                                
  //  When the user clicks '=' this will process the result
  //-----------------------------------------------------
  const handleEqualEvent = (e) => {
    let result = 0;
    let err = '';

    if (firstNumber === '' || secondNumber === '') 
      err = 'Err: Click clear and enter a number';
    
    // using a switch statement to avoid 'eval'
    switch (operation) {
      case "+":
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case "-":
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case "/":
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
        break;
      case "x":
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      default:
        err = 'Err: missing operation -> click clear'; 
    }
    // check for errors
    if(err === '') {
      setResult(`= ${result.toLocaleString()}`);
      setUpdateStyle({ 
        backgroundColor: "lightgreen",
        border: "3px dashed green"
      });
      }else{
        setResult(err);
        setUpdateStyle({ 
          color: "fireBrick",
          border: "3px dashed red",
          backgroundColor: "lightPink",
          fontWeight: "bold",
        });
    }
  };

  //-----------------------------------------------------
  //  This function evaluates the operation and handles 
  //  them appropriately. If clear, then reset the calculator
  //  and if 'equals' then determine the result.
  //-----------------------------------------------------
  const handleOperationClick = (value) => {
    if (value === "clear") {
      handleClearEvent();
    } else if (value === "=") {
      handleEqualEvent(value);
    } else {
      setOperation(value);
    }
  };

  return (
    <div>
      <Screen updateStyle={updateStyle} value={`${(firstNumber).toLocaleString()} ${operation} ${(secondNumber).toLocaleString()} ${result}`} />
      <div style={{ display: "flex" }}>
        <div>
          <Number type={'even'} onClick={() => handleNumberClick(0)} >0</Number>
          <Number type={'odd'}  onClick={() => handleNumberClick(1)} >1</Number>
          <Number type={'even'} onClick={() => handleNumberClick(2)} >2</Number>
          <Number type={'odd'}  onClick={() => handleNumberClick(3)} >3</Number>
          <Number type={'even'} onClick={() => handleNumberClick(4)} >4</Number>
          <Number type={'odd'}  onClick={() => handleNumberClick(5)} >5</Number>
          <Number type={'even'} onClick={() => handleNumberClick(6)} >6</Number>
          <Number type={'odd'}  onClick={() => handleNumberClick(7)} >7</Number>
          <Number type={'even'} onClick={() => handleNumberClick(8)} >8</Number>
          <Number type={'odd'}  onClick={() => handleNumberClick(9)} >9</Number>
        </div>
        <div style={{ paddingLeft: 10 }}>
          <Operation value="+" onClick={handleOperationClick} />
          <Operation value="/" onClick={handleOperationClick} />
          <Operation value="x" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
          <Operation value="=" onClick={handleOperationClick} />
          <Operation value="clear" onClick={handleOperationClick} 
                     style={{fontWeight: "bold", color: "yellow"}} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;

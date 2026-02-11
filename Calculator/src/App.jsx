import './App.css'
import Text from './components/text/index.jsx'
import Button from './components/button/index.jsx'
import { useState } from 'react';

function App() {

  const [text , setText] = useState("");
  const nums = [0,1,2,3,4,5,6,7,8,9];
  const operands = ["A/C" , "+" , "-" ,"/","*","%" ,"="];

  function handleClick(value){
    if(value==="A/C"){
      setText("");
    }else if(value === "="){
        setText(eval(text));
    }
    else{
      setText(text + value);
    }
  }
  console.log(text);

  return (
    <> 
      <Text text={text}></Text>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"5px"  }}>

        {nums.map(( index )=>{
          return (<Button key={index} label={index} onButtonClick={handleClick} ></Button>)
        })}

      </div>
      <div>
        {operands.map(( operand )=>{
          return (<Button key={operand} label={operand} onButtonClick={handleClick} ></Button>)
        })}
      </div>
      
    </>
  )
}

export default App

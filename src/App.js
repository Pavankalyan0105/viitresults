import { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Semesters from './Components/Semesters';

const results = {
  "2022" : [
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing'  
  ],
  "2023" : [
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing'  
  ],
  "2024" : [
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing'  
  ],
  "2025" : [
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing',  
    'https://drive.google.com/file/d/1SAu9zt9GLr0Ck5jKJE0_pu-7RgwsWus4/view?usp=sharing'  
  ]

}

function App() {
  const [ year , setYear ] = useState("")
  return (
    <div className="App">
      {
        (year === "")?(
            <Home setYear = {setYear} year = {year}/>
        ) : (
          <Semesters year = {year} results={results}/>
        )
      }

     
    </div>
  );
}

export default App;

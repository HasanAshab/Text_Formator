import './App.css';
//import Comp1 from './comp1/Comp1';
import FormUp from './formup/FormUp';
import React, {useState} from 'react';

function App() {
  const [color, setColor] = useState('white');
  
  const togle = ()=>{
    if (color === 'white'){
      document.body.classList.remove("bg-white");
      document.body.classList.add("bg-gray-800");
      setColor('black');
    }
    else{
      document.body.classList.remove("bg-gray-800");
      document.body.classList.add("bg-white");
      setColor('white');
    }
  }
  
  return (
    <>
      <div className={`flex h-[5vh] justify-between items-center ${color==="white"?"bg-purple-600":"bg-violet-900"}`}>
        <h1 className="text-[20px] font-bold text-white">Text Formator</h1>
        <ul>
      <label htmlFor="checkbox" className={`text-white text-[17px] float-right`}>Enable DarkMode</label>
      <input id="checkbox" type="checkbox" onClick={togle} className="float-right relative top-[3px] right-[2px]"/>
        </ul>
      </div>
      <FormUp color={color} togle={togle}/>
    </>
  );
}

export default App;

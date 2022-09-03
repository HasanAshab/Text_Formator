import './FormUp.css';
//import PropTypes from 'prop-types';
import React, {useState} from 'react';

export default function FormUp(props){
  const [text, setText] = useState('Enter Here...');
  let words = text.split(' ').filter(function(n) { return n != '' }).length;
  let space = 0;
  let ws = 0;
  let lines = text.split('\n').length;
  if(text === ''){words--;}
  
  String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
  
  const cutF = ()=>{
    navigator.clipboard.writeText(text);
    setText('');
  }
  
  const copyF = ()=>{
    navigator.clipboard.writeText(text);
  }
  
  const pasteF = ()=>{
    navigator.clipboard.readText().then(t =>{
      setText(t);
    });
  }
  
  const changeF = (e)=>{
    setText(e.target.value);
  }
  
  for(let i in text){
    if(text.charAt(i) === ' '){
      space++;
    }
    if(words<0){words = 0;}
     // if(text.charAt(i+1) === ' '){ws++;};
     // else if(text.charAt(i+1) === ''){words--};
    }
  
  const upF = ()=>{
    const upText = text.toUpperCase();
    setText(upText);
  }
  
  const lowF = ()=>{
    const newText = text.toLowerCase();
    setText(newText);
  }
  
  const formatF = ()=>{
    let newText = text;
    newText = newText.replaceAt(0, newText.charAt(0).toUpperCase());
    for(let index = 1; index<newText.length; index++){
      if(newText.charAt(index) === '.' || newText.charAt(index) === '?' || newText.charAt(index) === '!'){
        newText = newText.replaceAt(index+1, newText.charAt(index+1).toUpperCase());
        if(newText.charAt(index+1) ===' '){
          newText = newText.replaceAt(index+2, newText.charAt(index+2).toUpperCase());
        }
        else if(newText.charAt(index+1) ==='\n'){
          newText = newText.replaceAt(index+2, newText.charAt(index+2).toUpperCase());
        }
      }
     // else{
       // newText.replaceAt(index+1, newText.charAt(index+1);
    }
    newText = newText.replace(/\s+/g,' ').trim();
   setText(newText);
  }
  
  return(
    <>
    <div className="">
      <label htmlFor="checkbox" className={`${props.color==="white"?"text-black":"text-white"} float-right`}>Enable DarkMode</label>
      <input id="checkbox" type="checkbox" onClick={props.togle} className="float-right relative top-[3px] right-[2px]"/>
      <textarea className='mt-20 mb-0 container border-[3px] border-black h-[15vh] {props.color==="white"?"text-black":"text-white"}' value={text} onChange={changeF}></textarea>
      <small className={props.color==="white"?"text-black":"text-white"}>{words} Words, {text.length-space} Chars, {lines} Lines</small>
      <br/><br/>
      <div className="flex flex-wrap space-y-1 space-x-1 justify-center">
        <button className="btn" onClick={cutF}>Cut</button>
        <button className="btn" onClick={copyF}>Copy</button>
        <button className="btn" onClick={pasteF}>Paste</button>
        <button className="btn" onClick={formatF}>Format</button>
        <button className="btn" onClick={upF}>Convert Upper</button>
        <button className="btn" onClick={lowF}>Convert Lower</button>
        
      </div>
      <br/><br/>
      <div className={`${props.color==="white"?"text-black":"text-white"} text-[20px] font-bold m-auto`}>Preview</div>
      <p className={props.color==="white"?"text-black":"text-white"}>{text===""?"Nothing in TextBox":text}</p>
    </div>
    
    </>
    )
}

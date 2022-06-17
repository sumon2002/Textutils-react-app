import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleUpClick=()=>{
        console.log("On click!");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success")
    }
    const handleLowClick=()=>{
        console.log("On click!");
        let newText2 = text.toLowerCase();
        setText(newText2);
        props.showAlert("Converted to Lowercase!","success")
    }
    const RemoveExtraSpaces=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed extra spaces!","success")
    }
    const ClearTextArea=()=>{
      setText("");
      props.showAlert("Cleared textarea!","success")
    }
    const handleOnChange =(event)=>{
        console.log("On change!");
        setText(event.target.value);
    }
    const [text,setText]=useState(" ");
  return (
    <>
    <div className='container'>
      <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='light'?'black':'white'}} className="form-control" value={text} onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-secondary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-success" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-danger mx-2" onClick={ClearTextArea}>Clear Text</button>
    </div>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1 >Your Text Summary</h1>
        <p>Above text contains {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes taken to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something In The Text-Box To Preview Here"}</p>
    </div>
    </>
  )
}

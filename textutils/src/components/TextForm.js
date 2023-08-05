import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick=()=>{
    // console.log("Uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
}
const handleLoClick=()=>{
  // console.log("Uppercase was clicked"+text);
  // let newText='';
  let newText=text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to LowerCase","success");

}
const speak=()=>{
  // console.log("Uppercase was clicked"+text);
  let newText=new SpeechSynthesisUtterance();
  newText.text=text;
 window.speechSynthesis.speak(newText);
 props.showAlert("Converted to Speak","success");
}
const pause=()=>{
  // console.log("Uppercase was clicked"+text);
  let newText=new SpeechSynthesisUtterance();
  newText.text=text;
window.speechSynthesis.pause(newText);
props.showAlert("Converted to Pause","success");
}
const resume=()=>{
  // console.log("Uppercase was clicked"+text);
  let newText=new SpeechSynthesisUtterance();
  newText.text=text;
window.speechSynthesis.resume(newText); 
props.showAlert("Converted to resume","success");
}
const handleCopy=()=>{
  let text=document.getElementById("myBox");
  text.select();
navigator.clipboard.writeText(text.value);
props.showAlert("Copied to clipboard","success");
}

const handleextraspace=()=>{
  let newText=text.split(/[ ]+/);
 setText(newText.join(" "))
 props.showAlert("extra spaces handled","success");
}

const handleappend=()=>{
  // let newText=document.getElementById("myBox");
  let newText=text.split(/[ ]+/);
  setText(newText.join(""))
  props.showAlert("Text appended","success");
}

const handleOnChange=(event)=>{
    // console.log("On change");
    setText(event.target.value);
   
  
}
    const [text, setText] = useState('');   
    // setText("text please");
  return (
    <>
    {/* <div> */}
      {/*<div className="mb-3">
   <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div> */}
<div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label htmlFor="myBox" className="form-label">Enter your text here..</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',
  color:props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button  className="btn btn-primary mx-2" onClick={speak}>Convert to Speak</button>
<button  className="btn btn-primary mx-2" onClick={pause}>Convert to pause</button>
<button  className="btn btn-primary mx-2" onClick={resume}>Convert to resume</button>
<button  className="btn btn-primary mx-2" onClick={handleCopy}>Copy the text</button>
<button  className="btn btn-primary mx-2" onClick={handleextraspace}>Handle extra space</button>
<button  className="btn btn-primary mx-2 my-2" onClick={handleappend}>Handle append</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
<h2>Your text summary</h2>

<p>
{text.split(" ").length>1?text.split(" ").length-1:0}  <b>words</b>and  {text.length} <b>characters</b>
</p>

<p>{0.008*text.split(" ").length} <b>Minutes read</b></p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter your text to preview here"}</p>
    </div>
  </>

  )
}

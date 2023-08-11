import React, {useState} from 'react'

export default function TextForm(props) {
  const calculateReadingTime = (wordCount) => {
    const wordsPerMinute = 200; // Average reading speed (adjust as needed)
    const minutes = wordCount / wordsPerMinute;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = Math.floor(minutes % 60);
    const seconds = Math.floor((minutes * 60) % 60);

    return { hours, minutes: remainingMinutes, seconds };
  };
const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
}
const handleLoClick=()=>{
  let newText=text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to LowerCase","success");

}
const speak=()=>{
  let newText=new SpeechSynthesisUtterance();
  newText.text=text;
 window.speechSynthesis.speak(newText);
 props.showAlert("Converted to Speak","success");
}

const handleCopy=()=>{
navigator.clipboard.writeText(text);
props.showAlert("Copied to clipboard","success");
}

const handleextraspace=()=>{ 
  let newText=text.split(/[ ]+/);
 setText(newText.join(" "))
 props.showAlert("extra spaces handled","success");
}

const handleappend=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(""))
  props.showAlert("Text appended","success");
}
const cleartext=()=>{
  let newText='';
  setText(newText);
  props.showAlert("Cleared text","success");
}

// const handleOnChange=(event)=>{
//     setText(event.target.value);
   
  
// }
const handleOnChange = (event) => {
  const newText = event.target.value;
  setText(newText);
  const wordCount = newText.trim().split(/\s+/).filter((e) => e !== '').length;
  setReadingTime(calculateReadingTime(wordCount));
};

const [text, setText] = useState('');
const [readingTime, setReadingTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  return (
    <>
 
{/* <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>  */}
<div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
<h1 className='mb-3'>{props.heading}</h1> 
<div className="mb-3">
 
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',
  color:props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0}className="btn btn-dark mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0}className="btn btn-dark mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button  disabled={text.length===0}className="btn btn-dark mx-2 my-1" onClick={speak}>Convert to Speak</button>
<button  disabled={text.length===0}className="btn btn-dark mx-2 my-1" onClick={handleCopy}>Copy the text</button>
<button  disabled={text.length===0}className="btn btn-dark mx-2 my-1" onClick={handleextraspace}>Handle extra space</button>
<button  disabled={text.trim(" ").split(" ").filter((e)=>e!=="").length<=1}className="btn btn-dark mx-2 my-1" onClick={handleappend}>Append texts</button> 
<button  disabled={text.length===0}className="btn btn-dark mx-2 my-1" onClick={cleartext}>Clear text</button>

    </div>
    
    <div disabled={text.length===0}className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
<h2>Your text summary</h2>

<p>
{text.trim(/\s+/).split(/\s+/).filter((e)=>e!=="").length} <b>words</b> and  {text.length} <b>characters</b>
</p>

{/* <span>{((0.008*(text.trim(/\s+/).split(/\s+/).filter((e)=>e!=="").length))/60).toFixed(0)} <b> hours read</b></span>
<span> and </span>
<span>{(0.008*(text.trim(/\s+/).split(/\s+/).filter((e)=>e!=="").length)).toFixed(0)} <b> minutes read</b></span>
<span> and </span>
<span>{((0.008*(text.trim(/\s+/).split(/\s+/).filter((e)=>e!=="").length))*60).toFixed(0)} <b> seconds read</b></span> */}
 <span>
          {readingTime.hours} <b>hours</b>, {readingTime.minutes} <b>minutes</b>, and {readingTime.seconds} <b>seconds read</b>
        </span>

<h2>Preview</h2>
<p>{text.length>0?text:"Nothing to preview"}</p> 
    </div>
  </>

  )  
}

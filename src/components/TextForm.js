import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked"); 
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handleLoClick = () =>{
        // console.log("Lowercase was clicked"); 
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }
    const handleClearClick = () =>{
        // console.log("Lowercase was clicked"); 
        let newText = ('');
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const handleCopyClick = () =>{
        // console.log("Copy was clicked"); 
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () =>{
        // console.log("Copy was clicked"); 
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed", "success");
    }

    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "jdkllf";//wrong way to change the state
    // setText("jdkllf");// correct way to change the state
    return (    
        <>
  <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
  <h1> {props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
    color: props.mode==='dark'?'white':'#042743'}}></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick} >Convert to Upper Case</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lower Case</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopyClick} >Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove ExtraSpaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes Read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
</>
    )
}

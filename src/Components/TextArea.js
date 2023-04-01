import React, { useState } from 'react'

export default function TextArea(props) {
    const [Text, setText] = useState("");

    const handleUpClick = () => {
        setText(Text.toUpperCase())
        props.showAlert("Converted To Uppercase!","success");
    };
    
    const handleLowClick = () => {
        setText(Text.toLowerCase())
        props.showAlert("Converted To Lowercase!","success");
    };
    
    const handleClearClick = () => {
        setText('')
        props.showAlert("Text Cleared!","success");
    };
    
    const handleSpaceClick = () => {
        let newText = Text.split(/[ ]+/g);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!","success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value)
    };

    let NoOfWords = (Text)=>{
        let wordCount = Text.split(' ').length;
        Text.split(' ').forEach((word)=>{
            if(word.length === 0){
                wordCount -= 1;
            }
        });
        return wordCount;
    }

    return (
        <>
            <h1 className="my-3 container text-4xl text-cyan-400"><strong>Enter the text here</strong></h1>
            <div className="container my-3" >
                <div className="mb-3">
                    <textarea className="form-control" id={`exampleFormControlTextarea1${props.mode}`} rows="8" value={Text} onChange={handleOnChange}></textarea>
                </div>
                <button type="button" disabled = {Text.length === 0} className={`btn ${props.mode==='dark'?'btn-outline-warning':'btn-outline-primary'} me-2 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="button" disabled = {Text.length === 0} className={`btn ${props.mode==='dark'?'btn-outline-warning':'btn-outline-primary'} me-2 my-1`} onClick={handleLowClick}>Convert to Lowercase</button>
                <button type="button" disabled = {Text.length === 0} className={`btn ${props.mode==='dark'?'btn-outline-warning':'btn-outline-primary'} me-2 my-1`} onClick={handleClearClick}>Clear Text</button>
                <button type="button" disabled = {Text.length === 0} className={`btn ${props.mode==='dark'?'btn-outline-warning':'btn-outline-primary'} me-2 my-1`} onClick={handleSpaceClick}>Remove Extra Spaces</button>
            </div>
            <div className="container">
                <h2 className="mt-4 mb-2"><strong>Text Summary</strong></h2>
                <p>This Text contains {Text.length} Characters and {NoOfWords(Text)} Words</p>
                <p>This Text is a {NoOfWords(Text)/200} minute read.</p>
                <h3 className="mt-3"><strong>Preview</strong></h3>
                <p className="my-2">{Text.length===0?<code>Nothing to Preview</code>:Text}</p>
            </div>
        </>
    )
}

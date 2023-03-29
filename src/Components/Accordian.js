import React, {useState} from 'react'

export default function Accordian(props) {

    const [myStyle, setDark] = useState({
        color:"black",
        backgroundColor:"#ffe8ae"
    });
    
    const [btnVal, setBtnVal] = useState('Enable Dark Mode');

    const toggleOnClick = ()=>{
        if(myStyle.color==="black"){
            setDark({
                color:"#f8d98b",
                backgroundColor:"#1d1b17"
            })
            setBtnVal("Enable Light Mode")
            props.showAlert("Switched Accordian to Dark Mode!", "success")
        }
        else{
            setDark({
                color:"black",
                backgroundColor:"#ffe8ae"
            })
            setBtnVal("Enable Dark Mode")
            props.showAlert("Switched Accordian to Light Mode!", "success")
        }
    };

    return (
        <div className="my-4 accordion container" id="accordionExample">
            <div className="accordion-item" style = {myStyle}>
                <h2 className="accordion-header" id="headingOne" style = {myStyle}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style = {myStyle}>
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style = {myStyle}>
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style = {myStyle}>
                <h2 className="accordion-header" id="headingTwo" style = {myStyle}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style = {myStyle}>
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style = {myStyle}>
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style = {myStyle}>
                <h2 className="accordion-header" id="headingThree" style = {myStyle}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style = {myStyle}>
                        Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style = {myStyle}>
                    <div className="accordion-body" style = {myStyle}>
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className={`btn ${myStyle.color==='black'?'btn-outline-primary':'btn-outline-warning'}`} onClick={toggleOnClick}>{btnVal}</div>
        </div>
    )
}

import React from 'react'

export default function Alert(props) {

    const capitalize = (text)=>{
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        return newText;
    };

    return (
        <div>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show mx-4`} role="alert">
                <strong>{capitalize(props.alert.type)}!</strong> {props.alert.mssg}
            </div>}
        </div>
    )
}

import React, {useState} from "react";

function UserInput(props){

/*     const [inital, setInitial] = useState("10000");
    const [annual, setAnnual] = useState("1200");
    const [expected, setExpected] = useState("6");
    const [duration, setDuration] = useState("10");
 */
/*     function handleChange(event){
        const { value, name } = event.target;

        if(name === "initial"){
            setInitial(value)
        } else if(name === "annual"){
            setAnnual(value)
        } else if(name === "expected"){
            setExpected(value)
        } else if(name === "duration"){
            setDuration(value)   
        }
    } */

    function handleChange(event){

    }


    return(
        <div className="input-group" id="user-input">
            <label>
                Initial Investment:
                <input 
                    type="number"
                    value={props.initial}
                    name="initial"
                    onChange={(event) => {
                        props.updateValue(event.target);
                    }}
                />
            </label>
            <label>
                Annual Investment:
                <input 
                    type="number"
                    value={props.annual}
                    name="annual"
                    onChange={(event) => {
                        props.updateValue(event.target);
                    }}
                />
            </label>
            <label>
                Expected Return:
                <input 
                    type="number"
                    value={props.expected}
                    name="expected"
                    onChange={(event) => {
                        props.updateValue(event.target);
                    }}
                />
            </label>
            <label>
                Duration:
                <input 
                    type="number"
                    value={props.duration}
                    name="duration"
                    onChange={(event) => {
                        props.updateValue(event.target);
                    }}
                />
            </label>

        </div>
    )
}

export default UserInput;
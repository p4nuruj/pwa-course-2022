import { useState } from "react";

function Inputbox (props) {
  const [value, setValue] = useState(props.value||"");

<<<<<<< HEAD
  function handleKeyPress(event) {
    if(event.key === 'Enter' && value !== ""){
      props.onEnter(value);
      setValue("");
    }
  }

=======
>>>>>>> eb394efbc6782808612de935bf05a22154bf08f8
  return (
    <div className="inputbox">
      <label className="label1" htmlFor="inputmsg">
        {props.label}
      </label>
      <input
        id="inputmsg"
        type="text"
        className="text"
        value={value}
<<<<<<< HEAD
        autoComplete="off"
=======
>>>>>>> eb394efbc6782808612de935bf05a22154bf08f8
        onChange={e => {
          setValue(e.target.value);
          props.onChange && props.onChange(e.target.value);
        }}
<<<<<<< HEAD
        onKeyPress={handleKeyPress}
=======
>>>>>>> eb394efbc6782808612de935bf05a22154bf08f8
      />
      <input 
        type="button" 
        value="Send" 
<<<<<<< HEAD
        onClick={() => {
          props.onEnter(value);
          setValue("");
        }}
=======
        onClick={() => props.onClick(value)} 
>>>>>>> eb394efbc6782808612de935bf05a22154bf08f8
        className="button"
      />    
    </div>
  )
}

export default Inputbox;
import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmisionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      return;
    }

    console.log("STATE", enteredName);
    const enteredValue = nameInputRef;
    console.log("REF", enteredValue.current);

    // nameInputRef.current.value = ""; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName("");
  };

  return (
    <form onSubmit={formSubmisionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          ref={nameInputRef}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

import React from "react";

const Button = (props) => (
    <div>
    <button className="big-button" onClick={props.handlePick} disabled={!props.hasOption}>What should I do?</button>
    </div>
  );

export default Button;

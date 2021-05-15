import React from "react";
import Header from "./Header";
import Button from "./Button";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  handleDeleteOptions = () => {
    this.setState(() => ({options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  handlePick = () => {
    const randomNo = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNo];
    this.setState(() => ({selectedOption: option}))
 };

 clearSelectedOption = () => {
   this.setState(() => ({selectedOption: undefined}));
 }

 handleAddOption = (option) => {
   if (!option) {
     return "Please enter a valid option";
   } else if (this.state.options.indexOf(option) > -1) {
     return "This option already exits";
   }


this.setState((prevState) => ({
   options: prevState.options.concat(option)
}));
};

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({options: options}));
        console.log("componentDidMount");
      }
    } catch (e) {
      //Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json)
      console.log("componentDidUpdate");
    }
  }



  render() {
    const title = "Indecision";
    const subTitle = "Let a computer make decisions for you";

    return (
      <div>
        <Header title={title} subTitle={subTitle}/>
        <div className="container">
        <Button hasOption={this.state.options.length > 0} handlePick={this.handlePick}/>
        <div className="widget">
          <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
          <AddOption handleAddOption={this.handleAddOption}/>
        </div>
        </div>
       <OptionModal selectedOption={this.state.selectedOption} clearSelectedOption={this.clearSelectedOption}/>
      </div>
    );
  }
}

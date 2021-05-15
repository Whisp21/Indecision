class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const saveOptions = JSON.parse(json);

      if (options) {
        this.setState(() => ({options: saveOptions}));
        console.log("componentDidMount");
      }
    } catch (e) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json)
      console.log("componentDidUpdate");
    }
  }

  handleDeleteOptions() {
    this.setState(() => ({options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handlePick() {
    const randomNo = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[randomNo];
    alert(selectedOption);
 };

 handleAddOption(option) {
   if (!option) {
     return "Please enter valid option";
   } else if (this.state.options.indexOf(option) > -1) {
     return "This option already exits";
   }


this.setState((prevState) => ({
   options: prevState.options.concat(option)
}));
}

  render() {
    const title = "Indecision";
    const subTitle = "Let a computer make decisions for you";

    return (
      <div>
        <Header title={title} subTitle={subTitle}/>
        <Button hasOption={this.state.options.length > 0}  handlePick={this.handlePick}/>
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </div>
  );
}

const Button = (props) => {
  return (
    <div>
    <button onClick={props.handlePick} disabled={!props.hasOption}>What should I do?</button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove Options</button>
      {props.options.length === 0 && <p>Add an option to get started</p>}
         {props.options.map((option) => (
           <Option
           key={option}
           optionText={option}
           handleDeleteOption={props.handleDeleteOption}
           />
         ))
       }
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      <ol>
        <li>
          {props.optionText}
          <button
          onClick={(e) => {
            props.handleDeleteOption(props.optionText);
          }}
          >Remove</button>
        </li>
      </ol>
     </div>
    );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault();
    const input = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(input);

this.setState(() => ({ error }));
e.target.reset();
}

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form id="form" onSubmit={this.handleAddOption}>
          <input type="text" name="option" autoComplete="off"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

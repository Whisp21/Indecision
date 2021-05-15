class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    const newCount = localStorage.getItem("currentCount");
    const saveCount = parseInt(newCount, 10);

    if (!isNaN(saveCount)) {
      this.setState(() => ({count: saveCount}));
    }
    console.log("componentDidMount");
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("currentCount", this.state.count);
    }
    console.log("componentDidUpdate");
  }

  handleAdd() {
    this.setState((prevState => {
      return {
        count: prevState.count +1
      };
    }));
  }

  handleMinus() {
    this.setState((prevState => {
      return {
        count: prevState.count -1
      };
    }));
  }

  handleReset() {
    this.setState(() =>  {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
      <h1>Count: {this.state.count}</h1>
      <button onClick={this.handleAdd}>+</button>
      <button onClick={this.handleMinus}>-</button>
      <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

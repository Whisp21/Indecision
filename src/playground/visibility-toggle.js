class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      visibility: false
    };
  }
    toggle() {
      this.setState((prevState)  => {
        return {
          visibility: !prevState.visibility
        }
      });
}

render() {
  return (
    <div>
    <h1>Visibility toggle</h1>
    <button onClick={this.toggle}>{this.state.visibility ? "Hide details" : "Show details"}</button>
    {this.state.visibility && <p>Lol sike, there are no details</p>}
    </div>
  );
  }
}

  ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

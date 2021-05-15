console.log("App.js is running!");

// JSX - JavaScript XML
const title = {
  main: "Indecision App",
  subtitle: "Let a computer make decisions for you",
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    title.options.push(option);
    e.target.elements.option.value = " ";
    renderOption();
  }
};

const deleteOptions = () => {
  title.options = [];
  renderOption();
};

const onDecision = () => {
  const randomNo = Math.floor(Math.random() * title.options.length);
  const selectedOption = alert(randomNo);
  console.log(randomNo);
}

const appRoot = document.getElementById('app');

const renderOption = () => {
  const template = (
  <div>
    {title.main && <h1>{title.main}</h1>}
    {title.subtitle && <p>{title.subtitle}</p>}
    <p>{title.options.length > 0 ? "Your options" : "No options"}</p>
    <button disabled={title.options.length === 0} onClick={onDecision}>What should I do?</button>
    <button onClick={deleteOptions}>Remove options</button>
    <ol>
    {
      title.options.map((option) => {
      return <li key={option}>{option}</li>
    })
  }
    </ol>
    <form onSubmit = {onFormSubmit}>
      <input type= "text" name="option"/>
      <button>Add option</button>
    </form>
  </div>
  );
  ReactDOM.render(template, appRoot);
};

renderOption();

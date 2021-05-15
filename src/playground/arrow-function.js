// const fullName = "Amy Venter" => fullName.split(" ")[0];
//
// console.log(firstName);

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());

let count = 0;

const addOne = () => {
  count++;
  renderCount();
};

const minusOne = () => {
  count--;
  renderCount();
};

const reset = () => {
  count = 0;
  renderCount();
};

const appRoot = document.getElementById('app');

const renderCount =  () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {addOne}>+</button>
      <button onClick = {minusOne}>-</button>
      <button onClick = {reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCount();

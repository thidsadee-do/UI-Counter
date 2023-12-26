const root = ReactDOM.createRoot(document.querySelector('#root'));

// const content = (
// <div>
// <h1>Today : { (new Date()).toDateString() }</h1>
// </div>
// );

function Counter() {
return (
<div className="counter">
<button className="btn">+</button>
<h2 className="numb">{0}</h2>
<button className="btn">-</button>
<button className="btn">C</button>
</div>
)
}

function App() {
return (
<div>
<h1>Sum = XX</h1>
<button className="btn">Add Counter</button>
<Counter />
</div>
)
}

root.render(<App />);
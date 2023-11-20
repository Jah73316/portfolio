import './App.css';

function App() {
  let title = 'welcome to my portfolio';
  const handleOnClick = ()=>{
    alert('Hello and Welcome')
  }
  return (
    <div className="App">
      <p className='alert'>{title.toUpperCase()}</p>
      <button onClick={handleOnClick} type="button" className="btn btn-primary">Click Me</button>
    </div>
  );
}

export default App;

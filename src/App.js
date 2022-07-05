import Todo from './componets/Todo';


function App() {
  return (<div>
    <h1 className="header">Todo List</h1>
    <Todo text='Learn React'/>
    <Todo text='Master React'/>
    <Todo text='Experience React'/>

  </div>
  );
}

export default App;

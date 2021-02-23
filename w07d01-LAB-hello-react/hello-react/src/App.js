import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
// renders Hello component.
const names = ['Esin', 'Tabitha', 'Alisha', 'Carlos', 'Jen']
function App() {
  return (
    <Hello name='Manal' names={names} />
    );
}

export default App;

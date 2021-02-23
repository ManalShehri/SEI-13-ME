import logo from './logo.svg';
import './App.css';
import StudentList from './components/StudentList'
import students from './API/Students'

function App() {
  return (
    <div className="card">  
      <StudentList students={students}/>
    </div>
  );
}

export default App;

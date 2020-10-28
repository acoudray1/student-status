import './App.css';
import StatusComponent from './components/statusComponent/StatusComponent';
import getStudentsByStatus from './services/StudentService';

getStudentsByStatus();

function App() {

  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      <main className="App-body">
        <StatusComponent />
      </main>
    </div>
  );
}

export default App;

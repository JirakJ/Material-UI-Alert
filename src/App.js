import './App.css';
import CustomAlert from "./Alert/Alert";

const testData = ["error","info","success","warning"];

function App() {
  return (
    <div className="App">
      {testData.map(item => <CustomAlert severity={item} title={item} message={item}/>)}
    </div>
  );
}

export default App;

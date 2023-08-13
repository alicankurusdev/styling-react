import './App.css';
import data from "../src/util/data"
import Card from './components/Card';
function App() {
  return (
    <div >
      {data.map((item)=>{
        const {id, language, img, btnName} = item;
        return <Card id={ id} language={ language} img={ img} btnName={ btnName} />
      })}
      
    </div>
  );
}

export default App;

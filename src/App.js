import './App.css';
import data from "../src/util/data"
import Card from './components/Card';
function App() {
  return (
    <div >
      {data.map((language)=>{
        return <Card id={language.id} language={language.language} img={language.img} btnName={language.btnName} />
      })}
      
    </div>
  );
}

export default App;

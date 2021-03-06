import React,{useState} from 'react';
import './App.css';
import Result from './Result';

const App =()=> {
  const [img, setImage] = useState('');
  const imgHandler = (e) =>{
    let data=e.target.value;
    setImage(data);
  }
  return (
    <div className="App">
    <h2>Search Image</h2>

     <input type="text" value={img} onChange={imgHandler}/>
     { img == ''?null:<Result name={img}/>}
    </div>
  );
}

export default App;

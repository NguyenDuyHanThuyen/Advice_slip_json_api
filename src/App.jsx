import './App.css'
import {useState  , useEffect} from 'react';

export function App() {

  const [advice , setAdvice] = useState('');
  const [paragram , setParagram] = useState('')
  const [toggle , setToggle] = useState(false);

  useEffect(()=> {

    const getApi = async () => {
      try{
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();

        setAdvice(data.slip.id);
        setParagram(data.slip.advice);
      }
      catch(err){
        console.error(err);
      }
    }
    getApi();

  },[toggle]);
  return(
    <div style={{
      'display':'flex',
      'justifyContent':'center',
      'alignItems':'center',
      'flexDirection':'column'
    }}>
      <div className='card-container'>
        <h3>ADVICE #{advice}</h3>
        <p>"{paragram}"</p>
        <img className='img-container' src= '../../images/pattern-divider-desktop.svg' />
        <div className='footer' onClick={() => {
          setToggle(!toggle);
          console.log(toggle)
        }}>
          <img
            src = '../../images/icon-dice.svg'/>
        </div>
      </div>

      <div className='info-coder'>
        <p>
          Challenge by Frontend Mentor. Coded by DuyChepChep
        </p>
      </div>
    </div>

  );
}


export default App;

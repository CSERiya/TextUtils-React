// import logo from './logo.svg';
import { useState } from 'react';
// import About from './components/About';
import Navbar from '../components/Navbar';
import TextForm from '../components/TextForm';
import Alert from '../components/Alert';
 
function Home() {
  const[mode, setMode]=useState('light');
  const[alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{ 
setAlert({
msg:message,
type:type 
})
setTimeout(()=>{
setAlert(null);
},1500)
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
  }

  const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
  setMode('light');
  document.body.style.backgroundColor='white';
  }
  
  return (
<>

<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />
<div className="container my-3"mode={mode}>
  
      <TextForm showAlert={showAlert}heading="TextUtils - Text modifier" mode={mode} />
</div>
</>
  );
}

export default Home;
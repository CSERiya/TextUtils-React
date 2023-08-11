import { useState } from 'react';
import About from '../components/About';
import Navbar from '../components/Navbar';
// import TextForm from '../components/TextForm';
import Alert from '../components/Alert';
// import {
//   BrowserRouter ,Route,Routes
// } from "react-router-dom";
 
function Abt() {
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
    // console.log(cls)
    document.body.classList.add('bg-'+cls)    
//  if(mode==='light'){
//   setMode('dark');
//   document.body.style.backgroundColor='#042743';  
// showAlert("Dark mode has been enabled","success");
// document.title='TextUtils - Dark Mode'
// setInterval(()=>{
//   document.title='TextUtils is an Amazing Mode'
// },2000);
// setInterval(()=>{
//   document.title=' Install TextUtils Now'
// },1500);
//  }
// else{
  setMode('light');
  document.body.style.backgroundColor='white';
//   showAlert("Light mode has been enabled","success");
//  document.title='TextUtils - Light Mode'
// }
   }
 
  return (
<>
{/* <BrowserRouter>*/}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />
<div className="container my-3"mode={mode}>
  {/*<Routes>
    <Route exact path="/about" element={ */}
        <About showAlert={showAlert}mode={mode}/>
    {/* }></Route>
   <Route exact path="/" element={ */}
      {/* <TextForm showAlert={showAlert}heading="Enter the text to analyze" mode={mode} /> */}
       {/*</Route>
  </Routes>   */}
{/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
          <TextForm  showAlert={showAlert}heading="Enter the text to analyze" mode={mode}/>
           
          </Route>
        </Switch> */}
        
{/* <TextForm  showAlert={showAlert}heading="Enter the text to analyze" mode={mode}/> */}
{/* <About/> */}
{/* </div>
</BrowserRouter> */}
</div>
</>
  );
}

export default Abt;
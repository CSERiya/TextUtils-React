// import './App.css';

// import React, { Component } from 'react'
// import Navbar from './Components/Navbar';
// import NewsComp from './Components/NewsComp';
// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from "react-router-dom";

// export default class App extends Component {

//   render() {
//     return (
//         <BrowserRouter>
//         <>
//         <Navbar/> 
//         <Routes>
//           <Route path="/" element={<NewsComp/>}/> 
//           < Route path="/business"element={<NewsComp category="business"/>}/> 
//           <Route  path="/entertainment" element={<NewsComp category="entertainment"/>}/> 
//           <Route  path="/general" element={<NewsComp category="general"/>}/> 
//           < Route path="/health" element={<NewsComp category="health"/>}/> 
//           <  Route path="/science" element={<NewsComp category="science"/>}/> 
//           <Route  path="/sports"element={<NewsComp category="sports"/>}/> 
//           < Route path="/technology"element={<NewsComp category="technology"/>}/> 
//         </Routes>
//         </>
//         </BrowserRouter> 
//     )
//   }
// }
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsComp from './Components/NewsComp';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

export default class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
      <>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<NewsComp key="general" category="general"/>}/>
          <Route exact path="/business" element={<NewsComp key="business" category="business"/>}/>
          <Route exact path="/entertainment" element={<NewsComp key="entertainment" category="entertainment"/>}/>
          <Route exact path="/general" element={<NewsComp key="general" category="general"/>}/>
          <Route exact path="/health" element={<NewsComp key="health" category="health"/>}/>
          <Route exact path="/science" element={<NewsComp key="science" category="science"/>}/>
          <Route exact path="/sports" element={<NewsComp key="sports" category="sports"/>}/>
          <Route exact path="/technology" element={<NewsComp key="technology" category="technology"/>}/>
        </Routes>
      </>
</BrowserRouter>      

    )
  }
}
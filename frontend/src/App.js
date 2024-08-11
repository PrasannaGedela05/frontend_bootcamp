import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn } from './components/signin/signin';
import { SignUp } from './components/signup/signup';
import { UpdatePass } from './components/signup/updatep';
import { Studentsdata } from './components/studata/students';
// import { SignIn } from './components/signin/signin'
// import { SignIn, Update } from './components/signup/updatep';
// import { SignUp } from './components/signup/signup';
// import { SignUp } from './components/signup/signup';
// import { Personal } from './personaldetails/Personal';
// import { Education } from './personaldetails/Edu';
// import { Skills } from './personaldetails/Skills';
// import {  UseStateFunction } from './Events/Events';
// import { SignIn } from './components/signin/signin';
function App() {
  return (
  <>
  <BrowserRouter>
   <Routes>
     <Route path='/signin' element={<SignIn/>}/>
     <Route path='/signup' element={<SignUp/>}/>
   <Route path='/students' element={<Studentsdata/>}/>  
     <Route path='/updatep' element= {<UpdatePass/>}/>
   </Routes>

  </BrowserRouter>
  {/* <SignIn/>
  <SignUp/>
  <UpdatePass/> */}

  </>
  )
}
export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog'
import Posts from './pages/Posts'
import Author from './pages/Author'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Error404 from './pages/Error404'
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
<>
<Router>
<ToastContainer/>
<Header/>
<Routes>
  <Route path='/' element={<Blog/>} />
  <Route path='/post' element={<Posts/>} />
  <Route path='/author' element={<Author />}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/siginin' element={<SignIn/>}/>
  <Route path='/signup' element={<SignUp/>}/>
  <Route path='*' element={<Error404/>}/>
</Routes>
</Router>
<Footer/>
</>
  );
}

export default App;

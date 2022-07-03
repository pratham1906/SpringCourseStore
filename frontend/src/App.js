import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import {Button,Row,Container,Col} from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import Home from './Components/Home';
import Course from './Components/Course';
import AllCourses from './Components/AllCourses';
import AddCourse from './Components/AddCourse';
import Menu from './Components/Menu';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  const btnHandle=()=>{
    toast("Oh yeah");
  }
  return (
    
    <div className="App">
    <BrowserRouter>
      <Header/>
  <Container>
    <Row>
<Col md={4}>
<Menu/>
</Col>
<Col md={8}>
  
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/add-course" element={<AddCourse/>}/>
  <Route path="/view-courses" element={<AllCourses/>}/>
    </Routes>

  
  </Col>
    </Row>

  </Container>
     
      </BrowserRouter>
   </div>
  );
}

export default App;


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavBar from './components/main_navbar/navbar';
import HomepageCanvas from './components/canvas/homepage_canvas';



function App() {
  function alertdata(){
    alert("hello");
  };


  return (
    <>
      <CustomNavBar/>
      <HomepageCanvas/>

    </>
  );
}

export default App;

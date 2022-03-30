
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavBar from './components/main_navbar/navbar';
import HomepageCanvas from './components/canvas/homepage_canvas';
import Footer from './components/footer/footer';



function App() {



  return (
    <>
      <CustomNavBar/>
      <HomepageCanvas/>
      <Footer/>
    </>
  );
}

export default App;

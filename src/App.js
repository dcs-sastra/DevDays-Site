import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { Helmet } from 'react-helmet';
import Home from "./Pages/home"
function App() {
  return (
    <>
        <Helmet>
      <title>Dev Days 22</title>
    </Helmet>
    <Home/>
  </>
  );
}

export default App;

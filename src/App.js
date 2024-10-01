import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import './css/style.css'
import './plugins/bootstrap/css/bootstrap.min.css'
import './plugins/icofont/icofont.min.css'
import './plugins/slick-carousel/slick/slick.css'
import './plugins/slick-carousel/slick/slick-theme.css'


function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;

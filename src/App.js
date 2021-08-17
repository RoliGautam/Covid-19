import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './Component/Mediaquery.css'
import Navbar from './Component/Navbar';
import Home from './Component/Home'
import About from './Component/About'
import Footer from './Component/Footer';
import ChormeExt from './Component/ChormeExt';
import Covid from './Component/Covid';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/chrome-ext" component={ChormeExt} />
        <Route exact path="/covid" component={Covid} />
      </Switch>
    </Router>
    <Footer />

    </>
  );
}

export default App;

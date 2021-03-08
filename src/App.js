import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SignUp from './components/pages/SignUp/SignUp';
import About from './components/pages/About/About';
import ServicesList from './components/pages/ServicesList/ServicesList';
import ProductsList from './components/pages/ProductsList/ProductsList';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/about" component={About} />
                <Route path="/services-list" component={ServicesList} />
                <Route path="/products-list" component={ProductsList} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;

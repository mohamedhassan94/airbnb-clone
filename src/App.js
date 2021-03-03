import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import './App.css';
import SearchPage from './components/searchPage/searchPage';


function App() {
  return (
    <div className="App">
      

        <Header />

        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/search" component={SearchPage} />

        </Switch>

        <Footer />


    </div>
  );
}

export default App;

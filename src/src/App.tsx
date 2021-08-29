import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import TodosPage from './components/pages/TodosPage';
import PageNotFound from './components/pages/PageNotFound';

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/todos" component={TodosPage} />
                <Route component={PageNotFound} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;

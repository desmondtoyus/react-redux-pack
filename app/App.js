import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Switch, Route, Redirect, Router, BrowserRouter} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header'
import Home from './views/Home';
import About from './views/About';
import PageNotFound from './views/PageNotFound';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Helmet titleTemplate="%s - SiteName" defaultTitle="Some default title">
                    <meta name="description" content="some description content"/>
                </Helmet>
                {/* BrowserRouter comes with default history */}
                <BrowserRouter>
                    <div>
                        <Header/>
                        <div className='main'>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/about" component={About}/>
                                <Route path="" component={PageNotFound}/>
                            </Switch>
                            <Footer/>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
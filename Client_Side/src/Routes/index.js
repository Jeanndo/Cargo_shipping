import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Auth from '../Components/Auth/Auth';
import Admin from '../Components/Admin/Admin';
import Driver from '../Components/Driver/Driver';
import Printing from '../Components/Print/Expample';

class Routes extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component ={Auth}/>
                    <Route exact path="/admin" component ={Admin}/>
                    <Route exact path="/driver" component ={Driver}/>
                    <Route exact path="/print" component ={Printing}/>
                </Switch>
                </Router>
        )
    }
}
export default Routes;

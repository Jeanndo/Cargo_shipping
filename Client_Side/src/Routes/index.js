import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Admin from '../Components/Admin/Admin';
import Driver from '../Components/Driver/Driver';
import Printing from '../Components/Print/Expample';
import CustomAuth from '../Components/ClientAuth/Auth';
import Client from '../Components/Client/Client';
class Routes extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component ={CustomAuth}/>
                    <Route exact path="/admin" component ={Admin}/>
                    <Route exact path="/driver" component ={Driver}/>
                    <Route exact path="/print" component ={Printing}/>
                    <Route exact path="/client" component ={Client}/>
                </Switch>
                </Router>
        )
    }
}
export default Routes;

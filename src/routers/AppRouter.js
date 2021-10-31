import React ,{Component} from "react";
import {BrowserRouter,Route,Switch,Link,NavLink}from "react-router-dom";
import home from "../components/home";
import help from "../components/help";
import edit from "../components/edit";
import AddExpenses from "../components/AddExpenses";
import notfind from "../components/notdefined";
import Header from "../components/Header";

const Approuter = ()=>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={home} exact={true} />
                <Route exact path="/help" component={help}/>
                <Route path="/AddExpensePage" component={AddExpenses}/>
                <Route path="/edit/:id" component={edit}/>
                <Route component={notfind}/>
            </Switch>
        </div>
    </BrowserRouter>
);
export default Approuter;
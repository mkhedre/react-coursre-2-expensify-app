import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/configureStore';
import { Provider } from "react-redux";
import '../styles/style.scss';
import Approuter from './routers/AppRouter';
import {addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';


const store = configureStore();

store.dispatch(addExpense({description:'water bill',amount :192 , createdAt :100}))
store.dispatch(addExpense({description:'gas bill',amount :12993 , createdAt :50}))

store.dispatch(addExpense({description:'gas bill' ,amount :200 , createdAt : 123}))
// store.dispatch(setTextFilter('water'))
// //بمجرد ما بغير فى الاستور بيحصل rerender with new value  

// setTimeout(()=>{
//     store.dispatch(setTextFilter('bill'))
// },3000)
const state=store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx =(
    <Provider store ={store}>
        <Approuter />
    </Provider>
)



ReactDOM.render(jsx,document.getElementById("root"))
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch,expenses,currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((sum, item) => {
        return (sum = sum + item.cost);
    },0);

    const setBudget = (event) => {
        if(event.target.value > 20000){
            alert("The Budget value cannot exceed 20,000. ")
            setBudget("");
            return;
        }else if(event.target.value < totalExpenses){
            alert("The Budget value cannot be lower than expenses");
            setBudget("");
            return;
        }
        dispatch({
            type: "SET_BUDGET",
            payload: event.target.value,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{currency}
            <input
            defaultValue ={budget}
            max ="20000"
            min ={totalExpenses}
            required="reqired"
            step = "10"
            style = {{marginLeft: "0.25rem"}}
            type ="number"
            onInput={(event) => setBudget(event)}
            ></input>
            </span>
        </div>
    );
};
export default Budget;
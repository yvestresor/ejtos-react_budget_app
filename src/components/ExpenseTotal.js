import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

var totalExpenses = 100; // You can set the initial value here

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: £{totalExpenses}</span>
        </div>
    );
};

export const TotalExpense = () => {
    return totalExpenses;
}

export default ExpenseTotal;

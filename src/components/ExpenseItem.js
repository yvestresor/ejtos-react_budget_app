
import React, { useContext } from 'react';
import { FaTimesCircle, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FaPlusCircle size='2.2em' color='green' onClick={event=> increaseAllocation(props.name)}>+</FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color='red' onClick={event=> decreaseAllocation(props.name)}>-</FaMinusCircle></td>
        <td><FaTimesCircle onClick={handleDeleteExpense}></FaTimesCircle></td>
        </tr>    );
};

export default ExpenseItem;
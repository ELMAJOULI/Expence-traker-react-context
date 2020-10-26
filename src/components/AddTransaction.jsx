import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const {addTransaction} = useContext(GlobalContext);
    return (
        <div className="transactions__container">
            <h3 className="transactions__history">Add New Transaction</h3>
            <div className="transaction__list" >
               <label htmlFor="transactionName" className="transaction__label">Text :</label>
               <input type="text" id="transactionName" value={text} onChange={ e=> setText(e.target.value)} placeholder="Enter text..." className="addTransaction__input"/>
               <label htmlFor="transactionAmount" className="transaction__label">Amount (negative-expense, positive-income) :</label>
               <input type="text" id="transactionAmount" vlaue={amount} onChange={ e => setAmount(e.target.value)} placeholder="Enter Amount..." className="addTransaction__input"/>
                <button className="transaction__btn" onClick={ e =>{setAmount("");setText("");addTransaction({id: Math.random(),text,amount})} }>Add transaction</button>
            </div>
        </div>
    )
}

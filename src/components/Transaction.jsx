import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Transaction({name,amount,id}) {
   const {deleteTransaction} = useContext(GlobalContext);
    return (
        <div className="transaction__container">
        <button className="delete-btn" onClick={e => deleteTransaction(id)} >X</button>
        <div className={"transaction__card "+ (Number(amount) < 0 ? "transaction__minus ":"transaction__plus")}>
            {name} <span>{amount} MAD</span>
        </div>
        </div>
    )
}

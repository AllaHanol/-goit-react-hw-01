import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";
import css from './TransactionHistory.modus.css';
const TransactionHistory = (items) => {
    return (
<table className={css.table} >
   <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
 <tbody className={css.item}>
  <tr>
     <td>
                
     {items.map(({ id, type, amount, currency }) => (
         <TransactionHistoryItem key={id} type={type} amount={amount} currency={currency} />
        ))}
     </td>
  </tr>
  </tbody>
</table>     

    )
}
    

export default TransactionHistory;


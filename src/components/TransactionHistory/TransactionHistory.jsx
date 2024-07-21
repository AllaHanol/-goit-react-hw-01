import css from './TransactionHistory.module.css';
const TransactionHistory = (items) => {
    return (
<table className={css.table} >
   <thead className={css.tableHead}>
    <tr className={css.tableHeadRow}>
      <th className={css.tableHeadTitle}>Type</th>
      <th className={css.tableHeadTitle}>Amount</th>
      <th className={css.tableHeadTitle}>Currency</th>
    </tr>
  </thead>
 <tbody className={css.item}>
          {items.map(({ id, type, amount, currency }) => {
            return (<tr className = {css.tableRow} key={id}>
           <td className={css.tableColumn}>{type}</td><td className={css.tableColumn}>{amount}</td><td className={css.tableColumn}>{currency}</td>
         </tr>
            )
          }
          )}
  </tbody>
</table>     

    )
}
    

export default TransactionHistory;


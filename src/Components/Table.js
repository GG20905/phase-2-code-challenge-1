
import Row from "./Row"

     
function Table({transactions ,setTransactions}){
  
      

return(
    <>
      <table className="table table-light p-6">
        <thead>
        <tr>
          <th scope="col-3 mx-auto">Date</th>
          <th scope="col-3 mx-auto">Description</th>
          <th scope="col-3 mx-auto">Category</th>
          <th scope="col-3 mx-auto">Amount</th>
         </tr>
        </thead>
        <tbody>
            <Row transactions={transactions} setTransactions={setTransactions}/>
        </tbody>
    </table>
    </>
)

}

export default Table
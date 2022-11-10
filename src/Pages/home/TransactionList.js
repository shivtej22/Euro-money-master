export default function TransactionList({transactions}){

    console.log(transactions);
    return(
        <ul className="transactions">
            {transactions?.map((t, index)=>(
                <li key={index}>
                    <p className="name">{t.name}</p>
                    <p className="amount">{t.amount}</p>
                    {/* <button onClick={()=>deleteDocument(transaction.id)}>x</button> */}

                </li>
            ))}



        </ul>
            )
}
import "./App.css";

function App() {

  const dataUsers = [
    {
      "userId": 1,
      "name": "Juan",
      "balance": 1000,
      "transactions": [
        {
          "userId": 1,
          "deposit": 500,
          "withdraw": 0,
          "createdAt": "2024-03-01T08:00:00Z"
        },
        {
          "userId": 1,
          "deposit": 0,
          "withdraw": 300,
          "createdAt": "2024-03-03T12:00:00Z"
        },
        {
          "userId": 1,
          "deposit": 200,
          "withdraw": 0,
          "createdAt": "2024-03-05T10:00:00Z"
        }
      ]
    },
    {
      "userId": 2,
      "name": "María",
      "balance": 1300,
      "transactions": [
        {
          "userId": 2,
          "deposit": 1000,
          "withdraw": 0,
          "createdAt": "2024-03-02T09:00:00Z"
        },
        {
          "userId": 2,
          "deposit": 0,
          "withdraw": 200,
          "createdAt": "2024-03-04T14:00:00Z"
        },
        {
          "userId": 2,
          "deposit": 500,
          "withdraw": 0,
          "createdAt": "2024-03-06T11:00:00Z"
        }
      ]
    }
  ]

  return (
    <main>
      <section className="statement_info">
        <div className="balance"></div>
        <h2>Balance</h2>
        <p>$0.00</p>
        <div className="deposit"></div>
        <h2>Deposit</h2>
        <input type="text" placeholder="Enter amount to deposit" />
        <button>Submit Deposit</button>
        <div className="withdraw"></div>
        <h2>Withdrawal</h2>
        <input type="text" placeholder="Enter amount to withdraw" />
        <button>Submit Withdrawal</button>
      </section>
      <section className="transation">
        <ul>
          <li>
            Date & Time
          </li>
          <li>
            Deposit
          </li>
          <li>
            Withdraw
          </li>
        </ul>
        {dataUsers[1].transactions.map(transaction => {
          return (
            <>
              <li>
                {new Date(transaction.createdAt).toLocaleString()}
              </li>
              <li> {transaction.deposit} </li>
              <li> {transaction.withdraw} </li>
            </>
          )
        })}
      </section>
    </main>
  );
}

export default App;

const ATMDeposit = ({onChange, isDeposit}) => {
  const choice = ["Deposit", "Cash Back"];
  return (
    <label className="label huge">
      <h3>{choice[Number(!isDeposit)]}</h3>
      <input type="number" onChange={onChange}></input>
      <input type="submit" value = "Submit"></input>
    </label>
  );
};

const Account = () => {
  let ammount = 0; // state of this transaction
  const [accountState, setAccountState] = React.useState(0);
  const [isDeposit,setIsDeposit] = React.useState(true);

  let status = `Account Balance $ ${accountState}`;
  //console.log("rerendered")
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    ammount = Number(event.target.value);
  };
  const handleSubmit = () => {
    let newtotal = isDeposit ? accountState + ammount : accountState - ammount;
    if (newtotal >= 0) setAccountState(newtotal);
    event.preventDefault();
  };


  return (
    <form onSubmit={handleSubmit}>
      <h2 id = 'total'>{status}</h2>
      <button onClick={()=>setIsDeposit(true)}>Deposit</button>
      <button onClick={()=>setIsDeposit(false)}>Cash Back</button>
      <ATMDeposit onChange={handleChange} isDeposit = {isDeposit}> Ammount </ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));

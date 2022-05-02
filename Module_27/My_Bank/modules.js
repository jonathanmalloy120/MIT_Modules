var ui = {};

ui.navigation = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#" onclick = "defaultModule()">Bad Bank</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#createAccount" onclick = "loadCreateAccount()" id = "createAccount">CreateAccount</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick = "loadLogin()" id = "login">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick = "loadDeposit()" id = "deposit">Deposit</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick = "loadWithdraw()" id = "withdraw">Withdraw</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick = "loadBalance()" id = "balance">Balance</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick = "loadAllData()" id = "allData">AllData</a>
      </li>
     
    </ul>
    
  </div>
</nav>
`;
var navigation = document.getElementById('navigation'); //from index.html
navigation.innerHTML += ui.navigation;
var target = document.getElementById('target')


//default
ui.default  = 
`<div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">BadBank Default</div>
        <div class="card-body">
        <h5 class="card-title">Welcome to the Bad Bank</h5>
        <p class="card-text">Hopefully the nav bar works</p>
        <img src = "bank.png" class = "img-fluid" alt = "image didn't load">
    </div>
</div>`

var defaultModule = function() {
    target.innerHTML = ui.default;
};

//Create Account
ui.createAccount  = 
`<div class="card bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">BadBank create account</div>
        <div class="card-body">
        <h5 class="card-title">Create Account</h5>
        <p class="card-text">Make An Account now! Or I Keel you!</p>
        Name<br>
        <input type = "input" class = "form-control" id = "name" placeholder = "enter name" <br>
        Email<br>
        <input type = "input" class = "form-control" id = "email" placeholder = "enter email" <br>
        Password<br>
        <input type = "password" class = "form-control" id = "password" placeholder = "enter password"<br>
        <button type = "submit" id = "submit" class = "btn" onclick = "create()"> Create Account </button>
        <div id = "createStatus"></div>

    </div>
</div>`

var loadCreateAccount = function() {
    target.innerHTML = ui.createAccount;
};

//Login
ui.login  = 
`<div class="card bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">BadBank Login</div>
        <div class="card-body">
        <h5 class="card-title">You want to log in eh?</h5>
        <p class="card-text">Unlock the world!</p>
    </div>
</div>`

var loadLogin = function() {
    target.innerHTML = ui.login;
};

//Deposit
ui.deposit  = 
`<div class="card bg-success mb-3" style="max-width: 18rem;">
    <div class="card-header">BadBank Deposit</div>
        <div class="card-body">
        <h5 class="card-title">Give Me Your Money!</h5>
        <p class="card-text">Watch numbers go up!</p>
    </div>
</div>`

var loadDeposit = function() {
    target.innerHTML = ui.deposit;
};

//Withdraw
ui.withdraw  = 
`<div class="card bg-danger mb-3" style="max-width: 18rem;">
    <div class="card-header">BadBank withdraw</div>
        <div class="card-body">
        <h5 class="card-title">Take money away!</h5>
        <p class="card-text">Is there really only 1 "d" in this word?</p>
    </div>
</div>`

var loadWithdraw = function() {
    target.innerHTML = ui.withdraw;
};

//balance
ui.balance  = 
`<div class="card bg-secondary mb-3" style="max-width: 18rem;">
    <div class="card-header">BadBank balance</div>
        <div class="card-body">
        <h5 class="card-title">Your money is this!</h5>
        <p class="card-text">Green was for deposit, not Guthix</p>
    </div>
</div>`

var loadBalance = function() {
    target.innerHTML = ui.balance;
};

//AllData
ui.allData  = 
`<div class="card bg-warning mb-3" style="max-width: 18rem;">
    <div class="card-header">BadBank All Data</div>
        <div class="card-body">
        <h5 class="card-title">All the data</h5>
        <p class="card-text">Fire Everything!</p>
        <button type = "submit" class = "btn" onclick = "allData()"> Show Data </button>
        <div id = "allDataStatus"></div>
    </div>
</div>`

var loadAllData = function() {
    target.innerHTML = ui.allData;
};

loadCreateAccount();
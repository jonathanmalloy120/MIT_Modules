//context is global, accounts is array of account objects
const ctx = {
    "accounts":[
        {
            "name": "Jon",
            "email": "jon.malloy@test.com",
            "balance": 0,
            "password": "secret"
        }

    ]
}

//create account logic
function create(){
    const name =document.getElementById("name");
    const email =document.getElementById("email");
    const password =document.getElementById("password");
    const status =document.getElementById("createStatus");
    ctx.accounts.push({
        name: name.value,
        email: email.value,
        password: password.value,
        balance:0
    })

    //update and clear form
    name.value = "";
    email.value = "";
    password.value = "";
    status.innerHTML = "account created";
}

//All Data Logic
function allData() {
    const status = document.getElementById("allDataStatus");
    status.innerHTML = JSON.stringify(ctx.accounts);
}
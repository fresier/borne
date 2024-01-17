
function valideEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email))
        return (true)
    else return (false)
}

function check_create_account() {
    let email = document.getElementById('mca_email').value;
    let pass = document.getElementById('mca_password').value;
    let btn = document.getElementById('mca_button');
    btn.innerHTML = `<i class="bi bi-shield-lock"></i> Créer un compte`;
    btn.className = "mt-2 btn btn-primary form-control disabled";
    if (valideEmail(email) && pass.length >= 4)
        btn.classList.remove("disabled");
}


document.getElementById('mca_button').addEventListener('click', function () {
    document.getElementById('mca_button').innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="visually-hidden">Loading...</span>`;

    let url = '//' + domain + '/ajax/create_account.php';
    let data = {
        email: document.getElementById('mca_email').value,
        pass: document.getElementById('mca_password').value
    };
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(url, options).then(response => response.json()).then(data => {
        console.log(data);
        if (data.erreur == false) {
            document.getElementById('mca_button').classList.add("disabled");
            document.getElementById('mca_button').classList.add("btn-success");
            document.getElementById('mca_button').classList.remove("btn-primary");
            document.getElementById('mca_button').innerHTML = 'Compte créé';
        } else {
            document.getElementById('mca_button').classList.add("disabled");
            document.getElementById('mca_button').classList.add("btn-danger");
            document.getElementById('mca_button').classList.remove("btn-primary");
            document.getElementById('mca_button').innerHTML = 'Erreur';
        }
    });
});

function check_login() {
    let email = document.getElementById('mlogin_login').value;
    let pass = document.getElementById('mlogin_password').value;
    let btn = document.getElementById('mlogin_button');
    btn.innerHTML = `<i class="bi bi-shield-lock"></i> Login`;
    btn.className = "mt-2 btn btn-primary form-control disabled";
    if (valideEmail(email) && pass.length >= 4)
        btn.classList.remove("disabled");
}

document.getElementById('mlogin_button').addEventListener('click', function () {
    document.getElementById('mlogin_button').innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="visually-hidden">Loading...</span>`;

    let url = '//' + domain + '/ajax/login.php';
    let data = {
        email: document.getElementById('mlogin_login').value,
        pass: document.getElementById('mlogin_password').value
    };
    console.log(data);
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(url, options).then(response => response.json()).then(data => {
        console.log(data);
        if (data.erreur == false) {
            location.reload();
        } else {
            document.getElementById('mlogin_button').classList.add("disabled");
            document.getElementById('mlogin_button').classList.add("btn-danger");
            document.getElementById('mlogin_button').classList.remove("btn-primary");
            document.getElementById('mlogin_button').innerHTML = 'Erreur';
        }
    });
});


function check_forget() {
    let email = document.getElementById('mforget_email').value;
    let btn = document.getElementById('mforget_button');
    btn.innerHTML = `<i class="bi bi-shield-lock"></i> Reset`;
    btn.className = "mt-2 btn btn-primary form-control disabled";
    if (valideEmail(email))
        btn.classList.remove("disabled");
}

document.getElementById('mforget_button').addEventListener('click', function () {
    document.getElementById('mforget_button').innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="visually-hidden">Loading...</span>`;

    let url = '//' + domain + '/ajax/forget_password.php';
    let data = {
        email: document.getElementById('mforget_email').value
    };
    console.log(data);
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(url, options).then(response => response.json()).then(data => {
        console.log(data);
        if (data.erreur == false) {
            document.getElementById('mforget_button').classList.add("disabled");
            document.getElementById('mforget_button').classList.add("btn-success");
            document.getElementById('mforget_button').classList.remove("btn-primary");
            document.getElementById('mforget_button').innerHTML = 'Le mail de reset a été envoyé !';
        } else {
            document.getElementById('mforget_button').classList.add("disabled");
            document.getElementById('mforget_button').classList.add("btn-danger");
            document.getElementById('mforget_button').classList.remove("btn-primary");
            document.getElementById('mforget_button').innerHTML = 'Erreur';
        }
    });
});


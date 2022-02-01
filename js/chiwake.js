var x = 0;
// Data Picker Initialization
$('.datepicker').pickadate();

function reload() {
    x++;
    if (x % 2 == 0) {
        document.getElementById("content").style.animation = "animatezoom-1 4s 1";
    } else {
        document.getElementById("content").style.animation = "animatezoom-2 4s 1";
    }
}

function clickSingUp_Login() {
    this.reload();
    document.getElementById("login-home").reset();
    document.getElementById("login-home").style.display = 'none';
    document.getElementById("singup-home").style.display = 'block';
    document.getElementById("content").style.width = '50%';
}

function clickLogin_SingUp() {
    this.reload();
    document.getElementById("singup-home").reset();
    document.getElementById("login-home").style.display = 'block';
    document.getElementById("singup-home").style.display = 'none';
    document.getElementById("content").style.width = '45%';
}

function clickEye() {
    if (pwd.type === "password") {
        pwd.type = "text";
        document.getElementById("eye").src = "img/chiwake/eye-slash-fill.svg";
    } else {
        pwd.type = "password";
        document.getElementById("eye").src = "img/chiwake/eye-fill.svg";
    }
}

function clickEyes() {
    if (pwds.type === "password") {
        pwds.type = "text";
        document.getElementById("eyes").src = "img/chiwake/eye-slash-fill.svg";
    } else {
        pwds.type = "password";
        document.getElementById("eyes").src = "img/chiwake/eye-fill.svg";
    }
}

var inputs, idanh;

function clickEyesNew(inputs, idanh) {
    if (inputs.type === "password") {
        inputs.type = "text";
        document.getElementById(idanh).src = "img/chiwake/eye-slash-fill.svg";
    } else {
        inputs.type = "password";
        document.getElementById(idanh).src = "img/chiwake/eye-fill.svg";
    }
}
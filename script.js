function insert(num) {
    document.form.textview.value  = document.form.textview.value += num;
}

function clearr() {
    document.form.textview.value = "";
}

function egal() {
    let calcValue = document.form.textview.value;
    if(calcValue) {
        document.form.textview.value = eval(calcValue);
    }
}
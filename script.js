function insert(num) {
    document.form.textview.value  = document.form.textview.value += num;
}

// function clearAll () {
//     document.form.textview.value = "";
// }

// function backspace () {
//     let delSign = document.form.textview.value;
//     document.form.textview.value = delSign.substring(0, delSign.length-1);
// }

// function equal() {
//     let calcValue = document.form.textview.value;
//     if(calcValue) {
//         document.form.textview.value = eval(calcValue);
//     }
// }
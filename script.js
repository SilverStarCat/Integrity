console.log("js file connected.")

a = 0;

function change() {
    a++;
    b = a - 1;

    document.getElementById("change").innerHTML = "Times Clicked: " + a;
}
console.log("js file connected.")

a = 0;

function change() {
    a++;

    document.getElementById("change").innerHTML = "Times Clicked: " + a;
}

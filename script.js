console.log("js file connected.")

var String; d = new Date();
let currentDate = d.toDateString();
let x = document.cookie;

console.log(x);

a = 0;

function change() {
    a++;

    document.getElementById("change").innerHTML = "Times Clicked: " + a;
    document.cookie = "numPressed=a; expires=Mon, 15 Jan 2024 12:00:00 UTC; path=/";

    return a;
};


function dateTest() {
    try {
        document.getElementById("date").innerHTML = currentDate;
    } catch (e) {
        console.error("Error Detected.")
    };
};

function dateTest2() {
    try {
        document.getElementById("date2").innerHTML = currentDate;
    } catch (e) {
        console.error("Error Detected.")
    };
};
function dateTest3() {
    try {
        document.getElementById("date3").innerHTML = currentDate;
    } catch (e) {
        console.error("Error Detected.")
    };
};

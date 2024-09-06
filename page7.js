/*
    1.if use to check range type of condition and exact condition
    2.switch used to check only exact condition
*/
let url = "/login";
switch (url) {
    case "/home":
        console.log("Display Home.html");
        break;
    case "/contact":
        console.log("Display contact.html");
        break;

    case "/login":
        console.log("Display login.html");
        break;
    default:
        console.log("Display welcom.html");

}


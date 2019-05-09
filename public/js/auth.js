$(() => {
let submitForm = e => {
    let dbUn;
    let dbPw;
    let dbLi;
    console.log("form submitted");
    e.preventDefault();

    un = $("#eInput").val().trim();
    pw = $("#pwInput").val().trim();
    let login = {
        loggedIn: true,
    };

    $.get("/api/login", d => {
        console.log(d);
        console.log(un);
        for(let i = 0; i<d.length;i++){
            console.log("forloop running")
            console.log("input username: " + un + "\n db username: " + d[i].username);
            if(d[i].username === un && d[i].loggedIn === false){
                console.log("Found a match");
                loggedIn(login);
            }
        }
    });

    let loggedin = (x) => {
        $.ajax({
            method: "PUT",
            url: "/api/login",
            data: x
        }).then(() => console.log("Successfully Logged In"));
    }



    // $.post("/api/login", login, () => {
    //     //window.location.href = "/loggdIn";
    // });
}

$("#loginform").on("submit", submitForm);

});
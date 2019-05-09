$(() => {
let submitForm = e => {
    console.log("form submitted");
    e.preventDefault();

    un = $("#eInput").val().trim();
    pw = $("#pwInput").val().trim();

    let login = {
        username: un,
        password: pw,
        loggedIn: false,
    };

    // if(un && pw && !loggedIn){
        $.post("/api/login", login, () => {
            window.location.href = "/loggdIn";
        });
    // }
    // else{
    //     $("#auth .row h1").html("Invalid Login");
    // }
}

$("#loginform").on("submit", submitForm);

});
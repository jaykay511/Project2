$(() => {
    //function that checks if a user exists or not -> returns boolean
    let existCheck = (userInput, d) => {
        console.log(d);
        console.log(userInput);
        for(let i = 0; i<d.length;i++){
            console.log("input username: " + userInput + "\n db username: " + d[i].username);
            if(d[i].username === userInput){
                console.log("Found a match\ninput username: " + userInput + "\n db username: " + d[i].username);
                console.log("Username Already Exists");
                return true;
            }
        }
        console.log("Success! New User!");
        return false;
    }

    //function that checks the 2 entered passwords to see if they match -> if so does an ajax post to create account
    let createAcct = (un, pw1, pw2) => {
        if (pw1 === pw2) {
            let newUser = {
                username: un,
                password: pw1,
                loggedIn: false
            }
            $.post("/api/login", newUser, () => {
                location.reload();
            })
        }
    }

//function that runs when create account button is submitted
let createform = e => {
    console.log("createForm started");
    e.preventDefault();

    let ue = $("#createInput").val().trim();
    console.log("username saved");
    let pw1 = $("#createpwInput1").val().trim();
    console.log("p1 saved");
    let pw2 = $("#createpwInput2").val().trim();
    console.log("p2 saved");

    $.get("/api/login", d => {
        if(!existCheck(ue, d)){
            createAcct(ue, pw1, pw2);
        }
    });
}



let submitForm = e => {
    let dbUn;
    let dbPw;
    let dbLi;
    console.log("form submitted");
    e.preventDefault();

    let un = $("#eInput").val().trim();
    let pw = $("#pwInput").val().trim();
    let login = {
        loggedIn: true,
    };

    $.get("/api/login", d => {

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
$("#createBtn").on("click", createform);

});
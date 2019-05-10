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
        console.log("New Username Found");
        return false;
    }

    let pwCheck = (pw, d) => {
        console.log(d);
        console.log(pw);
        for(let i = 0; i<d.length;i++){
            console.log("input password: " + pw + "\n db password: " + d[i].password);
            if(d[i].password === pw){
                console.log("Found a match\ninput password: " + pw + "\n db password: " + d[i].password);
                console.log("PW Matched");
                return true;
            }
        }
        console.log("PW Doesn't Match");
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

    //function to change loggedIn token to true and bring you to the user's dash
    let logIn = (user) => {
        $.ajax({
            method: 'PUT',
            url: '/api/login',
            data: {
                username: user,
                loggedIn: true
            }
        }).then( () => window.location.href = '/loggedin');
    }

    //function that runs when create account button is submitted
    let createform = e => {
        console.log("createForm started");
        e.preventDefault();

        let ue = $("#createInput").val().trim();
        let pw1 = $("#createpwInput1").val().trim();
        let pw2 = $("#createpwInput2").val().trim();

        $.get("/api/login", d => {
            if(!existCheck(ue, d)){
                createAcct(ue, pw1, pw2);
            }
            else{
                console.log("passwords don't match!");
            }
        });
    }


    //function that runs when login is submitted
    let submitLogin = e => {
        console.log("login started");
        e.preventDefault();

        let user = $("#eInput").val().trim();
        let pw = $("#pwInput").val().trim();
        $.get("/api/login", d => {
            if(existCheck(user, d) && pwCheck(pw, d)){
                logIn(user);
            }
            else{
                console.log("Check your Credetials and try again!");
            }
        })
        
    }

    //function to fade in the create account and fade out everything else
    let createClick = () => {
        $("#right").fadeOut();
        $("#left").fadeOut();
        setTimeout(() => {
            $(".wrapper").css("grid-template-columns", "1fr");
            $("#createform").fadeIn(800).css("display", 'grid');
        }, 400);
    }

    //click functions
    $("#loginBtn").on("click", submitLogin);
    $("#createBtn").on("click", createform);
    $("#create").on("click", createClick);
    $("#back").on("click", () => location.reload());
});
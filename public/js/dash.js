// import { on } from "cluster";

    let newUser = () => {
        if($("#firstname").attr("placeholder").toLowerCase() === "new" || $("#lastname").attr("placeholder").toLowerCase() === "user"){
            $("#modError p").html("Please enter your First and Last Name to continue");
            $("#close").fadeOut();
            openMod("#upInfo");
        }
    }
    let closeMod = (id) => $(id).fadeOut();
    let openMod = (id) => $(id).fadeIn(800).css("display", "grid");
    let ifNull = (id) => {
        if($(id).val() == ""){
            return $(id).attr("placeholder");
        }
        else{
            return $(id).val().trim();
        }
    }
    let updateProfile = () => {
        let f = ifNull("#firstname");
        let l = ifNull("#lastname");
        let a = ifNull("#addy");
        let p = ifNull("#tel");
        let e = ifNull("#mail");
        //console.log(f + "\n" + l + "\n" + a + "\n" + p + "\n" + e);
        $.ajax({
            method: 'PUT',
            url: '/api/users',
            data: {
                    first_name: f,
                    last_name: l,
                    address: a,
                    phone: p,
                    email: e,
                }
            }).then(() => {
                closeMod("#upInfo");
                location.reload();
            });
    }
    let updatePic = () => {
        let url = ifNull("#piclink");
        $.ajax({
            method: "PUT",
            url: '/api/users',
            data: {
                pic: url,
                email: ifNull("#mail"),
            }
        }).then(() => {
            closeMod("#upPic");
            location.reload();
        });
    }
    let logout = () => {
        $.ajax({
            method: 'PUT',
            url: '/api/login',
            data: {
                loggedIn: false,
                username: ifNull("#mail")
            }
        }).then(() => {
            console.log("you have logged out");
            window.location.href = '/';
        });
    }




    //actions
    $('#close').on("click", () => closeMod("#upInfo"));
    $('#updateInfo').on('click', () => openMod("#upInfo"));
    $("#updatebtn").on('click', () => updateProfile());
    $("#close1").on("click", () => closeMod("#upPic"));
    $("#updatePic").on("click", () => openMod("#upPic"));
    $("#uploadbtn").on("click", () => updatePic());
    $("#logout").on('click', () => logout());
    newUser();
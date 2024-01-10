pwd = document.querySelector("#password");
pwdcon = document.querySelector("#con-password");
err = document.querySelector("span");


pwdcon.addEventListener("change", function() {
    if(pwd.value != pwdcon.value)
    {
        err.removeAttribute("class","pwdmatch");
        err.setAttribute("class","error");
        pwd.setAttribute("class","err");
        pwdcon.setAttribute("class","err");
        console.log("works")
    }
    else if (pwd.value == pwdcon.value)
    {
        err.removeAttribute("class","error");
        err.setAttribute("class","pwdmatch");
        pwdcon.removeAttribute("class","err");
        console.log("not")
    }
} )
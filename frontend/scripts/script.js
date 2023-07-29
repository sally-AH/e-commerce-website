const singin_btn = document.getElementById("btn_transparent");
const signup_btn = document.getElementById("btn_signup");
const signin_back = document.getElementById("back_signin");

singin_btn.addEventListener("click", function() {
    document.getElementById('id01').style.display='block';
});

signup_btn.addEventListener("click", function(){
    document.getElementById('id02').style.display='block';
    document.getElementById('id01').style.display='none';
});

signin_back.addEventListener("click", function(){
    document.getElementById('id01').style.display='block';
    document.getElementById('id02').style.display='none';
});


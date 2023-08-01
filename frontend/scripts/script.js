const singin_btn = document.getElementById("login");
const signup_btn = document.getElementById("btn_signup");
const signin_back = document.getElementById("back_signin");
const lg = document.getElementById("login-button");
let u_id;
singin_btn.addEventListener("click", function() {
    document.getElementById('id01').style.display='block';
    // document.getElementById('heart').style.display='block';
    // document.getElementById('profile').style.display='block';
});

signup_btn.addEventListener("click", function(){
    document.getElementById('id02').style.display='block';
    document.getElementById('id01').style.display='none';
});

signin_back.addEventListener("click", function(){
    document.getElementById('id01').style.display='block';
    document.getElementById('id02').style.display='none';
});


window.addEventListener("load", (event) => {
    event.preventDefault();

    fetch('http://127.0.0.1:8000/api/product' , {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        if (data["status"]) {

            console.log(data["status"])

            let response_data = data["products"];
            const trending = document.getElementById("trending");
            response_data.forEach(value => {
                console.log(value)
                console.log("---------------------------")
            trending.innerHTML += `
            <div class="t1">
                <a href="" id ="`+value["product_id"]+`" onclick="addlike(this)"><i class="fa-solid fa-heart"></i></a>
                <br>
                <br>
                <div>`+ value["product_name"]+`</div>
                <img src="assets/images/main_.jpg" alt="">
                <br>
                <br>
                <div class="stars">
                    <a href=""><i class="fa-sharp fa-solid fa-star"></i></a>
                    <a href=""><i class="fa-sharp fa-solid fa-star"></i></a>
                    <a href=""><i class="fa-sharp fa-solid fa-star"></i></a>
                    <a href=""><i class="fa-sharp fa-solid fa-star"></i></a>
                    <a href=""><i class="fa-sharp fa-regular fa-star"></i></a>
                </div>
                <div> `+value["product_desc"]+`</div
                <br>
                <br>
                <h3> `+value["product_price"]+`</h3>
                <div class="buy-cart">
                    <button class="buy">Buy Now</button>
                    <button class="buy">Add to cart</button>
                </div>
            </div> `




            console.log(value["product_id"], value["category_id"], value["product_name"], value["product_desc"]);
        });
        } else {
            console.log(JSON.stringify(data["status"]));
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
lg.addEventListener('click', function(event){
    event.preventDefault();

    ue = document.getElementById("user_email").value;
    up = document.getElementById("user_pssword").value;
    const dataToSend = {
        user_email: ue,
        user_password: up,
    };
    fetch('http://127.0.0.1:8000/api/user_signin' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Sending JSON data
        },
        body: JSON.stringify(dataToSend),
    })
    .then(response => response.json())
    .then(data => {
        if (data["status"]) {

            console.log(data["status"])
            console.log(data["message"])
            console.log(data["user_id"])
            u_id = data["user_id"];
            document.getElementById('heart').style.display='block';
            document.getElementById('profile').style.display='block';
            document.getElementById('id01').style.display='none';
            document.getElementById('login').style.display='none';
            // document.querySelectorAll('.fa-heart').style.display='block';

            // document.getElementById("data").innerHTML = JSON.stringify(data["users"]);
        }else {
            console.log(data["status"])
            console.log(data["message"])
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
// const heart = document.getElementsByClassName("fa-heart");
// heart.addEventListener('click', function(){
//     alert("Thank you for your support!");
// })

function addlike(heart){
    alert(heart.id);
    const dataToSend = {
        user_id: u_id,
        product_id: heart.id,
    };
    fetch('http://127.0.0.1:8000/api/add_favorite' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Sending JSON data
        },
        body: JSON.stringify(dataToSend),
    })
    .then(response => response.json())
    .then(data => {
        if (data["status"]) {

            console.log(data["status"])


        } else {
            console.log(JSON.stringify(data["status"]));
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
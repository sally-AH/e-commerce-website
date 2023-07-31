const adduser = document.getElementById("add_user");
const addproduct = document.getElementById("add_product");
const show_users = document.getElementById("show_users");
const show_products = document.getElementById("show_products");

adduser.addEventListener('click', function(){
    document.getElementById('id01').style.display='block';
});

addproduct.addEventListener('click', function(){
    document.getElementById('id02').style.display='block';
});

show_users.addEventListener('click', function(){
    document.getElementById('product').style.display='none';
    document.getElementById('customer').style.display='block';
});

show_products.addEventListener('click', function(){
    document.getElementById('customer').style.display='none';
    document.getElementById('product').style.display='block';
});

window.addEventListener("load", (event) => {
    event.preventDefault();

    // const dataToSend = {
    //     method: "signup",
    //     method: "signup",
    //     method: "signup"
    // };
    const user_id = 2;

    fetch('http://127.0.0.1:8000/api/user' , {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        if (data["status"]) {

            console.log(data["status"])


            document.getElementById("data").innerHTML = JSON.stringify(data["users"]);
        } else {
            document.getElementById("data").innerHTML = JSON.stringify(data["status"]);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
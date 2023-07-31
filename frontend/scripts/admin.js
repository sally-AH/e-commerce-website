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
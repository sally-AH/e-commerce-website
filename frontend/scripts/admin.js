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

show_users.addEventListener("click", (event) => {
    event.preventDefault();


    fetch('http://127.0.0.1:8000/api/user' , {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        if (data["status"]) {

            console.log(data["status"])

            let response_data = data["users"];
            response_data.forEach(value => {
            const table = document.getElementById("customer_table");
            const row = document.createElement('tr');
            const cell1 = document.createElement('td');
            const cell2 = document.createElement('td');
            const cell3 = document.createElement('td');
            const cell4 = document.createElement('td');

            cell1.textContent = value["user_id"];
            cell2.textContent = value["user_name"];
            cell3.textContent = value["user_email"];
            cell4.textContent = value["user_password"];

            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);

            table.appendChild(row);

            console.log(value["user_id"], value["user_name"], value["user_email"], value["user_password"]);
        });
            document.getElementById("data").innerHTML = JSON.stringify(data["users"][0]);
        } else {
            document.getElementById("data").innerHTML = JSON.stringify(data["status"]);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

show_products.addEventListener("click", (event) => {
    event.preventDefault();


    fetch('http://127.0.0.1:8000/api/product' , {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        if (data["status"]) {

            console.log(data["status"])

            let response_data = data["products"];
            response_data.forEach(value => {
            const table = document.getElementById("product_table");
            const row = document.createElement('tr');
            const cell1 = document.createElement('td');
            const cell2 = document.createElement('td');
            const cell3 = document.createElement('td');
            const cell4 = document.createElement('td');

            cell1.textContent = value["product_id"];
            cell2.textContent = value["product_name"];
            cell3.textContent = value["product_desc"];
            cell4.textContent = value["product_price"];

            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);

            table.appendChild(row);

            console.log(value["product_id"], value["category_id"], value["product_name"], value["product_desc"]);
        });
            document.getElementById("data").innerHTML = JSON.stringify(data["products"][0]);
        } else {
            document.getElementById("data").innerHTML = JSON.stringify(data["status"]);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
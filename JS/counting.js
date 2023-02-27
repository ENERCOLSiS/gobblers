//Product Prices Variables
const Pringles = 3;
const Peanuts = 12;
const Halls = 3.5;
const Soda = 2.5;
const Coffee = 8;
const tax = 0.13;

//Products quantyties variables
var pringlesQ = 0;
var peanutsQ = 0;
var hallsQ = 0;
var sodaQ = 0;
var coffeeQ = 0;

//Total prices by product variables
var pringlesTotal = 0;
var peanutsTotal = 0;
var hallsTotal = 0;
var sodaTotal = 0;
var coffeeTotal = 0;

//Charges and Total
var taxes = 0;
var shipping = 0;
var subTotal = 0;
var total = 0;

// This function captures the desired quantity and the Id of the button of the desired product.
function addQuantity(buttonId, outPut){
    //alert(buttonId); // for testing

    //Take the first input
    let quantity = prompt('Input desired quantity from 1 to 99: ');
    quantity = quantity.trim(); //removes leading and trailing spaces

    // validate input (Check if it is not a number)
    while(isNaN(quantity) || quantity.trim() == '' || quantity>99 || quantity<0){
        if (quantity>99 || quantity<0){
            quantity = prompt('The number have to be between 1 and 99');
        }else{
            quantity = prompt('Please enter a number only');
        }
    }
    quantity = parseInt(quantity); //To asure int values only

    document.getElementById(outPut).innerHTML = quantity;

    //Getting quantyties
    pringlesQ = parseInt(document.getElementById('out1').textContent);
    peanutsQ = parseInt(document.getElementById('out2').textContent);
    hallsQ = parseInt(document.getElementById('out3').textContent);
    sodaQ = parseInt(document.getElementById('out4').textContent);
    coffeeQ = parseInt(document.getElementById('out5').textContent);

    //Calculating total prices by product
    pringlesTotal = parseInt(document.getElementById('out1').textContent)*Pringles;
    peanutsTotal = parseInt(document.getElementById('out2').textContent)*Peanuts;
    hallsTotal = parseInt(document.getElementById('out3').textContent)*Halls;
    sodaTotal = parseInt(document.getElementById('out4').textContent)*Soda;
    coffeeTotal = parseInt(document.getElementById('out5').textContent)*Coffee;
    subTotal = pringlesTotal + peanutsTotal + hallsTotal + sodaTotal + coffeeTotal;

    if (subTotal < 50 && subTotal != 0){
        shipping = 10;
    }else{
        shipping = 0;
    }

    taxes = subTotal * tax;

    //Showing quantities in the order summary
    document.getElementById('txt1').innerHTML = `Pringles = $ ${pringlesTotal}`;
    document.getElementById('txt2').innerHTML = `Peanuts = $ ${peanutsTotal}`;
    document.getElementById('txt3').innerHTML = `Halls = $ ${hallsTotal}`;
    document.getElementById('txt4').innerHTML = `Soda = $ ${sodaTotal}`;
    document.getElementById('txt5').innerHTML = `Coffee = $ ${coffeeTotal}`;
    document.getElementById('subTotal').innerHTML = `Subtotal = $ ${subTotal}`;
    document.getElementById('taxes').innerHTML = `Taxes = $ ${taxes.toFixed(2)}`; //limited to 2 decimals only
    document.getElementById('ship').innerHTML = `Shipping Charge = $ ${shipping}`;

    total = subTotal + taxes + shipping;

    document.getElementById('total').innerHTML = `TOTAL = $ ${total.toFixed(2)}`; //limited to 2 decimals only
}

function checkOut(){
    if (total==0){
        alert("Your order is Empty. Please order at least one unit of any product to proceed with your order");
    }else{
        let text = "Please Confirm that your order is correct!\n OK or Cancel.";
        if (confirm(text) == true) {
            //Asking for customer name
            let customerName = prompt('Input your name: ');
            customerName = customerName.trim();
            //Validating customer name entry no to be empty
            while(customerName.trim() == ''){
                customerName = prompt('Input your name: ');
            }
            if (subTotal < 50 && subTotal != 0){
                shipping = 10;
                document.write(`<h1>Receipt</h1> <hr>
                <h2>Customer Name: ${customerName}</h2>
                <p>${Date()}</p>
                <h3>Order Sumary</h3>`);

                //Printing Data on the recipt
                if(pringlesQ != 0) {document.write(`<p>Pringles x ${pringlesQ} = $${pringlesTotal}</p>`);}
                if(peanutsQ != 0) {document.write(`<p>Peanuts x ${peanutsQ} = $${peanutsTotal}</p>`);}
                if(hallsQ != 0) {document.write(`<p>Halls x ${hallsQ} = $${hallsTotal}</p>`);}
                if(sodaQ != 0) {document.write(`<p>Soda x ${sodaQ} = $${sodaTotal}</p>`);}
                if(coffeeQ != 0) {document.write(`<p>Coffee x ${coffeeQ} = $${coffeeTotal}</p>`);}

                document.write(`<hr><p>SubTotal = $${subTotal}</p>
                <p>Taxes = $${taxes.toFixed(2)}</p>
                <p>Shipping Charge = $${shipping}</p>
                <p>TOTAL = $${total.toFixed(2)}</p><hr>
                <button onclick="window.print()">PRINT RECEIPT</button>`);
            }else{
                shipping = 0;
                document.write(`<h1>Receipt</h1> <hr>
                <h2>Customer Name: ${customerName}</h2>
                <p>${Date()}</p>
                <h3>Order Sumary</h3>`);

                if(pringlesQ != 0) {document.write(`<p>Pringles x ${pringlesQ} = $${pringlesTotal}</p>`);}
                if(peanutsQ != 0) {document.write(`<p>Peanuts x ${peanutsQ} = $${peanutsTotal}</p>`);}
                if(hallsQ != 0) {document.write(`<p>Halls x ${hallsQ} = $${hallsTotal}</p>`);}
                if(sodaQ != 0) {document.write(`<p>Soda x ${sodaQ} = $${sodaTotal}</p>`);}
                if(coffeeQ != 0) {document.write(`<p>Coffee x ${coffeeQ} = $${coffeeTotal}</p>`);}

                document.write(`<hr><p>SubTotal = $${subTotal}</p>
                <p>Taxes = $${taxes.toFixed(2)}</p>
                <p>Free Shipping</p>
                <p>TOTAL = $${total.toFixed(2)}</p><hr>
                <button onclick="window.print()">PRINT RECEIPT</button>`);
            }
        } else {
            text = "You canceled!";
            //Here a temporal pop-up could have been created ex.sweet alert.
        }
    }
}
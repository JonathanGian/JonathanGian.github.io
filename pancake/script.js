const type = document.querySelector("#type");
const formContainer = document.getElementsByClassName("form-container");
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const radioButtons = document.querySelectorAll("input[type=radio]");
const button = document.querySelector("#submitName");
const orderButton = document.querySelector("#showOrder");
const totalPrice = document.querySelectorAll("#totalPrice");
const customer = document.querySelector("#userInfo");

let customerInfo = "";
let totalValue = 0;
let orders = []; 

function userInfo() {
    customerInfo = customer.value;
    customer.value = "";
}

function getSelectedToppings() {
    const selectedToppings = [];
    checkboxes.forEach((box) => {
        if (box.checked) {
            selectedToppings.push(box.id);
        }
    });
    return selectedToppings;
}

function getDeliveryMethod() {
    const radio = document.querySelector("input[type=radio]:checked");
    return radio ? radio.id : "No delivery method selected";
    /* Shorthand of else if statement */
}

function getvalues() {
    const selectedToppings = getSelectedToppings();
    const selectedPancake = type.options[type.selectedIndex].text;
    const selectedDeliveryMethod = getDeliveryMethod();

    totalValue = parseInt(type.value);
    
    checkboxes.forEach((box) => {
        totalValue += box.checked * +box.value;
    });

    const radio = document.querySelector("input[type=radio]:checked");
    if (radio != null) {
        totalValue += +radio.value;
    }

    totalPrice[0].textContent = "$" + totalValue;
    totalPrice[1].textContent = "$" + totalValue;

    
    return {
        pancakeType: selectedPancake,
        toppings: selectedToppings,
        deliveryMethod: selectedDeliveryMethod,
        totalPrice: totalValue
    };
}

function showOrder() {
    const currentOrder = getvalues();
    
    alert(`Customer Name: ${customerInfo}
Pancake Type: ${currentOrder.pancakeType}
Toppings: ${currentOrder.toppings.join(", ") || "None"}
Delivery Method: ${currentOrder.deliveryMethod}
Total Price: $${currentOrder.totalPrice}`);
    
    orders.push({
        customerName: customerInfo,
        pancakeType: currentOrder.pancakeType,
        toppings: currentOrder.toppings,
        deliveryMethod: currentOrder.deliveryMethod,
        totalPrice: currentOrder.totalPrice
    });

    console.log("Current orders: ", orders); 
}

formContainer[0].addEventListener("change", getvalues);
button.addEventListener("click", userInfo);
orderButton.addEventListener("click", showOrder);
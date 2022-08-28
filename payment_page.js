let plantext = document.getElementById("light-text");
let plant = localStorage.getItem("plan");

let mont = localStorage.getItem("month")

plantext.innerHTML = `Subscribe to ${plant} - (${mont}) plan`;

let pricetext = document.getElementById("price-text");
let price = localStorage.getItem("price");

if(mont == "Monthly"){
    pricetext.innerHTML = `${price} per month`
}else{
    pricetext.innerHTML = `$${price} per year`
}

function isNumber(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;

    return true;
}  

document.getElementById("subscribe").addEventListener("click", ()=>{
    let errors = []
    let name = document.getElementById("FullName").value;
    if(name.length < 5 ){
        errors.push("Please enter a valid name");
    }

    let cardno = document.getElementById("cardnumber").value;
    if(cardno.length < 16){
        errors.push("Please enter a valid card number");
    }

    let expiry = document.getElementById("expire").value;
    if(expiry.length < 4){
        errors.push("Please enter a valid expiry number")
    }

    let cvv = document.getElementById("cvv").value;
    if(cvv.length < 3){
        errors.push("Please enter a valid cvv")
    }
    if(errors.length > 0){
        alert(errors.join("\n"));
    }else{
        window.location.href ="./payment_processing.html"
    }
})
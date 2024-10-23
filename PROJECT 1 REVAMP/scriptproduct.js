const quantityinput = document.getElementById("quantityinput");
const stockinfo = document.getElementById("stockinfo");
const maxstock = 20;

stockinfo.innerText = `Available Stock = ${maxstock}` ;

quantityinput.addEventListener("input", function() {
    let value = parseInt (quantityinput.value);
    if (value <1){
        quantityinput.value = 1;
    } 
    if (value >maxstock){
        quantityinput.value = maxstock;
        alert(`Sorry,you are note the SIGMA one.There is only ${maxstock} SIGMA merchandise left.`)
    }
})
let colorinput = document.querySelectorAll(".color input");

colorinput.forEach((input) => {
    input.addEventListener("change", function() {
        if (this.checked) {
            productImg.src = this.getAttribute("data-image");
        }
    });
});
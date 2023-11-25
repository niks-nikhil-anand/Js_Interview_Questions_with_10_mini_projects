let imgBox = document.getElementById("imgBox");
let qr_image = document.getElementById("qr_image");
let input_text = document.getElementById("input_text");
let container = document.getElementById("box");


function generateQr() {
    if (input_text.value.length > 0) {
        qr_image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input_text.value;
        imgBox.classList.add("show-img");
        setTimeout(() => {
            container.style.border = "3px solid green";
        }, 1000);
    } else {
        // alert("Enter something to generate Qr code ")
        input_text.classList.add("error");
        setTimeout(() => {
            input_text.classList.remove("error");
        }, 1000);
    }

}
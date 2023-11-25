let imgBox = document.getElementById("imgBox");
let qr_image = document.getElementById("qr_image");
let input_text = document.getElementById("input_text");


function generateQr() {
    if (input_text.value.length > 0) {
        qr_image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input_text.value;
        imgBox.classList.add("show-img");
    } else {
        // alert("Enter something to generate Qr code ")
        input_text.classList.add("error");
        setTimeout(() => {
            input_text.classList.remove("error");
        }, 1000);
    }

}
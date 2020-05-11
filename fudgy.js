var yumms = confirm("do you like chocolate?")
if (yumms === true) {
    alert("hell yeah!")
} else { window.location.replace("http://www.theuselessweb.com") }

document.getElementById("buyBtn").addEventListener("click", function () {

    function buyNow() {
        if (buyBtn === true) {
            window.location.href("purchase.html")
        }
    }
    buyNow(buyBtn)
})

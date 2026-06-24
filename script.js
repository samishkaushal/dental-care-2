document.querySelectorAll('a[href="#whatsapp-us"]').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log("whatsapp");
    });
});
document.querySelectorAll('a[href="#book-audit"]').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log("Free Audit Button Clicked");
    });
});

function handleSubmit() {

    const btn = document.querySelector(".form-submit");

    btn.innerText = " Request Submitted";
    btn.disabled = true;

    alert("Thank You! We will contact you soon.");
}

function handleSubmit() {
    alert("Thank You! Your Audit Request Has Been Submitted.");

    window.open(
        "https://wa.me/918960473346",

        "_blank"
    );
}
function handleCall() {
    alert("Thanku for Calling Us");

    window.location.href(
        "tel: +91 8960473346",

        "_blank"
    );
}
function openPopup() {
    document.getElementById("popupForm").style.display = "block";
}

function closePopup() {
    document.getElementById("popupForm").style.display = "none";
}
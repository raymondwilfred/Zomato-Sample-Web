document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registerForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();

       
        if (name === "" || email === "" || phone === "") {
            alert("Please fill all fields");
            return;
        }

        const userData = {
            name: name,
            email: email,
            phone: phone
        };

        console.log("Registered User:", userData);

       
        document.getElementById("form-status").textContent =
            `Thank you, ${name}! Registration successful.`;

        form.reset();
    });

});

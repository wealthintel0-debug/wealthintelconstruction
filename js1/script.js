document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        const text = `*🏗️ New Contact Form Message*

👤 Name: ${name}

📧 Email: ${email}

💬 Message:
${message}`;

        const phone = "263789795789"; // Your WhatsApp number

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

        // Opens WhatsApp
        window.open(url, "_blank");

        // Thank you message
        alert("✅ Thank you for contacting Wealth Intel Construction Solutions!\n\nWe have received your message and will get back to you soon.");

        // Clear form
        form.reset();
    });

});
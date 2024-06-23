document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            alert(`Hvala Vam na vašoj poruci, ${name}! Uskoro ćemo Vas kontaktirati putem ${email} mail adrese.`);
            form.reset();
        });
    }
});

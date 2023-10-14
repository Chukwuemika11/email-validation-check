document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email-input');
    const checkButton = document.getElementById('check-button');
    const resultMessage = document.getElementById('result-message');

    checkButton.addEventListener('click', function () {
        const email = emailInput.value;
        const isValid = validateEmail(email);

        if (isValid) {
            resultMessage.textContent = 'Valid email address!';
            resultMessage.style.color = 'green';
        } else {
            resultMessage.textContent = 'Invalid email address.';
            resultMessage.style.color = 'red';
        }
    });

    function validateEmail(email) {
        // Regular expression for email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});

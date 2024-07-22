document.getElementById('dataForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form from reloading the page

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const treatmentRequirement = document.getElementById('treatmentRequirement').value;

    try {
        const response = await fetch('https://backend-for-front-end-assignment-hermanos.vercel.app/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fullName, email, phoneNumber, treatmentRequirement }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Error:', error);
        alert('There was a problem with your submission. Please try again later.');
    }
});

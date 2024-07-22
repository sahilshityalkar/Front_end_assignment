document.getElementById('dataForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const treatmentRequirement = document.getElementById('treatmentRequirement').value;

    const response = await fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, phoneNumber, treatmentRequirement }),
    });

    const result = await response.json();
    alert(result.message);
});

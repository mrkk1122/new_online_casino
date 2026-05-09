const year = document.getElementById('year');
const leadForm = document.getElementById('lead-form');
const formMessage = document.getElementById('form-message');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (leadForm) {
  leadForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    if (!emailInput || !(emailInput instanceof HTMLInputElement)) {
      return;
    }

    const safeEmail = emailInput.value.replace(/[^\w@.+-]/g, '').trim();
    formMessage.textContent = `Thanks! Setup details will be sent to ${safeEmail}.`;
    leadForm.reset();
  });
}

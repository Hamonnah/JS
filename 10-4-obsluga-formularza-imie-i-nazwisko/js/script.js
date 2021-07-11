console.log('Warsztat – Obsługa formularza ‘Imie i nazwisko’');

let form = document.getElementById('form');

const submitForm = (event) => {
    event.preventDefault();
    let firstName = document.querySelector('[name = "fname"]');
    let lastName = document.querySelector('[name = "lname"]');
    
    console.log(`Imie: ${firstName.value}, Nazwisko: ${lastName.value}`);
    console.log(lastName);
};

form.addEventListener('submit', submitForm);

console.log(form);
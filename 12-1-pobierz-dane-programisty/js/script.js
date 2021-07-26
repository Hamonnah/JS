

const btnFetch = document.getElementById('fetch');

const fetchData = () => {

    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .then(response => response.json())
        .then(data => {

            let divElement = document.getElementById('dane-programisty');
            let pName = document.createElement('p');
            let pSurName = document.createElement('p');
            let pProfession = document.createElement('p');
            let pCompany = document.createElement('p');

            pName.innerText = `Imie : ${data.imie}`;
            pSurName.innerText = `Nazwisko : ${data.nazwisko}`;
            pProfession.innerText = `Zawod : ${data.zawod}`;
            pCompany.innerText = `Firma : ${data.firma}`;

            divElement.appendChild(pName);
            divElement.appendChild(pSurName);
            divElement.appendChild(pProfession);
            divElement.appendChild(pCompany);
        
        });
    }
   

btnFetch.addEventListener('click', fetchData);

console.log(btnFetch);
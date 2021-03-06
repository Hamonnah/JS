console.log('AJAX - Pobierz dane po kliknieciu przycisku');

let btnGetData = document.getElementById('get-data');

const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(res => res.json())
        .then(data => {

            let pId = document.createElement('p');
            let pUserId = document.createElement('p');
            let pTitle = document.createElement('p');
            let pBody = document.createElement('p');
            let hr = document.createElement('hr');

            pId.innerText = `Post Id: ${data.id}`;
            pUserId.innerText = `Post Id: ${data.userId}`;
            pTitle.innerText = `Post Id: ${data.title}`;
            pBody.innerText = `Post Id: ${data.body}`;

            document.body.appendChild(pId);
            document.body.appendChild(pUserId);
            document.body.appendChild(pTitle);
            document.body.appendChild(pBody);
            document.body.appendChild(hr);
        })
        .catch(error => {
            console.error(error);
        });
}

btnGetData.addEventListener('click', getData);
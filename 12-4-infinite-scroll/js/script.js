console.log('Warsztat – Infinite Scroll');

let endOfThePage = 0;

let preloading = false;

const showPreloader = () => {

    let preloader = document.getElementById('preloader');
    preloader.style.display = 'block';
    preloading = true;
};

const hidePreloader = () => {

    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    preloading = false;
};

const getData = () => {

    if (!preloading) {
        showPreloader();
        fetch(`https://akademia108.pl/api/ajax/get-users.php`)
            .then(res => res.json())
            .then(data => {

                let body = document.body;
                let hr = document.createElement('hr');
                body.appendChild(hr);

                for (let user of data) {
                    let pId = document.createElement('p');
                    let name = document.createElement('p');
                    let pWebsite = document.createElement('p');

                    pId.innerText = `User Id: ${user.id}`;
                    name.innerText = `User Name: ${user.name}`;
                    pWebsite.innerHTML = `User Url: ${user.website} <br/> =============`;

                    body.appendChild(pId);
                    body.appendChild(name);
                    body.appendChild(pWebsite);

                    hidePreloader();
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

}
const scrollToEndOfPage = () => {

    let d = document.documentElement;
    let scrollHeight = d.scrollHeight;
    let scrollTop = d.scrollTop;
    let clientHeight = d.clientHeight;
    let sumScrollTopScrollHeight = Math.ceil(scrollTop + clientHeight);

    console.log(`scrollHeight: ${scrollHeight}`);
    console.log(`scrollTop: ${scrollTop}`);
    console.log(`clientHeight: ${clientHeight}`);
    console.log(`sumScrollTopScrollHeight: ${sumScrollTopScrollHeight}`);
    console.log(`===================================`);

    if (sumScrollTopScrollHeight >= scrollHeight) {
        endOfThePage += 1;
        console.log(`przescrolowany ${endOfThePage}`);

        getData();
    }

}

window.addEventListener('scroll', scrollToEndOfPage);
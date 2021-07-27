

/*let btnFetchBitcoin = document.getElementById('fetch-bitcoin');

const fetchBitcoin = () => {
    fetch('https://blockchain.info/pl/ticker')
    .then(response => response.json())
    .then(data => {
        let pBuy = document.createElement('p');
        let pSell = document.createElement('p');

        pBuy.innerText = `Kupno ${data.buy}`;
        pSell.innerText = `Sprzedaz ${data.sell}`;

        document.body.appendChild(pBuy);
    });
}


btnFetchBitcoin.addEventListener('click', fetchBitcoin);*/


$(document).ready(function () {

    $('#get-data').click(function () {
        $.getJSON('https://blockchain.info/pl/ticker')
            .done(function (data) {

                let pTitle = $('<p></p>').text(`Aktualny kurs Bitcoin do PLN`);
                let pBuy = $('<p></p>').text(`Kupno : ${data.PLN.buy} ${data.PLN.symbol}`);
                let pSell = $('<p></p>').text(`Sprzedaz : ${data.PLN.sell} ${data.PLN.symbol}`);
                let jqBox = $('#box')

                jqBox.empty();
                jqBox.append(pTitle);
                jqBox.append(pBuy);
                jqBox.append(pSell);
               
            })
            .fail(function (error) {
                console.error(error);
            });

    });

});
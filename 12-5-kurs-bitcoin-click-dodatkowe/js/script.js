
$(document).ready(function () {

    $.ajaxSetup({ cache: false });

    let currentExangeValue = 0;

    $('#get-data').click(function () {
        $.getJSON('https://blockchain.info/pl/ticker')
            .done(function (data) {

                if (currentExangeValue < data.PLN.buy) {
                    $('#indicator').removeAttr('class').addClass('fas fa-arrow-up');
                    $('#indicator-buy').removeAttr('class').addClass('fas fa-arrow-up');
                } else if (currentExangeValue > data.PLN.buy) {
                    $('#indicator').removeAttr('class').addClass('fas fa-arrow-down');
                    $('#indicator-buy').removeAttr('class').addClass('fas fa-arrow-down');
                } else {
                    $('#indicator').removeAttr('class').addClass('fas fa-minus');
                    $('#indicator-buy').removeAttr('class').addClass('fas fa-minus');
                }

                let pTitle = $('<h1></h1>').text(`Aktualny kurs Bitcoin do PLN`);
                let titleBuy = $('<h2></h2>').text(`Kupno : `);
                let pBuy = $('<p></p>').text(`${data.PLN.buy} ${data.PLN.symbol}`);
                let titleSell = $('<h2></h2>').text(`Sprzedaz : `);
                let pSell = $('<p></p>').text(`${data.PLN.sell} ${data.PLN.symbol}`);
                let jqBuyExange = $('.buy-exange');
                let jqsellExange = $('.sell-exange');
                let jqBox = $('#box')

                jqBuyExange.empty();
                jqsellExange.empty();
                jqBox.empty();
                jqBox.append(pTitle);
                jqBuyExange.append(titleBuy);
                jqBuyExange.append(pBuy);
                jqsellExange.append(titleSell);
                jqsellExange.append(pSell);

                //$('h1').css('background-color', 'red');
                currentExangeValue = data.PLN.buy;

            })
            .fail(function (error) {
                console.error(error);
            });

    });

});
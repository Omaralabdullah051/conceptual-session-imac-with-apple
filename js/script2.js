function updateAll(itemId, price) {
    const cost = document.getElementById(itemId);
    cost.innerText = price;
    const bestPrice = document.getElementById('best-price');
    const memoryCost = document.getElementById('memory-cost');
    const storageCost = document.getElementById('storage-cost');
    const deliveryCost = document.getElementById('delivery-cost');
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
}

function onClick(clickId, updateId, price) {
    document.getElementById(clickId).addEventListener('click', function () {
        updateAll(updateId, price);
    })
}

onClick('eightGB', 'memory-cost', 0);
onClick('sixteenGB', 'memory-cost', 200);
onClick('ssd1', 'storage-cost', 0);
onClick('ssd2', 'storage-cost', 300);
onClick('ssd3', 'storage-cost', 500);
onClick('free-delivery', 'delivery-cost', 0);
onClick('paid-delivery', 'delivery-cost', 20);

document.getElementById('apply-btn').addEventListener('click', function () {
    const promo = document.getElementById('promo-input');
    const promoText = promo.value;
    const promoCode = 'pHero';
    if (promoText == promoCode) {
        const totalPrice = document.getElementById('total-price');
        const totalPriceAmount = parseFloat(totalPrice.innerText);
        const discount = totalPriceAmount * 20 / 100;
        totalPrice.innerText = totalPriceAmount - discount;
        promo.value = '';
        document.getElementById('applied-text').style.display = 'block';
        document.getElementById('unapplied-text').style.display = 'none';
    }
    else {
        alert('Your promo code is wrong');
        promo.value = '';
    }
})
// document.getElementById('eightGB').addEventListener('click', function () {
//     // const bestPrice = document.getElementById('best-price');
//     // const memoryCost = document.getElementById('memory-cost');
//     // memoryCost.innerText = 0;
//     // const storageCost = document.getElementById('storage-cost');
//     // const deliveryCost = document.getElementById('delivery-cost');
//     // const totalPrice = document.getElementById('total-price');
//     // totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
//     updateAll('memory-cost', 0);
// })

// document.getElementById('sixteenGB').addEventListener('click', function () {
//     // const bestPrice = document.getElementById('best-price');
//     // const memoryCost = document.getElementById('memory-cost');
//     // memoryCost.innerText = 200;
//     // const storageCost = document.getElementById('storage-cost');
//     // const deliveryCost = document.getElementById('delivery-cost');
//     // const totalPrice = document.getElementById('total-price');
//     // totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
//     updateAll('memory-cost', 200);
// })

// document.getElementById('ssd1').addEventListener('click', function () {
//     // const bestPrice = document.getElementById('best-price');
//     // const memoryCost = document.getElementById('memory-cost');
//     // const storageCost = document.getElementById('storage-cost');
//     // storageCost.innerText = 0;
//     // const deliveryCost = document.getElementById('delivery-cost');
//     // const totalPrice = document.getElementById('total-price');
//     // totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
//     updateAll('storage-cost', 0);
// })

// document.getElementById('ssd2').addEventListener('click', function () {
//     // const bestPrice = document.getElementById('best-price');
//     // const memoryCost = document.getElementById('memory-cost');
//     // const storageCost = document.getElementById('storage-cost');
//     // storageCost.innerText = 300;
//     // const deliveryCost = document.getElementById('delivery-cost');
//     // const totalPrice = document.getElementById('total-price');
//     // totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
//     updateAll('storage-cost', 300);
// })

// document.getElementById('ssd3').addEventListener('click', function () {
//     // const bestPrice = document.getElementById('best-price');
//     // const memoryCost = document.getElementById('memory-cost');
//     // const storageCost = document.getElementById('storage-cost');
//     // storageCost.innerText = 500;
//     // const totalPrice = document.getElementById('total-price');
//     // const deliveryCost = document.getElementById('delivery-cost');
//     // totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
//     updateAll('storage-cost', 500);
// })

// document.getElementById('free-delivery').addEventListener('click', function () {
//     // const bestPrice = document.getElementById('best-price');
//     // const memoryCost = document.getElementById('memory-cost');
//     // const storageCost = document.getElementById('storage-cost');
//     // const deliveryCost = document.getElementById('delivery-cost');
//     // deliveryCost.innerText = 0;
//     // const totalPrice = document.getElementById('total-price');
//     // totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
//     updateAll('delivery-cost', 0);
// })

// document.getElementById('paid-delivery').addEventListener('click', function () {
//     // const bestPrice = document.getElementById('best-price');
//     // const memoryCost = document.getElementById('memory-cost');
//     // const storageCost = document.getElementById('storage-cost');
//     // const deliveryCost = document.getElementById('delivery-cost');
//     // deliveryCost.innerText = 20;
//     // const totalPrice = document.getElementById('total-price');
//     // totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
//     updateAll('delivery-cost', 20);
// })
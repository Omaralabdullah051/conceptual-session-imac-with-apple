function updateAll(option, innerText) {
    debugger;
    const bestPrice = document.getElementById('best-price');
    const memoryCost = document.getElementById('memory-cost');
    const storageCost = document.getElementById('storage-cost');
    const deliveryCost = document.getElementById('delivery-cost');
    const totalPrice = document.getElementById('total-price');
    if (option == 'memory') {
        memoryCost.innerText = innerText;
        totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
    }
    else if (option == 'storage') {
        storageCost.innerText = innerText;
        totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
    }
    else if (option == 'delivery') {
        deliveryCost.innerText = innerText;
        totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
    }

}

document.getElementById('eightGB').addEventListener('click', function () {
    // const bestPrice = document.getElementById('best-price');
    // const memoryCost = document.getElementById('memory-cost');
    // memoryCost.innerText = 0;
    // const storageCost = document.getElementById('storage-cost');
    // const deliveryCost = document.getElementById('delivery-cost');
    // const totalPrice = document.getElementById('total-price');
    // totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
    updateAll('memory', 0);
})

document.getElementById('sixteenGB').addEventListener('click', function () {
    // const bestPrice = document.getElementById('best-price');
    // const memoryCost = document.getElementById('memory-cost');
    // memoryCost.innerText = 200;
    // const storageCost = document.getElementById('storage-cost');
    // const deliveryCost = document.getElementById('delivery-cost');
    // const totalPrice = document.getElementById('total-price');
    // totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
    updateAll('memory', 200);
})

document.getElementById('ssd1').addEventListener('click', function () {
    // const bestPrice = document.getElementById('best-price');
    // const memoryCost = document.getElementById('memory-cost');
    // const storageCost = document.getElementById('storage-cost');
    // storageCost.innerText = 0;
    // const deliveryCost = document.getElementById('delivery-cost');
    // const totalPrice = document.getElementById('total-price');
    // totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
    updateAll('storage', 0);
})

document.getElementById('ssd2').addEventListener('click', function () {
    // const bestPrice = document.getElementById('best-price');
    // const memoryCost = document.getElementById('memory-cost');
    // const storageCost = document.getElementById('storage-cost');
    // storageCost.innerText = 300;
    // const deliveryCost = document.getElementById('delivery-cost');
    // const totalPrice = document.getElementById('total-price');
    // totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
    updateAll('storage', 300);
})

document.getElementById('ssd3').addEventListener('click', function () {
    // const bestPrice = document.getElementById('best-price');
    // const memoryCost = document.getElementById('memory-cost');
    // const storageCost = document.getElementById('storage-cost');
    // storageCost.innerText = 500;
    // const totalPrice = document.getElementById('total-price');
    // const deliveryCost = document.getElementById('delivery-cost');
    // totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
    updateAll('storage', 500);
})

document.getElementById('free-delivery').addEventListener('click', function () {
    // const bestPrice = document.getElementById('best-price');
    // const memoryCost = document.getElementById('memory-cost');
    // const storageCost = document.getElementById('storage-cost');
    // const deliveryCost = document.getElementById('delivery-cost');
    // deliveryCost.innerText = 0;
    // const totalPrice = document.getElementById('total-price');
    // totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
    updateAll('delivery', 0);
})

document.getElementById('paid-delivery').addEventListener('click', function () {
    // const bestPrice = document.getElementById('best-price');
    // const memoryCost = document.getElementById('memory-cost');
    // const storageCost = document.getElementById('storage-cost');
    // const deliveryCost = document.getElementById('delivery-cost');
    // deliveryCost.innerText = 20;
    // const totalPrice = document.getElementById('total-price');
    // totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
    updateAll('delivery', 20);
})
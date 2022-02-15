function update(itemId, price) {
    // debugger;
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
        update(updateId, price);
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
    const promo = document.getElementById('promo-input')
    const promoText = promo.value;
    const promoCode = 'pHero';
    if (promoText === promoCode) {
        const totalPrice = document.getElementById('total-price');
        const totalPriceAmount = parseFloat(totalPrice.innerText);
        const tweentyPercentDiscount = totalPriceAmount * 20 / 100;
        totalPrice.innerText = totalPriceAmount - tweentyPercentDiscount;
        promo.value = '';
        document.getElementById('applied-text').style.display = 'block';
        document.getElementById('unapplied-text').style.display = 'none';
    }
    else {
        alert('your promo code is wrong;Please try again');
        promo.value = '';
    }
})


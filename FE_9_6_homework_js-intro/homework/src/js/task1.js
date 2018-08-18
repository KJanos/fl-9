let price = prompt('Enter price:');
let discount = prompt('Enter discount:');
if (price>0 && (discount>=0&&discount<=100)){
    let pwd=price-discount*price/100;
    let saved=price-pwd;
    console.log('Price without discount: ' + Math.floor(price*100)/100 + '\n'
                + 'Discount: ' + Math.floor(discount*100)/100 +'%' + '\n'
                + 'Price with discount: ' + Math.floor(pwd*100)/100 + '\n'
                + 'Saved: ' + Math.floor(saved*100)/100)
} else {
    console.log('Invalid data');
}
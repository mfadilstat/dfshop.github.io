
// Setting nomor kalian
const contact = 6285340960793;

const pesanPembuka = "Hai... Saya salah satu pengunjung website Anda. Saya tertarik dan ingin membeli ";
const pesanPenutup = "Terima kasih dan Semoga sukses selalu.";

const mainContainer = document.querySelector('.main-container');
const imgJumbo = document.querySelector('.img-jumbo');
const thumbs = document.querySelectorAll('.thumb');
const spinner = document.querySelector('.spinner');
const numSpinner = document.querySelector('.number-spinner');
const infoProduct = document.querySelector('.info-product');
const hargaProduct = document.querySelector('.harga-product');
const unitProduct = document.querySelector('.n-unit');
const sizeProduct = document.querySelector('.size-product');
const namaProduct = document.querySelector('.nama-product');
const productContainer = document.querySelector('.product-container');

const nama_product = namaProduct;
const harga_product = hargaProduct;

mainContainer.addEventListener('click', function(e){
    if( e.target.className == 'thumb' ){
        imgJumbo.src = e.target.src;
        imgJumbo.classList.add('fade');

        setTimeout(function(){
            imgJumbo.classList.remove('fade');
        }, 500);

        thumbs.forEach(function(thumb){
            thumb.className = 'thumb';
        });
        // e.target.classList.add('active');
    }
});


function get_pic(e, info='', nama='', harga='', unit='', size=''){
    imgJumbo.src = e;
    imgJumbo.classList.add('fade');
    numSpinner.value = 1;

    setTimeout(function(){
        imgJumbo.classList.remove('fade');
    }, 500);

    thumbs.forEach(function(thumb){
        thumb.className = 'thumb';
    });

    infoProduct.innerHTML = info;
    namaProduct.innerHTML = nama;
    hargaProduct.innerHTML = harga;
    unitProduct.innerHTML = unit;
    sizeProduct.innerHTML = size;

    nama_product = nama;
    harga_product = harga;
}

function navMenu(e){
    const navAll = document.querySelectorAll('.nav-link');
    const navLink = document.querySelector(e);

    navAll.forEach(function(nabActive){
        if(nabActive.classList.contains('active')){
            nabActive.classList.remove('active');
        };
    });

    navLink.classList.add('active');
}

// Spinner Button#
spinner.addEventListener('click', function(e){
    if( e.target.className == 'next' ){
        numSpinner.value++;
    }
    if( e.target.className == 'prev' ){
        numSpinner.value--;
        if(numSpinner.value <= 1){
            numSpinner.value = 1;
        }
    }
});

productContainer.addEventListener('click', function(e){
    if(e.target.className == 'btn-buy'){
        window.open("https://api.whatsapp.com/send/?phone=6285340960793&text="+pesanPembuka+" *"+namaProduct.textContent+"* (" + hargaProduct.textContent + ") sebanyak *" +numSpinner.value + "*. " + pesanPenutup);
    };
});


function buy_product(){
    numSpinner.value = 1;
}
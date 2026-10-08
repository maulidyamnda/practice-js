let headset = 225000;
let mouse = 150000;
let keyboard = 350000;

const pembayaran = 800000;

let totalBelanja = headset + mouse + keyboard;
let persenDiskon;
let diskon;
let hargaAkhir;

if (totalBelanja >= 250000 && totalBelanja <= 499999) {
    persenDiskon = 5;
    diskon = totalBelanja * persenDiskon / 100;
} else if (totalBelanja >= 500000 && totalBelanja <= 799999) {
    persenDiskon = 10;
    diskon = totalBelanja * persenDiskon / 100;
} else if (totalBelanja >= 800000) {
    diskon = totalBelanja * persenDiskon / 100;
} else {
    diskon = 0;
}

hargaAkhir = totalBelanja - diskon; 

console.log("===== Rincian Pembelian =====");

console.log("Headset = Rp.", headset);
console.log("Mouse = Rp.", mouse);
console.log("Keyboard = Rp.", keyboard);
console.log("");
console.log("Total belanja = Rp.", totalBelanja);
console.log("Diskon =", persenDiskon +"%");
console.log("Total setelah diskon = Rp.", hargaAkhir);
console.log("Pembayaran = Rp.", pembayaran);
console.log("Kembalian = Rp.", pembayaran - hargaAkhir);
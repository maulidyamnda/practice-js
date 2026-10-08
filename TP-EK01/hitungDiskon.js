const nasiGoreng = 25000;
const mieGoreng = 22000;
const capcay = 32000;
const diskon = 10;
const pembayaran = 100000;


const totalHarga = nasiGoreng+ mieGoreng+capcay;
const besarDiskon = totalHarga * 10/100;
hargaAkhir = totalHarga - besarDiskon;

console.log("Harga Nasi Goreng = Rp", nasiGoreng);
console.log("Harga Mie Goreng = Rp", mieGoreng);
console.log("Harga Capcay = Rp", capcay);
console.log("Harga TOtal = Rp"+totalHarga);
console.log("Diskon = ",diskon +"%");
console.log("Harga Setelah Diskon = Rp"+hargaAkhir);
console.log("Pembayaran = Rp"+pembayaran);
console.log("Kembalian = ", pembayaran-hargaAkhir);


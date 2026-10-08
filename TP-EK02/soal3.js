let hasil;
for (i=1; i<=20; i++){
        if(i%2===1 && i%3===0){
            hasil="Mengikuti Uji Kompetensi";
        }else if (i%2===0 && i%3===0){
            hasil="Mendapatkan Sertifikat";
        }else if(i%2===1){
            hasil="Apel";
        }else{
            hasil="Mengikuti Pelatihan";
        }
        
    
    console.log(i +" - " + hasil);
}

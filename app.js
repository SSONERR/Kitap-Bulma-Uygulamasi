//Kitap bulma
let yeniSatir = "\n"

let kitap1 = {
    isim: "Suç ve Ceza",
    konum: "1.Raf 5.Sıra",
    yazar: "Fyodor Dostoyevski",
    fiyat: "19"
}
let kitap2 = {
    isim: "Bin Muhteşem Güneş",
    konum: "5.Raf 2.Sıra",
    yazar: "Khaled Hosseini",
    fiyat: "12"
}
let kitap3 = {
    isim: "Kırmızı Pazartesi",
    konum: "2.Raf 7.Sıra",
    yazar: "Gabriel Garcia Marquez",
    fiyat: "15"
}
let kitap4 = {
    isim: "1984",
    konum: "1.Raf 2.Sıra",
    yazar: "George Orwell",
    fiyat: "17"
}
let kitap5 = {
    isim: "Simyacı",
    konum: "8.Raf 9.Sıra",
    yazar: "Paulo Coelho",
    fiyat: "19"
}
let kitap6 = {
    isim: "Sefiller",
    konum: "6.Raf 4.Sıra",
    yazar: "Victor Hugo",
    fiyat: "18"
}

let kitaplar = [kitap1, kitap2, kitap3, kitap4, kitap5, kitap6]
let bulunan = []
let aranan = prompt("Lütfen aradığınız kitabı giriniz : ")



kitaplar.forEach(function (ürün) {
    if (ürün.isim.toUpperCase().includes(aranan.toUpperCase())) {
        bulunan.push("Ürün İsmi : "+ürün.isim+yeniSatir+"Yazar : "+ürün.yazar+yeniSatir+"Fiyat : "+ürün.fiyat+" TL"+yeniSatir+"Bulunduğu Yer : "+ürün.konum)
    }
})
if(bulunan.length!==0){
    alert(bulunan)
}else{
    alert("Bu kitap stokta yok !")
}
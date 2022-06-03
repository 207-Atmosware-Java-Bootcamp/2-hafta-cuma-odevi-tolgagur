//Ödev kullanıcı tarafında girilen şifre ve şifre doğrulama
//validation password -repassword
//kullanıcıdan veri alan yer


//input
var username = window.prompt("kullanıcı adi")
var pass1 = prompt("şifre");
var pass2 = prompt("sifreyi tekrar giriniz");


//doğrulama fonksiyonu. burada while içerisinde şifreleri karşılaştırıyor. Şifreler eşleşirse fonksiyon true döner. 
//Eğer şifreler boş geçilirse fonksiyon false dönüyor.
function valid() {
    while (!(pass1 ==  pass2)) {
        pass1 = prompt("yanlış şifre.");
        pass2 = prompt("sifreyi tekrar giriniz.");
    }

    if(pass1==null && pass2==null)
        return false;
    else{
        return true;
    }
}

// şifreler doğru ise hoşgeldin mesajı yazdıran fonksiyon
function loginPrint() {
    document.writeln("Hoş geldin " + username + ".");
}

// şifre kısımları boş geçilirse hata mesajı
function loginErr() {
    document.writeln("geçersiz kullanıcı adi ve sifre");
}


// duruma göre ekrana yazılacak mesaj;
function write() {
    return valid() === true ? loginPrint():loginErr();
}

write();


// buat aplikasi random atau giveaway;
// (-) masih belom ada 2 pilihan. contoh Bab - 1 adalah Andi
// membuat object dengan constructor
function Rndm(daftarPemain) {
    this.daftarPemain = daftarPemain;

    this.inpPemain = (namaPemain) => {
        if (this.daftarPemain.length === 0 || this.daftarPemain[0] === undefined) {
            this.daftarPemain.push(namaPemain);
        }
        else {
            for (var i = 0; i < this.daftarPemain.length; i++) {
                if (this.daftarPemain[i] === namaPemain) {
                    alert(`user ${namaPemain}, sudah ada dalam permainan.`)
                    return i--;
                }
            }
            this.daftarPemain.push(namaPemain);
        }
        return this.daftarPemain;
    }

    this.acakPemain = () => {
        var output = [];
        var arr = this.daftarPemain;
        var newArrr = arr.map(e => e);
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < newArrr.length; j++) {
                for (var k = 0; k < arr.length; k++) {
                    for (var l = 0; l < arr.length; l++) {
                        for (var m = 0; m < arr.length; m++) {
                            var acak = newArrr[Math.floor(Math.random() * newArrr.length)];
                        }
                    }
                }
            }
            var find = newArrr.indexOf(acak);
            newArrr.splice(find, 1);
            output.push(acak);
        }
        
        return output;
    }

    this.outputHasil = () => {
        var out = '';
        var newOutput = this.acakPemain().map(e => e);
        newOutput.forEach((e,i) => out += `Pemain ke - ${i+1} adalah ${e}.\n`);
        return out;
    }

    this.resetPermainan = () => {
        for (var i = 0; i < this.daftarPemain.length; i++) {
            this.daftarPemain.pop();
        }
        this.daftarPemain.pop();

        return this.daftarPemain;
    }
}

var main = new Rndm([]);

alert("Random Of Your Choice\nAplikasi untuk mengacak pilihan layaknya undian.\nUntuk lanjut klik 'Ok.'");

var inpBanyakPemain = parseInt(prompt('Masukan banyak pemain : '));


for(var i = 0; i < inpBanyakPemain;i++){
    var inpDataPemain = prompt(`Masukan nama pemain ke - ${i+1}: `);
    main.inpPemain(inpDataPemain);
}
main.acakPemain();

var cntrl = true;
var a = 0;
while (cntrl === true) {
    alert(`Percobaan - ${a+1}\n-----------------------------\n${main.outputHasil().toLowerCase()}`);
    cntrl = confirm(`Apakah ingin mengacak lagi?\nUntuk acak lagi klik "Ok".\nUntuk Keluar klik "Cancel"`);
    if(cntrl === true){
        main.acakPemain();
        main.outputHasil();
        a += 1;
    } else {
        alert(`Terimakasih telah berkunjung 🙏.`);
        alert(`Made by bangef with ☕`);
    }
   
}



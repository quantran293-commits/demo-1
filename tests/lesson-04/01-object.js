// let sinhVienA = {
//     hoTen: "Quan Tran",
//     tuoi: 33,
//     lop: "WEB01"
// }

// let sinhVien = {
//     name: "Quan",
//     address: "HCM",
//     isLoveBadminton: true
// }

// let sinhVienB = new Object();
// sinhVienB.toTen = "Linh tu";
// sinhVienB.tuoi = 32;
// sinhVienB.lop = "PW K22";

// console.log(sinhVien.address)

const myClass = {
    name: "K22"
}
console.log(myClass);

myClass["major"] = "PW";
myClass.language = "TS";
console.log(myClass);

myClass.name = "K24";
console.log(myClass);

delete myClass.language;
console.log(myClass);

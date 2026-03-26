const lop1 = {
    name: "A1",
    diem: [5,7,8]
}

const lop2 = {
    name: "A2",
    diem: [6,7,10]
}

// let tongDiemLop1 = 0;

// for ( let i = 0; i < lop1.diem.length; i++) {
//     tongDiemLop1 += lop1.diem[i];
// }

// const TB = tongDiemLop1 / lop1.diem.length;
// console.log(`diem trung binh cua lop ${lop1.name} la ${TB}`);

// let tongDiemLop2 = 0;

// for ( let i = 0; i < lop2.diem.length; i++) {
//     tongDiemLop2 += lop2.diem[i];
// }

// const TB2 = tongDiemLop2 / lop2.diem.length;
// console.log(`diem trung binh cua lop ${lop2.name} la ${TB2}`);

function tinhTrungBinh (diem) {
    let tong = 0;

    for ( let i = 0; i < diem.length; i++) {
        tong += diem[i];
    }

    return tong / diem.length;
}

function inTrungBinh(name, trungBinh) {
    console.log(`diem trung binh cua lop ${name} la ${trungBinh}`);
}

// const TB1 = tinhTrungBinh(lop1.diem);
// const TB2 = tinhTrungBinh(lop2.diem);

// inTrungBinh(lop1.name, TB1);
// inTrungBinh(lop2.name, TB2);

function tinhVaInTrungBinh(lop){
    const TB = tinhTrungBinh(lop.diem);
    inTrungBinh(lop.name, TB);
}

tinhVaInTrungBinh(lop1);
tinhVaInTrungBinh(lop2);
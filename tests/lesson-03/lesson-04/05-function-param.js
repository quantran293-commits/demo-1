//  function tinhDienTich(a, b) {
//     const dienTich = a * b;
//     console.log(`Dien tich cua ${a}, ${b} la ${dienTich}`);
//  }

//  tinhDienTich(10,20);
//  tinhDienTich(11,33);

//  hocsinh = [
//     Quan
//  ]

 function kiemTraDiem (ten, diem){
    let trangThai = "do"
    if (diem < 5){
        trangThai = "truot";
    }

    console.log(`${ten} - ${trangThai} - (${diem} diem)`);
 }

 kiemTraDiem("lan", 9);
 kiemTraDiem("phong", 3);
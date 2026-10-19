function layHangChuc(so){
    return Math.floor(so/10); //chia de tinh gia tri hien thi tren dong ho
}

function layDonVi(so){
    return so %10 ;
}

function chayDongHo(){
    let thoiGian = new Date(); //khai bao thoi gian co kieu date
    let gio = thoiGian.getHours();
    let phut = thoiGian.getMinutes();
    let giay = thoiGian.getSeconds();

    document.querySelector('.img-0 img').src = `0${layHangChuc(gio)}.gif`;
    document.querySelector('.img-1 img').src = `0${layDonVi(gio)}.gif`;

    // 2. Cập nhật ảnh cho PHÚT (nằm trong .img-3 và .img-4)
    document.querySelector('.img-3 img').src = `0${layHangChuc(phut)}.gif`;
    document.querySelector('.img-4 img').src = `0${layDonVi(phut)}.gif`;

    // 3. Cập nhật ảnh cho GIÂY (nằm trong .img-5 và .img-6)
    document.querySelector('.img-5 img').src = `0${layHangChuc(giay)}.gif`;
    document.querySelector('.img-6 img').src = `0${layDonVi(giay)}.gif`;

    let loiChao = document.querySelector('.cauChao p')

    if (gio < 12 ) {
        loiChao.innerHTML = "Chào buổi sáng!";
    } else if (gio < 18) {
        loiChao.innerHTML = "Chào buổi chiều!";
    }  else {
        loiChao.innerHTML = "Chào buổi tối!";
    }
}

// Gọi hàm ngay lập tức để đồng hồ hiện giờ thật luôn, không bị mốc 02:xx như HTML gốc
chayDongHo();

// Thiết lập vòng lặp cứ 1 giây (1000ms) cập nhật lại ảnh một lần
setInterval(chayDongHo, 1000);

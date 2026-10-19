let nutIn = document.querySelector('button'); // thiết lập thuộc tính cho button

nutIn.onclick = function() {
  let ngay = parseInt(document.getElementsByName('date')[0].value); //lấy giá trị do người dùng nhập vào (đuôi [0].value nhằm lấy ra giá trị)
  let thang = parseInt(document.getElementsByName('month')[0].value);
  let nam = parseInt(document.getElementsByName('year')[0].value);

  if (isNaN(ngay) || isNaN(thang) || isNaN(nam)) { //isNaN nhằm kiểm tra xem đã nhập đầy đủ giá trị chưa và kiểu nhập vào là gì
    alert("Vui lòng nhập đầy đủ ngày, tháng, năm bằng số!");
    return; 
  }
  //kiểm tra thông tin về tháng
  if (thang < 1 || thang > 12) {
    alert("Tháng không hợp lệ");
    return;
  }
  //kiểm tra số ngày
  let songaymax = 31;

  // Tách biệt các khối if / else if ngang hàng nhau
  if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
    songaymax = 30;
  } else if (thang == 2) {
    if ((nam % 4 == 0 && nam % 100 != 0) || (nam % 400 == 0)) {
      songaymax = 29; // Dùng đúng tên biến đã khai báo
    } else {
      songaymax = 28;
    }
  }

  // Sửa lỗi chính tả 'ngqay' và đưa ra ngoài để luôn được kiểm tra
  //kiểm tra số ngày 
  if (ngay < 1 || ngay > songaymax) {
    alert("Vui lòng nhập lại thông tin. Tháng này chỉ có " + songaymax + " ngày.");
    return;
  }
//hàm in ra giá trị sau các khâu kiểm tra
  document.querySelector('.date').innerHTML = ngay;
  document.querySelector('.month').innerHTML = "Tháng " + thang;
  document.querySelector('.year').innerHTML = nam;

  let gio = new Date().getHours(); // Viết thường chữ 'g' cho đồng nhất
let cauChao = "";

if (gio < 12) {
  cauChao = "Chào buổi sáng!";
} else if (gio < 18) {
  cauChao = "Chào buổi chiều!";
} else {
  cauChao = "Chào buổi tối!";
}

// Thêm dấu chấm trước class '.good-day'
document.querySelector('.good-day').innerHTML = cauChao;
};
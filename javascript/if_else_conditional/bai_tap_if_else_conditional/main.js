// Bài tập 1: Kiểm tra số dương, số âm và số không
// Viết một chương trình yêu cầu người dùng nhập một số nguyên. Sau đó, sử dụng câu lệnh
// if-else để kiểm tra số đó là số dương, số âm hay số không và in kết quả lên màn hình.

function kiemTraAmDuong(num) {
  if (num === 0) {
    return "so 0";
  } else if (num < 0) {
    return "so am";
  } else return "so duong";
}
console.log(kiemTraAmDuong(-3));

console.log("-----------------1");

// Bài tập 2: Kiểm tra số chẵn và số lẻ
// Viết một chương trình yêu cầu người dùng nhập một số nguyên. Sau đó, sử dụng câu lệnh
// if-else để kiểm tra số đó là số chẵn hay số lẻ và in kết quả lên màn hình.

function kiemTraChanLe(num) {
  if (num % 2 === 0) {
    return "so chan";
  } else return "so le";
}
console.log(kiemTraChanLe(-6));

console.log("-----------------2");

// Bài tập 3: Tìm số lớn nhất trong hai số
// Viết một chương trình yêu cầu người dùng nhập hai số nguyên A và B. Sau đó, sử dụng câu lệnh
// if-else để tìm số lớn nhất trong hai số và in kết quả lên màn hình.

function timSoLonHon1So(A, B) {
  if (A < B) return B + "lon hon" + A;
  else return A + " lon hon " + B;
}
console.log(timSoLonHon1So(10, 4));

console.log("-----------------3");

// Bài tập 4: Tìm số lớn nhất trong ba số
// Viết một chương trình yêu cầu người dùng nhập ba số nguyên A, B và C. Sau đó, sử dụng câu lệnh
// if-else để tìm số lớn nhất trong ba số và in kết quả lên màn hình.

function timSoLonHon2So(A, B, C) {
  if (A > B && A > C) return A;
  else if (B > A && B > C) return B;
  else return C;
}
console.log(timSoLonHon2So(10, 14, 32));

console.log("-----------------4");

// Bài tập 5: Kiểm tra tam giác
// Viết một chương trình yêu cầu người dùng nhập ba cạnh của một tam giác. Sau đó, sử dụng câu lệnh if-else
//  để kiểm tra tam giác đó là tam giác vuông, tam giác đều, tam giác cân hay tam giác thường và in kết quả lên màn hình.

function kiemTraTamGiac(a, b, c) {
  if (
    a ** 2 === b ** 2 + c ** 2 ||
    b ** 2 === a ** 2 + c ** 2 ||
    c ** 2 === a ** 2 + b ** 2
  )
    return "tam giac vuong";
  else if (a === b && a === c && b === c) return "tam giác đều";
  else if (a === b || b === c || a === c) return "tam giác cân";
  else return "tam giác thường";
}
console.log(kiemTraTamGiac(3, 4, 5));

console.log("-----------------5");

// Bài tập 6: Kiểm tra ký tự đầu tiên của chuỗi
// Viết một chương trình yêu cầu người dùng nhập một chuỗi. Sau đó, sử dụng câu lệnh if-else
// để kiểm tra ký tự đầu tiên của chuỗi đó là chữ hoa hay chữ thường và in kết quả lên màn hình.

function kiemTraChuoi(string) {
  if (string.charAt(0) === string.charAt(0).toUpperCase())
    return "viet Hoa chu dau";
  else return "viet thuong chu dau";
}
console.log(kiemTraChuoi("hien Hoang"));

console.log("-----------------6");

// Bài tập 7: Tính chỉ số khối cơ thể (BMI)
// Viết một chương trình yêu cầu người dùng nhập chiều cao (h) và cân nặng (w). Sau đó, sử dụng câu lệnh if-else
// để tính chỉ số khối cơ thể (BMI) và in kết quả lên màn hình theo công thức: BMI = w / (h * h).
// Hiển thị kết quả nếu:
// - BMI < 18.5 => hiển thị người này là nhẹ cân
// - 18.5 <= BMI <= 24.9 => hiển thị người này là bình thường
// - 25 <= BMI <= 29.9 => hiển thị người này là thừa cân
// - 30 <= BMI <= 34.9 => hiển thị người này là béo phì độ 1
// - BMI > 35 => hiển thị người này là béo phì độ 2

function checkBmi(height, weight) {
  let cal = weight / (height * height);
  if (cal < 18.5) {
    console.log("người này là nhẹ cân");
  } else if (18.5 <= cal && cal <= 24.9) {
    console.log("người này là bình thường");
  } else if (25 <= cal && cal <= 29.9) {
    console.log("người này là thừa cân");
  } else if (30 <= cal && cal <= 34.9) {
    console.log("người này là béo phì độ 1");
  } else {
    console.log("người này là béo phì độ 2");
  }
}
checkBmi(1.63, 66);

console.log("-----------------7");

// **Bài tập 8: Đánh giá điểm số**
// Viết một chương trình yêu cầu người dùng nhập một điểm số từ 0 đến 10. Sau đó, sử dụng câu lệnh if-else
// để đánh giá điểm số đó theo tiêu chí sau:

// - Điểm từ 9 đến 10: Xuất sắc
// - Điểm từ 8 đến 8.9: Giỏi
// - Điểm từ 6.5 đến 7.9: Khá
// - Điểm từ 5 đến 6.4: Trung bình
// - Điểm dưới 5: Yếu

function danhGiaDiemSo(diem) {
  if (diem > 10) return;
  else if (diem >= 9 && diem <= 10) {
    return "Xuat Sac";
  } else if (diem >= 8 && diem < 9) {
    return "Gioi";
  } else if (diem >= 6.5 && diem < 8) {
    return "Kha";
  } else if (diem >= 5 && diem < 6.5) {
    return "Trung Binh";
  } else return "Yeu";
}
console.log(danhGiaDiemSo(9));

console.log("-----------------8");

// **Bài tập 9: Tính số tiền điện phải trả**
// Viết một chương trình yêu cầu người dùng nhập số kWh điện đã sử dụng trong tháng. Sau đó, sử dụng câu lệnh if-else
// để tính số tiền điện phải trả theo các bậc giá sau:

// - Từ 0 đến 50 kWh: 1,500 đồng/kWh
// - Từ 51 đến 100 kWh: 2,000 đồng/kWh
// - Trên 100 kWh: 2,500 đồng/kWh

function tinhTienDien(num) {
  if (num <= 50) {
    return num * 1500 + " vnd";
  } else if (num > 51 && num <= 100) {
    return num * 2000 + " vnd";
  } else return num * 2500 + " vnd";
}
console.log(tinhTienDien(110));

console.log("-----------------9");

// Bài tập 10: Kiểm tra ngày tháng hợp lệ
// Viết một chương trình yêu cầu người dùng nhập một ngày và một tháng. Sau đó, sử dụng câu lệnh
// if-else để kiểm tra xem ngày tháng đó có hợp lệ hay không (ví dụ: ngày 30/2 không hợp lệ) và in kết quả lên màn hình.

function kiemTraNgayThang(ngay, thang) {
  if (thang < 1 || thang > 12 || ngay < 0 || ngay > 31) return;
  if (thang === 2 && ngay > 29) {
    console.log(ngay + "/" + thang + " khong hop le");
  } else if (ngay === 31) {
    switch (thang) {
      case 4:
        console.log(ngay + "/" + thang + " khong hop le");
        break;
      case 6:
        console.log(ngay + "/" + thang + " khong hop le");
        break;
      case 9:
        console.log(ngay + "/" + thang + " khong hop le");
        break;
      case 11:
        console.log(ngay + "/" + thang + " khong hop le");
        break;
      default:
        console.log(ngay + "/" + thang + " hop le");
        break;
    }
  } else console.log(ngay + "/" + thang + " hop le");
}
kiemTraNgayThang(31, 3);

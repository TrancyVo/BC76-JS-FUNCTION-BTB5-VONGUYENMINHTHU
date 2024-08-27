// BT1:
const khuVucA = "a";
const khuVucB = "b";
const khuVucC = "c";
const khuVucX = "x";
function diemKhuVucUuTien(maKhuVuc) {
  switch (maKhuVuc) {
    case khuVucA: {
      return 2;
    }
    case khuVucB: {
      return 1;
    }
    case khuVucC: {
      return 0.5;
    }
    case khuVucX: {
      return 0;
    }
  }
}

const doiTuong1 = "1";
const doiTuong2 = "2";
const doiTuong3 = "3";
const doiTuong0 = "0";
function diemDoiTuongUuTien(maDoiTuong) {
  switch (maDoiTuong) {
    case doiTuong1: {
      return 2.5;
    }
    case doiTuong2: {
      return 1.5;
    }
    case doiTuong3: {
      return 1;
    }
    case doiTuong0: {
      return 0;
    }
  }
}
function tinhDiemTong(mon1, mon2, mon3, khuVuc, doiTuong) {
  let diemTong = mon1 + mon2 + mon3 + khuVuc + doiTuong;
  return diemTong;
}
function xetDuyetTrungTuyen(diemTong, diemChuan, mon1, mon2, mon3) {
  let thongBaoXetDuyet = "";
  if (diemTong >= diemChuan && mon1 > 0 && mon2 > 0 && mon3 > 0) {
    thongBaoXetDuyet = `Thí sinh trúng tuyển`;
  } else {
    thongBaoXetDuyet = `Thí sinh không trúng tuyển`;
  }
  return thongBaoXetDuyet;
}

document.getElementById("btn1").onclick = function () {
  // INPUT
  //Lấy dữ liệu số
  let diemChuan = document.getElementById("diemChuan").value * 1;
  let diemMon1 = document.getElementById("mon1").value * 1;
  let diemMon2 = document.getElementById("mon2").value * 1;
  let diemMon3 = document.getElementById("mon3").value * 1;
  console.log(diemChuan);
  console.log(diemMon1);
  console.log(diemMon2);
  console.log(diemMon3);
  //Lấy dữ liệu mã -> Lọc qua hàm lấy ra dữ liệu số
  //Mã KVUT
  let maKVUT = document.getElementById("khuVuc").value;
  if (maKVUT === null) {
    alert(`Vui lòng nhập mã khu vực`);
  }
  let layDiemKVUT = diemKhuVucUuTien(maKVUT);
  let diemKVUT = layDiemKVUT;
  console.log(diemKVUT);
  //Mã DTUT
  let maDTUT = document.getElementById("doiTuong").value;
  if (maDTUT === null) {
    alert(`Vui lòng nhập mã đối tượng`);
  }
  let layDiemDTUT = diemDoiTuongUuTien(maDTUT);
  let diemDTUT = layDiemDTUT;
  console.log(diemDTUT);

  //   HANDLE
  let tongDiem = tinhDiemTong(diemMon1, diemMon2, diemMon3, diemKVUT, diemDTUT);
  console.log(tongDiem);
  let xetDuyet = xetDuyetTrungTuyen(
    tongDiem,
    diemChuan,
    diemMon1,
    diemMon2,
    diemMon3
  );
  console.log(xetDuyet);
  //   OUTPUT
  document.querySelector(
    ".ketQua1"
  ).innerHTML = `Tổng điểm 3 Môn và ưu tiên: ${tongDiem} điểm <br> Thông báo: ${xetDuyet}`;
};

// BT2: TÍNH TIỀN ĐIỆN
function tinhTienDien50KwDau(kwDien, giaDien50KwDau) {
  let tienDien50KwDau = kwDien * giaDien50KwDau;
  return tienDien50KwDau;
}
function tinhTienDien100KwDau(kwDien, giaDien50KwDau, giaDien50KwKe) {
  let tienDien100KwDau = 50 * giaDien50KwDau + (kwDien - 50) * giaDien50KwKe;
  return tienDien100KwDau;
}
function tinhTienDien200KwDau(
  kwDien,
  giaDien50KwDau,
  giaDien50KwKe,
  giaDien100KwKe
) {
  let tienDien200KwDau =
    50 * giaDien50KwDau + 50 * giaDien50KwKe + (kwDien - 100) * giaDien100KwKe;
  return tienDien200KwDau;
}
function tinhTienDien350KwDau(
  kwDien,
  giaDien50KwDau,
  giaDien50KwKe,
  giaDien100KwKe,
  giaDien150KwKe
) {
  let tienDien350KwDau =
    50 * giaDien50KwDau +
    50 * giaDien50KwKe +
    100 * giaDien100KwKe +
    (kwDien - 200) * giaDien150KwKe;
  return tienDien350KwDau;
}
function tinhTienDienSau350KwDau(
  kwDien,
  giaDien50KwDau,
  giaDien50KwKe,
  giaDien100KwKe,
  giaDien150KwKe,
  giaDienSau350kw
) {
  let tienDienSau350KwDau =
    50 * giaDien50KwDau +
    50 * giaDien50KwKe +
    100 * giaDien100KwKe +
    150 * giaDien150KwKe +
    (kwDien - 350) * giaDienSau350kw;
  return tienDienSau350KwDau;
}

document.getElementById("btn2").onclick = function () {
  // INPUT
  let tenKhach = document.getElementById("tenKhach").value;
  let kwDien = document.getElementById("kwDien").value * 1;
  let tienDien = 0;
  let giaDien50KwDau = 500;
  let giaDien50KwKe = 650;
  let giaDien100KwKe = 850;
  let giaDien150KwKe = 1100;
  let giaDienSau350Kw = 1300;
  /* C1: TRỰC TIẾP
  // if (!kwDien || !tenKhach) {
  //   alert(`Vui lòng nhập đầy đủ dữ liệu`);
  //   return;
  // } else if (kwDien <= 50) {
  //   tienDien = kwDien * giaDien50KwDau;
  // } else if (50 < kwDien && kwDien <= 100) {
  //   tienDien = 50 * giaDien50KwDau + (kwDien - 50) * giaDien50KwKe;
  // } else if (100 < kwDien && kwDien <= 200) {
  //   tienDien =
  //     50 * giaDien50KwDau +
  //     50 * giaDien50KwKe +
  //     (kwDien - 100) * giaDien100KwKe;
  // } else if (200 < kwDien && kwDien <= 350) {
  //   tienDien =
  //     50 * giaDien50KwDau +
  //     50 * giaDien50KwKe +
  //     100 * giaDien100KwKe +
  //     (kwDien - 200) * giaDien150KwKe;
  // } else {
  //   tienDien =
  //     50 * giaDien50KwDau +
  //     50 * giaDien50KwKe +
  //     100 * giaDien100KwKe +
  //     150 * giaDien150KwKe +
  //     (kwDien - 350) * giaDienSau350Kw;
  // }
  */
  //C2: FUNCTION
  if (!kwDien || !tenKhach) {
    alert(`Vui lòng nhập đầy đủ dữ liệu`);
    return;
  } else if (kwDien <= 50) {
    tienDien = tinhTienDien50KwDau(kwDien, giaDien50KwDau);
  } else if (50 < kwDien && kwDien <= 100) {
    tienDien = tinhTienDien100KwDau(kwDien, giaDien50KwDau, giaDien50KwKe);
  } else if (100 < kwDien && kwDien <= 200) {
    tienDien = tinhTienDien200KwDau(
      kwDien,
      giaDien50KwDau,
      giaDien50KwKe,
      giaDien100KwKe
    );
  } else if (200 < kwDien && kwDien <= 350) {
    tienDien = tinhTienDien350KwDau(
      kwDien,
      giaDien50KwDau,
      giaDien50KwKe,
      giaDien100KwKe,
      giaDien150KwKe
    );
  } else {
    tienDien = tinhTienDienSau350KwDau(
      kwDien,
      giaDien50KwDau,
      giaDien50KwKe,
      giaDien100KwKe,
      giaDien150KwKe,
      giaDienSau350Kw
    );
  }

  console.log(tienDien);
  let tienTe = tienDien.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  // OUTPUT
  document.querySelector(
    ".ketQua2"
  ).innerHTML = `Tổng tiền điện của Anh/Chị ${tenKhach} cần thanh toán là: ${tienTe}`;
};

// BT3: TÍNH THUẾ THU NHẬP CÁ NHÂN
function tinhThuNhapChiuThue(tongThuNhapNam, soNguoiPhuThuoc) {
  let thuNhapChiuThue = tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;
  return thuNhapChiuThue;
}
function thueSuat(thuNhapChiuThue) {
  let thueSuat = 0;
  if (thuNhapChiuThue <= 60000000) {
    thueSuat = 0.05;
  } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
    thueSuat = 0.1;
  } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
    thueSuat = 0.15;
  } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
    thueSuat = 0.2;
  } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
    thueSuat = 0.25;
  } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
    thueSuat = 0.3;
  } else {
    thueSuat = 0.35;
  }
  return thueSuat;
}
document.getElementById("btn3").onclick = function () {
  console.log(`BẮT ĐẦU`);
  // INPUT
  let inputHoTen = document.getElementById("hoTen").value;
  let inputTongThuNhapNam = document.getElementById("tongThuNhapNam").value * 1;
  let inputSoNguoiPhuThuoc =
    document.getElementById("soNguoiPhuThuoc").value * 1;
  // HANDLE
  if (!inputHoTen || !inputTongThuNhapNam || !inputSoNguoiPhuThuoc) {
    alert(`Vui lòng nhập đầy đủ thông tin`);
    return;
  }
  let thuNhapChiuThue = 0;
  let thueSuatCN = 0;
  let thueCaNhan = 0;
  thuNhapChiuThue = tinhThuNhapChiuThue(
    inputTongThuNhapNam,
    inputSoNguoiPhuThuoc
  );
  thueSuatCN = thueSuat(thuNhapChiuThue);
  thueCaNhan = thuNhapChiuThue * thueSuatCN;
  console.log(thueCaNhan);
  let tienTeThueCN = thueCaNhan.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  //OUTPUT
  document.querySelector(
    ".ketQua3"
  ).innerHTML = `Thuế thu nhập cá nhân của Anh/Chị ${inputHoTen}: ${tienTeThueCN}`;
};

// BT4: TÍNH TIỀN CÁP CHO NHÀ DÂN VÀ DOANH NGHIỆP
const NHA_DAN = "nhaDan";
const DOANH_NGHIEP = "doanhNghiep";
function phiXuLy(maKH) {
  switch (maKH) {
    case NHA_DAN: {
      return 4.5;
    }
    case DOANH_NGHIEP: {
      return 15;
    }
  }
}
function phiDichVu(maKH) {
  switch (maKH) {
    case NHA_DAN: {
      return 20.5;
    }
    case DOANH_NGHIEP: {
      return 75;
    }
  }
}
function phiThue1KenhCaoCap(maKH) {
  switch (maKH) {
    case NHA_DAN: {
      return 7.5;
    }
    case DOANH_NGHIEP: {
      return 50;
    }
  }
}
function tinhCapNhaDan(xuLy, dichVu, kenhCaoCap, soKenh) {
  let tienCapNhaDan = xuLy + dichVu + kenhCaoCap * soKenh;
  return tienCapNhaDan;
}
function tinhCapDoanhNghiep(xuLy, dichVu, kenhCaoCap, soKenh, soKetNoi) {
  let tienCapDoanhNghiep = 0;
  if (soKetNoi <= 10) {
    tienCapDoanhNghiep = xuLy + dichVu + kenhCaoCap * soKenh;
  } else {
    tienCapDoanhNghiep =
      xuLy + (75 + (soKetNoi - 10) * 5) + kenhCaoCap * soKenh;
  }
  return tienCapDoanhNghiep;
}
let theKetNoi = document.getElementById("theKetNoi");
document.getElementById("capNhaDan").onclick = function () {
  theKetNoi.style.display = "none";
};
document.getElementById("capDoanhNghiep").onclick = function () {
  theKetNoi.style.display = "block";
};

document.getElementById("btn4").onclick = function () {
  //B1: tạo biến chứa CL dom tới thẻ input-radio được checked vào
  let khachHang = document.querySelector("input[name='selector']:checked");
  //B2: nhưng nếu chưa có thẻ radio nào được check thì alert sẽ pop up và return sẽ ngưng hàm
  if (!khachHang) {
    alert(`Vui lòng nhập dữ liệu`);
    return;
  }
  //còn nếu KH có chọn option -> dom tới thẻ input-radio được checked vào -> lấy dữ liệu
  let maKH = khachHang.value;
  let soLuongKetNoi = document.getElementById("KetNoi").value * 1;
  let soLuongKenh = document.getElementById("kenhCaoCap").value * 1;
  if (!soLuongKenh || !soLuongKetNoi) {
    alert(`Vui lòng nhập dữ liệu`);
    return;
  }
  // HANDLE
  let tienCap = 0;
  let xuLy = phiXuLy(maKH);
  let dichVu = phiDichVu(maKH);
  let giaKenhCaoCap = phiThue1KenhCaoCap(maKH);

  if (maKH == NHA_DAN) {
    tienCap = tinhCapNhaDan(xuLy, dichVu, giaKenhCaoCap, soLuongKenh);
  } else
    tienCap = tinhCapDoanhNghiep(
      xuLy,
      dichVu,
      giaKenhCaoCap,
      soLuongKenh,
      soLuongKetNoi
    );
  let tienCapUsd = tienCap.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  document.querySelector(
    ".ketQua4"
  ).innerHTML = `Số tiền Cáp quý khách cần thanh toán: ${tienCapUsd}`;
};

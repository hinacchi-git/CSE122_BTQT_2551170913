// Lấy các phần tử hiển thị từ DOM
const historyDisplay = document.querySelector('.history');
const resultDisplay = document.querySelector('.result');
const buttons = document.querySelectorAll('.btn');

// Biến lưu trữ biểu thức và đầu vào hiện tại
let currentExpression = '';

// Khởi tạo màn hình trống
historyDisplay.innerText = '';
resultDisplay.innerText = '0';

// Thêm sự kiện click cho từng nút bấm
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;

        // Xử lý nút Xóa (C)
        if (value === 'C') {
            currentExpression = '';
            historyDisplay.innerText = '';
            resultDisplay.innerText = '0';
            return;
        }

        // Xử lý nút Dấu bằng (=)
        if (value === '=') {
            try {
                // Thay thế các ký tự × và ÷ thành * và / để JavaScript có thể hiểu và tính toán
                let formattedExpression = currentExpression.replace(/×/g, '*').replace(/÷/g, '/');
                
                // Sử dụng eval() để tính toán chuỗi biểu thức
                let result = eval(formattedExpression);
                
                // Hiển thị kết quả
                historyDisplay.innerText = currentExpression;
                
                // Kiểm tra nếu kết quả là số thập phân dài thì làm tròn
                if (!Number.isInteger(result)) {
                    result = parseFloat(result.toFixed(5));
                }
                
                resultDisplay.innerText = result;
                
                // Lưu kết quả để có thể tính toán tiếp
                currentExpression = result.toString();
                
            } catch (error) {
                // Xử lý lỗi nếu biểu thức không hợp lệ (VD: 5++5)
                resultDisplay.innerText = 'Lỗi';
            }
            return;
        }

        // Xử lý khi bấm các số và phép tính thông thường
        // Ngăn việc nhập nhiều số 0 ở đầu
        if (currentExpression === '0' && value !== '.') {
            currentExpression = value;
        } else {
            currentExpression += value;
        }
        
        // Hiển thị biểu thức đang nhập lên màn hình chính
        resultDisplay.innerText = currentExpression;
    });
});
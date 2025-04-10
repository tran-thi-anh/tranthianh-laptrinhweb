// Thanh toán
const quantityInput = document.querySelector('.quantity-input');
const totalPriceCell = document.querySelector('.total-price');
const finalPrice = document.querySelector('.final-price');
const grandTotal = document.querySelector('.grand-total');
const shippingFee = 30000;  // Phí vận chuyển cố định

// Cập nhật tổng giá khi số lượng thay đổi
quantityInput.addEventListener('input', () => {
    const pricePerItem = 359000;  // Giá mỗi sản phẩm
    const quantity = parseInt(quantityInput.value) || 1;  // Lấy số lượng từ input, mặc định là 1 nếu không có giá trị
    const totalPrice = pricePerItem * quantity;  // Tính tổng giá trị của sản phẩm
    totalPriceCell.textContent = totalPrice.toLocaleString() + 'đ';  // Hiển thị tổng giá sản phẩm

    // Cập nhật tổng tiền sau khi thêm phí vận chuyển
    const totalWithShipping = totalPrice + shippingFee;
    finalPrice.textContent = totalPrice.toLocaleString() + 'đ';  // Hiển thị tổng tiền sản phẩm
    grandTotal.textContent = totalWithShipping.toLocaleString() + 'đ';  // Hiển thị tổng cộng (bao gồm phí vận chuyển)
});

// Cập nhật trạng thái đơn hàng sau khi mua
const buyButton = document.querySelector('.buy-button');
const orderStatus = document.querySelector('.order-status');

buyButton.addEventListener('click', () => {
    orderStatus.textContent = 'Chờ xác nhận...';  // Hiển thị trạng thái "Chờ xác nhận"
    buyButton.disabled = true;  // Vô hiệu hóa nút mua để không bấm lại
});

// Áp dụng mã giảm giá
const discountButton = document.querySelector('.apply-discount');
discountButton.addEventListener('click', () => {
    const discountInput = document.querySelector('#discount-code');
    const discountCode = discountInput.value.trim();  // Lấy mã giảm giá từ input
    if (discountCode === '3TSHOES10') {  // Kiểm tra mã giảm giá
        const discount = 0.1 * parseInt(finalPrice.textContent.replace(/\D/g, ''));  // Tính toán giảm giá (10%)
        const discountedTotal = parseInt(finalPrice.textContent.replace(/\D/g, '')) - discount + shippingFee;  // Tổng sau giảm giá và phí vận chuyển
        grandTotal.textContent = discountedTotal.toLocaleString() + 'đ';  // Hiển thị tổng cộng sau giảm giá
        alert('Mã giảm giá áp dụng thành công!');  // Thông báo thành công
    } else {
        alert('Mã giảm giá không hợp lệ.');  // Thông báo mã giảm giá không hợp lệ
    }
});


// Lưu thông tin đơn hàng vào localStorage
buyButton.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value) || 1;
    const pricePerItem = 359000;
    const totalPrice = pricePerItem * quantity;
    const totalWithShipping = totalPrice + shippingFee;

    // Lưu thông tin đơn hàng vào localStorage
    const orderData = {
        productName: 'Giày DAS Samba Nam Nữ, Giày Sneaker DAS Samba Trắng',  // Tên sản phẩm
        size: '37',  // Kích thước sản phẩm
        quantity: quantity,  // Số lượng
        totalPrice: totalPrice.toLocaleString() + 'đ',  // Tổng tiền sản phẩm
        shippingFee: shippingFee.toLocaleString() + 'đ',  // Phí vận chuyển
        totalWithShipping: totalWithShipping.toLocaleString() + 'đ',  // Tổng cộng (bao gồm phí vận chuyển)
        deliveryTime: '22 Th12 - 24 Th12'  // Thời gian giao hàng
    };
    localStorage.setItem('orderData', JSON.stringify(orderData));  // Lưu thông tin đơn hàng vào localStorage

// Tài khoản của tôi
// Tự động thêm lịch sử mua hàng
const orderHistory = [
    { id: "12345", status: "Hoàn tất", badgeClass: "bg-success" },
    { id: "12346", status: "Đang xử lý", badgeClass: "bg-warning" },
    { id: "12347", status: "Đang giao hàng", badgeClass: "bg-info" }
];

const orderHistoryContainer = document.getElementById('orderHistory');

orderHistory.forEach(order => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.innerHTML = `
        Đơn hàng #${order.id}
        <span class="badge ${order.badgeClass}">${order.status}</span>
    `;
    orderHistoryContainer.appendChild(listItem);
});

// Đăng ký
// JavaScript để xử lý sự kiện khi nhấn nút "Tiếp theo"
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định (refresh trang)

    var phoneInput = document.getElementById('registerPhoneInput').value;

    // Kiểm tra số điện thoại có hợp lệ không
    var phoneRegex = /^[0-9]{10,11}$/; // Kiểm tra số điện thoại có 10 hoặc 11 chữ số
    if (!phoneRegex.test(phoneInput)) {
        alert('Vui lòng nhập số điện thoại hợp lệ.');
    } else {
        // Nếu số điện thoại hợp lệ, chuyển đến trang tiếp theo
        alert('Số điện thoại hợp lệ. Đang chuyển đến trang tiếp theo...');
    }
});

// Đăng ký tiếp theo
// JavaScript để xử lý sự kiện khi nhấn nút "Đăng ký"
document.getElementById('personalInfoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định (refresh trang)

    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;
    var confirmPassword = document.getElementById('confirmPasswordInput').value;

    // Kiểm tra mật khẩu và xác nhận mật khẩu có trùng khớp không
    if (password !== confirmPassword) {
        alert('Mật khẩu và xác nhận mật khẩu không khớp.');
        return;
    }

    // Kiểm tra định dạng email
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Vui lòng nhập email hợp lệ.');
        return;
    }

    // Nếu thông tin hợp lệ, chuyển hướng đến trang hoàn tất đăng ký hoặc trang đăng nhập
    alert('Đăng ký thành công! Chuyển đến trang đăng nhập...');
    window.location.href = "loginPage.html"; // Thay "loginPage.html" bằng URL trang đăng nhập của bạn
});

// Đăng nhập với QR
document.getElementById('switchToLogin').addEventListener('click', function () {
    window.location.href = "login-with-password.html"; // Chuyển hướng sang trang đăng nhập bằng mật khẩu
});

                                                                                 // Trang chủ
document.addEventListener("DOMContentLoaded", function () {
    loadProducts(); // Gọi hàm để tải sản phẩm khi trang được tải
});

                                                                                 // Dữ liệu sản phẩm cho mỗi trang
 // JavaScript để xử lý phân trang
 document.addEventListener('DOMContentLoaded', function() {
    const pageLinks = document.querySelectorAll('.list-page .item');
    const products = document.querySelectorAll('.product-item');

    // Hàm để hiển thị các sản phẩm theo trang
    function showPage(pageNumber) {
        // Ẩn tất cả sản phẩm
        products.forEach(product => {
            product.style.display = 'none';
        });

        // Hiển thị các sản phẩm thuộc trang được chọn
        products.forEach(product => {
            if (product.getAttribute('data-page') == pageNumber) {
                product.style.display = 'block';
            }
        });

        // Đánh dấu nút phân trang đang được chọn
        pageLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') == pageNumber) {
                link.classList.add('active');
            }
        });
    }

    // Thêm sự kiện click cho các nút phân trang
    pageLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const pageNumber = link.getAttribute('data-page');
            showPage(pageNumber);
        });
    });

    // Mặc định hiển thị trang 1
    showPage(1);
});
// Hàm hiển thị sản phẩm
function loadProducts() {
    const productList = document.getElementById("list-products");

    // Lặp qua danh sách sản phẩm và tạo phần tử li cho từng sản phẩm
    products.forEach(product => {
        const productItem = document.createElement("li");
        productItem.classList.add("col-md-3", "mb-4", "text-center");
        productItem.innerHTML = `
            <div class="card">
                <img src="${product.image}" alt="${product.name}" class="card-img-top" height="200">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price}</p>
                    <a href="${product.link}" class="btn btn-primary">Mua ngay</a>
                </div>
            </div>
        `;
        productList.appendChild(productItem);
    });
}
function loadProducts(page) {
    const productList = document.getElementById("list-products");
    productList.innerHTML = ""; // Xóa nội dung cũ
    (productsData[page] || []).forEach((product) => {
        productList.innerHTML += `
            <li class="item">
                <img src="${product.image}" alt="${product.name}" width="290">
                <p class="name">${product.name}</p>
                <p class="price">${product.price}</p>
                <div class="actions">
                    <button class="btn btn-secondary"><i class="fas fa-shopping-cart"></i></button>
                    <button class="btn btn-primary">Mua ngay</button>
                </div>
            </li>
        `;
    });
}

// Xử lý sự kiện nhấp vào trang
document.querySelectorAll(".list-page .page-item").forEach((link) => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const page = this.dataset.page; // Đảm bảo rằng bạn đang truy cập đúng thuộc tính 'data-page'
        loadProducts(page);
    });
});

// Tải trang đầu tiên mặc định
loadProducts(1);

                                                                                        // Quản lí sản phẩm

// Hàm hiển thị sản phẩm trong bảng
function renderProducts() {
    const productList = document.getElementById('productList').getElementsByTagName('tbody')[0];
    productList.innerHTML = ""; // Xóa danh sách cũ
    products.forEach((product, index) => {
        const row = productList.insertRow();
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.category}</td>
            <td>
                <a href="#" class="btn btn-warning btn-sm" onclick="editProduct(${index})">Sửa</a>
                <a href="#" class="btn btn-danger btn-sm" onclick="deleteProduct(${index})">Xóa</a>
            </td>
        `;
    });
}

// Hàm thêm sản phẩm
document.getElementById('addProductForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const category = document.getElementById('productCategory').value;

    // Thêm sản phẩm vào mảng sản phẩm
    products.push({ name, price, category });

    // Đóng modal và render lại danh sách sản phẩm
    $('#addProductModal').modal('hide');
    
    // Làm trống form sau khi thêm sản phẩm
    document.getElementById('addProductForm').reset();

    // Cập nhật lại bảng sản phẩm
    renderProducts();
});

// Hàm sửa sản phẩm
function editProduct(index) {
    const product = products[index];
    
    document.getElementById('editProductName').value = product.name;
    document.getElementById('editProductPrice').value = product.price;
    document.getElementById('editProductCategory').value = product.category;

    // Lưu lại chỉ số sản phẩm đang sửa
    document.getElementById('editProductForm').onsubmit = function (e) {
        e.preventDefault();

        // Cập nhật sản phẩm trong mảng
        products[index] = {
            name: document.getElementById('editProductName').value,
            price: document.getElementById('editProductPrice').value,
            category: document.getElementById('editProductCategory').value
        };

        // Đóng modal và render lại sản phẩm
        $('#editProductModal').modal('hide');
        renderProducts();
    };

    $('#editProductModal').modal('show');
}

// Hàm xóa sản phẩm
function deleteProduct(index) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
        // Xóa sản phẩm khỏi mảng
        products.splice(index, 1);
        
        // Render lại danh sách sản phẩm
        renderProducts();
    }
}

// Quản lí đơn hàng
// Dữ liệu mẫu đơn hàng
let orders = [
    { orderId: '#001', customerName: 'Nguyễn Văn A', status: 'Đang xử lý' },
    { orderId: '#002', customerName: 'Trần Thị B', status: 'Đã giao' }
];

// Hàm hiển thị danh sách đơn hàng
function renderOrders() {
    const ordersTable = document.getElementById('ordersTable').getElementsByTagName('tbody')[0];
    ordersTable.innerHTML = ""; // Xóa danh sách cũ
    orders.forEach((order, index) => {
        const row = ordersTable.insertRow();
        row.innerHTML = `
            <td>${order.orderId}</td>
            <td>${order.customerName}</td>
            <td>${order.status}</td>
            <td>
                <a href="#" class="btn btn-success btn-sm" onclick="approveOrder(${index})">Duyệt</a>
                <a href="#" class="btn btn-danger btn-sm" onclick="cancelOrder(${index})">Hủy</a>
                <a href="#" class="btn btn-info btn-sm" onclick="viewOrderDetails(${index})">Chi tiết</a>
            </td>
        `;
    });
}

// Hàm duyệt đơn hàng
function approveOrder(index) {
    const order = orders[index];
    if (order.status === 'Đang xử lý') {
        order.status = 'Đã duyệt'; // Cập nhật trạng thái đơn hàng
        alert(`Đơn hàng ${order.orderId} đã được duyệt!`);
        renderOrders();
    } else {
        alert('Đơn hàng này không thể duyệt!');
    }
}

// Hàm hủy đơn hàng
function cancelOrder(index) {
    const order = orders[index];
    order.status = 'Đã hủy'; // Cập nhật trạng thái đơn hàng
    alert(`Đơn hàng ${order.orderId} đã bị hủy!`);
    renderOrders();
}

// Hàm xem chi tiết đơn hàng
function viewOrderDetails(index) {
    const order = orders[index];
    alert(`Chi tiết đơn hàng ${order.orderId}:\n\nKhách hàng: ${order.customerName}\nTrạng thái: ${order.status}`);
}

// Hàm để chuyển đổi giữa các section
function showSection(section) {
    // Ẩn tất cả các section
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('products').style.display = 'none';
    document.getElementById('orders').style.display = 'none';
    document.getElementById('customers').style.display = 'none';
    document.getElementById('settings').style.display = 'none';
    
    // Hiển thị section tương ứng
    document.getElementById(section).style.display = 'block';
}

// Mặc định hiển thị Dashboard
showSection('dashboard');

// Hàm render sản phẩm
function renderProducts() {
const productList = document.getElementById("product-list");
products.forEach((product) => {
    const productCard = `
        <div class="col-md-3 mb-4">
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body text-center">
                    <h5 class="card-title">
                        <p>${product.name}</p>
                    </h5>
                    <p class="card-text" style="font-weight: bold;">${product.price}</p>
                    <div>
                        <a href="#" class="btn btn-primary">Thêm vào giỏ</a>
                        <a href="#" class="text-danger fw-bold">Mua ngay</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    productList.innerHTML += productCard;
});
}

// Gọi hàm render khi trang được load
document.addEventListener("DOMContentLoaded", renderProducts);


                                                                   // chi tiết sp
function changeMainImage(thumbnail) {
    const mainImage = document.getElementById("main-image");
    mainImage.src = thumbnail.src;
    document.querySelectorAll(".product-thumbnail img").forEach(img => img.classList.remove("selected"));
    thumbnail.classList.add("selected");
}

function changeQuantity(amount) {
    const quantityInput = document.getElementById("quantity");
    let quantity = parseInt(quantityInput.value);
    quantity = isNaN(quantity) ? 1 : quantity;
    quantity += amount;
    if (quantity < 1) quantity = 1;
    quantityInput.value = quantity;
}
document.getElementById("buy-now-btn").onclick = function() {
    const productId = 1; // ID sản phẩm (thay bằng cách bạn lưu trữ ID thực tế)
    const quantity = document.getElementById("quantity").value;
    window.location.href = `thanhtoan.html?id=${productId}&quantity=${quantity}`;
};
document.getElementById("add-to-cart-btn").onclick = function() {
    const productId = 1; // ID sản phẩm (thay bằng ID thực tế của bạn)
    const productName = "Giày trắng thông thường đa năng thiết kế gấu nhỏ"; // Tên sản phẩm
    const productPrice = 135000; // Giá sản phẩm
    const quantity = parseInt(document.getElementById("quantity").value);

    // Lấy giỏ hàng từ localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Kiểm tra sản phẩm đã có trong giỏ chưa
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += quantity; // Cập nhật số lượng
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: quantity
        });
    }

    // Lưu lại giỏ hàng
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Đã thêm vào giỏ hàng!");
};
let selectedColor = "Trắng"; // Mặc định là màu trắng
let selectedSize = null; // Biến lưu size được chọn

// Xử lý sự kiện chọn màu
document.querySelectorAll(".color-option").forEach(option => {
    option.onclick = function() {
        document.querySelectorAll(".color-option").forEach(opt => opt.classList.remove("active"));
        this.classList.add("active");
        selectedColor = this.dataset.color; // Lưu màu được chọn
    };
});

// Xử lý sự kiện chọn size
document.querySelectorAll(".size-option").forEach(option => {
    option.onclick = function() {
        document.querySelectorAll(".size-option").forEach(opt => opt.classList.remove("active"));
        this.classList.add("active");
        selectedSize = this.textContent; // Lưu size được chọn
    };
});

// Xử lý khi bấm thêm vào giỏ hàng
document.getElementById("add-to-cart-btn").onclick = function() {
    const productId = 1; // ID sản phẩm
    const productName = "Giày trắng thông thường đa năng thiết kế gấu nhỏ";
    const productPrice = 135000;
    const quantity = parseInt(document.getElementById("quantity").value);

    if (!selectedSize) {
        alert("Vui lòng chọn size trước khi thêm vào giỏ hàng!");
        return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find(item => item.id === productId && item.color === selectedColor && item.size === selectedSize);

    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: quantity,
            color: selectedColor,
            size: selectedSize
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Đã thêm vào giỏ hàng: Màu ${selectedColor}, Size ${selectedSize}`);
};

// Xử lý khi bấm mua hàng
document.getElementById("buy-now-btn").onclick = function() {
    const productId = 1;
    const quantity = document.getElementById("quantity").value;

    if (!selectedSize) {
        alert("Vui lòng chọn size trước khi mua hàng!");
        return;
    }

    window.location.href = `thanhtoan.html?id=${productId}&quantity=${quantity}&color=${selectedColor}&size=${selectedSize}`;
};

                                            // trạng thái đơn hàng

 const orderData = JSON.parse(localStorage.getItem('orderData'));

        if (orderData) {
            document.querySelector('.product-name').textContent = orderData.productName;
            document.querySelector('.product-size').textContent = 'Size: ' + orderData.size;
            document.querySelector('.order-quantity').textContent = 'Số lượng: ' + orderData.quantity;
            document.querySelector('.total-price').textContent = 'Tổng tiền hàng: ' + orderData.totalPrice;
            document.querySelector('.shipping-fee').textContent = 'Phí vận chuyển: ' + orderData.shippingFee;
            document.querySelector('.grand-total').textContent = 'Tổng cộng: ' + orderData.totalWithShipping;
            document.querySelector('.delivery-time').textContent = 'Thời gian đảm bảo nhận hàng: ' + orderData.deliveryTime;
        }



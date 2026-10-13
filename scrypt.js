
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const loginBtn = document.getElementById("loginBtn");

// Xử lý tìm kiếm
searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const keyword = searchInput.value.trim();

    if (keyword === "") {
        alert("Vui lòng nhập từ khóa tìm kiếm!");
        searchInput.focus();
        return;
    }

    alert("Bạn đang tìm kiếm: " + keyword);
});

// Xử lý nút đăng ký / đăng nhập
loginBtn.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Bạn cần liên kết nút này với trang đăng nhập của website.");
});

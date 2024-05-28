window.onload = function() {
    setTimeout(showPage, 3000);
};
function showPage() {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".text").textContent = "Netflix正在維修中...";
}
// 取得重新載入按鈕元素
const reloadBtn = document.getElementById("reload-btn");

// 為按鈕添加點擊事件監聽器
reloadBtn.addEventListener("click", function() {

    // 重新載入頁面
    location.reload();

});

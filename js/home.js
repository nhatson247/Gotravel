const $ = document.querySelector.bind(document) //goi 1 lop
const $$ = document.querySelectorAll.bind(document) // goi nhieu lop

//1. scrolltop
 var scrollTop = function(){
    var header = $('.header') 
    header.scrollIntoView({ behavior: "smooth" , block: "start"} 
    )
 }

 var scrollBtn = $('.scroll-top')
 scrollBtn.addEventListener("click",scrollTop)
 window.addEventListener("scroll",scrollBtnDisplay)

 function scrollBtnDisplay(){
    if(
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200 // khi mà cái kéo của mình quá 200px thì hz sẽ hiện 
    ){
        scrollBtn.style.display = "block" // hiện 
    }
    else{
        scrollBtn.style.display = "none" // ko hiện

    }
 }
 //2.  thêm active cho menu 
var listLink = location.href; // lấy cả đường dẫn hiện tại của web
var listItem = $$(".header__nav__container--list a"); // chọn tất cả các phần tử a trong class header....
var listLength = listItem.length; // lấy độ dài để chạy for

var i = 0;
for (i; i < listLength; i++) {
    if (listItem[i].href === listLink) { // so sánh 2 đướng dẫn giống nhau thì thêm active 
        listItem[i].className = "active";
    }
}

// reponsive thêm active cho menu
var links = location.href;
var items = $$(".header__menu__body--content a");
var listslength = items.length;

var j = 0;
for (j; j < listLength; j++) {
    if (items[j].href === links) {
        items[j].className = "active";
    }
}
//3. button search 
var searchIcon = $("#search");
var input = $(".header__nav__container--search input");

searchIcon.onclick = function() {
    input.classList.toggle("active");
};
//4. active cho search chọn bảng 
var tabs = $$(".search__container__tab")

tabs.forEach((tab) => {
    tab.onclick = function(){
        $(".search__container__tab.active").classList.remove("active")
        this.classList.add("active")
    }
});
//5. header menu modal 
var box = $(".header__menu__overlay");
var boxBody = $(".header__menu__body--content");
var open = $("#menu_open");
var close = $("#menu_close");

open.onclick = function() {
    box.style.display = "block";
    boxBody.classList.add("open");
};

close.onclick = function() {
    box.style.display = "none";
    boxBody.classList.remove("open");
};
//6. fixed thanh menu 
var headerSticky = $(".header__nav"); // lấy thanh menu
var topBar = $(".header__topbar");  // lấy biểu tượng thanh topbar
 window.addEventListener("scroll",scrollFunction); // lắng nghe hành động lướt để gọi hàm scrollfunction

 function scrollFunction(){
    if(document.body.scroll > 20 ||
        document.documentElement.scrollTop > 20
    ){
        headerSticky.classList.add("scroll")
    }else{
        headerSticky.classList.remove("scroll")
        topBar.classList.remove("hiden")
    }

 }
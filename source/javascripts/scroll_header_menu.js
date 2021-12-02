// ウィンドウをスクロールした際の処理を、関数定義する。
//-----------------------------------------------------------------------
const scrollHeaderMenuAnimation = () => {
  let scroll = $(window).scrollTop();
  if (scroll >= 200){
    $("#scroll_header_menu").removeClass("disappear");
    $("#scroll_header_menu").addClass("appear");
  } else if ($("#scroll_header_menu").hasClass("appear")){
    $("#scroll_header_menu").removeClass("appear");
    $("#scroll_header_menu").addClass("disappear");
  }
}

// 画面をスクロールをした際にどの関数を呼ぶか記述する
//-------------------------------------------------------------------------
$(window).scroll(() => {
  scrollHeaderMenuAnimation();
});

// ページが読み込まれた際にどの関数を呼ぶか記述する
//-------------------------------------------------------------------------
$(window).on("load", () => {
  scrollHeaderMenuAnimation();
});

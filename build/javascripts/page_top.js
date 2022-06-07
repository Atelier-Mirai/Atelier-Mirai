// ウィンドウをスクロールした際の処理を、関数定義する。
//-----------------------------------------------------------------------
const pageTopAnimation = () => {
  // scroll という変数に、ウィンドウのスクロール量を取得して、代入する。
  let scroll = $(window).scrollTop();
  // もしスクロール量が200px以上ならば
  if (scroll >= 200){
    // #page_top に付与した dodownward というクラス名を除く
    $("#page_top").removeClass("downward");
    // #page_top に upward というクラス名を付与する
    $("#page_top").addClass("upward");

  // そうではなくて、もし #page_topに upward というクラス名が付与されていたら
  } else if ($("#page_top").hasClass("upward")){
    // upward というクラス名を除き
    $("#page_top").removeClass("upward");
    // downward というクラス名を#page_topに付与する
    $("#page_top").addClass("downward");
  }
}

// 画面をスクロールをした際にどの関数を呼ぶか記述する
//-------------------------------------------------------------------------
$(window).scroll(() => {
  pageTopAnimation();
});

// ページが読み込まれた際にどの関数を呼ぶか記述する
//-------------------------------------------------------------------------
$(window).on("load", () => {
  pageTopAnimation();
});

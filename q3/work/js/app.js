$(function () {
  // ページの読み込みが完了したら、以下の関数が実行されます。
  
  // ドロワーボタンをクリックしたときの機能
  $(".drawer_button").click(function () {
    // .drawer_button クラスの要素がクリックされたときに実行される関数
    $(this).toggleClass("active");
    // クリックされた .drawer_button 要素に active クラスを追加・削除する
    $(".drawer_bg").fadeToggle();
    // .drawer_bg 要素をフェードイン・フェードアウトする
    $("nav").toggleClass("open");
    // nav 要素に open クラスを追加・削除する
  });

  // ドロワー背景をクリックしたときの機能
  $(".drawer_bg").click(function () {
    // .drawer_bg クラスの要素がクリックされたときに実行される関数
    $(this).hide();
    // .drawer_bg 要素を非表示にする
    $(".drawer_button").removeClass("active");
    // .drawer_button 要素から active クラスを削除する
    $("nav").removeClass("open");
    // nav 要素から open クラスを削除する
  });
});

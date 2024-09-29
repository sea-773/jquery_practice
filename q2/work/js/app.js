$(function () {
  // ページの読み込みが完了したら、以下の関数が実行されます。
  
  // モーダルウィンドウを開く機能
  $(".modal_open_button").click(function () {
    // .modal_open_button クラスの要素がクリックされたときに実行される関数
    $(".modal_win").fadeIn(); 
    // .modal_win クラスの要素をフェードイン（表示）させる
  });

  // モーダルウィンドウを閉じる機能
  $(".modal_close_button").click(function () {
    // .modal_close_button クラスの要素がクリックされたときに実行される関数
    $(".modal_win").fadeOut(); 
    // .modal_win クラスの要素をフェードアウト（非表示）させる
  });

  // モーダル背景をクリックしたときに閉じる機能
  $(".modal_bg").click(function () {
    // .modal_bg クラスの要素がクリックされたときに実行される関数
    $(".modal_win").fadeOut(); 
    // .modal_win クラスの要素をフェードアウト（非表示）させる
  });
});

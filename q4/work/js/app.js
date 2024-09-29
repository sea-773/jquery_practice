$(function () {
  // ページの読み込みが完了したら、次の処理を実行
  $(".nav li").click(function () {
    // ナビゲーションリストの<li>要素がクリックされたときに、次の処理を実行
    var a = $(".nav li").index(this);
    // クリックされた<li>要素のインデックス（位置）を変数aに格納
    $(".description li").addClass("is-hidden");
    // 全ての.description内の<li>要素に.is-hiddenクラスを追加して非表示にする
    $(".description li").eq(a).removeClass("is-hidden");
    // クリックされた<li>要素と同じインデックスの.description内の<li>要素から.is-hiddenクラスを削除して表示する
  });
});

$(function () {
  // ドキュメントの読み込みが完了したら、この関数を実行
  $(".dropdwn li").hover(function () {
      // マウスが<li>要素に乗ったときに、この関数を実行
      $(this).children("ul").stop().slideDown();
      // 現在の<li>要素の子要素である<ul>要素を表示する（アニメーションで下にスライドする）
    },
    function () {
      // マウスが<li>要素から離れたときに、この関数を実行
      $(this).children("ul").stop().slideUp();
      // 現在の<li>要素の子要素である<ul>要素を隠す（アニメーションで上にスライドする）
    }
  );
});

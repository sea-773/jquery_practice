$(function () {
  // ドキュメントの読み込みが完了したら、この関数を実行
  $(".select-box").on("change", function () {
    // .select-boxに変更があったときに、この関数を実行
    var b = $(this).val(), // 選択されたオプションの値を変数bに格納
        c = $(".food-list li"); // .food-listの全<li>要素を変数cに格納

    if ("all" === b) {
      // 選択されたオプションが"all"の場合
      c.show(); // 全ての<li>要素を表示
    } else {
      // 選択されたオプションが"all"以外の場合
      for (var i = 0; i < c.length; i++) {
        // .food-listの<li>要素を一つずつ処理
        var d = $(c[i]).data("category-type"); // 現在の<li>要素のdata-category-type属性の値を変数dに格納
        if (b === d) {
          // 選択されたオプションの値とdata-category-type属性の値が一致する場合
          $(c[i]).show(); // 現在の<li>要素を表示
        } else {
          // 選択されたオプションの値とdata-category-type属性の値が一致しない場合
          $(c[i]).hide(); // 現在の<li>要素を非表示
        }
      }
    }
  });
});

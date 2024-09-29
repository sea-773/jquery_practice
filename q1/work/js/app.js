$(function() {
  // Q1-1: 読み込み時に文字の色を変更
  // ドキュメントが完全に読み込まれた時に実行される
  $("#q1").css("color", "green");
  });

  // Q1-2: クリックしてボタンの色変更
  // idがq2のボタンがクリックされた時に次の関数を実行
  $("#q2").on('click', function() {
    // クリックされたボタンの背景色をピンクに変更
    $(this).css("background", "pink");
  });

  // Q1-3: クリックしてフェードアウト
  //  idがq3のボタンがクリックされた時に次の関数を実行
  $("#q3").on('click', function() {
    //  クリックされたボタンをフェードアウトさせる
    $(this).fadeOut(3000);
  });

  // Q1-4: クリックしてサイズ変更
  // idがq4のボタンがクリックされた時に次の関数を実行
  $("#q4").on('click', function() {
    // クリックされたボタンのサイズを大きく変更
    $(this).addClass("large");
  });

  // Q1-5: クリックしてDOMの挿入
  // idがq5のボタンがクリックされた時に次の関数を実行
  $("#q5").on('click', function() {
    // クリックされたボタンの前後と中にDOMを挿入
    $(this).prepend("DOMの中の前").append("DOMの中の後").before("DOMの前").after("DOMの後") 
  });

  // Q1-6: クリックして移動
  $("#q6").on('click', function() {
    // margin-top: 100pxとmargin-left: 100pxを2秒かけて移動させる
    $(this).animate({
      marginTop: "100px",
      marginLeft: "100px"
    }, 2000);
  });

  // Q1-7: クリックしてidのノードをコンソールで表示
  // idがq7のボタンがクリックされた時に次の関数を実行
  $("#q7").on('click', function() {
    // クリックされたボタンのid属性をコンソールに表示
    console.log(this) 
  });

  // Q1-8: ホバー時にサイズ変更
  //  idがq8のボタンにマウスが乗った時に次の関数を実行
  $("#q8").hover(
    function() {
      // マウスが乗った時にボタンのサイズを大きく変更
      $(this).addClass("large");
    },
    function() {
      // 16. マウスが離れた時にボタンのサイズを元に戻す
      $(this).removeClass("large");
    }
  );

  // Q1-9: クリックして配列のアラート表示
  // idがq9のリストアイテムがクリックされた時に次の関数を実行
  $("#q9 li").on('click', function() {
      // クリックされたリストアイテムのインデックスを取得
      var index = $(this).index();
      // インデックス番号をアラートで表示
      alert("Index: " + index);
  });

  // Q1-10: Q10をクリックしてQ11を操作
  // idがq10のリストアイテムがクリックされた時に次の関数を実行
  $("#q10 li").on('click', function() {
    // クリックされたアイテムのインデックスを取得
    var index = $(this).index();
    // indexに対応するq11のリストアイテムにlarge-textクラスを追加
    $("#q11 li").eq(index).addClass("large-text");
  });
 // $jscompオブジェクトが存在しなければ、新しくconfigオブジェクトを作成する
var config = config || {}; 
 // configオブジェクトにdataという空のオブジェクトを設定する
config.data = {};
// テンプレートリテラルの最初の引数を処理する関数を定義する
config.createTag = function (arg) { 
    return arg.raw = arg; 
};
// テンプレートリテラルの最初の引数を処理し、生のテンプレート文字列を設定する関数を定義する
config.createTagWithRaw = function (arg, raw) { 
    arg.raw = raw; 
    return arg; 
};


// jQueryを使って、ページが読み込まれたときに以下の処理を実行
$(function () {
  // .btn__submitクラスを持つ要素がクリックされたときの処理を定義
  $(".btn__submit").on("click", function () {
    // コンソールに「名字」と表示
    console.log("名字"); 
    // family__nameの入力値をコンソールに表示
    console.log($("#family__name").val());
    // コンソールに「名前」と表示
    console.log("名前"); 
    // given__nameの入力値をコンソールに表示
    console.log($("#given__name").val()); 
    // コンソールに「生年月日」と表示
    console.log("生年月日"); 
    // 選択された年、月、日の値を取得して、生年月日を「○○年○○月○○日」という形式でコンソールに表示
    var year = $(".year").val();   // 年の選択値を取得
    var month = $(".month").val(); // 月の選択値を取得
    var day = $(".day").val();     // 日の選択値を取得
    // それらを「○○年○○月○○日」と連結してコンソールに表示
    console.log(year + "年" + month + "月" + day + "日");
    // コンソールに「性別」と表示
    console.log("性別"); 
    // チェックされた性別の値をコンソールに表示
    console.log($('[name="gender"]:checked').val()); 
    // コンソールに「職業」と表示
    console.log("職業"); 
    // 選択された職業の値をコンソールに表示
    console.log($(".occupation").val()); 
    // コンソールに「アカウント名」と表示
    console.log("アカウント名");
    // account__nameの入力値をコンソールに表示
    console.log($("#account__name").val()); 
    // コンソールに「メールアドレス」と表示
    console.log("メールアドレス");
    // emailの入力値をコンソールに表示
    console.log($("#email").val());
    // コンソールに「パスワード」と表示
    console.log("パスワード"); 
    // passwordの入力値をコンソールに表示
    console.log($("#password").val());
    // コンソールに「確認用パスワード」と表示
    console.log("確認用パスワード");
    // duplication__passwordの入力値をコンソールに表示
    console.log($("#duplication__password").val());
    // コンソールに「住所」と表示
    console.log("住所"); 
    // addressの入力値をコンソールに表示
    console.log($("#address").val());
    // コンソールに「電話番号」と表示
    console.log("電話番号"); 
    // telの入力値をコンソールに表示
    console.log($("#tel").val());
    // コンソールに「購買情報」と表示
    console.log("購買情報"); 
    // 購読情報にチェックが入っている各値をコンソールに表示
    $('[name="subscription"]:checked').each(function () {
      console.log($(this).val());
    });
  });
});


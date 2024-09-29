
// 変数settingsに設定情報などを格納
const settings = {
  apiUrl: "https://ci.nii.ac.jp/books/opensearch/search",
  format: "json",
  count: 20, // 1ページあたりの表示件数
};

$(function () {
  let pageCount = 1;
  let previousSearchWord = "";

  // 検索結果を表示する関数
  function displayResults(response) {
    $(".message").remove();
    const listContainer = $(".lists");

    if (response && response[0].items && response[0].items.length > 0) {
      $.each(response[0].items, function (index, item) {
        const title = item.title || "タイトル不明";
        const author = item["dc:creator"] || "著者不明";
        const publisher = item["dc:publisher"] ? item["dc:publisher"][0] : "出版社不明";
        const link = item.link["@id"] || "#";

        const listItem = `
          <li class="lists-item">
            <div class="list-inner">
              <p>タイトル：${title}</p>
              <p>著者：${author}</p>
              <p>出版社：${publisher}</p>
              <a href="${link}" target="_blank">書籍情報</a>
            </div>
          </li>
        `;
        listContainer.prepend(listItem);
      });
    } else {
      listContainer.before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</div>');
    }
  }

  // エラーメッセージを表示する関数
  function displayError(error) {
    $(".lists").empty();
    $(".message").remove();

    let errorMessage = "予期せぬエラーが起きました。<br>再読み込みを行ってください。";

    if (error.status === 0) {
      errorMessage = "正常に通信できませんでした。<br>インターネットの接続を確認してください。";
    } else if (error.status === 400) {
      errorMessage = "検索キーワードが有効ではありません。<br>1文字以上で検索してください。";
    }

    $(".lists").before(`<div class="message">${errorMessage}</div>`);
  }

  // 検索を実行する関数
  function performSearch(searchWord) {
    if (searchWord !== previousSearchWord) {
      pageCount = 1;
      $(".lists").empty(); // 前回の検索結果をクリア
      previousSearchWord = searchWord;
    } else {
      pageCount++;
    }

    $.ajax({
      url: `${settings.apiUrl}?title=${encodeURIComponent(searchWord)}&format=${settings.format}&p=${pageCount}&count=${settings.count}`,
      method: "GET",
    })
      .done(function (response) {
        displayResults(response["@graph"]);
      })
      .fail(function (error) {
        displayError(error);
      });
  }

  // 検索ボタンがクリックされたときの処理
  $(".search-btn").on("click", function () {
    const searchWord = $("#search-input").val().trim();

    if (searchWord === "") {
      alert("検索ワードを入力してください");
      return;
    }

    performSearch(searchWord);
  });

  // リセットボタンがクリックされたときの処理
  $(".reset-btn").on("click", function () {
    pageCount = 1;
    previousSearchWord = "";
    $(".lists").empty();
    $(".message").remove();
    $("#search-input").val("");
  });
});

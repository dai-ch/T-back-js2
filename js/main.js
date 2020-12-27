'use strict'

//各要素を取得
const FizzNumNode = document.getElementById('FizzNum');
const BuzzNumNode = document.getElementById('BuzzNum');
const btn = document.getElementById('btn')
//ulタグの要素を取得
const ul = document.getElementById('ul')
ul.style.paddingLeft = 0;


//正規表現チェック部分のif文の処理内容を関数化。①li要素を取得、②ul要素の下にli要素を配置、③テキストを追加
function addText(FizzBuzz) {
  const li = document.createElement('li');
  ul.appendChild(li);
  li.style.listStyle = 'none';
  li.textContent = FizzBuzz;
}

//ボタンをクリックしたらイベント発動
btn.addEventListener('click', function () {

  //liタグを取得(NodeのHTMLオブジェクトで取得される)
  const deleleLi = document.getElementsByTagName('li');
  //取得された要素数分削除する(既にHTMLに何かしたらの値が出力されていた場合、下記の処理で値を削除)
  while (deleleLi.length) {
    deleleLi.item(0).remove();
  }

  //正規表現（0以上の整数の判定）
  const pattern = /^([1-9]\d*|0)$/;

  //正規表現チェック
  if (pattern.test(FizzNumNode.value) && pattern.test(BuzzNumNode.value)) {

    //String→Number型へ変換
    const FizzNum = parseInt(FizzNumNode.value);
    const BuzzNum = parseInt(BuzzNumNode.value);

    for (let i = 1; i < 100; i++) {
      if (i % FizzNum === 0 && i % BuzzNum === 0) {
        addText(`FizzBuzz ${i}`);
      } else if (i % FizzNum === 0 && i % BuzzNum !== 0) {
        addText(`Fizz ${i}`);
      } else if (i % FizzNum !== 0 && i % BuzzNum === 0) {
        addText(`Buzz ${i}`);
      }
    }
  } else {
    addText("整数値を入力してください");
  }
})
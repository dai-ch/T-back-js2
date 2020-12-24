'use strict'

//各要素を取得
const FizzNumNode = document.getElementById('FizzNum');
const BuzzNumNode = document.getElementById('BuzzNum');
const btn = document.getElementById('btn')
//ulタグの要素を取得
const ul = document.getElementById('ul')
ul.style.paddingLeft = 0;

//ボタンをクリックしたらイベント発動
btn.addEventListener('click', function () {

  //全角→半角に変換
  const FizzNumStr = FizzNumNode.value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  });
  const BuzzNumStr = BuzzNumNode.value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  });

  //String→Number型へ変換
  const FizzNum = parseInt(FizzNumStr);
  const BuzzNum = parseInt(BuzzNumStr);

  //liタグを取得(NodeのHTMLオブジェクトで取得される)
  const deleleLi = document.getElementsByTagName('li');
  //取得された要素数分削除する
  while (deleleLi.length) {
    deleleLi.item(0).remove();
  }

  //正規表現チェック部分のif文の処理内容を関数化。①li要素を取得、②ul要素の下にli要素を配置、③テキストを追加
  function addText($FizzBuzz) {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.style.listStyle = 'none';
    li.textContent = $FizzBuzz;
  }

  //正規表現（0以上の整数）
  const pattern = /^([1-9]\d*|0)$/;

  //正規表現チェック
  if (pattern.test(FizzNum) && pattern.test(BuzzNum)) {
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
    addText(`整数値を入力してください`);
  }
})
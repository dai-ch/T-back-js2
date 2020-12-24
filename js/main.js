'use strict'

//各要素を取得
const FizzNumNode = document.getElementById('FizzNum');
const BuzzNumNode = document.getElementById('BuzzNum');
const btn = document.getElementById('btn')


//ボタンをクリックしたらイベント発動
btn.addEventListener('click', function () {

  //値が入ってるいるかどうか
  if (FizzNumNode.value && BuzzNumNode.value) {

    //全角→半角に変換
    const FizzNumStr = FizzNumNode.value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
    const BuzzNumStr = BuzzNumNode.value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });

    //String→Number型へ変換
    const FizzNum = Number(FizzNumStr);
    const BuzzNum = Number(BuzzNumStr);

    //ulタグの要素を取得
    const ul = document.getElementById('ul')
    ul.style.paddingLeft = 0;

    //if文の処理の内容を関数化、①li要素を取得、②ul要素の下にli要素を配置、③テキストを追加
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
      console.log('ssss');
      const li = document.createElement('li');
      ul.appendChild(li);
      li.style.listStyle = 'none';
      li.textContent = `整数値を入力してください`;
    }


  } else {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.style.listStyle = 'none';
    li.textContent = `整数値を入力してください`;
  }

})
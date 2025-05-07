let count = 0;

// 各要素を取得
const countUpButton = document.getElementById("countUpButton");
const countDownButton = document.getElementById("countDownButton");
const resetButton = document.getElementById("resetButton");
const numberArea = document.getElementById("numberArea");
const changeImage = document.getElementById("changeImage");

// カウントアップ処理
countUpButton.addEventListener("click", function() {
  count += 1;
  updateDisplay();
});

// カウントダウン処理（0未満は許可しない）
countDownButton.addEventListener("click", function() {
  if (count > 0) {
    count -= 1;
    updateDisplay();
  }
});

// リセット処理
resetButton.addEventListener("click", function() {
  count = 0;
  updateDisplay();
  changeImage.style.display = "none"; // 画像非表示
});

// 表示更新関数
function updateDisplay() {
  numberArea.innerText = count;

  const randomNum = Math.floor(Math.random() * 3) + 1;
  if (count % 2 === 0) {
    changeImage.src = `images/even_${randomNum}.png`;
  } else {
    changeImage.src = `images/odd_${randomNum}.png`;
  }

  changeImage.style.display = "block";
}
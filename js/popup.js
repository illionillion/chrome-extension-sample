"use strict";

const main = () => {
  const plusBtn = document.getElementById("plus");
  const minusBtn = document.getElementById("minus");
  const resetBtn = document.getElementById("reset");
  const countEle = document.getElementById("count");

  let count = (() => {
    if (
      localStorage.getItem("count") &&
      !isNaN(parseInt(localStorage.getItem("count")))
    ) {
      return parseInt(localStorage.getItem("count"));
    } else {
      return 0;
    }
  })();

  const renderingCount = () => {
    countEle.textContent = count;
    localStorage.setItem("count", count.toString());
  };

  const handlePlus = () => {
    count++;
    renderingCount();
  };
  const handleMinus = () => {
    if (count === 0) return;
    count--;
    renderingCount();
  };

  const handleReset = () => {
    count = 0;
    renderingCount();
  };

  plusBtn.addEventListener("click", handlePlus);
  minusBtn.addEventListener("click", handleMinus);
  resetBtn.addEventListener("click", handleReset);
  renderingCount();
};

window.addEventListener("load", main);

/*
 * @Author: your name
 * @Date: 2020-03-15 10:30:09
 * @LastEditTime: 2020-03-16 16:47:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /undefined/Users/apple/Desktop/animate.js
 */
function animate(ele, target, num = 80) {
  clearInterval(ele.timerId)
  ele.timerId = setInterval(() => {
    let current = ele.offsetLeft;
    let step = current < target ? num : -num
    if (Math.abs(target - current) < Math.abs(step)) {
      clearInterval(ele.timerId);
      ele.style.left = `${target}px`
    } else {
      current += step;
      ele.style.left = `${current}px`;
    }
  }, 30);
}
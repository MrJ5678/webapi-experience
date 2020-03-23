/*
 * @Author: your name
 * @Date: 2020-03-17 20:45:19
 * @LastEditTime: 2020-03-17 20:50:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /images/Users/apple/Desktop/webapi03code/缓动动画final.js
 */
/**
 * @description: 缓动动画
 * @param {type} 目标元素 element， 目标元素配置 options， 做完动画的回调函数 fn
 * @return: null
 */
function animate(element, options, fn) {
  clearInterval(element.timerId)
  element.timerId = setInterval(() => {
   let flag = 1 // 假设所有的样式都以达到目标值
   //  遍历对象，看有几个key
   for (const key in options) {
      let attr = key
      let target =  options[key]
      let current = parseInt(window.getComputedStyle(element, null)[attr])
      let step = (target - current) / 10
      step = step > 0 ? Math.ceil(step) : Math.floor(step)
      // console.log(step);
      current += step
      element.style[attr] = current + 'px'
      if(current != target) {
        flag = 0
      }
   }
   // console.log(flag);
   if(flag) {
     clearInterval(element.timerId)
     fn && fn()
   }
  }, 30);
}
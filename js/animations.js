const boxes = document.querySelectorAll('.box')

for (let i = 0; i < boxes.length; i++) {
  setTimeout(() => {
    boxes[i].classList.add('display-block')
    boxes[i].classList.add('appear-animation')
  }, i * 100) // Change the delay time (in milliseconds) as needed
}

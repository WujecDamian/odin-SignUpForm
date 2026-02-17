const password1 = document.querySelector('#password')
const password2 = document.querySelector('#conf-password')
const errorParagraph = document.querySelector('#password--error')
const submitBtn = document.querySelector('#submit-btn')

submitBtn.addEventListener('click', () => {
  if (password1.value === password2.value) {
    password1.setAttribute('style', 'border-color:green')
    password2.setAttribute('style', 'border-color:green')
    errorParagraph.innerText = ''
  } else {
    errorParagraph.innerText = 'Password does not match!'
    password1.setAttribute('style', 'border-color:red')
    password2.setAttribute('style', 'border-color:red')
  }
})

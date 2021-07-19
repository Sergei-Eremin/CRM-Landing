"use strict"
//     const emailValidPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

document.addEventListener('DOMContentLoaded', () => {
  const inputPhones = document.querySelectorAll('input[type=tel]')
  const inputNames = document.querySelectorAll('input[type=text]')
  const crossS = document.querySelectorAll('.cross')

  const formIntroduction = document.querySelector('#formIntroduction')
  const formKP = document.querySelector('#formKP')
  const form = document.querySelector('#form')

  const popUpContainer = document.querySelector('.popUp-container');


  //cross clean value 
  for(let item of crossS){
    item.addEventListener('click', function(event){
        event.target.parentElement.querySelector('input').value = ''
        event.target.classList.add('hidden')
    })
  }


   new window.JustValidate("#formIntroduction", {
    rules: {
      email: {
        required: true,
        email: true,
      },
      name: {
        required: true,
        minLength: 3,
      },
      tel: {
        required: true,
      },
      checkBox: {
        required: true,
      },
    },
    messages: {
      name: "Введите Ваше имя",
      tel: 'Введите Ваш телефон',
      email: 'Введите Ваш email',
      checkBox: "Обязательное поле"
    },
    submitHandler: function (form){
      let formData = new FormData(form)

      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
          if(xhr.status === 200){
            setTimeout(function(){
              console.log("Отправлено внедрение")
              document.querySelector('.order-introduction').classList.add('hidden');
              document.querySelector('.popUp-formSendSuccess').classList.remove('hidden')
            }, 2000)
          }
        }
      }
      xhr.open('GET', 'https://favqs.com/api/qotd', true)
      xhr.send(formData)
    },
    invalidFormCallback: function (errors) {
      if(formIntroduction.querySelector('input[type=text]').classList.contains('js-validate-error-field')){
        formIntroduction.querySelector('.name-label .cross').classList.remove('hidden')
      }
      if(formIntroduction.querySelector('input[type=tel]').classList.contains('js-validate-error-field')){
        formIntroduction.querySelector('.phone-label .cross').classList.remove('hidden')
      }
      if(formIntroduction.querySelector('input[type=email]').classList.contains('js-validate-error-field')){
        formIntroduction.querySelector('.email-label .cross').classList.remove('hidden')
      }
    },
  });

  new window.JustValidate("#formKP", {
    rules: {
      email: {
        required: true,
        email: true,
      },
      name: {
        required: true,
        minLength: 3,
      },
      tel: {
        required: true,
      },
      checkBox: {
        required: true,
      },
    },
    messages: {
      name: "Введите Ваше имя",
      tel: 'Введите Ваш телефон',
      email: 'Введите Ваш email',
      checkBox: "Обязательное поле"
    },
    submitHandler: function (form){
      let formData = new FormData(form)

      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
          if(xhr.status === 200){
            setTimeout(function(){
              console.log("Отправлено КП")
              document.querySelector('.getKP').classList.add('hidden');
              document.querySelector('.popUp-formSendSuccess').classList.remove('hidden')
            }, 2000)
          }
        }
      }
      xhr.open('GET', 'https://favqs.com/api/qotd', true)
      xhr.send(formData)
    },
    invalidFormCallback: function (errors) {
      if(formKP.querySelector('input[type=text]').classList.contains('js-validate-error-field')){
        formKP.querySelector('.name-label .cross').classList.remove('hidden')
      }
      if(formKP.querySelector('input[type=tel]').classList.contains('js-validate-error-field')){
        formKP.querySelector('.phone-label .cross').classList.remove('hidden')
      }
      if(formKP.querySelector('input[type=email]').classList.contains('js-validate-error-field')){
        formKP.querySelector('.email-label .cross').classList.remove('hidden')
      }
    },
  });

  new window.JustValidate("#form", {
    rules: {
      email: {
        required: true,
        email: true,
      },
      name: {
        required: true,
        minLength: 3,
      },
      tel: {
        required: true,
      },
      checkBox: {
        required: true,
      },
    },
    messages: {
      name: "Введите Ваше имя",
      tel: 'Введите Ваш телефон',
      email: 'Введите Ваш email',
      checkBox: "Обязательное поле"
    },
    submitHandler: function (form){
      let formData = new FormData(form)

      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
          if(xhr.status === 200){
            setTimeout(function(){
              console.log("Отправлено");
              popUpContainer.style.zIndex = 10;
              document.querySelector('body').classList.add('no-scroll-body');
              document.querySelector('.popUp-formSendSuccess').classList.remove('hidden')
            }, 2000)

          }
        }
      }
      xhr.open('GET', 'https://favqs.com/api/qotd', true)
      xhr.send(formData)
    },
    invalidFormCallback: function (errors) {
      if(form.querySelector('input[type=text]').classList.contains('js-validate-error-field')){
        form.querySelector('.name-label .cross').classList.remove('hidden')
      }
      if(form.querySelector('input[type=tel]').classList.contains('js-validate-error-field')){
        form.querySelector('.phone-label .cross').classList.remove('hidden')
      }
      if(form.querySelector('input[type=email]').classList.contains('js-validate-error-field')){
        form.querySelector('.email-label .cross').classList.remove('hidden')
      }
    },
  });

  // phone
  for (let item of inputPhones) {
    item.addEventListener('keypress', (e) => {
      if (e.keyCode < 47 || e.keyCode > 57) {
        e.preventDefault();
      }
    })

    item.addEventListener('focus', () => {
      if (item.value.length === 0) {
        item.value = '+7';
        item.selectionStart = item.value.length;
      }
    })

    item.addEventListener('click', (e) => {
      if (item.selectionStart < 2) {
        item.selectionStart = item.value.length;
      }
      if (e.key === 'Backspace' && item.value.length <= 2) {
        e.preventDefault();
      }
    })

    item.addEventListener('blur', () => {
      if (item.value === '+7') {
        item.value = '';
      }
    })

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && item.value.length <= 2) {
        e.preventDefault();
      }
    })
  }
  // name
  for(let item of inputNames){
    item.addEventListener('input', function(event){
      this.value = this.value.replace(/\d/g,'');
    })
  }
})
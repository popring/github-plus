// ==UserScript==
// @name         Github Plus
// @namespace    https://github.com/popring/github-plus
// @version      0.1
// @description  Less steps, more operations.
// @author       popring
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// @match        https://github.com/*/*
// @exclude      https://github.com/explore/*
// @exclude      https://github.com/topics/*
// @exclude      https://github.com/trending/*
// @exclude      https://github.com/collections/*
// @exclude      https://github.com/events/*
// @exclude      https://github.com/sponsors/*
// ==/UserScript==

; (function () {
  'use strict'

  // Online Open use github1s.com
  function appendOneSecButton() {
    const layoutMain = document.querySelector('.Layout-main')
    const navigation = layoutMain.querySelector('.file-navigation')

    const oneSecBtn = document.createElement('a')
    oneSecBtn.classList.add('btn', 'ml-2', 'd-none', 'd-md-block')
    oneSecBtn.setAttribute('href', `https://github1s.com${location.pathname + location.search + location.hash}`)
    oneSecBtn.textContent = 'Online Open'
    // oneSecBtn.target = '_blank'
    const res = navigation.appendChild(oneSecBtn)
    console.log(res)
  }

  function init() {
    appendOneSecButton()
  }

  window.addEventListener('load', function () {
    init()
  })
})()

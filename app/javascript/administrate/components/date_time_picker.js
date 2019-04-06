import flatpickr from 'flatpickr'

function bindDateTimePickers() {
    [...document.querySelectorAll('[data-type="time"]')].forEach((time) => {
      flatpickr(time, {
        enableTime: true,
        enableSeconds: true,
        noCalendar: true,
        altInput: true,
        dateFormat: 'H:i:S' // H:i
      })
    });
  
    [...document.querySelectorAll('[data-type="datetime"]')].forEach((time) => {
      flatpickr(time, {
        enableTime: true,
        altInput: true,
        dateFormat: 'd-m-Y H:i' // Y-m-d H:i
      })
    })
  }
  
document.addEventListener("DOMContentLoaded", function () {
  bindDateTimePickers()
})

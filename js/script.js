// DOM ELEMENTS

const mailistElm = document.getElementById("mailist");


for(let i=0; i<10; i++){
axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(function (response) {
    let mailist = response.data.response;
    mailistElm.innerHTML += `<li>${mailist}</li>`
  })
}
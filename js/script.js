// DOM ELEMENTS

const mailistElm = document.getElementById("mailist");
const genBtnElm = document.getElementById("btn")

// FUNCTIONS
const mailGen = () => {
mailistElm.innerHTML = ""
for(let i=0; i<10; i++){
axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(function (response) {
    let mailist = response.data.response;
    mailistElm.innerHTML += `<li>${mailist}</li>`
  })
}
}

//EVENTS

//on page load
mailGen();

//click button
genBtnElm.addEventListener("click", mailGen)
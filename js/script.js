axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
  .then(function (response) {
    // handle success
    console.log(response.data.response);
  })
var reg = /[a-z]/ig;

const inputs = document.querySelectorAll('input');

const patterns = {
  firstName:/^([a-z- \u0080-\uFFFF]|[a-z \u0080-\uFFFF])+$/i,
  lastName:/^([a-z- \u0080-\uFFFF]|[a-z \u0080-\uFFFF])+$/i,
  email:/^([a-z\u0080-\uFFFF\d.-]+)@([a-z\u0080-\uFFFF\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
  date:/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/,
  telephone:/^0[0-9]+$/,
  children:/^(?:[0-9]|1[0-9]|2[0])$/,
  maxHours:/^(?:[0-9]|1[0-9]|2[0-9]|3[0-9])$/
}


function validate(field, regex) {
  if(regex.test(field.value)){
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
}

inputs.forEach((input) =>{
  input.addEventListener('keyup', (e) => {
//    console.log(e.target.attributes.name.value)
  validate(e.target, patterns[e.target.attributes.name.value])
  });
});

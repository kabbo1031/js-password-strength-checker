const input = document.getElementById('password');
const strength = document.getElementById('strength');

input.addEventListener('input', ()=>{
  const val = input.value;
  let level = 0;

  if(val.length >= 6) level++;
  if(/[A-Z]/.test(val)) level++;
  if(/[0-9]/.test(val)) level++;
  if(/[^A-Za-z0-9]/.test(val)) level++;

  if(level <= 1){
    strength.innerText = 'Weak';
    strength.style.color = '#f87171';
  }else if(level <= 3){
    strength.innerText = 'Medium';
    strength.style.color = '#facc15';
  }else{
    strength.innerText = 'Strong';
    strength.style.color = '#22c55e';
  }
});

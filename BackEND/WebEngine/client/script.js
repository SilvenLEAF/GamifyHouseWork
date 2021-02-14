const h2 = document.querySelector('h2');
const myForm = document.querySelector('form');
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');


myForm.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const msg = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  

  const response = await fetch("/me", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ msg })
  });



  const data = await response.json();
  h2.textContent = data.message;
  console.log(data)
})







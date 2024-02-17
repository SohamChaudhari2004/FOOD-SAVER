const form = document.getElementById('food-donation-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = {};

  for (let [key, value] of formData.entries()) {
    data[key] = value;
 
    
  }
  

  const jsonData = JSON.stringify(data, null, 2);

  // Do something with the JSON data, such as sending it to a server or displaying it in the browser.
  console.log(jsonData);

  // Reset the form.
form.reset();  
alert("form details submitted");
});
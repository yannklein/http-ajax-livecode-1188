const authorization = "Bearer sk_41937af00f727ea497f1465cc52f1186";

// PSEUDO CODE!

// 1. Select elements
//    -> the form (input, submit button)
//    -> table cells
const email = document.querySelector("#clearbitEmail");
const submit = document.querySelector("#clearbitSubmit");

const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const userBio = document.querySelector("#userBio");
const userLocation = document.querySelector("#userLocation");

// 2. Listen to an event (click on the submit btn)
// define first, call next
const getInfo = (event) => {
  event.preventDefault();
  const emailValue = email.value;
  console.log(emailValue);
  // 2.5. Fetch Clearbit API
  fetch(`https://person.clearbit.com/v2/combined/find?email=${emailValue}`, {
    headers: {Authorization: authorization}
  })
  .then(res => res.json())
  .then((data) => {
    console.log(data)
    // 3. Change the DOM (add data to table cells)
      userName.innerText = data.person.name.fullName
      userEmail.innerText = data.person.email
      userBio.innerText = data.person.bio
      userLocation.innerText = data.person.location
  });


  // GET https://person.clearbit.com/v2/combined/find?email=:email


};

submit.addEventListener("click", getInfo);
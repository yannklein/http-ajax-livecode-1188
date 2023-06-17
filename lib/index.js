const displayPerson = (person) => {
  const name = document.querySelector("#userName");
  const email = document.querySelector("#userEmail");
  const bio = document.querySelector("#userBio");
  const location = document.querySelector("#userLocation");
  name.innerText = person.name.fullName;
  email.innerText = person.email;
  bio.innerText = person.bio;
  location.innerText = person.location;
};

const fetchClearbit = (mail) => {
  const authorization = "Bearer sk_41937af00f727ea497f1465cc52f1186";
  fetch(`https://person.clearbit.com/v2/combined/find?email=${mail}`,{
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 5.1; rv:15.0) Gecko/20100101 Firefox/15.0.1', 'Authorization': authorization
    }
  })
    .then(response => response.json())
    .then((data) => {
    //  const results = {fullName: data.person.name.fullName};
    // 4. update DOM accordingly (display the 4 results)
      displayPerson(data.person);
  })
};

const stalkSomeone = (event) => {
  const input = document.querySelector("#clearbitEmail");
  // (prevent default behavior)
  event.preventDefault();
  console.log(event);
  // 3. fetch API url 
  fetchClearbit(input.value);
}

// 1. select every elements that will be interacted with (mail address (input), submit button, 4 results)
submit = document.querySelector("#clearbitSubmit");
// 2. listen to an event (click on submit button)
submit.addEventListener("click", stalkSomeone);
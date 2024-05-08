console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const age = formElements.age.value;
  const badness = formElements.badness.value;

  console.log("data: ", data);

  const total = Number(age) + Number(badness);
  console.log("total: ", total);
  console.log("age and badness: ", age, badness);
  // console.log(formElements.age.value + formElements.badness.value);

  event.target.reset();

  formElements.firstName.focus();
});

// The formula is: `age + badness`

// Log to the console _(replace the values between the quotes)_:

// > The age-badness-sum of "firstName" is "age-badness-sum"

// 1. age reference
// 2. badness reference
// 3. add them together
// 4. The age-badness-sum of "firstName" is "age-badness-sum"

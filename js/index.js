console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const formValues = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    age: parseInt(formData.get("age")),
    email: formData.get("email"),
    complaint: formData.get("complaint"),
    details: formData.get("details"),
    badness: parseInt(formData.get("badness")),
    orderDate: formData.get("orderDate"),
    tos: formData.get("tos") === "on",
  };

  console.log(formValues);

  const ageBadnessSum = formValues.age + formValues.badness;
  console.log(
    `The age-badness-sum of "${formValues.firstName}" is ${ageBadnessSum}`
  );

  form.reset();
  document.getElementById("first-name").focus();
});

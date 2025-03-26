const button = document.getElementById("changeText") as HTMLButtonElement;
const output  = document.getElementById("output") as HTMLButtonElement;

button.addEventListener("click", () => {
    output.textContent = "You clicked the button! This is now updated.";
});

const password = (document.getElementById("password") as HTMLInputElement);
password.addEventListener("blur", () => {
    if (password.value?.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false; // Prevent form submission
      }
      // Add more validation rules here (e.g., check for uppercase, lowercase, numbers)
      // ...
      return true; // Allow form submission
});
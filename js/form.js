const lastNameElement = document.querySelector(".js-lastName");
const firsttNameElement = document.querySelector(".js-firstName");
const phoneNumberElement = document.querySelector(".js-phoneNumber");
const emailAddressElement = document.querySelector(".js-emailAddress");
const messageElement = document.querySelector(".js-message");

// const lastName = lastNameElement.value;
// const firsttName = firsttNameElement.value;
// const phoneNumber = phoneNumberElement.value;
// const emailAddress = emailAddressElement.value;
// const message = messageElement.value;

const formButton = document.querySelector(".js-formButton");

formButton.addEventListener("click", (event) => {
    event.preventDefault();

    console.log(`
    ${firsttNameElement.value} ${lastNameElement.value} napisał(a):\n
    ${messageElement.value}\n
    kontakt: email ${emailAddressElement.value}, tel. ${phoneNumberElement.value}`);
});
{
    const contactFormElement = document.querySelector(".js-contactForm");
    const lastNameElement = document.querySelector(".js-lastName");
    const firstNameElement = document.querySelector(".js-firstName");
    const phoneNumberElement = document.querySelector(".js-phoneNumber");
    const emailAddressElement = document.querySelector(".js-emailAddress");
    const messageElement = document.querySelector(".js-message");

    const modal = document.querySelector(".js-modal");
    const overlay = document.querySelector(".overlay");

    const closeButton = document.querySelector(".js-closeButton");

    function GetValues(firstName, lastName, phoneNumber, emailAddress, message) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
        this.message = message;
    };

    const displayModal = () => {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    };

    const closeModal = () => {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    };

    const logInConsole = (obj) => {
        console.log(`${obj.firstName} ${obj.lastName} napisał(a):\n${obj.message}\nkontakt: email ${obj.emailAddress}, tel. ${obj.phoneNumber}`);
    };

    const isFilled = (arr) => {
        return arr.every(value => value !== "");
    };

    const isText = (str) => {
        const textRegex = /[a-zA-Z]{2,50}/;
        return textRegex.test(str);
    };

    const isPhonePattern = (str) => {
        const phoneNumberRegex = /[0-9]{3}-?[0-9]{3}-?[0-9]{3}/;
        return phoneNumberRegex.test(str);
    };

    const isEmailAddressPattern = (str) => {
        const emailAddressRegex = /\S+@\S+\.\S+/;
        return emailAddressRegex.test(str);
    };

    const validate = (obj) => {
        if (!isFilled(Object.values(obj))) {
            return false;
        } else if (!(isText(obj.firstName) && isText(obj.lastName))) {
            return false;
        } else if (!isPhonePattern(obj.phoneNumber)) {
            return false;
        } else if (!isEmailAddressPattern(obj.emailAddress)) {
            return false;
        };
        return true;
    };

    closeButton.addEventListener("click", closeModal);

    overlay.addEventListener("click", closeModal);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !modal.classList.contains("hidden")) {
            closeModal();
        };
    });

    contactFormElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const formValues = new GetValues(
            firstNameElement.value,
            lastNameElement.value,
            phoneNumberElement.value,
            emailAddressElement.value,
            messageElement.value
        );

        if (validate(formValues)) {
            displayModal();
            logInConsole(formValues);
        };
    });
}

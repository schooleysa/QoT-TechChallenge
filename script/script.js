const landingPage = {};

let b2b = []
let b2c = []

landingPage.download = (e) => {
    e.preventDefault();
    let newUser = {
        name: `${document.querySelector("#name").value}`,
        email: `${document.querySelector("#email").value}`
    }
    landingPage.addUser = (userObj) => {
    if (document.querySelector(".yes").checked === true) {
        b2b.push(userObj)
        console.log(b2b)
    } else if (document.querySelector(".no").checked === true) {
        b2c.push(userObj)
        console.log(b2c)
    } else {
        alert("Please make a selection")
    }
    }

    if (newUser.email.includes("@") && newUser.email.includes(".") && document.querySelector("#name") !== false) {
        landingPage.addUser(newUser)
    } else {
        alert("Please enter a valid name and e-mail address")
    }

}

landingPage.scrollTo = () => {
    document.querySelector(".freeInfoForm").scrollIntoView({behavior: "smooth"})
}

landingPage.init = () => {
    document.querySelector("#btn1").addEventListener("click", landingPage.download)
    document.querySelector("#btn2").addEventListener("click", landingPage.scrollTo)
}


landingPage.init();
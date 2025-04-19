const navbarHover = document.querySelectorAll('.nav-styling')

navbarHover.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        element.style.backgroundColor = "rgb(211, 123, 80)";
        element.style.color = "rgb(255, 255, 255)"

    })

    element.addEventListener("mouseleave", () => {
        element.style.backgroundColor = "rgb(245, 245, 220)"
        element.style.color = "rgb(0, 0, 0)"
    })
})



const LinkedIn = document.getElementById("linkedin-button")

// LinkedIn.addEventListener("click", handleLinkedInClick)

// function handleLinkedInClick(event){
//     window.open("https://www.linkedin.com/in/muhammad-hammad-5534ba258/", "_blank")
// }

// const Github = document.getElementById("github-button")

// Github.addEventListener("click", handleGithubClick)

// function handleGithubClick(event){
//     window.open("https://github.com/ezkl123", "_blank")
// }
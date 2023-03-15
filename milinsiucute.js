const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const inputValue = document.querySelector("#code").value;

    if (inputValue == "520") {
        window.location.href = "milincute.html";
    } else {
        alert("Stay off from milin's private space!")
    }
});

window.addEventListener('load', function () {
    var floatingDiv = document.querySelector('.floating-div');
    floatingDiv.classList.add('floating-div');
});
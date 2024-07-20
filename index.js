let createBtn = document.querySelector(".btns");
const btnChild = createBtn.children;

for(let i = 0; i < btnChild.length - 1; i++) {
    btnChild[0].addEventListener("click", () => {
        localStorage.setItem("textContent", "Enter your ID");
        localStorage.setItem("btnText", "Submit");
        location.href = "page3.html";
    });

    btnChild[1].addEventListener("click", () => {
        localStorage.setItem("textContent", "Enter your ID");
        localStorage.setItem("btnText", "Submit");
    })
}

localStorage.setItem("createIDPlaceholder", "Create new ID");
localStorage.setItem("createBtn", "Create");
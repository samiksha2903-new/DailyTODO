const submitBtn = document.querySelector(".submitBtn");
const inputData = document.querySelector(".inpID");

let getData = localStorage.getItem("textContent");
let getData1 = localStorage.getItem("btnText");
let getCreateData1 = localStorage.getItem("createIDPlaceholder");
let getCreateData2 = localStorage.getItem("createBtn");

if (getData == "Enter your ID") {
  inputData.placeholder = getData;
  submitBtn.textContent = getData1;
} else {
  inputData.placeholder = getCreateData1;
  submitBtn.textContent = getCreateData2;
}

submitBtn.addEventListener("click", () => {
  // to check if the value is empty or wrong and if data is correct then give href tag link dynamically
  let inputVal = inputData.value.trim();
  // also check if the id entered matched with the userID or not;
  if (inputVal === "" || inputVal === " ") {
    let msgDiv = document.querySelector(".wrongMsg");
    msgDiv.classList.remove("hidden");
    msgDiv.classList.add("block");
    setTimeout(() => {
      msgDiv.classList.remove("block");
      msgDiv.classList.add("hidden");
      location.reload();
    }, 2500);
  } else {
    // location.href = "page2.html";
    submitBtn.setAttribute("href", "page2.html");
  }
});

document.addEventListener("load", () => {
  const addBtn = document.querySelector(".addBtn");
  const inputBox = document.querySelector(".task");
  console.log(addBtn);

  addBtn.addEventListener("click", () => {
    console.log("clcik");

    const newBtn = document.createElement("div");
    newBtn.classList.add("task");
    inputBox.append(newBtn);
  });
});
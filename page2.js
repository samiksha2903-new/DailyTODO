document.addEventListener('DOMContentLoaded', function () {
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

// document.addEventListener('DOMContentLoaded', function () {
//     console.log('Test script loaded');
//     alert('JavaScript is working on the third page!');
// });
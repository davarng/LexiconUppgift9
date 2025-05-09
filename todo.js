document
  .getElementById("todoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const message = document.querySelector('[name="todoMessage"]').value;
    document.getElementById("todoList").innerHTML += `
      <li class="todo-li p-2 rounded mb-2">
        <p class="todo-text text-wrap mb-1" style="word-wrap: break-word;">${message}</p>
        <button class="check-btn">Check</button>
        <button class="delete-btn">delete</button>
      </li>
    `;

    event.target.reset();
  });

document.getElementById("todoList").addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  } else if (event.target.classList.contains("check-btn")) {
    event.target.previousElementSibling.classList.toggle("done");
  }
});

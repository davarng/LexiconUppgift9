class ReusableHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="">Uppgift9</a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Bishbosh</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="todoList.html">Todo</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="bishbosh1.html">CL bishbosh</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>`;
  }
}

class ReusableFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="bg-dark text-white text-center py-1 pt-3">
      <p>&copy; 2025 Uppgift9</p>
    </footer>`;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  customElements.define("reusable-header", ReusableHeader);
  customElements.define("reusable-footer", ReusableFooter);
});

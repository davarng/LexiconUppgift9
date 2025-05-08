function BishBosh(loop, bish, bosh) {
  let result = "";
  if (loop > 0 && bish > 0 && bosh > 0) {
    for (let i = 1; i <= loop; i++) {
      if (i % bish === 0 && i % bosh === 0) {
        result += "Bish-Bosh ";
      } else if (i % bish === 0) {
        result += "Bish ";
      } else if (i % bosh === 0) {
        result += "Bosh ";
      } else {
        result += `${i} `;
      }
    }
    return result.slice(0, -1);
  } else {
    return "Wrong input";
  }
}

function PrintBishBosh(message) {
  document.getElementById("result").textContent = message;
}

document
  .getElementById("bishBoshForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const iterations = document.querySelector('[name="iterations"]').value;
    const bish = document.querySelector('[name="bish"]').value;
    const bosh = document.querySelector('[name="bosh"]').value;

    PrintBishBosh(BishBosh(iterations, bish, bosh));
  });

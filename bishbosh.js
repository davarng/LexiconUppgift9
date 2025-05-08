let loop;

let bish;

let bosh;

function BishBosh() {
  if (loop > 0 && bish > 0 && bosh > 0) {
    for (let i = 1; i <= loop; i++) {
      if (i % bish === 0 && i % bosh === 0) {
        console.log("Bish-Bosh");
      } else if (i % bish === 0) {
        console.log("Bish");
      } else if (i % bosh === 0) {
        console.log("Bosh");
      } else {
        console.log(i);
      }
    }
  }
}

function PrintBishBosh(message) {
  document.getElementById("message").textContent = message;
}

PrintBishBosh("yes");

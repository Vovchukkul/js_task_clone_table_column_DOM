var e=document.querySelector("table"),t=document.createElement("th");t.textContent="Position";var o=e.rows[0].cells.length-1;e.rows[0].insertBefore(t,e.rows[0].cells[o]),document.querySelectorAll("tbody tr").forEach(function(e){var t=document.createElement("td");t.textContent=e.cells[1].textContent,e.insertBefore(t,e.cells[o])});
//# sourceMappingURL=index.37cac135.js.map

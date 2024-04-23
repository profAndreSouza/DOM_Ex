const squadForm = document.getElementById("squadForm");

squadForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const squadName = document.getElementById("squadName").value;
    const squadLeader = document.getElementById("squadLeader").value;
    const squadMembers = document.getElementById("squadMembers").value;

    const newRow = document.createElement("tr");

    const tdName = document.createElement("td");
    const tdLeader = document.createElement("td");
    const tdMembers = document.createElement("td");

    tdName.appendChild(document.createTextNode(squadName));
    tdLeader.appendChild(document.createTextNode(squadLeader));
    tdMembers.appendChild(document.createTextNode(squadMembers));

    newRow.appendChild(tdName);
    newRow.appendChild(tdLeader);
    newRow.appendChild(tdMembers);

    const tdAction = document.createElement("td");

    const btEdit = document.createElement("button")
    btEdit.textContent = "Editar";
    btEdit.addEventListener("click", function () {
        alert("Editar");
    })
    
    const btDelete = document.createElement("button")
    btDelete.textContent = "Remover";
    btDelete.addEventListener("click", function () {
        if (confirm("Confirma a exclusão do cadastro desta SQUAD?")) {
            document.getElementById("squadTable")
                .deleteRow(this.closest("tr").rowIndex);
        }
    });

    tdAction.appendChild(btEdit);
    tdAction.appendChild(btDelete);

    newRow.appendChild(tdAction);

    document.getElementById("squadTable").appendChild(newRow);
})
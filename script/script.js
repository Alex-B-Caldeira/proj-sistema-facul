
/** Confirma de senhas conferem no cadastro */
document.querySelector('form').addEventListener('submit', function (event) {
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;
    if (senha !== confirmarSenha) {
        event.preventDefault();
        document.getElementById('confirmarSenha').classList.add('is-invalid');
    } else {
        document.getElementById('confirmarSenha').classList.remove('is-invalid');
    }
});
/** Filtro Lista de produtos */
function filterTableProd() {
    const input = document.getElementById('filterInput');
    const filter = input.value.toLowerCase();
    const table = document.querySelector('table tbody');
    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let match = false;
        for (let j = 0; j < cells.length; j++) {
        if (cells[j].innerText.toLowerCase().indexOf(filter) > -1) {
            match = true;
            break;
        }
        }
        rows[i].style.display = match ? '' : 'none';
    }
    }
/** Filtro Lista de vendas */
    function filterTable() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("searchInput");
        filter = input.value.toUpperCase();
        table = document.querySelector("table");
        tr = table.getElementsByTagName("tr");
        for (i = 1; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }       
        }
    }

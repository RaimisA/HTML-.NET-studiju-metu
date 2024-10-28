let csvContent = '';

document.getElementById('generateCsvButton').addEventListener('click', generateCSV);
document.getElementById('downloadCsvButton').addEventListener('click', downloadCSV);

function generateCSV() {
    const table = document.getElementById('darbuotojai');
    const delimiter = document.getElementById('delimiterSelect').value;
    csvContent = '';

    const headers = getTableHeaders(table);
    csvContent += headers.join(delimiter) + '\n';

    const rows = getTableRows(table);
    rows.forEach(row => {
        csvContent += row.join(delimiter) + '\n';
    });

    alert('CSV content generated.');
    document.getElementById('downloadCsvButton').style.display = 'inline';
}

function getTableHeaders(table) {
    const headerCells = table.querySelectorAll('thead th');
    let headers = [];
    for (let i = 0; i < headerCells.length; i++) {
        headers.push(headerCells[i].textContent);
    }
    return headers;
}

function getTableRows(table) {
    const rows = table.querySelectorAll('tbody tr');
    let rowData = [];
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].querySelectorAll('td');
        let row = [];
        for (let j = 0; j < cells.length; j++) {
            row.push(cells[j].textContent);
        }
        rowData.push(row);
    }
    return rowData;
}

function downloadCSV() {
    if (!csvContent) {
        alert('No CSV content to download. Please generate the CSV first.');
        return;
    }

    const encodedUri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'darbuotojai.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
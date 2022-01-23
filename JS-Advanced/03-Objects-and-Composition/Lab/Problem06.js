function solve(json) {
    let array = JSON.parse(json);
    let newArray = ['<table>'];
    let heared = '   <tr>'
    for (const key in array[0]) {
        heared += `<th>${escapeHtml(key)}</th>`;
    }
    heared += '</tr>';
    newArray.push(heared);
    for (let index = 0; index < array.length; index++) {
        let row = '   <tr>';
        for (const key in array[index]) {
            row += `<td>${escapeHtml(array[index][key])}</td>`
        }
        row += '</tr>';
        newArray.push(row);
    }
    newArray.push(`</table>`);
    return newArray.join('\n');

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

}

console.log(solve(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
));
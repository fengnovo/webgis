function getData() {
    if (!localStorage.getItem('geojson')) {
        localStorage.setItem('geojson', '[]');
    }

    return JSON.parse(localStorage.getItem('geojson'));
}

function saveData(data) {
    localStorage.setItem('geojson', JSON.stringify(data));
}
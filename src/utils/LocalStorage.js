export function getData() {
    const storage = localStorage.getItem('data');
    if (storage !== null) return JSON.parse(storage);
    return undefined;
}

export function saveData(data) {
    localStorage.setItem('data', JSON.stringify(data));
}
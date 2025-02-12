// Mendapatkan elemen dari DOM
const temperatureInput = document.getElementById('temperature');
const fromUnitSelect = document.getElementById('fromUnit');
const toUnitSelect = document.getElementById('toUnit');
const resultDiv = document.getElementById('result');
const convertedTemperature = document.getElementById('convertedTemperature');
const explanation = document.getElementById('explanation');
const validationMessage = document.getElementById('validationMessage');

// Fungsi untuk mengonversi suhu
function convert() {
    // Mengambil nilai dari input dan dropdown
    const temperature = parseFloat(temperatureInput.value);
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;

    // Validasi input
    if (isNaN(temperature)) {
        validationMessage.textContent = "Silakan masukkan suhu yang valid.";
        resultDiv.classList.add('hidden');
        return;
    } else {
        validationMessage.textContent = "";
    }

    let convertedValue;

    // Konversi suhu
    if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            convertedValue = (temperature * 9/5) + 32;
            explanation.textContent = `${temperature}°C = ${convertedValue.toFixed(2)}°F`;
        } else if (toUnit === 'kelvin') {
            convertedValue = temperature + 273.15;
            explanation.textContent = `${temperature}°C = ${convertedValue.toFixed(2)}K`;
        } else {
            convertedValue = temperature;
            explanation.textContent = `${temperature}°C = ${convertedValue.toFixed(2)}°C`;
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            convertedValue = (temperature - 32) * 5/9;
            explanation.textContent = `${temperature}°F = ${convertedValue.toFixed(2)}°C`;
        } else if (toUnit === 'kelvin') {
            convertedValue = (temperature - 32) * 5/9 + 273.15;
            explanation.textContent = `${temperature}°F = ${convertedValue.toFixed(2)}K`;
        } else {
            convertedValue = temperature;
            explanation.textContent = `${temperature}°F = ${convertedValue.toFixed(2)}°F`;
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            convertedValue = temperature - 273.15;
            explanation.textContent = `${temperature}K = ${convertedValue.toFixed(2)}°C`;
        } else if (toUnit === 'fahrenheit') {
            convertedValue = (temperature - 273.15) * 9/5 + 32;
            explanation.textContent = `${temperature}K = ${convertedValue.toFixed(2)}°F`;
        } else {
            convertedValue = temperature;
            explanation.textContent = `${temperature}K = ${convertedValue.toFixed(2)}K`;
        }
    }

    // Menampilkan hasil konversi
    convertedTemperature.textContent = convertedValue.toFixed(2);
    resultDiv.classList.remove('hidden');
}

// Menambahkan event listener untuk tombol konversi
document.querySelector('button').addEventListener('click', convert);
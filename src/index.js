import { render, navigate } from './App.js';

document.addEventListener('DOMContentLoaded', () => {
    render();
    window.addEventListener('hashchange', () => navigate(window.location.hash.substring(1) || 'home'));
    window.addEventListener('load', () => navigate(window.location.hash.substring(1) || 'home'));

    const fetchBinanceRsiDataBtn = document.getElementById('fetchBinanceRsiDataBtn');
    if (fetchBinanceRsiDataBtn) {
        fetchBinanceRsiDataBtn.addEventListener('click', () => fetchData('https://trendex.run/rsis/binance', 'result-binance-rsi'));
    }

    const fetchUpbitRsiDataBtn = document.getElementById('fetchUpbitRsiDataBtn');
    if (fetchUpbitRsiDataBtn) {
        fetchUpbitRsiDataBtn.addEventListener('click', () => fetchData('https://trendex.run/rsis/upbit', 'result-upbit-rsi'));
    }

    const fetchUpbitMacdDataBtn = document.getElementById('fetchUpbitMacdDataBtn');
    if (fetchUpbitMacdDataBtn) {
        fetchUpbitMacdDataBtn.addEventListener('click', () => fetchData('https://trendex.run/macds/upbit', 'result-upbit-macd'));
    }

    const fetchBinanceMacdDataBtn = document.getElementById('fetchBinanceMacdDataBtn');
    if (fetchBinanceMacdDataBtn) {
        fetchBinanceMacdDataBtn.addEventListener('click', () => fetchData('https://trendex.run/macds/binance', 'result-binance-macd'));
    }
});

function fetchData(url, resultId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            displayData(data, resultId);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            document.getElementById(resultId).innerHTML = '<p>Error fetching data</p>';
        });
}

function displayData(data, resultId) {
    const resultDiv = document.getElementById(resultId);
    resultDiv.innerHTML = '';

    if (data.length === 0) {
        resultDiv.innerHTML = '<p>No data available</p>';
        return;
    }

    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Market</th>
            <th>Decision</th>
            <th>Value</th>
        </tr>
    `;

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.market}</td>
            <td>${item.decision}</td>
            <td>${item.value}</td>
        `;
        table.appendChild(row);
    });

    resultDiv.appendChild(table);
}
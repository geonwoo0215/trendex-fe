export function navigate(hash) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden');
        if (section.id === hash) {
            section.classList.remove('hidden');
        }
    });
}

export function render() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#binance-rsi">Binance RSI Data</a></li>
                <li><a href="#upbit-rsi">Upbit RSI Data</a></li>
                <li><a href="#upbit-macd">Upbit MACD Data</a></li>
                <li><a href="#binance-macd">Binance MACD Data</a></li>
            </ul>
        </nav>
        <div id="content">
            <section id="home">
                <h1>Welcome to the Home Page</h1>
                <p>This is the home page.</p>
            </section>
            <section id="about" class="hidden">
                <h1>About Us</h1>
                <p>This is the about page.</p>
            </section>
            <section id="binance-rsi" class="hidden">
                <h1>Binance RSI Data</h1>
                <button id="fetchBinanceRsiDataBtn">Fetch Binance RSI Data</button>
                <div id="result-binance-rsi"></div>
            </section>
            <section id="binance-macd" class="hidden">
                <h1>Binance MACD Data</h1>
                <button id="fetchBinanceMacdDataBtn">Fetch Binance MACD Data</button>
                <div id="result-binance-macd"></div>
            </section>
            <section id="upbit-rsi" class="hidden">
                <h1>Upbit RSI Data</h1>
                <button id="fetchUpbitRsiDataBtn">Fetch Upbit RSI Data</button>
                <div id="result-upbit-rsi"></div>
            </section>
            <section id="upbit-macd" class="hidden">
                <h1>Upbit MACD Data</h1>
                <button id="fetchUpbitMacdDataBtn">Fetch Upbit MACD Data</button>
                <div id="result-upbit-macd"></div>
            </section>
        </div>
    `;
}
const axios = require('axios');

const fetchTop50Cryptos = async () => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 50,
                page: 1,
                sparkline: false
            }
        });
        return response.data;  // Verileri döndürüyoruz
    } catch (error) {
        console.error('Veri çekilirken hata oluştu:', error);
        throw error;
    }
};

module.exports = { fetchTop50Cryptos };

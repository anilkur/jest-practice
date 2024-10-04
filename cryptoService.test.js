const axios = require('axios');
const { fetchTop50Cryptos } = require('./cryptoService');

jest.mock('axios');

describe('fetchTop50Cryptos', () => {
    beforeEach(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});  // console.error'ı mock'la
    });

    afterEach(() => {
        console.error.mockRestore();  // Her testten sonra mock'u kaldır
    });

    it('should fetch the top 50 cryptocurrencies', async () => {
        const mockData = Array.from({ length: 50 }, (_, index) => ({
            id: `crypto${index + 1}`,
            symbol: `crypto${index + 1}`,
            name: `Crypto ${index + 1}`,
            current_price: 1000 + index * 10,
            market_cap: 1000000 + index * 1000,
        }));

        axios.get.mockResolvedValue({ data: mockData });

        const result = await fetchTop50Cryptos();
        expect(result).toEqual(mockData);
        expect(result.length).toBeGreaterThan(0);
        expect(result.length).toBe(50);
        expect(result[0].name).toBe('Crypto 1');
    });

    it('should handle errors', async () => {
        axios.get.mockRejectedValue(new Error('Network Error'));

        await expect(fetchTop50Cryptos()).rejects.toThrow('Network Error');
    });
});

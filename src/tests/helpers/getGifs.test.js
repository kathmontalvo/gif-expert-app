import getGifs from '../../helpers/getGifs'

describe('Pruebas con getGifs Fetch', () => {
    
    test('debe traer 10 elementos', async () => {
        const gifs = await getGifs('Dark');
        expect( gifs.length ).toBe(10)
    });

    test('debe traer 10 elementos', async () => {
        const gifs = await getGifs('');
        // console.log(gifs); <-- para verificar qué me envia
        expect( gifs.length ).toBe(0)
    });

})

import { saveUser, savePublish, getUser, updatePublish } from '../src/firebase/firestore';

jest.mock('../src/firebase/config')

describe('myFunction saveUser', () => {
    it('Is a function', () => {
        expect(typeof saveUser).toBe("function")
    });
});

describe('myFunction saveUser', () => {
    it('should return equal values of saveUser​', async() => {
        const result = await saveUser('WI8el6Vy4UfaBzvUq7nV8KpAiPJ3', 'Milagros', 'mili@gmail.com', 'htppp.mili.com', 'ww.mili.com', 'me gusta pasear', 'lima', 'facke')
        expect(result).toStrictEqual({
            idUser: 'WI8el6Vy4UfaBzvUq7nV8KpAiPJ3',
            nameUser: 'Milagros',
            emailUser: 'mili@gmail.com',
            photoURL: 'htppp.mili.com',
            frontPageURL: 'ww.mili.com',
            interests: 'me gusta pasear',
            location: 'lima',
            socialNetwork: 'facke'
        })
    });
});
describe('myFunction saveUser', () => {
    it('should return 8 values ​​for the number of elements', async() => {
        const result = await saveUser('001', 'Milagros', 'mili@gmail.com', 'htppp.mili.com', 'ww.mili.com', 'me gusta pasear', 'lima', 'facke')

        expect((Object.keys(result)).length).toBe(8);
    });
});

describe('myFunction savePublish', () => {
    it('Is a function', () => {
        expect(typeof savePublish).toBe("function")
    });
});
describe('myFunction savePublish', () => {
    it('should return equal values of savePublish', () => {
        const result = savePublish('Hola mundo', '22/1/2022', '02:14', 'Jenifer M', 'http.mi-foto.png', '1642778042479', 'jeny.m@gmail.com', 'WI8el6Vy4UfaBzvUq7nV8KpAiPJ3', 'http.bitcoin.jpg')
        expect(result).toStrictEqual({
            content: 'Hola mundo',
            datePublish: '22/1/2022',
            hourPublish: '02:14',
            userName: 'Jenifer M',
            urlPhoto: 'http.mi-foto.png',
            dateOrderComplet: '1642778042479',
            email: 'jeny.m@gmail.com',
            likesPost: [],
            idUser: 'WI8el6Vy4UfaBzvUq7nV8KpAiPJ3',
            imagen: 'http.bitcoin.jpg',
            hearts: []
        })
    });
});
describe('myFunction savePublish', () => {
    it('should return 11 values ​​for the number of elements', async() => {
        const result = savePublish('Hola mundo', '22/1/2022', '02:14', 'Jenifer M', 'http.mi-foto.png', '1642778042479', 'jeny.m@gmail.com', 'WI8el6Vy4UfaBzvUq7nV8KpAiPJ3', 'http.bitcoin.jpg')

        expect((Object.keys(result)).length).toBe(11);
    });
});

/* describe('myFunction getUser', () => {
    it('should return 8 values ​​for the number of elements', async() => {
        const result = await getUser('WI8el6Vy4UfaBzvUq7nV8KpAiPJ3')

        expect(result).toStrictEqual({
            idUser: '00WI8el6Vy4UfaBzvUq7nV8KpAiPJ31',
            nameUser: 'Milagros',
            emailUser: 'mili@gmail.com',
            photoURL: 'htppp.mili.com',
            frontPageURL: 'ww.mili.com',
            interests: 'me gusta pasear',
            location: 'lima',
            socialNetwork: 'facke'
        })
    });
}); */
describe('myFunction updatePublish', () => {
    it('Is a function', () => {
        expect(typeof updatePublish).toBe("function")
    });
});
describe('myFunction updatePublish', () => {
    it('should return value update ​of updatePublish', async() => {
        const result = await updatePublish('00000001', 'como estas')
        expect(result).toStrictEqual({
            content: 'como estas',
        })
    });
});
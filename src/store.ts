import { reactive } from "vue";

export const images = reactive({
    products: [
        '/bottleWineTest.png',
        '/bottleWineTest.png',
        '/bottleWineTest.png',
        '/bottleWineTest.png',
        '/bottleWineTest.png',
        '/bottleWineTest.png'],
    employee: [
        '/ppTest.png',
        '/ppTest.png',
        '/ppTest.png',
        '/ppTest.png',
        '/ppTest.png',
        '/ppTest.png'],
    sn: ['/facebook.svg',
        './twitter.svg',
        './insta.svg',
        './linkedin.svg'],
});

export const information = reactive({
    general: {
        name: 'Laluc',
        description: 'Lorem ipsum dolor sit amet, con',
    },

    contact: {
        address: '12 rue de la rue',
        city: 'Ville de la ville',
        province: 'Province de la province',
        postalCode: '12000',
        country: 'France',
        phone: '+1234567890',
        email: 'exemple@gmail.com',
        facebook: 'https://www.facebook.com/',
        instagram: 'https://www.instagram.com/'
    },
});

export const numberInList = reactive({
    products: 4,
    employee: 3,
    sn: 4,
    terroir: 3,
});


import { reactive } from "vue";

export const images = reactive({
    products: [
        '/Laluc/packedBottles.jpg',
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

    vineyard: ['/Laluc/grapevine.JPG',
        '/Laluc/grapevine2.JPG',
        '/Laluc/grapevine3.JPG',
        '/Laluc/grapevine4.JPG',
        '/Laluc/grapevineInBarrel.JPG',
        '/Laluc/harvestGrapevine.JPG',
        '/Laluc/harvestGrapevine2.JPG',
        '/Laluc/harvestGrapevine3.JPG',
        '/Laluc/harvesting.jpg',
        '/Laluc/ladybug.jpg',
        '/Laluc/newPlant.jpg',
        '/Laluc/newPlant2.jpg',
        '/Laluc/newPlant3.jpg',
        '/Laluc/newPlant4.jpg',
        '/Laluc/vinePlant.jpg',
        '/Laluc/vinePlant2.jpg',
        '/Laluc/vineyard.jpg',
        '/Laluc/vineyard2.jpg',
        '/Laluc/wood.jpg'

    ],
    lalucHouse: [
        '/Laluc/lalucHouse.jpg',
        '/Laluc//lalucHouse2.jpg',
        '/Laluc//lalucHouse3.jpg']
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


import bcrypt from 'bcrypt';

const data = {
    users:[
        {
            name: 'hasan',
            email: 'admin@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: true,
        },
        {
            name: 'jon',
            email: 'user@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: false,
        }
    ],


    products:[
        {
            name : ' Slim shirt',
            image: '/assets/img/p1.jpg',
            price: 199.99,
            brand: 'Nike',
            rating: 3.5,
            category: 'shirts',
            numReviews: 10,
            stock:120,
            description: 'High Quality Garbage',
        },
        {

            name : 'Ganja mango shirt',
            image: '/assets/img/p2.jpg',
            price: 89,
            brand: 'Nike',
            category: 'shirts',
            rating: 4.5,
            stock: 0,
            numReviews: 10,
            description: 'High Quality Garbage',
        },
        {
            name : 'Nike orange shirt',
            image: '/assets/img/p3.jpg',
            price: 33.5,
            brand: 'Nike',
            category: 'pants',
            rating: 5,
            stock: 10,
            numReviews: 10,
            description: 'High Quality Garbage',
        },
        {
            name : 'Mango divine shirt',
            image: '/assets/img/p4.jpg',
            price: 130,
            brand: 'Nike',
            category: 'tshirts',
            rating: 4.5,
            stock: 13,
            numReviews: 75,
            description: 'High Quality Garbage',
        },
        {
            name : 's Slim shirt',
            image: '/assets/img/p5.jpg',
            price: 120,
            brand: 'Nike',
            category: 'denim',
            rating: 4.5,
            stock: 34,
            numReviews: 10,
            description: 'High Quality Garbage',
        }
    ]
}

export default data;


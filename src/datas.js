let xAxisData = [
    {
        'name':'jan',
        'sale': 165_000
    },
    {
        'name':'feb',
        'sale': 92_000
    },
    {
        'name':'mar',
        'sale': 102_000
    },
    {
        'name':'apr',
        'sale': 122_000
    },
    {
        'name':'may',
        'sale': 142_000
    },
    {
        'name':'jun',
        'sale': 160_000
    },
    {
        'name':'jul',
        'sale': 130_000
    },
    {
        'name':'aug',
        'sale': 145_000
    },
    {
        'name':'sep',
        'sale': 150_000
    },
    {
        'name':'oct',
        'sale': 170_000
    },
    {
        'name':'nov',
        'sale': 160_000
    },
    {
        'name':'dec',
        'sale': 175_000
    }
]

let newMembers = [
    {
        id: 1,
        username: 'Hadi Rezvandoost',
        title: 'Web Developer',
        img: 'images/Ava002.png'
    },
    {
        id: 2,
        username: 'Armin Shirkhani',
        title: 'Interior designer',
        img: 'images/Ava002.png'
    },
    {
        id: 3,
        username: 'Cristiano Ronaldo',
        title: 'Soccer player',
        img: 'images/Ava002.png'
    },
    {
        id: 4,
        username: 'Scarlett Johansson',
        title: 'Actress',
        img: 'images/Ava002.png'
    },
]

const transactions = [
    {
        id: 1,
        customer: 'Qadir Yolme',
        date: '12 Jun 2022',
        amount: 123,
        status: 'Approved',
        img: 'images/Ava002.png'
    },
    {
        id: 2,
        customer: 'Amin Saeedi',
        date: '23 Jul 2022',
        amount: 168,
        status: 'Declined',
        img: 'images/Ava002.png'
    },
    {
        id: 3,
        customer: 'Mohammad Qol',
        date: '28 May 2022',
        amount: 215,
        status: 'Pending',
        img: 'images/Ava002.png'
    },
    {
        id: 4,
        customer: 'Sasan Moq',
        date: '1 Feb 2022',
        amount: 156,
        status: 'Approved',
        img: 'images/Ava002.png'
    },
]

let userRows = [
    {
        id: 1,
        username: 'Qadir Yolme',
        avatar: 'images/Ava002.png',
        status: 'active',
        transaction: '$129.52',
        email: 'Qadir@gmail.com'
    },
    {
        id: 2,
        username: 'Amin Saeedi',
        avatar: 'images/Ava002.png',
        status: 'non-active',
        transaction: '$110',
        email: 'Amin@gmail.com'
    },
    {
        id: 3,
        username: 'Sasan Moq',
        avatar: 'images/Ava002.png',
        status: 'active',
        transaction: '$98',
        email: 'Sasan@gmail.com'
    },
    {
        id: 4,
        username: 'Zahra Agayi',
        avatar: 'images/Ava002.png',
        status: 'active',
        transaction: '$0',
        email: 'Zahra@gmail.com'
    },
    {
        id: 5,
        username: 'Hamze mohammadi',
        avatar: 'images/Ava002.png',
        status: 'active',
        transaction: '$55.98',
        email: 'Hamze@gmail.com'
    }
]

let products = [
    {
        id: 1,
        title: 'Asus',
        avatar: 'images/asus.jpeg',
        in_stock: 'Yes',
        price: '$890'
    },
    {
        id: 2,
        title: 'Acer',
        avatar: 'images/acer.jpg',
        in_stock: 'Yes',
        price: '$590'
    },
    {
        id: 3,
        title: 'HP',
        avatar: 'images/hp.jpg',
        in_stock: 'No',
        price: '$740'
    },
    {
        id: 4,
        title: 'Dell',
        avatar: 'images/dell.jpg',
        in_stock: 'Yes',
        price: '$830'
    },
]

const productsData = [
    {
        name: 'Jan',
        sale: 4000,
    },
    {
        name: 'Feb',
        sale: 3000,
    },
    {
        name: 'Mar',
        sale: 6000,
    },
]

export  { xAxisData, newMembers, transactions, userRows, products, productsData }
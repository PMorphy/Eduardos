export const data = {
  products: [
    {
      _id: '1',
      name: 'Huaraches',
      image: '/images/Huaraches.png',
      price: 49.95,
      brand: 'El Dandy',
      rating: 4.3,
      numReviews: 102,
      category: 'Casual Shoes',
      description: 'Fine Leather Craftsmanship, Made in the Heart of Mexico'
    },
    {
      _id: '2',
      name: 'Sandals',
      image: '/images/Huaraches.png',
      price: 27.95,
      brand: 'None',
      rating: 4.7,
      numReviews: 46,
      category: 'Casual Shoes',
      description: 'The Perfect Sandal for at Home or at the Beach'
    },
    {
      _id: '3',
      name: 'Dress Shoes',
      image: '/images/Huaraches.png',
      price: 149.95,
      brand: 'Palapas',
      rating: 4.9,
      numReviews: 66,
      category: 'Dress Shoes',
      description: 'High Quality Leather for that Special Night Out'
    }
  ],
  categories: [
    {
      name: 'Shoes',
      image: '',
      description: 'Shoes for Everyone'
    },
    {
      name: 'Handbags',
      image: '',
      description: 'Handbags for His and Hers'
    },
    {
      name: 'Wallets',
      image: '',
      description: 'Both Large and Small Wallets'
    },
    {
      name: 'Jackets',
      image: '',
      description: "Men's and Boy's"
    },
    {
      name: 'Hats',
      image: '',
      description: 'Cachuchas and Sombreros'
    }
  ],
  catergorySlides: [
    {
      image: '',
      goesTo: 'shop'
    },
    {
      image: '',
      goesTo: 'contact'
    },
    {
      image: '',
      goesTo: 'shop'
    },
    {
      image: '',
      goesTo: 'specials'
    }
  ],
  specials: [
    {
      name: 'Huaraches',
      onSale: true,
      salesAmount: '10%',
      salesDateStart: '11-22-2020',
      salesDateEnd: '12-31-2020'
    },
    {
      name: 'Catalans',
      onSale: false,
      salesAmount: '25%',
      salesDateStart: '03-01-2021',
      salesDateEnd: '04-15-2021'
    },
    {
      name: 'Sombrero',
      onSale: true,
      salesAmount: '15%',
      salesDateStart: '11-22-2020',
      salesDateEnd: '12-31-2020'
    },
    {
      name: 'Hand Purse',
      onSale: false,
      salesAmount: '30%',
      salesDateStart: '01-01-2021',
      salesDateEnd: '02-01-2021'
    }
  ]
};

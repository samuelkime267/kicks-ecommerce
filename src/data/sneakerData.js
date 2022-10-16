const sneakerData = [
  {
    id: 1,
    name: 'air force',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam eligendi adipisci et? Eius a vero assumenda cumque laborum ea!`,
    price: 50,
    rating: 4.5,
    size: [35, 36, 37, 39, 40, 41, 42],
    images: [
      {
        img: './images/air-force-1-07-mens-shoes-5QFp5Z.png',
        color: 'white',
      },
      {
        img: './images/air-force-1-07-lv8-1-mens-shoes-x0bMdL.png',
        color: 'red',
      },
      {
        img: './images/air-force-1-07-lv8-mens-shoes-863lmJ.png',
        color: 'green',
      },
      {
        img: './images/air-force-1-07-lv8-mens-shoes-khpfrj.png',
        color: 'rgb(250,240,240)',
      },
      {
        img: './images/air-force-1-07-lx-womens-shoes-HCBg9w.png',
        color: 'orange',
      },
    ],
    category: ['lifestyle'],
  },
  {
    id: 2,
    name: 'air jordan elevate',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam eligendi adipisci et? Eius a vero assumenda cumque laborum ea!`,
    price: 45,
    rating: 4.5,
    size: [35, 36, 37, 39, 40],
    images: [
      {
        img: './images/air-jordan-1-elevate-low-se-womens-shoes-1W20F7.png',
        color: 'blue',
      },
      {
        img: './images/air-jordan-1-elevate-low-womens-shoes-xwrlfj.png',
        color: 'rgb(255, 255, 230)',
      },
    ],
    category: ['lifestyle'],
  },
  {
    id: 3,
    name: 'air jordan low',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam eligendi adipisci et? Eius a vero assumenda cumque laborum ea!`,
    price: 30,
    rating: 4.5,
    size: [35, 36, 37, 39, 40],
    images: [
      {
        img: './images/air-jordan-1-low-g-golf-shoes-jChrQ3.png',
        color: 'blue',
      },
      {
        img: './images/air-jordan-1-low-mens-shoes-6jlL02.png',
        color: 'yellow',
      },
      {
        img: './images/air-jordan-1-low-mens-shoes-VFfpkV.png',
        color: 'black',
      },
    ],
    category: ['lifestyle'],
  },
  {
    id: 4,
    name: 'air jordan mid',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam eligendi adipisci et? Eius a vero assumenda cumque laborum ea!`,
    price: 52,
    rating: 4.5,
    size: [33, 34, 35, 36, 37, 39, 40],
    images: [
      { img: './images/air-jordan-1-mid-shoes-M2KS6n.png', color: 'black' },
      { img: './images/air-jordan-1-mid-shoes-PCCmCV.png', color: 'red' },
      {
        img: './images/air-jordan-1-mid-womens-shoes-Fr9FP3.png',
        color: 'green',
      },
    ],
    category: ['lifestyle'],
  },
  {
    id: 5,
    name: 'air jordan retro',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam eligendi adipisci et? Eius a vero assumenda cumque laborum ea!`,
    price: 55,
    rating: 4.5,
    size: [33, 34, 35, 36, 37],
    images: [
      {
        img: './images/air-jordan-5-retro-green-bean-mens-shoes-Wk1qF1.png',
        color: 'gray',
      },
      {
        img: './images/air-jordan-6-retro-big-kids-shoes-wfks32.png',
        color: 'rgb(200,200,200)',
      },
      {
        img: './images/air-jordan-7-retro-mens-shoes-7Zr804.png',
        color: 'black',
      },
    ],
    category: ['lifestyle'],
  },
  {
    id: 6,
    name: 'air jordan xxxvii',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam eligendi adipisci et? Eius a vero assumenda cumque laborum ea!`,
    price: 55,
    rating: 4.5,
    size: [33, 34, 35, 36, 37],
    images: [
      {
        img: './images/air-jordan-xxxvii-mens-basketball-shoes-R3RNkZ.png',
        color: 'rgb(200,200,200)',
      },
    ],
    category: ['lifestyle'],
  },
  {
    id: 7,
    name: 'air jordan xxxvi',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam eligendi adipisci et? Eius a vero assumenda cumque laborum ea!`,
    price: 60,
    rating: 4.5,
    size: [33, 34, 35, 36, 37],
    images: [
      {
        img: './images/air-jordan-xxxvi-low-mens-basketball-shoes-LgcvQl.png',
        color: 'rgb(30,30,30)',
      },
      {
        img: './images/air-jordan-xxxvi-tatum-mens-basketball-shoes-0jD1F6.png',
        color: 'black',
      },
      {
        img: './images/air-jordan-7-retro-mens-shoes-7Zr804.png',
        color: 'black',
      },
    ],
    category: ['shoe'],
  },
  {
    id: 8,
    name: 'air max futura',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam eligendi adipisci et? Eius a vero assumenda cumque laborum ea!`,
    price: 50,
    rating: 4.5,
    size: [33, 34, 35, 36, 37],
    images: [
      {
        img: './images/air-max-90-futura-womens-shoes-RfwMwQ.png',
        color: 'white',
      },
    ],
    category: ['shoe'],
  },
  {
    id: 9,
    name: 'air max golf',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam eligendi adipisci et? Eius a vero assumenda cumque laborum ea!`,
    price: 50,
    rating: 4.5,
    size: [33, 34, 35, 36, 37],
    images: [
      {
        img: './images/air-max-90-g-golf-shoe-hxtVmz.png',
        color: 'white',
      },
    ],
    category: ['shoe'],
  },
  {
    id: 10,
    name: 'air max ltr',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam eligendi adipisci et? Eius a vero assumenda cumque laborum ea!`,
    price: 50,
    rating: 4.5,
    size: [33, 34, 35, 36, 37],
    images: [
      {
        img: './images/air-max-90-ltr-big-kids-shoes-1wzwJM.png',
        color: 'white',
      },
      {
        img: './images/air-max-90-ltr-little-kids-shoes-1DZRJ1.png',
        color: 'gray',
      },
    ],
    category: ['shoe'],
  },
  {
    id: 11,
    name: 'air max slide',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam eligendi adipisci et? Eius a vero assumenda cumque laborum ea!`,
    price: 30,
    rating: 4.5,
    size: [33, 34, 35, 36, 37],
    images: [
      {
        img: './images/air-max-90-slides-ch384n.png',
        color: 'black',
      },
    ],
    category: ['slide'],
  },
  {
    id: 12,
    name: 'air max 270',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam eligendi adipisci et? Eius a vero assumenda cumque laborum ea!`,
    price: 30,
    rating: 4.5,
    size: [33, 34, 35, 36, 37],
    images: [
      {
        img: './images/air-max-270-mens-shoes-KkLcGR.png',
        color: 'gray',
      },
      {
        img: './images/air-max-270-womens-shoes-Pgb94t.png',
        color: 'rgb(220,220,220)',
      },
    ],
    category: ['shoe'],
  },
  {
    id: 13,
    name: 'air max 97',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam eligendi adipisci et? Eius a vero assumenda cumque laborum ea!`,
    price: 30,
    rating: 4.5,
    size: [33, 34, 35, 36, 37],
    images: [
      {
        img: './images/air-max-97-se-mens-shoes-6xRN2b.png',
        color: 'green',
      },
      {
        img: './images/air-max-97-womens-shoes-Fr6rM4.png',
        color: 'pink',
      },
    ],
    category: ['shoe'],
  },
  {
    id: 14,
    name: 'air max bliss',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam eligendi adipisci et? Eius a vero assumenda cumque laborum ea!`,
    price: 30,
    rating: 4.5,
    size: [33, 34, 35, 36, 37],
    images: [
      {
        img: './images/air-max-bliss-womens-shoes-rJ0q5H.png',
        color: 'rgb(200,200,200)',
      },
    ],
    category: ['shoe'],
  },
  {
    id: 15,
    name: 'air max bolt',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam eligendi adipisci et? Eius a vero assumenda cumque laborum ea!`,
    price: 30,
    rating: 4.5,
    size: [33, 34, 35, 36, 37],
    images: [
      {
        img: './images/air-max-bolt-womens-shoes-WSLhlr.png',
        color: 'black',
      },
    ],
    category: ['shoe'],
  },
  {
    id: 16,
    name: 'air max genome',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam eligendi adipisci et? Eius a vero assumenda cumque laborum ea!`,
    price: 30,
    rating: 4.5,
    size: [33, 34, 35, 36, 37],
    images: [
      {
        img: './images/air-max-genome-mens-shoes-f4SHr3.png',
        color: 'black',
      },
    ],
    category: ['shoe'],
  },
  {
    id: 17,
    name: 'air max impact',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam eligendi adipisci et? Eius a vero assumenda cumque laborum ea!`,
    price: 30,
    rating: 4.5,
    size: [33, 34, 35, 36, 37],
    images: [
      {
        img: './images/air-max-impact-3-basketball-shoe-0DwcSG.png',
        color: 'black',
      },
    ],
    category: ['shoe'],
  },
  {
    id: 18,
    name: 'air max plus',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam eligendi adipisci et? Eius a vero assumenda cumque laborum ea!`,
    price: 30,
    rating: 4.5,
    size: [33, 34, 35, 36, 37],
    images: [
      {
        img: './images/air-max-plus-mens-shoes-x9G2xF.png',
        color: 'black',
      },
    ],
    category: ['shoe'],
  },
  {
    id: 19,
    name: 'air vapormax',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam eligendi adipisci et? Eius a vero assumenda cumque laborum ea!`,
    price: 30,
    rating: 4.5,
    size: [33, 34, 35, 36, 37],
    images: [
      {
        img: './images/air-vapormax-2021-flyknit-womens-shoes-1WB8SL.png',
        color: 'pink',
      },
      {
        img: './images/air-vapormax-plus-mens-shoes-nC0dzF.png',
        color: 'blue',
      },
    ],
    category: ['shoe'],
  },
  {
    id: 20,
    name: 'dunk high retro',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam eligendi adipisci et? Eius a vero assumenda cumque laborum ea!`,
    price: 30,
    rating: 4.5,
    size: [33, 34, 35, 36, 37],
    images: [
      {
        img: './images/dunk-high-retro-mens-shoe-PMHZKK.png',
        color: 'yellow',
      },
    ],
    category: ['shoe'],
  },
];
export { sneakerData };

//  Hardcore Backend plus Actual Displaying of the VideoCards as in grids through iterating from all available videos.

export interface Video {
    title: string,
    thumbnail:string,
    image: string,
    author: string,
    views: string,
    timestamp: string
}


export const VIDEOS: Video[] = [{
    title: "Bollywood's Sexy Star - Kartik Aaryan On Pyaar, Bollywood Aur Zindagi | TRS हिंदी 275",
    thumbnail: "/kartik.png",
    image: 'ranIcon.jpg',
    author: 'Ranveer Allahabadia',
    views: '1.3M views',
    timestamp: '3 days ago'
},{
    title: "ITTEFAQ - OAFF | Savera | Siddhant Chaturvedi | Wamiqa Gabbi | Anshul Garg",
    thumbnail: "/ittefak.png",
    image: 'ranIcon.jpg',
    author: 'Play DMF',
    views: '5.16M views',
    timestamp: '7 days ago'
},{
    title: "Tainu Khabar Nahi - Arijit Singh | Munjya | Sharvari, Abhay Verma| Sachin-Jigar,Amitabh Bhattacharya",
    thumbnail: "/taras.png",
    image: 'ranIcon.jpg',
    author: 'Zee Studios',
    views: '4M views',
    timestamp: '2 days ago'
},{
    title: "Farzi Artist And His Biggest CHASE ft. Shahid Kapoor, Vijay Sethupathi, Raashii Khanna",
    thumbnail: "/munjya.png",
    image: 'ranIcon.jpg',
    author: 'Prime Video India',
    views: '1M views',
    timestamp: '4 days ago'
},{
    title: "Farha & Anil kapoor Play Sunil Grover’s OLDEST Game🤭😂 | #TheGreatIndianKapilShow | Netflix India",
    thumbnail: "/anilkapoor.png",
    image: 'ranIcon.jpg',
    author: 'Kapil Sharma',
    views: '1.5M views',
    timestamp: '8 days ago'
},{
    title: "Prabhas & Anil Kapoor Play Sunil Grover’s OLDEST Game | #KALKI",
    thumbnail: "/kalki.png",
    image: 'ranIcon.jpg',
    author: 'Entertainment',
    views: '1.5M views',
    timestamp: '5 days ago'
},{
    title: "Munjya | #TheGreatIndianKapilShow | Netflix India",
    thumbnail: "/munjya.png",
    image: 'ranIcon.jpg',
    author: 'NRF',
    views: '2M views',
    timestamp: '10 days ago'
},{
    title: "Rajkummar Hirani | Netflix India",
    thumbnail: "/idiots.png",
    image: 'ranIcon.jpg',
    author: 'Kapil Sharma',
    views: '3M views',
    timestamp: '8 days ago'
}]

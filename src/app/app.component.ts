import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'facebook';

yourshorts: {img:string; title:string}[]=[
  {
    img:"https://i.postimg.cc/3JHVf7vG/shortcut-1.png",
    title:"Concert",
  },
  {
    img:"https://i.postimg.cc/rFCbvb1P/shortcut-2.png",
    title:"Singing",
  },
  {
    img:"https://i.postimg.cc/0yk3xfZ2/shortcut-3.png",
    title:"Tour",
  },
  {
    img:"https://i.postimg.cc/Z5wQqdDP/shortcut-4.png",
    title:"films",
  }
]


conversation: {img1:string; fname:string;lname:string}[]=[
  {
    img1:"https://i.postimg.cc/XNPtfdVs/member-1.png",
    fname:"Arijit",
    lname:"Singh",
  },
  {
    img1:"https://i.postimg.cc/4NhqByys/member-2.png",
    fname:"Sonu",
    lname:"Nigam",
  },
  {
    img1:"https://i.postimg.cc/FH5qqvkc/member-3.png",
    fname:"Alka",
    lname:"Yagnik",
  },
  {
    img1:"https://i.postimg.cc/Sx65bPcP/member-4.png",
    fname:"Mohit",
    lname:"Chavhan"
  }
]
  
event: {day:number;month:string;title:string;location:string;moreInfo:string}[]= [
  { day: 30, month: 'May', title: 'Social ', location: 'Willson Tech Park', moreInfo: '#' },
  { day: 13, month: 'June', title: 'Mobile', location: 'Willson Tech Park', moreInfo: '#' }
  // Add more events as needed
];


story: {img:string; name:string}[]=[
  {
    img:"https://i.postimg.cc/TPh453Zz/upload.png",
    name:"Shreya",
  },
  {
    img:"https://i.postimg.cc/XNPtfdVs/member-1.png",
    name:"Arijit",
  },
  {
    img:"https://i.postimg.cc/4NhqByys/member-2.png",
    name:"Sonu",
  },
  {
    img:"https://i.postimg.cc/FH5qqvkc/member-3.png",
    name:"Alka",
  },
  {
    img:"https://i.postimg.cc/Sx65bPcP/member-4.png",
    name:"Mohit",
  }
]

post: {profile_imageurl:string;profile_fname:string;profile_lname:string;timestamp:string,caption:string;image_url:string;like:string;comment:string,share:string}[]=[
  {
    profile_imageurl:"https://upload.wikimedia.org/wikipedia/commons/b/bd/Shreya_Ghoshal_at_Filmfare_Awards_South.jpg",
    profile_fname:"Shreya",
    profile_lname:"Ghoshal",
    timestamp:"June 24 2021, 13:40 pm",
    caption:"Subscribe -Youtube Channel to watch more videos on ",
    image_url:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/12/arijit-singh-fans-injured-blast-his-concert-management-team-8000-people-one-exit-gate-waterlogged-potholes-01.jpg",
    like:"23",
    comment:"90",
    share:"89",
  },
  {
    profile_imageurl:"https://upload.wikimedia.org/wikipedia/commons/b/bd/Shreya_Ghoshal_at_Filmfare_Awards_South.jpg",
    profile_fname:"Shreya",
    profile_lname:"Ghoshal",
    timestamp:"June 24 2021, 13:40 pm",
    caption:"Subscribe -Youtube Channel to watch more videos on ",
    image_url:"https://media.gettyimages.com/id/170974418/photo/sonu-nigam.jpg?s=612x612&w=gi&k=20&c=7uJIbyUNXkaOoEOIKv-F7STuYBuDzo8TL6DzPHoJLxE=",
    like:"23",
    comment:"90",
    share:"89",
  },
  {
    profile_imageurl:"https://upload.wikimedia.org/wikipedia/commons/b/bd/Shreya_Ghoshal_at_Filmfare_Awards_South.jpg",
    profile_fname:"Shreya",
    profile_lname:"Ghoshal",
    timestamp:"June 24 2021, 13:40 pm",
    caption:"Subscribe -Youtube Channel to watch more videos on ",
    image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7ErLbuKMX3Vof_xQbKjTEnNvJz6b9alI3g&usqp=CAU",
    like:"23",
    comment:"90",
    share:"89",
  },
  {
    profile_imageurl:"https://upload.wikimedia.org/wikipedia/commons/b/bd/Shreya_Ghoshal_at_Filmfare_Awards_South.jpg",
    profile_fname:"Shreya",
    profile_lname:"Ghoshal",
    timestamp:"June 24 2021, 13:40 pm",
    caption:"Subscribe -Youtube Channel to watch more videos on ",
    image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQeHoMYVyq9xiXAcefM1R7podv1kBUHbL-3Q&usqp=CAU",
    like:"23",
    comment:"90",
    share:"89",
  },
  {
    profile_imageurl:"https://upload.wikimedia.org/wikipedia/commons/b/bd/Shreya_Ghoshal_at_Filmfare_Awards_South.jpg",
    profile_fname:"Shreya",
    profile_lname:"Ghoshal",
    timestamp:"June 24 2021, 13:40 pm",
    caption:"Subscribe -Youtube Channel to watch more videos on ",
    image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNG_Kz0q1Vg6hSxyjOHWMwl4NS241RjkgvGGhrkE2agZ6OnOkZSpuWSihvqA&s",
    like:"23",
    comment:"90",
    share:"89",
    
  }
]
}


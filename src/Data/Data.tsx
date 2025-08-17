



type Categore={
    name:string,
    id:number,
    OnClick:string
}

export const Categories:Categore[]=[
{
name:"All",
id:0,
OnClick:"#"
},
   { 
    name:"All Departments",
    id:1,
    OnClick:"#"

    },
{
        name:"Arts & Crafts",
        id:2,
        OnClick:"#"
    },

{
        name:"Automotive",
        id:3,
        OnClick:"#"
    },
{ 
    name:"Baby",
    id:4,
    OnClick:"#"
},
    {
        name:"Beauty & Personal Care",
        id:5,
        OnClick:"#"
 },

   { 
    name:"Books",
    id:6,
    OnClick:"#"
},
   { 
    name:"Boy's Fashion",
    id:7,
    OnClick:"#"

},
   {
    name: "Computer",
    id:8,
    OnClick:"#"
},
  {  
    name:"Deals",
    id:9,
    OnClick:"#"
},
  {  
   name: "Digital Music",
   id:10,
   OnClick:"#"
},
   { 
    name:"Electronic",
    id:11,
    OnClick:"#"
},
   { 
    name:"Girl's Fashion",
    id:12,
    OnClick:"#"
},
   { 
    name:"Health & Household",
    id:13,
    OnClick:"#"
},
    {
       name: "Home & Kitchen",
       id:14,
       OnClick:"#"
    },
   {

     name:"Kindle Store",
     id:15,
     OnClick:"#"
    },
  {  
    name:"Language",
    id:16,
    OnClick:"#"
},
    {
       name: "Men's Fashion",
       id:17,
       OnClick:"#"
    },
    {
      name:  "Movies & TV",
      id:18,
      OnClick:"#"
    },
  { 
     name:" Music,CDs & Vinyl",
     id:19,
     OnClick:"#"
    },
    {
       name: "pet Suppplies",
       id:20,
       OnClick:"3"
    },
   { 
   name: "Prime video",
   id:21,
   OnClick:"#"
},
    {
       name: "Sports & Outdoors",
       id:22,
       OnClick:"#"
    },

]
// end of the Catagories


// Start of Languages

type Language={
    name:string;
    code:string;
};

type Currency={
    symbol:string;
    code:string;
    name:string;
};

  export const languages: Language[] = [

    { name: 'English', code: 'EN' },
    { name: 'Español', code: 'ES' },
    { name: 'العربية', code: 'AR' },
    { name: 'Deutsch', code: 'DE' },
    { name: 'עברית', code: 'HE' },
    { name: '한국어', code: 'KO' },
    { name: 'Português', code: 'PT' },
    { name: '中文 (简体)', code: 'ZH' },
    { name: '中文 (繁體)', code: 'ZH' }
  ];

  export const currencies: Currency[] = [

    { symbol: '$', code: 'USD', name: 'US Dollar' },
    { symbol: '€', code: 'EUR', name: 'Euro' },
    { symbol: '£', code: 'GBP', name: 'British Pound' },
    { symbol: '¥', code: 'JPY', name: 'Japanese Yen' }
  ];

  // end of the language section


  // Start the Sign in section
  type Accounts={
    id:number;
    name:string;
    onClick:string;
  }


  export const accounts:Accounts[]=[
    {
      id:1,
      name:"Account",
      onClick:"#"
    },
     {
      id:2,
      name:"Orders",
      onClick:"#"
    },
     {
      id:3,
      name:"Recommendations",
      onClick:"#"
    },
     {
      id:4,
      name:"Browsing History",
      onClick:"#"
    },
     {
      id:5,
      name:"Watchlist",
      onClick:"#"
    },
     {
      id:6,
      name:"Vedio & Rentals",
      onClick:"#"
    },
     {
      id:7,
      name:"Kidle Unlimited",
      onClick:"#"
    },
     {
      id:8,
      name:"Content & Devices",
      onClick:"#"
    },
     {
      id:9,
      name:"Subscribe & Save Items",
      onClick:"#"
    },
     {
      id:10,
      name:"MemberShip & Subscription",
      onClick:"#"
    },
     {
      id:11,
      name:"Music Library",
      onClick:"#"
    },
    

  ]

  // end of the account section

  // start of the  yourlists section

  type Lists={
    id:number;
    name:string;
    onClick:string;
  }

  export const lists:Lists[]=[
    {
      id:1,
      name:"Create_List",
      onClick:"#"
    },
{
      id:2,
      name:"Find_list",
      onClick:"#"
    },
    {
      id:3,
      name:"Registry",
      onClick:"#"
    },    

  ]

  // end 

  //  the Sidebarmenu Categories

  type DigitalMenu={
    name:string;
    id:number;
  }

  export const DigitalMenuData:DigitalMenu[]=[
    {
      name:"Prime Video",
      id:1,
    },

     {
      name:"Amazon Music",
      id:2,
    },
     {
      name:"Kindle E-readers",
      id:3,
    },
    {
      name:"Amazon Appstore",
      id:4,
    }

  ]

  type ShopByDepartemnt={
    name:string;
    id:number;
  }

  export const ShopByDepartemnts:ShopByDepartemnt[]=[
     {
      name:"Electronics",
      id:1,
    },

     {
      name:" Computers",
      id:2,
    },
     {
      name:"Smart Home",
      id:3,
    },
    {
      name:"Arts & Crafts",
      id:4,
    }
  ];

    type Program={
    name:string;
    id:number;
  }

  export const ProgramAndFeatures:Program[]=[
     {
      name:"Gift Cards",
      id:1,
    },

     {
      name:" Shop By Internet",
      id:2,
    },
     {
      name:"Amazon Live",
      id:3,
    },
    {
      name:"International Shopping",
      id:4,
    }
  ];

   type HelpAndSetting={
    name:string;
    id:number;
  }

  export const HelpAndSettings:HelpAndSetting[]=[
     {
      name:"your Account",
      id:1,
    },

     {
      name:"English",
      id:2,
    },
     {
      name:"United State",
      id:3,
    },
    {
      name:" Customer Service",
      id:4,
    }
  ]


  // end 


  // the navbar in the second header

  type NavBar={
    name:string;
    id:number;
    onClick:string;
  }

  export const Navbar:NavBar[]=[
    {
      name:"Today`s Deals",
      id:1,
      onClick:"#"
    },
     {
      name:"Registry",
      id:2,
      onClick:"#"
    },
     {
      name:"Prime Video",
      id:3,
      onClick:"#"
    },
     {
      name:"Gift Crafts",
      id:4,
      onClick:"#"
    },
     {
      name:"Customer sevice",
      id:5,
      onClick:"#"
    },
     {
      name:"Sell",
      id:6,
      onClick:"#"
    },
  ];

  // end of the navbar in the second header

  // the background images section



  export const BackgroundImages=[
  
      "../../images/bg1.jpg",
   
      "../../images/bg2.jpg",
  
      "../../images/bg3.jpg",
   
      "../../images/bg4.jpg",
  
  ]


  // the  All Of Project Images  sections

  type AllOfProjectImages={
    name:string ;
    id:number;
    src:string;
  }

//  the home images section
  export const HomeImages:AllOfProjectImages[]=[
    {
    name:"Cleaning Tools",
    id:1,
    src:"../../images/products/CleaningTool_1x._SY116_CB563137408_.jpg",
    },
     {
    name:" Home storage",
    id:2,
    src:"../../images/products/HomeStorage_1x._SY116_CB563137408_.jpg",
    },
     {
    name:"Home Decor",
    id:3,
    src:"../../images/products/HomeDecor_1x._SY116_CB563137408_.jpg",
    },
     {
    name:"Bedding",
    id:4,
    src:"../../images/products/Bedding_1x._SY116_CB563137408_.jpg",
    },
  ];

  // the Game image section 
  export const GameImages:AllOfProjectImages[]=[
    {
      name:"Gamming",
      id:1,
      src:"../../images/products/Gaming.jpg"
    },
 
  ];

  // the trends image section
  export const TrendsImages:AllOfProjectImages[]=[
    {name:"Dresses",
      id:1,
      src:"../../images/products/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg"
    },
    {
      name:"Knits",
      id:2,
      src:"../../images/products/Knits.jpg"
    },
     {
      name:"Jackets",
      id:3,
      src:"../../images/products/Jackets.jpg"
    },
     {
      name:"Jewelry",
      id:4,
      src:"../../images/products/Jewelry.jpg"
    },
    
  ];
//  the new home arrivals section
  export const NewHomeArrivals:AllOfProjectImages[]=[
    {
      name:"Kitchen & Dining",
      id:1,
      src:"../../images/products/Kicthen&Dining.jpg"
    },
       {
      name:"Home Improvement",
      id:2,
      src:"../../images/products/Home_Improvement.jpg"
    },
       {
      name:"Decor",
      id:3,
      src:"../../images/products/Home_decor.jpg"
    },
       {
      name:"Bedding & Bath",
      id:4,
      src:"../../images/products/Kicthen&Dining.jpg"
    },
  ];

  // the cagegories in the kitchen section

   export const CategoriesInKitchen:AllOfProjectImages[]=[
    {
      name:"Cooker",
      id:1,
      src:"../../images/products/Cooker.jpg"
    },
     {
      name:"Coffee",
      id:2,
      src:"../../images/products/Coffee.jpg"
    },
     {
      name:"post and pans",
      id:3,
      src:"../../images/products/post and pans.jpg"
    },
     {
      name:"Kettles",
      id:4,
      src:"../../images/products/Kettlen.jpg"
    },
  ];

  // the school section

   export const SchoolAssentials:AllOfProjectImages[]=[
    {
      name:"Backpacks",
      id:1,
      src:"../../images/products/backpack.jpg"
    },
       {
      name:"Electronics",
      id:2,
      src:"../../images/products/Electronics_.jpg"
    },
       {
      name:"Stationery",
      id:3,
      src:"../../images/products/Stationery_.jpg"
    },
       {
      name:"Fashion",
      id:4,
      src:"../../images/products/Fashion_.jpg"
    },
  ];


  // the refresh section
  export const RefreshImages:AllOfProjectImages[]=[
    {
      name:"Dining",
      id:1,
      src:"../../images/products/Dining.jpg"
    },
    {
      name:"Home",
      id:2,
      src:"../../images/products/Home.jpg"
    },
    {
      name:"Kitchen",
      id:3,
      src:"../../images/products/Kitchen.jpg"
    },
    {
      name:"Health and Beauty",
      id:4,
      src:"../../images/products/Health & Beauty.jpg"
    },
  ];

 
// the grad section
 

  export const GradeImage:AllOfProjectImages[]=[
    {
      name:"every grade",
      id:1,
      src:"../../images/products/SingleImage_.jpg"
    }
  ];



  // the fun with family section

  export const FunWithFamily:AllOfProjectImages[]=[

    {
      name:"Outdoor play Sets",
      id:1,
      src:"../../images/products/fm1.jpg"
    },
      {
      name:"Learnin Toys",
      id:2,
      src:"../../images/products/fm2.jpg"
    },
      {
      name:"Prented Play Toys",
      id:3,
      src:"../../images/products/fm3.jpg"
    },
      {
      name:"Action Figures",
      id:4,
      src:"../../images/products/fm4.jpg"
    },
  ];

  // the toys for all section
  export const ToysForAll:AllOfProjectImages[]=[
    {
      name:"Ride on's",
      id:1,
      src:"../../images/products/ts1.jpg"
    },
    {
      name:"Dolls & Doll House",
      id:2,
      src:"../../images/products/ts2.jpg"
    },
    {
      name:"Swimming pools",
      id:3,
      src:"../../images/products/ts3.jpg"
    },
    {
      name:"Building ",
      id:4,
      src:"../../images/products/ts4.jpg"
    },
  ];

  // the gear up get fit section
  export const GearUpGetFit:AllOfProjectImages[]=[
    {
      name:"Clothing",
      id:1,
      src:"../../images/products/gf1.jpg"
    },
      {
      name:"Deals",
      id:2,
      src:"../../images/products/gf2.jpg"
    },
      {
      name:"Equipment",
      id:3,
      src:"../../images/products/gf3.jpg"
    },
      {
      name:"Trackers",
      id:4,
      src:"../../images/products/gf4.jpg"
    },
  ];


  // the beauty routine section
 export const BeautyRoutine:AllOfProjectImages[]=[
    {
      name:"MakeUp",
      id:1,
      src:"../../images/products/bu1.jpg"
    },
      {
      name:"Sponges",
      id:2,
      src:"../../images/products/bu2.jpg"
    },
      {
      name:"Brushes",
      id:3,
      src:"../../images/products/bu3.jpg"
    },
      {
      name:"Mirrors",
      id:4,
      src:"../../images/products/bu4.jpg"
    },
  ];


  // the wireless images section

export const WirelessImages:AllOfProjectImages[]=[
     {
      name:"SmartPhones",
      id:1,
      src:"../../images/products/wire3.jpg"
    },
      {
      name:"Watches",
      id:2,
      src:"../../images/products/wire2.jpg"
    },
      {
      name:"Headphones",
      id:3,
      src:"../../images/products/wire1.jpg"
    },
      {
      name:"Tablets",
      id:4,
      src:"../../images/products/wire4.jpg"
    },
];

// 
export const GamingMerchandise:AllOfProjectImages[]=[
     {
      name:"Apparel",
      id:1,
      src:"../../images/products/mer4.jpg"
    },
      {
      name:"Hats",
      id:2,
      src:"../../images/products/mer1.jpg"
    },
      {
      name:"Action figures",
      id:3,
      src:"../../images/products/mer2.jpg"
    },
      {
      name:"Mugs",
      id:4,
      src:"../../images/products/mer3.jpg"
    },
];

// the pc images section

export const PCsImages:AllOfProjectImages[]=[
     {
      name:"Laptop",
      id:1,
      src:"../../images/products/pc1.jpg"
    },
      {
      name:"PCs",
      id:2,
      src:"../../images/products/pcs.jpg"
    },
      {
      name:"Hard Drives",
      id:3,
      src:"../../images/products/pcD.jpg"
    },
      {
      name:"Monitors",
      id:4,
      src:"../../images/products/pc2.jpg"
    },
];


// the Deals on top  section

export const DealsTopImages:AllOfProjectImages[]=[
     {
      name:"Books",
      id:1,
      src:"../../images/products/de1.jpg"
    },
      {
      name:"Fashion",
      id:2,
      src:"../../images/products/de2.jpg"
    },
      {
      name:"PC",
      id:3,
      src:"../../images/products/de3.jpg"
    },
      {
      name:"Beauty",
      id:4,
      src:"../../images/products/de4.jpg"
    },
];


// the most loved section

export const MostLovedImages:AllOfProjectImages[]=[
     {
      name:"Women",
      id:1,
      src:"../../images/products/watch1.jpg"
    },
      {
      name:"Men",
      id:2,
      src:"../../images/products/watch2.jpg"
    },
      {
      name:"Girls",
      id:3,
      src:"../../images/products/watch3.jpg"
    },
      {
      name:"Boys",
      id:4,
      src:"../../images/products/watch4.jpg"
    },
];

// the find for home section

export const FindForHomeImages:AllOfProjectImages[]=[
     {
      name:"Kitchen",
      id:1,
      src:"../../images/products/fm2.jpg"
    },
      {
      name:"Home decor",
      id:2,
      src:"../../images/products/fm1.jpg"
    },
      {
      name:"Dining",
      id:3,
      src:"../../images/products/fm4.jpg"
    },
      {
      name:"Smart Home",
      id:4,
      src:"../../images/products/fm3.jpg"
    },
];

// the electronics section

export const ElectronicsImages:AllOfProjectImages[]=[
     {
      name:"HeadPhones",
      id:1,
      src:"../../images/products/elc1.jpg"
    },
      {
      name:"Tablets",
      id:2,
      src:"../../images/products/elc2.jpg"
    },
      {
      name:"Gaming",
      id:3,
      src:"../../images/products/elc3.jpg"
    },
      {
      name:"Speakers",
      id:4,
      src:"../../images/products/elc4.jpg"
    },
];

// the level up gaming section

export const LevelUpGamingImages:AllOfProjectImages[]=[
     {
      name:"PC gaming",
      id:1,
      src:"../../images/products/gm2.jpg"
    },
      {
      name:"Xbox",
      id:2,
      src:"../../images/products/gm1.jpg"
    },
      {
      name:"PlayStation",
      id:3,
      src:"../../images/products/gm3.jpg"
    },
      {
      name:"Nintendo",
      id:4,
      src:"../../images/products/gm4.jpg"
    },
];
  // the top sellers books section

type TopSellerBook={
    name?:string ;
    id:number;
    src:string;
  }

  export const TopSellerBooks:TopSellerBook[]=[

    {
      id:1,
      src:"../../images/products/61-66t0NIpL._AC_SY200_.jpg"
    },
    {
      id:2,
      src:"../../images/products/610XOhXdNeL._AC_SY200_.jpg"
    },
    {
      id:3,
      src:"../../images/products/618pdHFf5wL._AC_SY200_.jpg"
    },
    {
      id:4,
      src:"../../images/products/61C9wxfYE3L._AC_SY200_.jpg"
    },
    {
      id:5,
      src:"../../images/products/61lATg9oucL._AC_SY200_.jpg"
    },
    {
      id:6,
      src:"../../images/products/61QeLxb+54L._AC_SY200_.jpg"
    },
    {
      id:7,
      src:"../../images/products/61LbsdvXxcL._AC_SY200_.jpg"
    },
    {
      id:8,
      src:"../../images/products/61OLaPhd3CL._AC_SY200_.jpg"
    },
    {
      id:9,
      src:"../../images/products/61QI-WEm9ZL._AC_SY200_.jpg"
    },
    {
      id:10,
      src:"../../images/products/61STKZcryUL._AC_SY200_.jpg"
    },
    {
      id:11,
      src:"../../images/products/61szx0zQg9L._AC_SY200_.jpg"
    },
    {
      id:12,
      src:"../../images/products/bssd.jpg"
    },
    {
      id:13,
      src:"../../images/products/bsvc.jpg"
    },

    {
      id:14,
      src:"../../images/products/bsxc.jpg"
    },
    {
      id:15,
      src:"../../images/products/bs4.jpg"
    },
    {
      id:16,
      src:"../../images/products/bss.jpg"
    },
    {
      id:17,
      src:"../../images/products/bs3.jpg"
    },
    {
      id:18,
      src:"../../images/products/bscd.jpg"
    },
    {
      id:19,
      src:"../../images/products/bss.jpg"
    },
    {
      id:20,
      src:"../../images/products/bs1.jpg"
    },
  ];

  
  export const BestSellersBooks:TopSellerBook[]=[

   
    {
      id:2,
      src:"../../images/products/bs1.jpg"
    },
    {
      id:3,
      src:"../../images/products/bs2.jpg"
    },
    {
      id:4,
      src:"../../images/products/bs3.jpg"
    },
    {
      id:5,
      src:"../../images/products/bs33.jpg"
    },
    {
      id:6,
      src:"../../images/products/bs4.jpg"
    },
    {
      id:7,
      src:"../../images/products/bscd.jpg"
    },
    {
      id:8,
      src:"../../images/products/bsdc.jpg"
    },
    {
      id:9,
      src:"../../images/products/bss.jpg"
    },
    {
      id:10,
      src:"../../images/products/bssd.jpg"
    },
    {
      id:11,
      src:"../../images/products/bsvc.jpg"
    },
    {
      id:12,
      src:"../../images/products/bsxc.jpg"
    },
    {
      id:13,
      src:"../../images/products/712LwTjgL2L._AC_SY200_.jpg"
    },

    {
      id:14,
      src:"../../images/products/715UtkZBJdL._AC_SY200_.jpg"
    },
    {
      id:15,
      src:"../../images/products/716EU7ItaUL._AC_SY200_.jpg"
    },
  
    {
      id:17,
      src:"../../images/products/716MU3GOvJL._AC_SY200_.jpg"
    },
   
    {
      id:19,
      src:"../../images/products/61-66t0NIpL._AC_SY200_.jpg"
    },
    {
      id:20,
      src:"../../images/products/71AcSZDaWcL._AC_SY200_.jpg"
    },
  ];


  // the movies and tv section

  type Movies={
    name?:string;
    id:number;
    src:string;
  }

  export const MoviesAndTVData:Movies[]=[
 {
  id:1,
  src:'../../images/products/mv1.jpg',
 },
 {
  id:2,
  src:'../../images/products/mvaa.jpg',
 },
 {
  id:3,
  src:'../../images/products/mvbc.jpg',
 },
 {
  id:4,
  src:'../../images/products/mvbv.jpg',
 },
 {
  id:5,
  src:'../../images/products/mvc.jpg',
 },
 {
  id:6,
  src:'../../images/products/mvca.jpg',
 },
 {
  id:7,
  src:'../../images/products//mvcc.jpg',
 },
 {
  id:8,
  src:'../../images/products/mvcn.jpg',
 },
 {
  id:9,
  src:'../../images/products/mvcv.jpg',
 },
 {
  id:10,
  src:'../../images/products/mvcx.jpg',
 },
 {
  id:11,
  src:'../../images/products/mvcxx.jpg',
 },
 {
  id:12,
  src:'../../images/products/mvd.jpg',
 },
 {
  id:13,
  src:'../../images/products/mvm.jpg',
 },
 {
  id:14,
  src:'../../images/products/mvn.jpg',
 },
 {
  id:15,
  src:'../../images/products/mvv.jpg',
 },
 {
  id:16,
  src:'../../images/products/mvva.jpg',
 },
 {
  id:17,
  src:'../../images/products/mnv.jpg',
 },
 {
  id:18,
  src:'../../images/products/mvvm.jpg',
 },

  ];


  // the related items section

  type RelatedItems={
    name?:string;
    id:number;
    src:string;
  }

  export const RelatedItemsData:RelatedItems[]=[
    {
      id:1,
      src:"../../images/products/re1.jpg"
    },
    {
      id:2,
      src:"../../images/products/reeds.jpg"
    },
     {
      id:3,
      src:"../../images/products/reeew.jpg"
    },
     {
      id:4,
      src:"../../images/products/reel.jpg"
    },
     {
      id:5,
      src:"../../images/products/refr.jpg"
    },
     {
      id:6,
      src:"../../images/products/regf.jpg"
    },
     {
      id:7,
      src:"../../images/products/regt.jpg"
    },
     {
      id:8,
      src:"../../images/products/rel.jpg"
    },
     {
      id:9,
      src:"../../images/products/rell.jpg"
    },
     {
      id:10,
      src:"../../images/products/rels.jpg"
    },
     {
      id:11,
      src:"../../images/products/relsf.jpg"
    },
     {
      id:12,
      src:"../../images/products/rer.jpg"
    },
     {
      id:13,
      src:"../../images/products/ret.jpg"
    },
     {
      id:14,
      src:"../../images/products/retl.jpg"
    },
     {
      id:15,
      src:"../../images/products/retr.jpg"
    },
     {
      id:16,
      src:"../../images/products/rett.jpg"
    },
     {
      id:17,
      src:"../../images/products/rett.jpg"
    },
     {
      id:18,
      src:"../../images/products/rew.jpg"
    },
     {
      id:19,
      src:"../../images/products/reww.jpg"
    },
    
 {
      id:20,
      src:"../../images/products/rey.jpg"
    },
     {
      id:21,
      src:"../../images/products/rree.jpg"
    },
     {
      id:22,
      src:"../../images/products/rrel.jpg"
    },
  ];

  // the footer section

interface FooterLinks{
  name:string;
  id:number;
  href:string;
}

  export const FooterKnowUs:FooterLinks[]=[
    {
     name:"Careers",
     id:1,
     href:"#"
    },
     {
     name:"Blog",
     id:2,
     href:"#"
    },
     {
     name:"About Amazon",
     id:3,
     href:"#"
    },
     {
     name:"Investor Relation",
     id:4,
     href:"#"
    },
     {
     name:"Amazon Devices",
     id:5,
     href:"#"
    },
     {
     name:"Amazon Science",
     id:6,
     href:"#"
    },
  ];

    export const MakeMoney:FooterLinks[]=[
    {
     name:"Sell Products on Amazon",
     id:1,
     href:"#"
    },
     {
     name:"Sell on Amazon Business",
     id:2,
     href:"#"
    },
     {
     name:"Sell apps on Amazon",
     id:3,
     href:"#"
    },
     {
     name:"Become an Affiliate ",
     id:4,
     href:"#"
    },
     {
     name:"Advertise Your products",
     id:5,
     href:"#"
    },
     {
     name:"Self-publish with Us",
     id:6,
     href:"#"
    }, 
   
     

  ];

    export const AmazonPayment:FooterLinks[]=[
    {
     name:"Amazon Business Card",
     id:1,
     href:"#"
    },
     {
     name:"Shop with Points",
     id:2,
     href:"#"
    },
     {
     name:"Reload your Balance",
     id:3,
     href:"#"
    },
     {
     name:"Amazon Currency Converter",
     id:4,
     href:"#"
    },
    
  ];

    export const HelpYou:FooterLinks[]=[
    {
     name:"Amazon and CONCID-19",
     id:1,
     href:"#"
    },
     {
     name:"Your Account",
     id:2,
     href:"#"
    },
     {
     name:"Your Order",
     id:3,
     href:"#"
    },
     {
     name:"Shipping Rates",
     id:4,
     href:"#"
    },
     {
     name:"Return & Replacements ",
     id:5,
     href:"#"
    },
     {
     name:"Manage your Content ",
     id:6,
     href:"#"
    },
  ];
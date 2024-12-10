import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock5 from "../img/Branding_01.jpg"
import mock6 from "../img/Branding_02.jpg"
import mock7 from "../img/Branding_03.jpg"
import mock8 from "../img/Branding_04.jpg"
import mock9 from "../img/Branding_05.jpg"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 

This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Surbhi",
    lastName: "",
    initials: "Sd", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Graphic & Web Designer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        
        {
            emoji: '🌎',
            text: 'based in india'
        },
        {
            emoji: "💼",
            text: "Freelance Designer & Developer"
        },
        {
            emoji: "📧",
            text: "surbhivdesigner@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/surbhivdesigner",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/sur.designer",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://www.pinterest.co.uk/surbhivdesigner",
            icon: "fa fa-pinterest",
            label: 'github'
        },
        
        {
            link: "https://www.behance.net/surbhivdesigner",
            icon: "fa fa-behance",
            label: 'Behance'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio:  "Hello! I'm Surbhi. I Initially started in 2017 as a dedicated Graphics & Web Designer and took tiny steps through serving my clients with their brand identity logos designs, web designs, social media marketing and others.",
    skills:
        {
            proficientWith: ['UI/UX','Bootstrap', 'Wordpress','Javascript','Html5','CSS','PHP'],
            exposedTo: ['react js', 'Jquery','github']
        }
    ,
    hobbies: [
        {
            label: 'Adobe Illustrator',
           
        },
        {
            label: 'Adobe Photoshop',
           
        },
        {
            label: 'Coral Draw',
           
        },
        {
            label:  'Figma' ,
           
        },
        
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "DIGI Select",
            live: "https://digiselect.in/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            image: mock1
        },
        {
            title: "A&K Transformation Academy",
            live: "https://aktransformationacademy.com/",
            image: mock2
        },
        {
            title: "Skyangel",
            live: "https://skyangel.co.in/",
            image: mock3
        },
         {
            title: "DIGI Select",
            live: "https://digiselect.in/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            image: mock1
        },
        {
            title: "A&K Transformation Academy",
            live: "https://aktransformationacademy.com/",
            image: mock2
        },
        {
            title: "Skyangel",
            live: "https://skyangel.co.in/",
            image: mock3
        },
       
       
        
    ],
    branding: [ // This is where your Branding projects will be detailed
        {
            title: "SKY Angle",
            image: mock5
        },
        {
            title: "A&K Academy",
            image: mock6
        },
        {
            title: "Pragma Bolt",
            image: mock8
        },
        {
            title: "Leadership Academy",
            image: mock7
        },
        {
            title: "RPN Tech Solution",
            image: mock9
        },
        
    ]
}

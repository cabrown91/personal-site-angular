angular.module('Portfolio')
  .controller('cardsController', cardsController);

function cardsController(){
  var vm = this;
  vm.projectsList = [
    {
      project: "Racing Game",
      image: "assets/imgs/IMG_2163.jpeg",
      link: "http://quality-controller-commendation-38054.bitballoon.com/",
      description: "In-browser racing game. Technologies Used: HTML/CSS, Bootstrap, jQuery."
    },
    {
      project: "Music Venues App",
      image: "assets/imgs/venuesapp.jpg",
      link: 'http://stark-tundra-16200.herokuapp.com/',
      description: 'A platform for music lovers to log their favorite music venues, and comment on them. Technologies Used: JavaScript, jQuery, Ajax, HTML, CSS, SCSS, Foundation framework (css+sass), Node.js, Express, MongoDB, and Mongoose.'
    },
    {
      project: "Geoquakes (placeholder)",
      image: "assets/imgs/Screen Shot 2016-09-23 at 7.38.13 AM.png",
      link: 'https://cabrown91.github.io/Project0/',
      description: 'Placeholder for next project.'
    }
  ];
}

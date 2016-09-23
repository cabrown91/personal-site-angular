angular.module('Portfolio')
  .controller('cardsController', cardsController);

function cardsController(){
  var vm = this;
  vm.projectsList = [
    {
      project: "Racing Game",
      image: "assets/imgs/IMG_0039_2.jpg",
      link: "https://cabrown91.github.io/Project0/",
      description: "Description here"
    },
    {
      project: "Music Venues App",
      image: "assets/imgs/IMG_0039_2.jpg",
      link: 'http://stark-tundra-16200.herokuapp.com/',
      description: 'Description here'
    },
    {
      project: "Racing Game",
      image: "assets/imgs/IMG_0039_2.jpg",
      link: 'https://cabrown91.github.io/Project0/',
      description: 'Description here'
    }
  ];
}

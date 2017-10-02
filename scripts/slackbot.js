// Description:
// <description of this script's functionality>
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//  hubot <trigger> - <what the respond trigger does>
//  <trigger> - <what the hear trigger does>
//
// Notes:
//
//
// Author:
// <github username of the original script author>
//

// module.exports = function(robot) {
//   //  YOUR CODE HERE
//   //  Example
//    robot.hear(/javascript/i, function(msg) {
//      return msg.send("I love coding!");
//    });
// }

/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

************************************/


/* IMPORTANT! 
You can have only one instance of module.exports in each JavaScript file. 
If you want to supplement your existing code above with any the code below, 
you need to move the contents of module.exports below into the module.exports code above. 
*/

// /*
// var squirrels;
// squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

// module.exports = function(robot) {
//   // Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" 
//   return robot.respond(/hi|hello/i, function(msg) {
//     return msg.send("Howdy!");
//   });

  // Random Example
  //If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers
  // return robot.hear(/ship it/i, function(msg) {
  //   return msg.send(msg.random(squirrels));
  // });
// };
// */


//**************** Below is my test code for MR Hubot ***************

module.exports = function(robot) {
  //  YOUR CODE HERE
  //  Example

  // Greeting ********
  // type "hi" or "hello" 
  // MR Hubot will reply back "Ello im MR Hubot"
   robot.respond(/hi mr hubot/i, function(msg) {
     return msg.send("Ello im Mr Hubot");
   });
  
  // Bio *******
  //  type "about" 
  // MR Hubot will show
  // 1- profile picture of MR Hubot and 
  // 2- a description of him
   var profilePic;
   profilePic = ["https://i.pinimg.com/736x/0a/9f/03/0a9f0396b86d34822c08655cf738b70c--manga-anime-robots.jpg"];


   robot.respond(/about/i, function(msg) {
    return msg.send("Ello! I am your friendly hubot gental man named MR Hubot. I am here at your assistance. How may I help you, I cant wait! I love a good mustache just type -show me silly- and I will share my collection of mustaches to keep you smiling through the day " + profilePic);

  });

  // Mustache Photos *******
  // type "show me silly"
  // MR Hubot will generate random mustache photos to keep you smiling

var mustachePictures;
mustachePictures = ["http://laoblogger.com/images/french-mustache-clipart-4.jpg","https://digital.ungerboeck.com/images/mustache-tutorial.jpg", "http://www.treefortbikes.com/images/raw/TF-HB1012.jpg", "http://cliparting.com/wp-content/uploads/2016/06/Curly-moustache-clipart-hipster-moustache-mustache-stache.png","https://ih1.redbubble.net/image.216622373.1718/flat,800x800,075,f.u3.jpg"];

// module.exports = function(robot) {
//   // Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" 
  // return robot.respond(/hi|hello/i, function(msg) {
  //   return msg.send("Howdy!");
  // });

  // Random Example
  // If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers
  return robot.respond(/show me silly/i, function(msg) {
    return msg.send(msg.random(mustachePictures));
  });


// Coffee or Tea suggestion and locations (I would like this to have a google maps API but I am having troubles to get it to work) *******
  // type "I would like some" "coffee" or "tea"
  // MR Hubot will generate for coffee "let me show you some near by coffee spots" and show it on google maps
  // MR Hubot will generate for tea "I know the perfect tea spots" and show it on google maps
return robot.hear(/I would like some (.*)/i, function(msg) {
    var tea;
    tea = msg.match[1];
    if (tea == "coffee"){
      return msg.send("let me show you some near by coffee spots");
    } else {
      return msg.reply("I know the perfect tea spots");
    }
  
  });

  var tea;
  teaLocations = ["https://www.google.com/maps/search/tea+/@37.7936661,-122.3960314,15z/data=!3m1!4b1"];

  return robot.respond(/show me tea spots/i, function(msg) {
    return msg.send(teaLocations);
  });


  
  
  // return robot.hear(/Hi Hubot! My name is (.*)/i, function(msg) {
  //   var name;
  //   name = msg.match[1];
  //   if (name == "Hubot"){
  //     return msg.send("You're not Hubot--I'm Hubot!");
  //   } else {
  //     return msg.reply("Nice to meet you, " + name + "!");
  //   }
  
  // });
};
// */


var characters = {
    Morgana: {
      name: "Morgana",
      health: 560,
      attackPower: 2,
      counterAttackPower: 15,
    },
  
    LeeSin: {
      name: "Lee Sin",
      health: 570,
      attackPower: 4,
      counterAttackPower: 5,
    },
  
    Orianna: {
      name: "Orianna",
      health: 530,
      attackPower: 1,
      counterAttackPower: 20,
    },
  
    Teemo: {
      name: "Teemo",
      health: 528,
      attackPower: 1,
      counterAttackPower: 25,
    },
  };
 
  console.log(characters);
  console.log(characters.Morgana.name)
  
  

  var characterSelected = false;
  
 
  var defenderSelected = false;
  

  var character = {
  
  };

  
 
  var defender = {};

  var enemiesDefeated = 0;
  

  var gameOver = false;
  
  
 
  function initializeCharacter(chosenCharacter) {
    console.log('output:', chosenCharacter.morgana.name)
    // character.name = chosenCharacter.name;
    // character.health = chosenCharacter.health;
    // character.counterAttackPower = chosenCharacter.counterAttackPower;
    // character.attackPower = chosenCharacter.attackPower;
  }
  
  function initializeDefender(chosenDefender) {
    defender.name = chosenDefender.name;
    defender.health = chosenDefender.health;
    defender.counterAttackPower = chosenDefender.counterAttackPower;
    defender.attackPower = chosenDefender.attackPower;
  }
  
  
  function moveToEnemies() {
    $(".available-character").removeClass("available-character").addClass("enemy-character");
    $("#enemies-div").append($(".enemy-character"));
  }
  
  function resetGame() {
    
    $("#morgana").children(".health").html(characters.morgana.health);
    $("#leesin").children(".health").html(characters.leesin.health);
    $("#orianna").children(".health").html(characters.orianna.health);
    $("#teemo").children(".health").html(characters.teemo.health);
  
    $(".character-image").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
    var available = $(".available-character").show();
    $("#characters-available").html(available);
  
    $("#message").empty();
    $("#restart").hide();
  
    characterSelected = false;
    defenderSelected = false;
    enemiesDefeated = 0;
    gameOver = false;
  
    character = {};
    defender = {};
  }
  
  $(document).ready(function() {
  

    $("#restart").hide();
    $("#message").empty();
  
  
    $("#morgana").on("click", function () {
      console.log($('#morgana'));
  
     
      if(characterSelected === false) {
        $("message").empty();
  
    
        initializeCharacter(characters.morgana);
        characterSelected = true;
  
        
        $("#morgana").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);
  
    
        moveToEnemies();
  
      } else if ((characterSelected === true) && (defenderSelected === false)) {
        
        if($("#morgana").hasClass("enemy-character")) {
          $("#message").empty();
  
          
          initializeDefender(characters.morgana);
          defenderSelected = true;
  
          
          $("#morgana").removeClass("enemy-character").addClass("defender-character");
          $("#defender-div").append(this);
        }
      }
    });
  
    $("#leesin").on("click", function () {
      console.log("Lee Sin is selected");
  
      
      if(characterSelected === false) {
        $("#message").empty();
  
        
        initializeCharacter(characters.leesin);
        characterSelected = true;
  
        
        $("#lee sin").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);
  
        
        moveToEnemies();
  
      } else if ((characterSelected === true) && (defenderSelected === false)) {
        
        if($("#lee sin").hasClass("enemy-character")) {
          $("#message").empty();
  
          
          initializeDefender(characters.leesin);
          defenderSelected = true;
  
          
          $("#leesin").removeClass("enemy-character").addClass("defender-character");
          $("#defender-div").append(this);
        }
      }
    });
  
    $("#orianna").on("click" , function () {
      console.log("orianna is selected");
  
      
      if(characterSelected === false) {
        $("#message").empty();
  
        
        initializeCharacter(characters.orianna);
        characterSelected = true;
  
        
        $("#orianna").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);
  
        
        moveToEnemies();
  
      } else if ((characterSelected === true) && (defenderSelected === false)) {
        
        if($("#orianna").hasClass("enemy-character")) {
          $("#message").empty();
  
          
          initializeDefender(characters.orianna);
          defenderSelected = true;
  
          
          $("#orianna").removeClass("enemy-character").addClass("defender-character");
          $("#defender-div").append(this);
        }
      }
    });
  
    $("#teemo").on("click", function () {
      console.log("teemo is selected");
  
   
      if(characterSelected == false) {
        $("#message").empty();
  
        
        initializeCharacter(characters.teemo);
        characterSelected = true;
  
      
        $("#teemo").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);
  
        
        moveToEnemies();
  
      } else if ((characterSelected === true) && (defenderSelected == false)) {
        
        if($("#teemo").hasClass("enemy-character")) {
          $("#message").empty();
  
          
          initializeDefender(characters.teemo);
          defenderSelected = true;
  
          
          $("#teemo").removeClass("enemy-character").addClass("defender-character");
          $("#defender-div").append(this);
        }
      }
    });
  
    
    $("#attack-btn").on("click", function() {
      console.log("Attack selected");
  
     
      if (characterSelected && defenderSelected && !gameOver) {
       
        defender.health = defender.health - character.attackPower;
        $(".defender-character").children(".health").html(defender.health);
        $("#message").html("<p>You attacked " + defender.name + " for " + character.attackPower + " damage.<p>");
  
        
        character.attackPower = character.attackPower + character.attackPower;
  
        
        if (defender.health > 0) {
          character.health = character.health - defender.counterAttackPower;
          $(".chosen-character").children(".health").html(character.health);
  
         
          if (character.health > 0) {
            $("#message").append("<p>" + defender.name + " attacked you  " + defender.counterAttackPower + " damage.</p>");
          } else {
            gameOver = true;
            $("#message").html("<p> Defeat...</p><p>Play again?</p>");
            $("#restart").show();
          }
        } else {
          
          enemiesDefeated++;
          defenderSelected = false;
          $("#message").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
          $(".defender-character").hide();
  
          
          if (enemiesDefeated === 3) {
            gameOver = true;
            $("#message").html("<p>You have won the game!!!</p><p>Play again?</p>");
            $("#restart").show();
          }
        }
      } else if (!characterSelected && !gameOver) {
        $("#message").html("<p>You must first select your game character.</p>");
      } else if (!defenderSelected && !gameOver) {
        $("#message").html("<p>You must choose an enemy to fight.</p>");
      }
  
    });
  
    $("#restart").on("click", function() {
      console.log("Restart selected");
  
      resetGame();
    });
  
  }); 
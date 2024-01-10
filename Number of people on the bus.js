var number = function(busStops){
    // Good Luck!
    
    let people = 0;

    for(let stop of busStops){
        people += stop[0] - stop[1];
    }
    
    console.log(people);

  }

  number([[10,0],[3,5],[5,8]]);

  //output 5
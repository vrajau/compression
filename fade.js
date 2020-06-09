//add image 1 - 10 (including the 0)
for(i=1; i < 10; i++){
    $( "#layer1" ).append( "<div class=tiles class=fadein>" + "<img data-src=images/tile_" + "0" + i + ".jpg>" + "</div>");
  }

//add image 10 - 400
for(i=10; i < 401; i++){
    $( "#layer1" ).append( "<div class=tiles class=fadein>" + "<img data-src=images/tile_" + i + ".jpg>" + "</div>");
  }

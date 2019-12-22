# gridarut

# what's this for
This library was made for quick building responsive layouts.

# how to install it
Just include it in your main html file like this:
```
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="gridarut.css">
  </head>
  <body>
    <script src="gridarut.js"></script>
  </body>
</html>
```

# how to use it
Use the u-gridarut class to tell a block it will be a grid. Then use the u-cell class and add some W and H classes to make it specific with width and height. The w1 class goes for 10%, the w2 goes for 20% etc. Same for h1, h2 etc. Now to make it responsive add the data-bound attribute to the div with a u-gridarut class. It will tell the block when this block should behave in a normal way. At what point when its width will be like this the block should be marked by default.

<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
crossorigin="anonymous"></script>
<script language="javascript">

const header = document.querySelector('card');
const section = document.querySelector('.food-info');
$(document).ready(function () {
  $.getJSON("https://api.spoonacular.com/recipes/complexSearch?query=/&apiKey=74bf68aed1924c1385e1296450857fa1",
    function (obj) {
      console.log(obj);
      const recipes = obj['results'];
      for (var i = 0; i < recipes.length; i++) {
        const myArticle = document.createElement('p');
        const myH2 = document.createElement('p');
        myH2.textContent = recipes[i].title;
        var tt= document.getElementsByClassName('card')[i].style.backgroundImage = 'url(' + recipes[i].image +')'
        document.getElementsByClassName('card')[i].appendChild(tt);
        document.getElementsByClassName('food-info')[i].appendChild(myH2);
      }
    });

});


</script>

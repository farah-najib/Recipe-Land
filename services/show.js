
const header = document.querySelector('card u-clearfix');
const section = document.querySelector('card-body');
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


/*

 <div class="card u-clearfix">
      <div class="card-body">
        <span class="card-number card-circle subtle">01</span>
        <span class="card-author subtle">John Smith</span>
        <h2 class="card-title">New Brunch Recipe</h2>
        <span class="card-description subtle">These last few weeks I have been working hard on a new brunch recipe for you all.</span>
        <div class="card-read">Read</div>
        <span class="card-tag card-circle subtle">C</span>
      </div>
      <img src="https://s15.postimg.cc/temvv7u4r/recipe.jpg" alt="" class="card-media" />
    </div>
    <div class="card-shadow"></div>


    */
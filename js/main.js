//The user will enter a cocktail. 
// Get a cocktail name, photo, and instructions 
// and place them in the DOM


document.getElementById("get-cocktail").onclick=getCocktail;

function getCocktail()
{
    let obtenerBebida=document.getElementById('cocktail').value
    console.log(obtenerBebida)
    const url=`https://www.thecocktaildb.com//api/json/v1/1/search.php?s=${obtenerBebida}`
    
    fetch(url)
        //
        .then(res => res.json()) // parse response as JSON
         //object
        .then(data => {
      //sends to the DOM
       document.getElementById('cocktail-name').innerText=data.drinks[0].strDrink
       console.log(data.drinks[0].strDrink)
        const imageContenedor=document.getElementById('imagen')
        imageContenedor.src=data.drinks[0].strDrinkThumb
        document.querySelector('#instructions').innerText=data.drinks[0].strInstructions
    
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}


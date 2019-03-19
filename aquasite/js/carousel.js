/* This is the current version of the carousel script.
 * This script is used for contolling the slideshow on index.php.
 * For the original version of this script, see carousel_old.js
 */

var caroIndex = 1;
var caro; //For the entire carousel.
var chooser; //For the dots that let the user choose which slide to move to.

firstRun();

function firstRun(){
   /* This is the function that is triggered as soon as the script is loaded.
    * This function initialises the slideshow.
    */
    caroIndex = 1;
    
    console.log("Initialising carousel...")
    
    //First slide.
    document.getElementById("firstSlide").display = "block";
    document.getElementById("firstSlide").className += "_active";
    
    //First "dot."
    document.getElementById("pick1").className += "_active";
}

function advance(amount){
    //Advance the slideshow by a specified amount.
    showSlide(caroIndex += amount);
    console.log(caroIndex); //Log the carousel index for debugging.
}

function setSlide(amount){
    showSlide(caroIndex = amount);
    console.log(caroIndex);
}

function showSlide(position){
    let i;
    
    caro = document.getElementsByClassName("aquaIndexSlide");
    chooser = document.getElementsByClassName("aquaSlidePick");
    
    //If the position is now greater than the number of slides in the carousel, set the index back to the beginning.
    if (position > caro.length) caroIndex = 1;
    
    //Likewise, if the position set is below 1, set the position to the number of slides in the carousel.
    if (position < 1) caroIndex = caro.length;
    
    for(i = 0; i < caro.length; i++){
        caro[i].style.display = "none";
    }
    
    for(i = 0; i < chooser.length; i++){
        chooser[i].className = chooser[i].className.replace("_active", "");
    }
    
    caro[caroIndex - 1].style.display = "block";
    chooser[caroIndex - 1].className += "_active";
}

function confirmInfo(){
    //This is a debug function that will not be used at all in the finished product.
    console.log(`CLASS NAMES FOUND:\n${caro}\n\nCHOOSERS FOUND:\n${chooser}`)
}
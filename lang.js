/**
 * lang.js is a script that allows a simple implementation of multiple languages on one website, it might not be the SEO friendliest... but it works.
 * below is a small guide on how to set this up on your desired website:
 * 1. add ".lang { display: none; }" to your css * 2. add the class lang to your desired text blocks, forms etc.
 * 3. add the appropriate language code to your text block, form eg. "EN" (for english, duh...)
 * 4. load this script at the bottom of the page above the closing body tag (</body>)
 *
 * its easy to add additional languages, you can use the setup below as a reference.
 *
 * lang.js (c) Maximilian Wenkebach 2019
 */

console.log("lang:" + Lang);
if (Lang == "de") {
    var target = document.getElementsByClassName("DE");
    for (var i = 0; i <= target.length; i++) {
        target[i].style.display = "block";
    }
} else if (Lang == "en" || Lang == "en-US") {
    var target = document.getElementsByClassName("EN");
    for (var i = 0; i <= target.length; i++) {
        target[i].style.display = "block";
    }
} else {
    var target = document.getElementsByClassName("EN");
    for (var i = 0; i <= target.length; i++) {
        target[i].style.display = "block";
    }
}
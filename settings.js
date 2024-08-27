const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
const select= dropdown.querySelector('.select');
const caret = dropdown.querySelector('.caret');
const Themes = dropdown.querySelector('.Themes');
const options = dropdown.querySelectorAll('.Themes li')
const colorTheme = dropdown.querySelectorAll('[name="theme"]');
var green = document.getElementById('green')
var red = document.getElementById('red')
var yellow = document.getElementById('yellow')
var black = document.getElementById('black')
var none = document.getElementById('none')

var Green = document.querySelector('.Green')
var Red = document.querySelector('.Red')
var Yellow = document.querySelector('.Yellow')
var Black = document.querySelector('.Black')
var None = document.querySelector('.None')


// to toggle dropdown //
select.addEventListener('click', () => {
select.classList.toggle('select-clicked');
caret.classList.toggle('caret-rotate');
Themes.classList.toggle('Themes-open');
});
// end of to toggle dropdown //

// to remove dropdown and rotate caret //
options.forEach(option => {
option.addEventListener('click', () =>{
select.innerText = option.innerText;
select.classList.remove('select-clicked');
caret.classList.toggle('caret-rotate');
Themes.classList.remove('Themes-open');
if(!option.checked){
    option.style.animation = "animation: dance 0.5s ease-in-out forwards infinite 0.5s;"}
options.forEach(option => {
option.classList.remove('active');});
option.classList.add('active');});})
// end of removing dropdown\\

//   check box localStorage i.e to store the checkbox after clicking\\
const storeTheme = function(theme){
localStorage.setItem("theme", theme);
};
const retrieveTheme = function() {
const activeTheme = localStorage.getItem("theme");
colorTheme.forEach((themeOption) => { 
if (themeOption.id === activeTheme)
themeOption.checked = true
colorTheme.forEach                                                                                                                                                                                                                                                                                         ((themeOption) => {
themeOption.addEventListener('click', function(){
storeTheme(themeOption.id)
})})})}
document.onload = retrieveTheme();
//  end of the check box localStorage\\

// localstorage for the top display when clicked \\
select.innerHTML = localStorage.getItem("option")
options.forEach(option => {
option.addEventListener('click', () =>{
localStorage.setItem('option', select.innerText)
select.innerHTML = localStorage.getItem("option") })});
// end of localstorage for the top display when clicked \\


//local storage for click outside the words \\
red.checked = true.innerHTML = localStorage.getItem("x1")
Red.addEventListener('click', check =>{
   localStorage.setItem('x1', red.checked = true)
   red.checked = true.innerHTML = localStorage.getItem("x1")
    console.log('clicked')
    if(red.checked = true){
        localStorage.removeItem("x2")
        localStorage.removeItem("x3")
        localStorage.removeItem("x4")
        localStorage.removeItem("x5")
    }}
);
green.checked = true.innerHTML = localStorage.getItem("x2")
Green.addEventListener('click', checke =>{
   localStorage.setItem('x2', green.checked = true)
   green.checked = true.innerHTML = localStorage.getItem("x2")
    console.log('clicked')
    if(green.checked = true){
        localStorage.removeItem("x1")
        localStorage.removeItem("x3")
        localStorage.removeItem("x4")
        localStorage.removeItem("x5")
    }}
);
yellow.checked = true.innerHTML = localStorage.getItem("x3")
Yellow.addEventListener('click', checker =>{
   localStorage.setItem('x3', yellow.checked = true)
   yellow.checked = true.innerHTML = localStorage.getItem("x3")
    console.log('clicked')
    if(yellow.checked = true){
        localStorage.removeItem("x1")
        localStorage.removeItem("x2")
        localStorage.removeItem("x4")
        localStorage.removeItem("x5")
    }}
);
black.checked = true.innerHTML = localStorage.getItem("x4")
Black.addEventListener('click', checkers =>{
   localStorage.setItem('x4', black.checked = true)
   black.checked = true.innerHTML = localStorage.getItem("x4")
    console.log('clicked')
    if(black.checked = true){
        localStorage.removeItem("x1")
        localStorage.removeItem("x2")
        localStorage.removeItem("x3")
        localStorage.removeItem("x5")
    }}
);
none.checked = true.innerHTML = localStorage.getItem("x5")
None.addEventListener('click', checkers =>{
   localStorage.setItem('x5', none.checked = true)
   black.checked = true.innerHTML = localStorage.getItem("x5")
    console.log('clicked')
    if(none.checked = true){
        localStorage.removeItem("x1")
        localStorage.removeItem("x2")
        localStorage.removeItem("x3")
        localStorage.removeItem("x4")
    }}
);
// end of local storage for click outside the words \\
;
});


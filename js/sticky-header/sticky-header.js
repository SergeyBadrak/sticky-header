// Sticky header by Artium https://artium.com.ua

// How to use
// 1. Add to page script sticky-header/sticky-header.js
// 2. Add styles sticky-header/sticky-header.css
// 3. Add class="sticky-header" to your header element


const header = document.querySelector(".sticky-header");
const headerH = header.offsetHeight;
const offset = 0; // offset on page scroll distance
const toggleClass = "is-sticky";

// prvent page from resizing after set header to fixed 
// create empty holder element instead of header, to replace header height in page flow
const holder = document.createElement('div');
holder.className = "sticky-header-holder";
// set holder height from header height
holder.style.height = ( headerH + 'px' );
// insert holder on the page after header
header.after(holder);


window.addEventListener("scroll", () => {

  const currentScroll = window.scrollY;

  if ( currentScroll > (headerH + offset) ) {

    header.classList.add(toggleClass);
    holder.classList.add(toggleClass);

  } else {
    header.classList.remove(toggleClass);
    holder.classList.remove(toggleClass);
  }

});


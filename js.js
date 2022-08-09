$(window).scroll(function() {
   // for big version
   if ($(this).scrollTop() > 570){
   // for small version
   // if ($(this).scrollTop() > 270){
       $('.header').addClass("small");
    } else {
       $('.header').removeClass("small");
    }
 });


// kan måske bruges til at kovertere SVG path til polygon i %

// const input = `100.712,141.534 582.904,227.835 425.37,478.521 711.671,552.493`

// const viewBoxScale = 4

// const stringPairs = input.split(/[ \t\n]/)
//   .map(s => s.trim())
//   .filter(s => s.length > 0)

// const res = stringPairs.map(s => {
//   const [x, y] = s.split(',').map(n => parseFloat(n, 10) / viewBoxScale).map(n => n.toFixed(2))
//   return `${x}% ${y}%`
// }).join(', ')

// console.log(`clip-path: polygon(${res});`)
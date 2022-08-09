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
// https://gist.github.com/lostfictions/65570a178fb095829637da2b4742fa11

//  const input = `121.151,20.761 170.165,55.885 200.872,3.816 231.145,55.884 280.592,20.762 286.854,80.687 346.526,68.666
// 	327.657,126.005 387.276,139.247 346.502,184 395.796,220.302 340.127,244.647 370.611,297.814 309.636,297.457 316.076,358.381
// 	260.303,333.3 241.622,391.529 200.655,345.979 160.121,391.53 141.008,333.302 85.666,358.381 91.673,297.456 31.131,297.813
// 	61.183,244.647 5.947,220.302 54.81,184 14.466,139.248 73.652,126.004 55.216,68.667 114.457,80.688`

// const viewBoxScale = 4

// const stringPairs = input.split(/[ \t\n]/)
//   .map(s => s.trim())
//   .filter(s => s.length > 0)

// const res = stringPairs.map(s => {
//   const [x, y] = s.split(',').map(n => parseFloat(n, 10) / viewBoxScale).map(n => n.toFixed(2))
//   return `${x}% ${y}%`
// }).join(', ')

// console.log(`clip-path: polygon(${res});`)
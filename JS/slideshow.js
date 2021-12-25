

// var img1 = document.getElementById("section1")
// var img2 = document.getElementById("section2")
// var img3 = document.getElementById("section3")
// var img4 = document.getElementById("section4")
// var img5 = document.getElementById("section5")

// var s1 = document.getElementById("slideshow1")
// var s2 = document.getElementById("slideshow2")
// var s3 = document.getElementById("slideshow3")
// var s4 = document.getElementById("slideshow4")
// var s5 = document.getElementById("slideshow5")

// function show1()
// {
//   img1.style.display = "block";
//   img2.style.display = "none";
//   img3.style.display = "none";
//   img4.style.display = "none";
//   img5.style.display = "none";
//   s1.style.opacity = "0.5";
//   s2.style.opacity = "1";
//   s3.style.opacity = "1";
//   s4.style.opacity = "1";
//   s5.style.opacity = "1";
// }
// function show2()
// {
//   img1.style.display = "none";
//   img2.style.display = "block";
//   img3.style.display = "none";
//   img4.style.display = "none";
//   img5.style.display = "none";
//   s1.style.opacity = "1";
//   s2.style.opacity = "0.5";
//   s3.style.opacity = "1";
//   s4.style.opacity = "1";
//   s5.style.opacity = "1";
// }
// function show3()
// {
//   img1.style.display = "none";
//   img2.style.display = "none";
//   img3.style.display = "block";
//   img4.style.display = "none";
//   img5.style.display = "none";
//   s1.style.opacity = "1";
//   s2.style.opacity = "1";
//   s3.style.opacity = "0.5";
//   s4.style.opacity = "1";
//   s5.style.opacity = "1";
// }
// function show4()
// {
//   img1.style.display = "none";
//   img2.style.display = "none";
//   img3.style.display = "none";
//   img4.style.display = "block";
//   img5.style.display = "none";
//   s1.style.opacity = "1";
//   s2.style.opacity = "1";
//   s3.style.opacity = "1";
//   s4.style.opacity = "0.5";
//   s5.style.opacity = "1";
// }
// function show5()
// {
//   img1.style.display = "none";
//   img2.style.display = "none";
//   img3.style.display = "none";
//   img4.style.display = "none";
//   img5.style.display = "block";
//   s1.style.opacity = "1";
//   s2.style.opacity = "1";
//   s3.style.opacity = "1";
//   s4.style.opacity = "1";
//   s5.style.opacity = "0.5";
// }



var img1 = document.getElementById("section1")
var img2 = document.getElementById("section2")
var img3 = document.getElementById("section3")
var img4 = document.getElementById("section4")
var img5 = document.getElementById("section5")
const array_image = [img1,img2,img3,img4,img5]

var s1 = document.getElementById("slideshow1")
var s2 = document.getElementById("slideshow2")
var s3 = document.getElementById("slideshow3")
var s4 = document.getElementById("slideshow4")
var s5 = document.getElementById("slideshow5")
const array_s = [s1,s2,s3,s4,s5]

function show1()
{
 for(let i=0 ; i<array_image.length ; i++)
 {
   if(i===0)
   {
     array_image[i].style.display = "block";
   }
   else
   {
     array_image[i].style.display = "none";
   }
 }

 for(let j=0 ; j<array_s.length ; j++)
 {
   if(j===0)
   {
     array_s[j].style.opacity = "0.5";
   }
   else
   {
     array_s[j].style.opacity = "1";
   }
 }
 
}




function show2()
{
  for(let i=0 ; i<array_image.length ; i++)
 {
   if(i===1)
   {
     array_image[i].style.display = "block";
   }
   else
   {
     array_image[i].style.display = "none";
   }
 }
 for(let j=0 ; j<array_s.length ; j++)
 {
   if(j===1)
   {
     array_s[j].style.opacity = "0.5";
   }
   else
   {
     array_s[j].style.opacity = "1";
   }
 }
}




function show3()
{
  for(let i=0 ; i<array_image.length ; i++)
 {
   if(i===2)
   {
     array_image[i].style.display = "block";
   }
   else
   {
     array_image[i].style.display = "none";
   }
 }
 for(let j=0 ; j<array_s.length ; j++)
 {
   if(j===2)
   {
     array_s[j].style.opacity = "0.5";
   }
   else
   {
     array_s[j].style.opacity = "1";
   }
 }
}



function show4()
{
  for(let i=0 ; i<array_image.length ; i++)
  {
    if(i===3)
    {
      array_image[i].style.display = "block";
    }
    else
    {
      array_image[i].style.display = "none";
    }
  }
  for(let j=0 ; j<array_s.length ; j++)
  {
    if(j===3)
    {
      array_s[j].style.opacity = "0.5";
    }
    else
    {
      array_s[j].style.opacity = "1";
    }
  }
}



function show5()
{
  for(let i=0 ; i<array_image.length ; i++)
 {
   if(i===4)
   {
     array_image[i].style.display = "block";
   }
   else
   {
     array_image[i].style.display = "none";
   }
 }
 for(let j=0 ; j<array_s.length ; j++)
 {
   if(j===4)
   {
     array_s[j].style.opacity = "0.5";
   }
   else
   {
     array_s[j].style.opacity = "1";
   }
 }
}



var slideIndex = 1;
// showDivs(slideIndex);

function previous(n) {
  showDivs(slideIndex += n);
}

function next(n) {
  showDivs(slideIndex += n);
}

// function showDivs(n) {
//   var i;
//   if (n > array_image.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = array_image.length}
//   for (i = 0; i < array_image.length; i++) {
//     array_image[i].style.display = "none";  
//   }
//   array_image[slideIndex-1].style.display = "block";  
// }

function showDivs(n) {
  var i;
  if (n > array_image.length && n>array_s.length)
  {
    slideIndex = 1
  }
  if (n < 1) 
  {
    slideIndex = array_image.length
  }
  for (i = 0; i < array_image.length; i++)
  {
    array_image[i].style.display = "none";  
    array_s[i].style.opacity = "1";  

  }
  array_image[slideIndex-1].style.display = "block";
  array_s[slideIndex-1].style.opacity = "0.5";


}
  let images=[null,'startup.jpg','ecommerce.jpg','startup.jpg','ecommerce.jpg']
    let featured=document.getElementsByClassName('featured')[0];
    featured.style.animation=`moves ${images.length*4}s forwards infinite linear`
    for(let name of images){
      featured.innerHTML+=`
      <div class="product" style="background-image:url('${name}');">
      </div>
      `
    }
    
    let courses=[{name:"python",image:"./ecommerce.jpg",price:5000,description:"this is amazing course to learn easy simple and quick learning.."},{name:"djyango",image:"./startup.jpg",price:2000,description:"this is amazing course to learn easy simple and quick learning.."},{name:"javascript",image:"./ecommerce.jpg",price:8000,description:"this is amazing course to learn easy simple and quick learning.."},{name:"Node js",image:"./startup.jpg",price:5000,description:"this is amazing course to learn easy simple and quick learning.."},]
  let onlineCourseBox=document.getElementsByClassName("onlineCourseBox")[0];
  
  for(let item of courses){
    onlineCourseBox.innerHTML+=`
          <div class="course">
            <div class="courseTop" style="background-image:url('${item.image}');"> 
            </div>
            <div class="courseBottom">
              <h1>${item.name}</h1>
              <p>${item.description.substring(0,60)}...</p>
              <p>price:${item.price}rs</p>
              <button>enroll now</button>
            </div>
    
          </div>
    `
  }
  
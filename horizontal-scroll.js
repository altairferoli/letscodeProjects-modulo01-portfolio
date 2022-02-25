console.log('===CAROUSEL SCROLL ACTIVE===');

let carousels = document.getElementsByClassName('carousel');

for (let i = 0; i < carousels.length; i++) {
    carousels[i].addEventListener('wheel', event =>{
        if (event.deltaY > 0) {
            event.target.scrollBy(300,0);
            event.preventDefault();         
        } else {
            event.target.scrollBy(-300,0);            
            event.preventDefault();
        }
    })
    
}
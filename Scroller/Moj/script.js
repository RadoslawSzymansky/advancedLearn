document.addEventListener('DOMContentLoaded', () => {


  const slides = document.querySelectorAll('.slide');

  const buttons =  document.querySelectorAll('.nav span');

  buttons.forEach((e, i) => {
    console.log(e.style)
    e.style.backgroundColor = window.getComputedStyle(slides[i], null).getPropertyValue('background-color');
    e.addEventListener('click', (e) => {
      buttons.forEach(e => e.className = "");
      window.scrollTo(0, slides[i].offsetTop);
      e.target.className = 'active'

    });
    console.log(e.style)
    
  })


  // console.log('Hello world!');
  // if ('scrollRestoration' in history) {
  //   // Back off, browser, I got this...
  //   history.scrollRestoration = 'manual';
  // }  


  // // callbacks
  // const scrollDirection = (e) => {
  //   return e.deltaY > 0 ? 'down' : 'up';
  // };

  // const getScrollElementValue = (e) => {
  //   // console.log(e)
  // };

  // const elementScroll = (index) => {
  //   slides[index].scrollHeight;
  // };

  // let flag = false;
  // let currentIndex = 0;

  // const changeSlide = (e) => {
  //   // console.log(scrollDirection(e));
  //   getScrollElementValue(e);
  //   scroll(e)
  // };
  // console.log(slides[1].scrollHeight)
  // console.log(document.body.scrollHeight)
  // window.scrollX;
  // document.body.addEventListener('click', () => {
  //   window.scrollTo(100, 100)

  // })
  
  // const scroll = (e) => {
  //   const direction = scrollDirection(e);
  //   if (direction === 'down' && currentIndex !== slides.length) {
  //     flag = false;
  //     if(window.scrollY >= (currentIndex + 1) * window.innerHeight ) {
  //       currentIndex += 1;
  //       flag = true;
  //     }

  //   } else if (direction === 'up' && currentIndex !== 0) {
  //     // console.log('jade w gore');
  //     flag = false;

  //     if (window.scrollY < (currentIndex + 1) * window.innerHeight && window.scrollY < (currentIndex ) * window.innerHeight) {
  //       console.log( 'w gore')
  //       currentIndex -= 1;
  //       flag = true;

  //     }
  //   } else {
  //       flag = false
  //     return;
  //   }
  //   console.log(slides[2].offsetTop)
  //   if(flag) {
  //     window.scrollTo(0, 500)
  //   }
  // }

  // // listeners 

  // document.addEventListener('wheel', changeSlide);

})
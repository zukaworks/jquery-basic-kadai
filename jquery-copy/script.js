$(function() {
  // カルーセルの設定
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 3000,
    arrows: false,
    fade: true
    });

  // トップボタンのアニメーション
  const topBtn = $('#back-button');
    topBtn.hide();
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
        topBtn.fadeIn();
      } else {
        topBtn.fadeOut();
      }
    });
    topBtn.click(function() {
      $('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
      });

    // ナビゲーションaboutのスクロール
    const aboutposition = $('#about').offset().top;
    $('.about a').click(function() {
      $('html,body').animate({
        scrollTop: aboutposition
      }, {
        queue : false
      });
    });
    // ナビゲーションworksのスクロール
    const worksposition = $('#works').offset().top;
    $('.works a').click(function() {
      $('html,body').animate({
        scrollTop: worksposition
      }, {
        queue : false
      });
    });

    // works-cセクションのフェードイン
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.works-c').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass('is-fadein');
      }
    });
  });

    // about-cセクションのフェードイン
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.about-c').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass('is-fadein');
        }
      });
    });

    // モーダル表示
    $('.works-c img').click(function(){
      const image = $(this).attr('src');
      $('.modal-img').attr('src',image);
      $('.modal').fadeIn();
      return false
    });

    $('.closebtn').click(function(){
      $('.modal').fadeOut();
      return false
    });




});

//   const backBtn = document.getElementById('back-button');
//   window.addEventListener('scroll', () => {
  
//   const scrollValue = document.scrollingElement.scrollTop;
//   if (scrollValue >= 300 ) {
//     backBtn.style.display = 'inline';
//   }
//   else {
//     backBtn.styele.display = 'none';
//   }
// });

// $('#back-button').on('click', () => {
//   $('#') = fadeOUt();
//   console.log('botankuriku')
// });


// ----------------------
// const backBtn = document.getElementById('back-button');
//     window.addEventListener('scroll', () => {
//     const scrollValue = document.scrollingElement.scrollTop;
//       if (scrollValue >= 300) {
//           backBtn.style.display = 'inline';
//       } else {
//           backBtn.style.display = 'none';
//       }
//     });

//     backBtn.addEventListener('click', () => {
//       fadeOutElement(backBtn);
//     });

//     function fadeOutElement(element) {
//       let opacity = 1;
//       const fadeEffect = setInterval(() => {
//         if (opacity > 0) {
//       opacity -= 0.1;
//       element.style.opacity = opacity;
//         } else {
//       clearInterval(fadeEffect);
//       element.style.display = 'none';
//       }
//         }, 50);
//       }
// });

let burger = document.getElementById('#burger');

    window.addEventListener('resize',function(e){
        let vieportWidth = document.documentElement.clientWidth;
        // console.log(vieportWidth);
        vieportWidth > 1024 ? document.querySelector('.header__container').classList.remove('mobile-menu') : false;
    });



    document.getElementById('burger').onclick = function() {
        document.querySelector('.header__container').classList.toggle('mobile-menu');
        document.querySelector('body').classList.toggle('no_scroll');
    }




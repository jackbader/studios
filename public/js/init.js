(function($){
  $(function(){

    console.log('test')

    $(".photo2").css("max-height", $(".photo1").height());

    let switched = false

    //small layout
    if ($(window).width() < 768) {

      $('#p2').attr('src', 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/22539734_10210199970341060_5051456143057213633_n.jpg?oh=1c1fe7e889f95f4252c566f5fbbdd23f&oe=5A7897C4')
      $('#p1').attr('src', 'https://i.imgur.com/4IiKnhF.jpg')

      //left image
      $('.fifty-before').removeAttr('id')
      $('.fifty-before').removeClass('photo2')
      $('.fifty-before').attr('style', 'max-height: none;')
      $('.fifty-img-before').removeClass('photo2-real')
      $('.fifty-img-before').removeAttr('id')
      $('.fifty-img-before').attr('id', 'fifty-img')

      //right image
      $('.fifty-right-before').removeAttr('id')
      $('.fifty-right-before').removeClass('photo2')
      $('.fifty-right-before').attr('style', 'max-height: none;')
      $('.fifty-right-img-before').removeClass('photo2-real')
      $('.fifty-right-img-before').removeAttr('id')
      $('.fifty-right-img-before').attr('id', 'fifty-img')

      $('.fifty-img-before').attr('style', 'none')

      //switch images
    }

    //medium layout
    if ($(window).width() >= 768 && $(window).width() <= 980) {
      // left image
      $('#p2').attr('src', 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/22539734_10210199970341060_5051456143057213633_n.jpg?oh=1c1fe7e889f95f4252c566f5fbbdd23f&oe=5A7897C4')
      $('#p1').attr('src', 'https://i.imgur.com/4IiKnhF.jpg')

      $('#photo-first').addClass('photo-first')

      $('.photo-first').attr('style', 'overflow: hidden;')

      $('.fifty-before').removeClass('photo2')
      $('.fifty-img-before').removeAttr('id')
      $('.fifty-img-before').removeClass('photo2-real')
      $('.fifty-img-before').attr('id', 'fifty-img')

      $('.fifty-before').attr('id', 'fifty')

      $("#photo-first").css("max-height", $(".fifty-img-before").height());

      //right image
      $('.fifty-right-before').removeClass('photo2')
      $('.fifty-right-before').removeClass('item-left')
      $('.fifty-right-before').attr('id', 'fifty-right')
      $('.fifty-right-img-before').removeClass('photo2-real')
      $('.fifty-right-img-before').attr('id', 'fifty-img')

      $('.fifty-right-before').css('max-height', $('#fifty').height()-5)


      $('.fifty-img-before').attr('style', 'margin-left: -100px;')
    }

    if ($(window).width() > 980) {
      $('.fifty-img-before').attr('style', 'none')
    }


    $(window).resize((event) => {

      //small layout
      if ($(window).width() < 768) {

        $('#p2').attr('src', 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/22539734_10210199970341060_5051456143057213633_n.jpg?oh=1c1fe7e889f95f4252c566f5fbbdd23f&oe=5A7897C4')
        $('#p1').attr('src', 'https://i.imgur.com/4IiKnhF.jpg')

        //left image
        $('.fifty-before').removeAttr('id')
        $('.fifty-before').removeClass('photo2')
        $('.fifty-before').attr('style', 'max-height: none;')
        $('.fifty-img-before').removeClass('photo2-real')
        $('.fifty-img-before').removeAttr('id')
        $('.fifty-img-before').attr('id', 'fifty-img')

        //right image
        $('.fifty-right-before').removeAttr('id')
        $('.fifty-right-before').removeClass('photo2')
        $('.fifty-right-before').attr('style', 'max-height: none;')
        $('.fifty-right-img-before').removeClass('photo2-real')
        $('.fifty-right-img-before').removeAttr('id')
        $('.fifty-right-img-before').attr('id', 'fifty-img')

        $('.fifty-img-before').attr('style', 'none')

        //switch images
      }

      //medium layout
      if ($(window).width() >= 768 && $(window).width() <= 980) {


        $('.fifty-img-before').attr('style', 'margin-left: -100px;')
      }

      if ($(window).width() > 980) {
        $('.fifty-img-before').attr('style', 'none')
      }


      console.log($('#fifty').offset().top)
      if ($(window).width() < 768) {
        $('.photo-first').attr('style', '')
        $('.fifty-before').removeAttr('id')
      } else {
        $('.photo-first').attr('style', 'overflow: hidden;')
      }
      //$('#fifty-right').css('margin-top', $('#fifty').offset().top)
      if ($(window).width() < 768) {
        $('.fifty-before').css('max-height', 'none')
        $('.fifty-right-before').css('max-height', 'none')
      } else {
        $('.fifty-right-before').css('max-height', $('#fifty').height()-5)
      }
      if (switched == true) {
          if ($(window).width() >= 768) {
            $("#photo-first").css("max-height", $(".fifty-img-before").height());
          } else {
            $("#photo-first").css("max-height", 'none');
          }
          $('.fifty-before').removeClass('photo2')
          $('.fifty-img-before').removeAttr('id')
          $('.fifty-img-before').removeClass('photo2-real')
          $('.fifty-img-before').attr('id', 'fifty-img')
          if ($(window).width() < 768) {
            $('.fifty-before').removeAttr('id')
          } else {
            $('.fifty-before').attr('id', 'fifty')
          }

          $('.fifty-right-before').removeClass('photo2')
          $('.fifty-right-before').removeClass('item-left')
          $('.fifty-right-before').attr('id', 'fifty-right')
          $('.fifty-right-img-before').removeClass('photo2-real')
          $('.fifty-right-img-before').attr('id', 'fifty-img')

      }
      if ($(window).width() >= 981) {
        $('.fifty-before').removeAttr('id')
        $('.fifty-img-before').removeAttr('id')
        $('.fifty-before').addClass('photo2')
        $('.fifty-img-before').addClass('photo2-real')
        $('.fifty-img-before').attr('id', 'p2')

        $('.fifty-right-before').removeAttr('id')
        $('.fifty-right-img-before').removeAttr('id')
        $('.fifty-right-before').addClass('photo2')
        $('.fifty-right-before').addClass('item-left')
        $('.fifty-right-img-before').addClass('photo2-real')
      }
      if ($(window).width() >= 981 && switched == true) {
        console.log('test yo')
        //switch images
        //photo 1
        let p1src = $('#p1').attr('src')
        let p2src = $('#p2').attr('src')

        $('#p1').attr('src', 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/22539734_10210199970341060_5051456143057213633_n.jpg?oh=1c1fe7e889f95f4252c566f5fbbdd23f&oe=5A7897C4')
        $('#p2').attr('src', 'https://i.imgur.com/4IiKnhF.jpg')

        $('#photo-first').removeClass('photo-first')
        switched = false
      }
      if ($(window).width() <= 980 && switched == false) {
        console.log('test yo')
        //switch images
        //photo 1
        let p1src = $('#p1').attr('src')
        let p2src = $('#p2').attr('src')

        console.log(p1src)

        $('#p2').attr('src', 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/22539734_10210199970341060_5051456143057213633_n.jpg?oh=1c1fe7e889f95f4252c566f5fbbdd23f&oe=5A7897C4')
        $('#p1').attr('src', 'https://i.imgur.com/4IiKnhF.jpg')

        $('#photo-first').addClass('photo-first')
        switched = true
      } else {

      }
      console.log('test2')
      $(".photo2").css("max-height", $(".photo1").height());

      if ($(window).width() >= 768 && $(window).width() <= 980) {
        // left image
        $('#p2').attr('src', 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/22539734_10210199970341060_5051456143057213633_n.jpg?oh=1c1fe7e889f95f4252c566f5fbbdd23f&oe=5A7897C4')
        $('#p1').attr('src', 'https://i.imgur.com/4IiKnhF.jpg')

        $('#photo-first').addClass('photo-first')

        $('.photo-first').attr('style', 'overflow: hidden;')

        $('.fifty-before').removeClass('photo2')
        $('.fifty-img-before').removeAttr('id')
        $('.fifty-img-before').removeClass('photo2-real')
        $('.fifty-img-before').attr('id', 'fifty-img')

        $('.fifty-before').attr('id', 'fifty')

        $("#photo-first").css("max-height", $(".fifty-img-before").height());

        //right image
        $('.fifty-right-before').removeClass('photo2')
        $('.fifty-right-before').removeClass('item-left')
        $('.fifty-right-before').attr('id', 'fifty-right')
        $('.fifty-right-img-before').removeClass('photo2-real')
        $('.fifty-right-img-before').attr('id', 'fifty-img')

        $('.fifty-right-before').css('max-height', $('#fifty').height()-5)
      }
    })

  }); // end of document ready
})(jQuery); // end of jQuery name space

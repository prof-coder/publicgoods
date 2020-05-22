$(document).ready(function(){
//   $('.goods').slick({
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 5,
//     responsive: [
//         {
//           breakpoint: 738,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//     ]
//   });

  $('.collection_to_cart').click(function(){
    //$('#modal_cart').modal();
  });

  $('#mobile_menu_trigger').click(function(){
    var object = $(this);
    var objectInner = object.find('#mobile_menu_trigger_inner:first');

    if(object.hasClass('menu_close')){
      objectInner.html('');
      object.removeClass('menu_close');

//      $('#mobile_menu').slideUp('fast', function(){
//        $('#forMenu').height(50);
//      });
          $('#forMenu').css('height', '50px');
          $('#mobile_menu').css('height', '0px');
          
    }else{
      objectInner.html('+');
      object.addClass('menu_close');

//      $('#mobile_menu').slideDown('fast', function(){
//        var height = $(this).height();

//        $('#forMenu').height(height+50);
//      });
          $('#forMenu').css('height', '192px');
          $('#mobile_menu').css('height', $(window).height() - 140 +'px');
    }
  });

  function delete_cookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  // logout link
  $('a[href^="/account/logout"]').on('click', function(event){
    event.preventDefault();
    var href = $(this).attr("href"),
        target = '';

//    delete_cookie('cart');

    // wait for data to push and then open link
    setTimeout(function() { // now wait 150 milliseconds...
        window.open(href,(!target?"_self":target)); // ...and open the link as usual
    },150);

  });

  $('#customer_login').on('submit', function(){
    delete_cookie('cart');

    return true;
  });
  
    $('#jointodayBtn').click(function(){
      $('#checkout_11118 a').click();
        $('#checkout_10641 a').click();
    });
  $('.membership_table_title').html("Manage Membership");
  
  $('#address_form_new').on('submit', function(){
    var val = valid(
      this.querySelector('#AddressLastNameNew'), 
      this.querySelector('#AddressFirstNameNew'), 
      this.querySelector('#AddressAddress1New'), 
      this.querySelector('#AddressCityNew'), 
      this.querySelector('#AddressCountryNew'), 
      this.querySelector('#AddressZipNew'), 
      this.querySelector('#AddressPhoneNew')
    );
    if(val == true){
      return true;
    }
    else{
      return false;
    }    
  }); 
  
  $('.for_edit_form form').submit( function(){
    var val = valid(
      this.querySelector('input.fn_f'), 
      this.querySelector('input.ln_f'),
      this.querySelector('input.addr_f'),
      this.querySelector('input.c_f'), 
      this.querySelector('input.ctr_f'),
      this.querySelector('input.zip_f'),
      this.querySelector('input.num_f')
    );
    if(val == true){
      return true;
    }
    else{
      return false;
    } 
  });
  
//   if(window.scrollY==0){
//    //user scrolled to the top of the page
//     $('body').css("margin-top", "-30px")
//   }


});




window.valid = function(l_name, f_name, addr_f, city_f, country_f, zip_f, phone_f){
  var lname   = $(l_name);
  var fname   = $(f_name);
  var addr    = $(addr_f);
  var city    = $(city_f);
  var country = $(country_f);
  var zip     = $(zip_f);
  var phone   = $(phone_f);

  var tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  $('.err_f_v').remove();
  
  if(!/[a-zA-Z]/.exec(fname.val())){
    $('<p class="err_f_v"> Please enter your first name</p>').insertAfter(fname);
    $(fname).css("boxShadow", "0 0 0 2px #ff6d6d");
    tmp1 = false;
  }
  else{
    $(fname).css("boxShadow", "none");
    tmp1 = true;
  }
  if(!/[a-zA-Z]/.exec(lname.val())){
    $('<p class="err_f_v"> Please enter your first name</p>').insertAfter(lname);
    $(lname).css("boxShadow", "0 0 0 2px #ff6d6d");
    tmp2 = false;
  }
  else{
    $(lname).css("boxShadow", "none");
    tmp2 = true;
  }
  if(!/[A-Za-z0-9'\.\-\s\,]/.exec(addr.val())){
    $('<p class="err_f_v"> Please enter your address</p>').insertAfter(addr);
    $(addr).css("boxShadow", "0 0 0 2px #ff6d6d");
    tmp3 = false;
  }
  else{
    $(addr).css("boxShadow", "none");
    tmp3 = true;
  }
  if(!/[a-zA-Z]/.exec(city.val())){
    $('<p class="err_f_v"> Please enter your city</p>').insertAfter(city);
    $(city).css("boxShadow", "0 0 0 2px #ff6d6d");
    tmp4 = false;
  }
  else{
    $(city).css("boxShadow", "none");
    tmp4 = true;
  }
  if(country.val() == '---'){
    $('<p class="err_f_v"> Please enter your country</p>').insertAfter(country);
    $(country).css("boxShadow", "0 0 0 2px #ff6d6d");
    tmp5 = false;
  }
  else{
    $(country).css("boxShadow", "none");
    tmp5 = true;
  }
//   if(!/^\d{5}(?:[-\s]\d{4})?$/.exec(zip.val())){
//     $('<p class="err_f_v"> Please enter your zip code</p>').insertAfter(zip);
//     $(zip).css("boxShadow", "0 0 0 2px #ff6d6d");
//     tmp6 = false;
//   }
//   else{
//     $(zip).css("boxShadow", "none");
//     tmp6 = true;
//   }
  
  if(zip.val() == ''){
    $('<p class="err_f_v"> Please enter your zip code</p>').insertAfter(zip);
    $(zip).css("boxShadow", "0 0 0 2px #ff6d6d");
    tmp6 = false;
  }
  else{
    $(zip).css("boxShadow", "none");
    tmp6 = true;
  }
  if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.exec(phone.val())){
    $('<p class="err_f_v"> Please enter your phone number</p>').insertAfter(phone);
    $(phone).css("boxShadow", "0 0 0 2px #ff6d6d");
    tmp7 = false;
  }
  else{
    $(phone).css("boxShadow", "none");
    tmp7 = true;
  }
  
  if(tmp1 == true && tmp2 == true && tmp3 == true && tmp4 == true && tmp5 == true && tmp6 == true && tmp7 == true){
    return true;
  }
  else{
    return false;
  }
}


$(document).ready(function(){
  var $header = $('.publicgoods-header');
  var $body = $('body');
  function stickHeader() {
    if($(window).width() < 737) {
      return false;
    }
    if($(window).scrollTop() >= 1) {
      if(!$header.hasClass('publicgoods-sticky-header')) {
      $header.addClass('publicgoods-sticky-header');
        $body.css('margin-top', $header.height()+'px');
      }
    } else {
        if($header.hasClass('publicgoods-sticky-header')) {
        $header.removeClass('publicgoods-sticky-header');
            $body.css('margin-top', '');
      }
    }
    
    
    if($(window).scrollTop() > 600) {
      if(!$header.hasClass('publicgoods-sticky-header-small')) {
      $header.addClass('publicgoods-sticky-header-small');
      }
    } else {
        if($header.hasClass('publicgoods-sticky-header-small')) {
        $header.removeClass('publicgoods-sticky-header-small');
      }
    }
  }
    
    stickHeader();
    
    $(window).scroll(stickHeader);
  
});

function setCartItem(item, data) {
  if(!$('body').hasClass('customer-logged-in')) {
    window.cookie_cart = [];
    if(typeof $.cookie('cookie_cart') !== 'undefined') {
      cookie_cart = JSON.parse($.cookie('cookie_cart'));
    }
    
    if(typeof cookie_cart[item] !== 'undefined') {
      cookie_cart["item_"+item].id = data.id;
      cookie_cart["item_"+item].quantity = data.quantity;
    } else {
      cookie_cart["item_"+item] = { id: data.id, quantity: data.quantity };
    }

    if(data.quantity < 1) {
      cookie_cart.splice(item, 1);
    }

//     console.log(cookie_cart);
//     console.log(JSON.stringify(cookie_cart));

    $.cookie('cookie_cart', JSON.stringify(cookie_cart), { expires: 7, path: '/' });
  }
}

function setupCart() {
  var cookie_cart = JSON.parse($.cookie('cookie_cart'));
  eraseCookie('cookie_cart', { path: '/' });

  if(typeof cookie_cart != 'undefined') {
    $.each(cookie_cart, function(k,v) {
      $.ajax({
        type:'POST', 
        url:'/cart/add', 
        data: v, 
        dataType: 'json',
        success: function(data) {
        }
      });
    });
  }

}

$(document).ready(function(){
  if($('body').hasClass('customer-logged-in')) {
    //setupCart();
  }
  
  function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    if(clock == null) {
      return false;
    }
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);

      daysSpan.innerHTML = '0'+t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  var deadline = new Date('2017', '12' - 1, '24', '23', '59', '59');
  initializeClock('membership_clockdiv', deadline);
});

  function createCookie(name,value,days) {        if (days) { var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path=/";
        }

      function readCookie(name) { var nameEQ = name + "=";    var ca = document.cookie.split(';');
          for(var i=0;i < ca.length;i++) {
              var c = ca[i];
              while (c.charAt(0)==' ') c = c.substring(1,c.length);
              if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
          }
          return null;
      }    

      function eraseCookie(name) {     createCookie(name,"",-1);    
      }
$(document).ready(function(){
 
  
var getUrlParameter = function getUrlParameter(sParam) {
          var sPageURL = decodeURIComponent(window.location.search.substring(1)),
              sURLVariables = sPageURL.split('&'),
              sParameterName,
              i;

          for (i = 0; i < sURLVariables.length; i++) {
              sParameterName = sURLVariables[i].split('=');

              if (sParameterName[0] === sParam) {
                  return sParameterName[1] === undefined ? true : sParameterName[1];
              }
          }
      };
  
  var scrollTo = getUrlParameter('scroll_to'); 
  console.log("scroll");
  console.log(scrollTo);
  if(scrollTo) {
    console.log(scrollTo); 
    $("html, body").animate({ scrollTop: $('#'+scrollTo).offset().top }, 0);
    function func() {
            $("html, body").animate({ scrollTop: $('#'+scrollTo).offset().top }, 0);
        }
       // setTimeout(func, 1000);
  }
  
  var always_trial = getUrlParameter('always_trial');
//   var check_if_landing = 
  
  var partner = getUrlParameter('partner');


  var cust = $("#custAccountLink");
  
  if (cust){
    var custEmail = cust.attr("data-cust-email");
  }
  
  if (always_trial == "true" || window.location.href.indexOf("pages/video-landing") > -1 ){
    createCookie("always_trial", "true", 5);
  }
  
  var check_if_trial_mode = readCookie("always_trial");
    console.log("here");  
  if (check_if_trial_mode == "true"){
    console.log("good");
    var anchors = document.getElementsByTagName("a");

    for (var i = 0; i < anchors.length; i++) {
      var cur_link = anchors[i].href;
      if (cur_link.indexOf(".com/pages/membership")!="-1"){
        anchors[i].href = "https://www.publicgoods.com/pages/membership-trial";
      }
    }
  }
  
  var check_if_free_trial_button = readCookie("free_trial_button");
    console.log("here_button"); 
  console.log(check_if_free_trial_button); 
  check_if_free_trial_button = "false";
  if (check_if_free_trial_button == "true"){
    console.log("good");
    document.body.className += ' ' + 'free_trial';
    document.getElementById("logo").href = "/pages/free_trial";
    $(".free-trial-btn-li").addClass("active");
    $(".join-now").removeClass("active");
  }
  
  $(".free-trial-btn").click(function(event){
    event.stopPropagation();
    console.log("here");
    console.log($("#checkout_11118 a"));
    console.log($("#checkout_11118 a")[0]);

//     $("#checkout_11118 a")[0].click();

    });
   $(".join-btn").click(function(event){
//          event.stopPropagation();
     console.log($("#checkout_10641 a"));
          console.log($("#checkout_10641 a")[0]);
//       $("#checkout_10641 a")[0].click();

    });
  
})


$(document).ready(function(){
  $(".btn.btn-bold-secondary").html("See products");
      
  $(".btn.membuttonclick").click(function(){
      console.log("good");
    console.log($(".btn.btn-bold-secondary"));
//    window.location = "https://www.publicgoods.com/collections/all-products";
    });
//     $(".button-cta").click(function(){
//       var eventName = $(this).attr("data-label");
//        eventName = eventName.replace(/\s/g, '').toLowerCase(); 
//       console.log(eventName);
//     });
//     $(".btn.membuttonclick").click(function(){
//     });
  if(!window.location.pathname.includes('b2b') && !window.location.pathname.includes('account/login')) {
    eraseCookie('b2b_page', { path: '/' });
  }
  
  if(window.location.pathname.includes('b2b')) {
    $.cookie('b2b_page', 'yes', { expires: 7, path: '/' });
  }
  
  if(window.location.pathname.includes('account/login')) {
    
    if(typeof $.cookie('b2b_page') !== 'undefined') {
        $('input[name="checkout_url"]').val('/collections/b2b');
      eraseCookie('b2b_page', { path: '/' });
    }
  }
    
  
   function createCookie(name,value,days) {        if (days) { var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path=/";
        }
  
  createCookie("pageUrl", document.URL, 1);
  $(document).on("click", "button.boldmemsaveaccount", function(){
     createCookie("custEmail", $("#memmodal input.email").val(), 1);
  })
  
  $('#popup-first-name-32-45').select(function(){
    console.log('ay')
    $('#popup-first-name-32-45').addClass('importantBorderColor')
  })
  
//   const cardElement = document.getElementsByClassName('card-element')[0]

//     document.cardElement.addEventListener('gesturestart', 
//         function (event) 
//         {
//             event.preventDefault();
//         }, false);

  	
  	function getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split('&');
      for (var i = 0; i < vars.length; i++) {
          var pair = vars[i].split('=');
          if (decodeURIComponent(pair[0]) == variable) {
              return decodeURIComponent(pair[1]);
          }
      }
      return false;
  	};
  
  
    function setUtmForCheckout() {
      var checkoutUtm = {
        utm_source: getQueryVariable('utm_source') || 'checkout page',
        utm_campaign: getQueryVariable('utm_campaign') || 'checkout page',
        utm_medium: getQueryVariable('utm_medium') || 'checkout page',
        utm_term: getQueryVariable('utm_term') || 'checkout page'
      };
      let utm = getQueryVariable('utm_source') || getQueryVariable('utm_campaign') || getQueryVariable('utm_medium') || getQueryVariable('utm_term')
      if(readCookie('utmForCheckout') == null || utm)
      	createCookie('utmForCheckout', JSON.stringify(checkoutUtm), 1);
    };
  
  	setUtmForCheckout();
  
  });

// Close cart when serach is clicked

$(".desktop-search-container").click(function() {
     timber.RightDrawer.close()
     $(".input-group-field").focus()
})



  $.initialize("#bold-mem-modal-content-11118", function() {
    console.log("here");
    $("h4#modalPlanName").css("display", "none");
    $("#lang_create_account_msg_11118").css("display", "none");
    $("#lang_cancel_11118").css("display", "none");

    $('<h4 class="modal-title" id="modalPlanNameChg">Free 30-day trial membership</h4>').insertAfter( ".modal-header button" );

    $("#bold-mem-modal-content-11118 .modal-body" ).prepend( '<ul id="wrap-list"></ul>' );      
      $("#wrap-list").prepend( '<li><img src="https://cdn.shopify.com/s/files/1/0838/7991/files/ok-img.png?978758818043245235" alt="ok">Cancel anytime.</li>' );
      $("#wrap-list").prepend( '<li><img src="https://cdn.shopify.com/s/files/1/0838/7991/files/ok-img.png?978758818043245235" alt="ok">New products every month.</li>' );
      $("#wrap-list").prepend( '<li><img src="https://cdn.shopify.com/s/files/1/0838/7991/files/ok-img.png?978758818043245235" alt="ok">Only $59/year after your free trial.</li>' );
      $("#wrap-list").prepend( '<li><img src="https://cdn.shopify.com/s/files/1/0838/7991/files/ok-img.png?978758818043245235" alt="ok">70% savings on average.</li>' );

    $('<p class="after-button-footer">Your card will not be charged for 30 days. Cancel anytime.</p>').insertAfter( "#boldMemSaveAccountStripe11118" );
  });

   $.initialize("#bold-mem-modal-content-10641", function() {
    $("h4#modalPlanName").css("display", "none");
    $("#lang_create_account_msg_10641").css("display", "none");
    $("#lang_cancel_10641").css("display", "none"); 
    $('<h4 class="modal-title" id="modalPlanNameChg">START YOUR MEMBERSHIP</h4>').insertAfter( ".modal-header button" );

    $("#bold-mem-modal-content-10641 .modal-body" ).prepend( '<ul id="wrap-list"></ul>' );      
      $("#wrap-list").prepend( '<li><img src="https://cdn.shopify.com/s/files/1/0838/7991/files/ok-img.png?978758818043245235" alt="ok">New products every month.</li>' );
      $("#wrap-list").prepend( '<li><img src="https://cdn.shopify.com/s/files/1/0838/7991/files/ok-img.png?978758818043245235" alt="ok">Free shipping on orders $25+.</li>' );
      $("#wrap-list").prepend( '<li><img src="https://cdn.shopify.com/s/files/1/0838/7991/files/ok-img.png?978758818043245235" alt="ok">One flat annual fee of $59.</li>' );
      $("#wrap-list").prepend( '<li><img src="https://cdn.shopify.com/s/files/1/0838/7991/files/ok-img.png?978758818043245235" alt="ok">70% savings on average (vs traditional retail).</li>' );

    $('<p class="after-button-footer">Healthy premium goods, direct to your door.</p>').insertAfter( "#boldMemSaveAccountStripe10641" );
  });

$.initialize("#boldMemSaveAccountStripe11118", function() {
    $("#boldMemSaveAccountStripe11118").text("Add Your card");
  });
$.initialize("#boldMemSaveAccountStripe10641", function() {
    $("#boldMemSaveAccountStripe10641").text("Add Your card");
  });



// Smooth Scrolling
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });

// Navbar hide on scroll down
$(document).ready(function () {
  
  'use strict';
  
   var c, currentScrollTop = 0,
       navbar = $('nav');

   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();
     
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
      }
      c = currentScrollTop;
  });
  
});

// Input Mask
$(document).ready(function() {
  $('#phoneNumber').mask('(000) 000-0000');
  $('#ccNumber').mask('0000 0000 0000 0000');
  $('#expDate').mask('00/00');
  $('#zipCode').mask('00000');
  
});


// Form Validation
$.validator.addMethod("valueNotEquals", function(value, element, arg) {
  return arg !== value;
}, "Value must not equal arg.");



$().ready(function() {
  $("#paymentForm").validate({
    rules: {
      // First Name
      firstName: {
        required: true,
        minlength: 2,
        maxlength: 35
      },
      // Last Name
      lastName: {
        required: true,
        minlength: 2,
        maxlength: 35
      },
      // Email
      email: {
        required: true,
        email: true
      },
      // US Phone
      phoneNumber: {
        required: true,
        phoneUS: true,
        digits: true
      },
      // CC
      ccNumber: {
        required: true,
        creditcard: true,
        digits: true
      },
      expDate: {
        required: true
      },
      // Address
      streetAddress: {
        required: true
      },
      cityAddress: {
        required: true
      },
      stateAddress: {
        valueNotEquals: ""
      },
      zipCode: {
        required: true,
        digits: true,
        minlength: 5,
        maxlength: 5
      }
    },
    messages: {
      // First Name
      firstName: {
        required: '<small class="text-danger">First Name is required</small>'
      },
      // Last Name
      lastName: {
        required: '<small class="text-danger">Last Name is required</small>'
      },
      // email
      email: {
        required: '<small class="text-danger">Email is required</small>',
        email: '<small class="text-danger">Please enter a valid email address.</small>'
      },
      // US Phone
      phoneNumber: {
        required: '<small class="text-danger">A US Phone Number is required</small>',
        phoneUS: '<small class="text-danger">Please specify a valid phone number</small>'
      },
      // CC
      ccNumber: {
        required: '<small class="text-danger">A Card is required</small>',
        creditcard: '<small class="text-danger">Please enter a valid credit card number</small>'
      },
      expDate: {
        required: '<small class="text-danger">Expiration Date is required</small>'
      },
      // Address
      streetAddress: {
        required: '<small class="text-danger">Street Address is required</small>'
      },
      cityAddress: {
        required: '<small class="text-danger">City is required</small>'
      },
      stateAddress: {
        valueNotEquals: '<small class="text-danger">Please select a state</small>'
      },
      zipCode: {
        required: '<small class="text-danger">Zip Code is required</small>',
        digits: '<small class="text-danger">Must contain numbers</small>',
        minlength: '<small class="text-danger">Zip Code Must Be 5 Digits</small>',
        maxlength: '<small class="text-danger">Zip Code Must Be 5 Digits</small>'
      }

    },
    submitHandler: function(form) {
      // some other code
      // maybe disabling submit button
      // then:
      // $(form).submit();
    }
  });
})



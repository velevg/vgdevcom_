$(document).ready(function () {

  //dat clock tho
  function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
  }

  showTime();
  /* #MOUSE TRAIL
   ================================================== */
  let point = [],
    mouse = {
      a: 0,
      b: 0,
    };

  let Points = function () {
    this.a = 0;
    this.b = 0;
    this.node = (function () {
      let m = document.createElement("div");
      m.className = "mouse-trail";
      document.body.appendChild(m);
      return m;
    })();
  };

  Points.prototype.draw = function () {
    this.node.style.left = this.a + "px";
    this.node.style.top = this.b + "px";
  };

  for (let i = 0; i < 100; i++) {
    let h = new Points();
    point.push(h);
  }

  function draw() {
    let a = mouse.a,
      b = mouse.b;

    point.forEach(function (points, index, point) {
      let mark = point[index + 1] || point[0];

      points.a = a;
      points.b = b;
      points.draw();
      a += (mark.a - points.a) * 0.5;
      b += (mark.b - points.b) * 0.5;
    });
  }

  addEventListener("mousemove", (e) => {
    mouse.a = e.pageX;
    mouse.b = e.pageY;
  });

  function animation() {
    draw();
    requestAnimationFrame(animation);
  }

  animation();
  /* #MOUSE TRAIL OVER
  ================================================== */
  /* #H1 Blob effect?
  ================================================== */
  let square = document.getElementsByClassName("letter");

  for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("mouseenter", function () {
      this.classList.add("rubberBand");
      this.addEventListener(
        "animationend",
        function () {
          this.classList.remove("rubberBand");
        },
        false
      );
    });
  }
  /* #H1 Blob effect? END
  ================================================== */
  /* #MAIN SECTIONS START
  ====================================*/
  (function ($) {
    "use strict";

    //Main section
    $(".main-link").on("click", function () {
      $("body").addClass("main-on");
      $("body").removeClass("about-on");
      $("body").removeClass("skills-on");
      $("body").removeClass("portfolio-on");
      $("body").removeClass("contact-on");
    });
    $(".about-close").on("click", function () {
      $("body").removeClass("about-on");
    });

    //About section
    $(".about-link").on("click", function () {
      $("body").addClass("about-on");
      $("body").removeClass("skills-on");
      $("body").removeClass("portfolio-on");
      $("body").removeClass("contact-on");
    });
    $(".about-close").on("click", function () {
      $("body").removeClass("about-on");
    });

    $(".avatar").on("click", function () {
      $("body").addClass("main-on");
      $("body").removeClass("about-on");
    });

    //Skills section
    $(".skills-link").on("click", function () {
      $("body").addClass("skills-on");
      $("body").removeClass("about-on");
      $("body").removeClass("portfolio-on");
      $("body").removeClass("contact-on");
    });
    $(".skills-close").on("click", function () {
      $("body").removeClass("skills-on");
    });

    //Portfolio section
    $(".portfolio-link").on("click", function () {
      $("body").addClass("portfolio-on");
      $("body").removeClass("about-on");
      $("body").removeClass("skills-on");
      $("body").removeClass("contact-on");
    });
    $(".portfolio-close").on("click", function () {
      $("body").removeClass("portfolio-on");
    });

    //Contact section
    $(".contact-link").on("click", function () {
      $("body").addClass("contact-on");
      $("body").removeClass("about-on");
      $("body").removeClass("skills-on");
      $("body").removeClass("portfolio-on");
    });
    $(".contact-close").on("click", function () {
      $("body").removeClass("contact-on");
    });

    //CONTACT ME BUTTON
    $(".contact-me-button").on("click", function () {
      $("body").addClass("contact-on");
    });

    //BLOG SECTIONS START
    //BLOG Main Section
    $(".main-link-blog").on("click", function () {
      $("body").addClass("blog-section-on");
      $("body").removeClass("relational-database-basics-on");
      $("body").removeClass("fundamentals-of-html5-css3-on");
      $("body").removeClass("advanced-design-techniques-on");
    });
    //RDB Section
    $(".rdb-card").on("click", function () {
      $("body").addClass("relational-database-basics-on");
    });
    //FHC Section
    $(".fhc-card").on("click", function () {
      $("body").addClass("fundamentals-of-html5-css3-on");
    });
    //ADT Section
    $(".adt-card").on("click", function () {
      $("body").addClass("advanced-design-techniques-on");
    });
    //BLOG SECTIONS END
  })(jQuery);
  /* #MAIN SECTIONS END
  ====================================*/
  /* #CONTACT NOTIFICAION
   ================================================== */
  $("button").click(function () {
    $("body, button, input, .notification").addClass("active");
    setTimeout(function () {
      $("body, button").removeClass("active");
    }, 1200);
  });

  $(".notification").click(function () {
    $(".notification, input").removeClass("active");
  });
  /* #CONTACT NOTIFICAION END
   ================================================== */
  /* #Animation trigger
   ================================================== */
  $(".about-link").click(function () {
    $(".bar-fill").hide();
  });
  $(".skills-link").click(function () {
    $(".bar-fill").show();
  });
  $(".portfolio-link").click(function () {
    $(".bar-fill").hide();
  });
  $(".contact-link").click(function () {
    $(".bar-fill").hide();
  });
  /* #Animation trigger END
   ================================================== */
  /* POP UP NOTIFICATION
   ================================================== */
  $(function () {
    $(".pop-up").hide();
    setTimeout(() => {
      $(".cover").addClass("blur-in");
      $(".pop-up").fadeIn(1000);
    }, 2000);

    $(".close-button").click(function (e) {
      $(".pop-up").fadeOut(700);
      $(".cover").removeClass("blur-in");
      $(".cover").addClass("blur-out");
      e.stopPropagation();
    });
  });
  /* POP UP NOTIFICATION END
   ================================================== */
  /* #Opens article on click in Portfolio
   ================================================== */
  /*
  $(".articles > article").on("click", function () {
    $(this).toggleClass("article:hover").siblings().toggleClass(".articles");
  });
  /* #Opens article on click in Portfolio END
   ================================================== */
  $('a').each(function () {
    $(this).on('click', function (e) {
      window.addEventListener('hashchange', () => window.history.pushState({}, '',
        '/'), {});
    })
  })
  const docTitle = document.title;
  $(window).on({
    blur: function () { document.title = "Hey, come back :)"; },
    focus: function () { document.title = docTitle; }
  });
});
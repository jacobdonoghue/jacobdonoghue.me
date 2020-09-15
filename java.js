window.onload=function(){
    console.log('loaded');
    // nav bar options
    $( '#contact').on( 'click', function(e){
        console.log('contact clicked');
        var elmnt = document.getElementById("contact-div");
        elmnt.scrollIntoView({behavior: "smooth"});
    });

    $( '.fake-button').on( 'click', function(e){
        console.log('clicked');
        var elmnt = document.getElementById("intro-div");
        elmnt.scrollIntoView({behavior: "smooth"});
    });

    $( '#about-me').on( 'click', function(e){
        console.log('about-me clicked');
        var elmnt = document.getElementById("intro-div");
        elmnt.scrollIntoView({behavior: "smooth"});
    });
    $( '#experience').on( 'click', function(e){
        console.log('experience clicked');
        var elmnt = document.getElementById("experience-div");
        elmnt.scrollIntoView({behavior: "smooth"});
    });

    $( '#portfolio').on( 'click', function(e){
        console.log('clicked');
        var elmnt = document.getElementById("portfolio-div");
        elmnt.scrollIntoView({behavior: "smooth"});
    });

    // enable autoscroll
    $( '#arrows').on( 'click', function(e){
        var elmnt = document.getElementById("experience-div");
        elmnt.scrollIntoView({behavior: "smooth"});
    });

    $( '#portfolio-title').on( 'click', function(e){
        var elmnt = document.getElementById("portfolio-div");
        elmnt.scrollIntoView({behavior: "smooth"});
    });

    /// MODALS
    $('#aptitune').on('click', function(e){
        console.log('aptitune clicked');
        $("#aptitune-modal").css("display","block");
    });

    $('#covid').on('click', function(e){
        console.log('covid clicked');
        $("#covid-modal").css("display","block");
    });
    
    $('#sudoku').on('click', function(e){
        console.log('sudoku clicked');
        $("#sudoku-modal").css("display","block");
    });

    $('#search-engine').on('click', function(e){
        console.log('search clicked');
        $("#search-modal").css("display","block");
    });

    $('.x-out').on('click', function(e){
        console.log('x-out clicked');
        $("#aptitune-modal").css("display", "none");
        $("#covid-modal").css("display","none");
        $("#sudoku-modal").css("display","none");
        $("#search-modal").css("display","none");
    });
}

hide = () => {
    /*console.log('clicked');
    $(".about").hide();
    $(".experience").hide();
    $(".portfolio").hide();
    $(".contact").hide();*/
}
// This is for able to see chart. We are using Apex Chart. U can check the documentation of Apex Charts too..
var options = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  chart: {
    type: "bar",
    height: 250, // make this 250
    sparkline: {
      enabled: true, // make this true
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};



// Sidebar Toggle Codes;

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

function toggleSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar_responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar_responsive");
    sidebarOpen = false;
  }
}


loadFile = (event) => {
  var image = document.getElementById('output');
  image.src = URL.createObjectURL(event.target.files[0]);
}











jQuery(document).ready(function (e) {
    function t(t) {
        e(t).bind("click", function (t) {
            t.preventDefault();
            e(this).parent().fadeOut()
        })
    }
    e(".dropdown-toggle").click(function () {
        var t = e(this).parents(".table th").children(".dropdown-menu").is(":hidden");
        e(".table th .dropdown-menu").hide();
        e(".table th .dropdown-toggle").removeClass("active");
        if (t) {
            e(this).parents(".table th").children(".dropdown-menu").toggle().parents(".table th").children(".dropdown-toggle").addClass("active")
        }
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".table th .dropdown-toggle").removeClass("active");
    })
});

//*******************
//table column select
//*******************
$("body").on("click", "a", function(e) {
		$(".over").removeClass("selected");
    $(this).toggleClass("selected");
	return false;
});

//***********
//slidey bits
//***********
var colWidth = 200;
function initialWidth(){
	var $th = $('.table thead tr').children()
	var tableWidth = $th.first().width() * $th.length;
	if(tableWidth <= $('.slide-wrap').width()){
		$('.table-nav').hide();
		$('.slide-wrap').removeClass('shadow');
	}	else {
		$('.table-nav').show();
		$('.slide-wrap').addClass('shadow');
	}
}
initialWidth();	
$(window).resize(function(){
	initialWidth();	
});

	

		$('.table-nav .btn').mousedown(function(event) {
			event.preventDefault();
		});
    
    $('#left').addClass('hide');
    $('.slide-wrap').scroll( function(event) {
			event.preventDefault();
			if($('.slide-wrap').scrollLeft() > 0 ){
				$('#left').removeClass('hide');
			} else {
				$('#left').addClass('hide');
			}
			if ( $(".slide-wrap").outerWidth() + $('.slide-wrap').scrollLeft() > $('.slide-wrap').get(0).scrollWidth) {
           $('#right').addClass('hide'); 
				$('.slide-wrap').removeClass('shadow');
        } else {
					 $('#right').removeClass('hide'); 
									$('.slide-wrap').addClass('shadow');
				}
    });
    $('#right').click(function(event) {
        event.preventDefault();
        
        $t = $('.slide-wrap');
        $t.animate({scrollLeft:'+=' + colWidth}, 'fast');
        console.log('what is the value, true? %s', $t.scrollLeft() + colWidth*2);
				if ($t.scrollLeft() + colWidth*2  >= $t.width()){
            $(this).addClass('hide');
				}
        else {
            $('#left').removeClass('hide');
            $(this).removeClass('hide');
        }
    });
    
    $('#left').click(function(event) {
        event.preventDefault();
        
        $t = $('.slide-wrap');
        $t.animate({scrollLeft:'-=' + colWidth}, 'fast');
        
        if ($t.scrollLeft() <= colWidth)
            $(this).addClass('hide');
        else {
            $(this).removeClass('hide');
            $('#right').removeClass('hide');
        }
    });
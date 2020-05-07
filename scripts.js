
let array = [
    {
        picture: "url('pictures/1Lena.jpg')",
        title: "Léna",
        hint: "Chateau de Chambord",
        descr: "Léna méricskéli a fotós bácsit"
    }, 
    /*{
        picture: "url('pictures/4Abi.jpg')",
        title: "Abigél",
        hint: "Tower Bridge",
        descr: "Abi téglát pakol"
    },*/
    {
        picture: "url('pictures/2Lena.jpg')",
        title: "Léna",
        hint: "Goðafoss",
        descr: "Léna spárgázik, mint Van Damme"
    },
    /*{
        picture: "url('pictures/3SzaboEvi.jpg')",
        title: "Évici & Szabó",
        hint: "Manhattan",
        descr: "Valamelyik karácsony"
    },
    {
        picture: "url('pictures/5GyorgyiDavid.jpg')",
        title: "Györgyi & Dávid",
        hint: "cable car",
        descr: "Talán Zsolti esküvőjén- Pápa"
    },
    {
        picture: "url('pictures/7RekaBalazs.jpg')",
        title: "Réka & Balázs",
        hint: "Stockholm",
        descr: "Györgyi és Dávid esküvőjén 2011.01.15-én :)"
    },
    {
        picture: "url('pictures/6Mama.jpg')",
        title: "Mama",
        hint: "Stonehenge",
        descr: "Pápán Mama Zsoltival és Petrával."
    },*/
];

let index = 0;
let hintTop = -45;
let HintLeft = 455;

function refresh (index) {
    $(".pictures").css ("background-image", array[index].picture);
    $(".pictures>.text>h1").text (array[index].title); 
    $(".pictures>.text>p").text (array[index].descr);

}

function imgHandler (event) {
    console.log ("ImgHandler meghivodtam");

    index = $(this).data('big');
    $(this).parent().parent().find('.thumbnail').removeClass('activethumbnail');
    $(this).addClass('activethumbnail');
    refresh (index);
}

function leftHandler (event) {
    console.log ("leftHandler meghivodtam");

    if (index === 0) {
            index = array.length - 1;
            $(".thumbnails").children().last().children().first().trigger("click");
    } else {
        index--;
        $(".activethumbnail").parent().prev().children().first().trigger("click");
    }
    
    //refresh (index);
}

function rightHandler (event) {
    console.log ("rightHandler meghivodtam");
    if (index < array.length-1) {
        index++;
        $(".activethumbnail").parent().next().children().first().trigger("click");
    } else {
        index = 0;
        $(".thumbnails").children().first().children().first().trigger("click");
    }
    //refresh (index);
}

function hoverOn (event)  {
    console.log ("hoverOn meghivodtam");
    hovered = $(this).data('big');
    $(".hint").text (array[hovered].hint);
    let leftInitial = 451;
    let thumbnailWidth = 75+4+4;
    let left = leftInitial + hovered * (thumbnailWidth + 5);



    //let positionString = "{top: -45px, left: " + left + "px, position:'absolute'}";
    //$(".hint").css (positionString);
    $(".hint").css ({top: -45 + "px", left: left + "px"});
    //$(".hint").css("display", "block");
    $(".hint").show();
    //$("#mydiv").css({top: 200, left: 200, position:'absolute'});
    console.log (left);
    
}

function hoverOff (event)  {
    console.log ("hoverOff meghivodtam");
    $(".hint").hide();
}


$(".thumbnail").on ("click", imgHandler);
$(".arrow.right").on ("click", rightHandler);
$(".arrow.left").on ("click", leftHandler);
$(".thumbnail").on ("mouseenter", hoverOn);
$(".thumbnail").on ("mouseleave", hoverOff);

$('.thumbnail.first').trigger ("click");


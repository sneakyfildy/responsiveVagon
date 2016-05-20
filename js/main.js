var aspect = 5.5;
var sc = {};
var ppl = [
    {
        name    : 'Person 1',
        seat: 1
    },
    {
        name    : 'Person 2',
        seat: 2
    },
    {
        name    : 'Person 3',
        seat: 3
    },
    {
        name    : 'Person 4',
        seat: 6
    },
    {
        name    : 'Person 5',
        seat: 7
    },
    {
        name    : 'Person 6',
        seat: 8
    },
    {
        name    : 'Person 7',
        seat: 10
    },
    {
        name    : 'Person 8',
        seat: 12
    },
    {
        name    : 'Person 9',
        seat: 13
    },
    {
        name    : 'Person 10',
        seat: 15
    },
    {
        name    : 'Person 11',
        seat: 29
    },
    {
        name    : 'Person 12',
        seat: 33
    },
    {
        name    : 'Person 13',
        seat: 47
    },
    {
        name    : 'Person 14',
        seat: 51
    }
];
$(window).on('resize', scheduleSizeImage);
$(document).ready(init);


function init(){
    initListeners();
    sizeVagon();
    startScheme();


    window.goal = new Date(2017, 7, 24);
    window.stopTimer = false;

    var $inProgress = $('.in-progress');;

    if ( goal > new Date() ){
        tick();
    }

    $inProgress.text($inProgress.text() + ' Counting till ' +
        goal.getFullYear() + '-' +
        twoDigitMe(goal.getMonth(), true) + '-' +
        twoDigitMe(goal.getDate(), true)
    );
}
function sizeVagon(){
    var $vagon = $('.scheme');

    $vagon.each(function(){
        $(this).height( $(this).width() / aspect );
    });

    window.abortSize = false;
}

function scheduleSizeImage(){
    if ( window.abortSize )
        return;

    window.abortSize = true;

    setTimeout(function(){
        sizeVagon();
    }, 100);
}



function tick(){
    var html,
        ct = new Date()
    ,t = goal - ct;

    if ( t > 0 && !stopTimer ){
        t = parseTime(t);

        for ( var i in t ){
            html = '';
            for ( var j in t[i] ){
                html += '<span class="d">' + t[i][j] + '</span>';
            }
            $('.' + i).html(html);
        }
        setTimeout(tick, 100);
    }
}

function parseTime(ts){
    var days	= 24*60*60*1000,
    hours	= 60*60*1000,
    minutes	= 60*1000,
    seconds = 1000;

    var d = Math.floor(ts / days)
        ,d_obj = threeDigitMe(d);
    ts -= d * days;

    var h = Math.floor(ts / hours)
        ,h_obj = twoDigitMe(h);
    ts -= h * hours;

    var m = Math.floor(ts / minutes)
        ,m_obj = twoDigitMe(m);
    ts -= m * minutes;

    var s = Math.floor(ts / seconds)
        ,s_obj = twoDigitMe(s);
    ts -= s * seconds;

    ts = twoDigitMe( Math.floor( ts / 100 ) % 100 );

    return {
        days:d_obj,
        hours:h_obj,
        mins:m_obj,
        secs:s_obj,
        msecs:ts
    };
}

function twoDigitMe( n, glue ){
    var res = {
        d1 : String( Math.floor( n / 10 ) % 10 ),
        d2: String ( n % 10 )
    };
    return  glue ? (res.d1 + res.d2) : res;
}

function threeDigitMe( n, glue ){
    var res = {
        d1 : String( Math.floor( n / 100 ) % 10 ),
        d2 : String( Math.floor( n / 10 ) % 10 ),
        d3: String ( n % 10 )
    };
    return  glue ? (res.d1 + res.d2 + res.d3) : res;
}

function oneDigitMe( n ){
    return {
        d1: String( Math.floor( n / 100 ) % 100 )
    };
}

function initListeners(){
    $(document).on('click', '.seat', onSeatClick);
}

function startScheme(){
    $('.scheme').each(function(){
        var $scheme = $(this)
            ,vagonId = $scheme.prop('id');
        sc[vagonId] = {};
        sc[vagonId].seats = {};
        $scheme.find('.seat').each(function(){
            var $seat = $(this);
            sc[vagonId].seats[ $seat.attr('data-seat') ] = $seat;
        });
    });

    processScheme();
}

function processScheme(){
    var seats;
    for ( var vagonId in sc ){
        seats = sc[vagonId].seats;
        var pax;
        for ( var seatNumber in seats ){
            pax = ppl.filter(function(item){return item.seat + '' === seatNumber + '';})[0];
            if ( !!pax ){
                addPplToseat( pax, seats[seatNumber] );
            }
        }
    }
}

function addPplToseat(ppl, $seat){
    var $pplTmpl = $('#pplTmpl').clone();
    $pplTmpl.html( ppl.name );

    $seat.removeClass('inactive');
    $seat.append($pplTmpl);

    $pplTmpl.removeClass('hidden');
    $pplTmpl.removeAttr('id');

    if ( ppl.link ){
        $seat.attr('data-href', ppl.link);
    }
}


function onSeatClick(){
    var link = $(this).attr('data-href');
    link && window.open(link);
}
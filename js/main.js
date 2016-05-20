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
    sizeVagon();
    startScheme();
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
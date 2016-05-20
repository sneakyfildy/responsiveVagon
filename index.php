<?php
$path = '/var/www/vhosts/feeldeeng.v.shared.ru/httpdocs/include';
set_include_path(get_include_path() . PATH_SEPARATOR . $path);
require 'htmlInserts.inc';
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js"> <!--<![endif]-->
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <title>RespoWagon</title>
        <link rel="stylesheet" href="css/styles.css">
        <?php echo insertCommonJS(); ?>
        <script src="js/modernizr-2.6.1-respond-1.1.0.min.js"></script>
        <script src="js/main.js"></script>
        <link href='http://fonts.googleapis.com/css?family=Russo+One&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Cinzel+Decorative' rel='stylesheet' type='text/css'>
    </head>

    <body>
        <div id="container">
            <div class="center mainContent">
                <div class="header">
                    <div class="logo">
                    <a href="" title="This link is leading you to nowhere...">
                        <span class="top-logo-text">Responsive</span>
                        <span class="down-logo-text">wagon</span>
                    </a>
                    </div>
                </div>
                <br/>
                <div id="vagon9" class="scheme">
                    <div class="top-vagon">
<?php
    $i = 1;
    $seat = 0;
    $lSeats = 55;
    while ($i < 10) {
        echo '<div id="block-' . $i . '" class="vagon-block">
            <div class="wall t l"></div>
            <div class="block-seat l">
                <div class="top inactive seat" data-seat="' . ( $seat + 2 ) . '"><span class="seat-number">' . ( $seat + 2 ) . '</span></div>
                 <div class="down inactive seat" data-seat="' . ( ++$seat ) . '"><span class="seat-number">' . ( $seat ) . '</span></div>
            </div>
            <div class="block-seat r">
                <div class="top inactive seat" data-seat="' . ( ++$seat + 2 ) . '"><span class="seat-number">' . ( $seat + 2 ) .'</span></div>
                <div class="down inactive seat" data-seat="' . ( ++$seat ) . '"><span class="seat-number">' . ( $seat ) .'</span></div>
            </div>
            <div class="wall t r"></div>
            <div class="wall d l"></div>
            <div class="block-seat d">
                <div class="top inactive seat" data-seat="' . --$lSeats . '"><span class="seat-number">'. $lSeats .'</span></div><div class="down inactive seat" data-seat="' . --$lSeats . '"><span class="seat-number">'. $lSeats .'</span></div></div>
            <div class="wall d r"></div>
            </div>
            ';
        $i++;
        $seat++;
    }
?>

                    </div>
                </div>

            </div>
            <div id="no-ie-pls">
                <div>No Internet Explorer. <BR/><span style="font-size:60px">Go get normal browser</span></div>
                <ul>
                    <li><a href="https://www.google.com/intl/ru/chrome/browser/">Google Chrome</a></li>
                    <li><a href="http://www.mozilla.org/en-US/firefox/new/">Mozilla Firefox</a></li>
                    <li><a href="http://www.opera.com/computer">Opera Browser</a></li>
                </ul>
            </div>
        </div>

        <div class="done caption">
            <p>This is a scheme of a typical "economy-class" russian railway wagon</p>
            <p>Markup generation is automated and is done in one cycle of 10 steps</p>
        </div>
<!--        <p class="in-progress" style="text-align:center;">
            Some random counter.
        </p>
        <div id="countdown">
            <div id="timer-container">
                <span class="d-block">
                    <span class="days"></span>

                </span>
                <span class="d-block">
                    <span class="hours"></span>

                </span>
                <span class="d-block">
                    <span class="mins"></span>

                </span>
                <span class="d-block">
                    <span class="secs"></span>

                </span>
                <span class="d-block">
                    <span class="msecs"></span>

                </span>
            </div>
        </div>-->

        <div id="pplTmpl" class="pplTmpl ppl hidden"></div>
        <script type="text/javascript">

        </script>
    </body>
</html>


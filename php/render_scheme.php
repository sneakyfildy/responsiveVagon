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
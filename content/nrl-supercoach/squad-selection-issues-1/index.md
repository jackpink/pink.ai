---
title: "Squad Selection Issues: Part 1"
date: "2023-03-11T11:00:00.121Z"
description: "Figuring out why the algorithm makes the often strange decisions it does."
---

## Squad Selection issues: Part 1

**Another** year, another diastrous SC squad selection.

This year though I have decided to take a deep dive into my squad selection algorithm to disect why it so crap and to try make it better.

There are two main parts to the algorithm
- Part 1: Picking Cheapies
- Part 2: Picking Guns

To start I will focus on the picking guns side of the algorithm, which is more interesting. Picking cheapies is essentially picking rookies and cheap players that are playing round 1 (will visit this later).

After running part 1 of the algorithm the following cheapies have been added to the squad.


<aside markdown="1">
<h3 style="font-family: Arial;"> HOK </h3>
<div class="players">

<div class="empty-player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;"> Empty</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="width: 65px; display: inline-block;"></div>
<p style="margin: 0px; font-size:xx-large; font-weight: bolder; display: inline-block;">+</p>
</div>
</div>

<div class="empty-player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;"> Empty</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="width: 65px; display: inline-block;"></div>
<p style="margin: 0px; font-size:xx-large; font-weight: bolder; display: inline-block;">+</p>
</div>
</div>

</div>

<h3 style="font-family: Arial;"> FRF </h3>
<div class="players">

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">S. Keppie</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: #800000; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: #800000; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">MNL</p>
<p style="margin: 0px; font-family:Arial;">$ 274, 800</p>
</div>
</div>
</div>
</div>

<div class="empty-player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;"> Empty</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="width: 65px; display: inline-block;"></div>
<p style="margin: 0px; font-size:xx-large; font-weight: bolder; display: inline-block;">+</p>
</div>
</div>

<div class="empty-player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;"> Empty</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="width: 65px; display: inline-block;"></div>
<p style="margin: 0px; font-size:xx-large; font-weight: bolder; display: inline-block;">+</p>
</div>
</div>

<div class="empty-player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;"> Empty</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="width: 65px; display: inline-block;"></div>
<p style="margin: 0px; font-size:xx-large; font-weight: bolder; display: inline-block;">+</p>
</div>
</div>

</div>

<h3 style="font-family: Arial;"> SRF </h3>
<div class="players">

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">J. Preston</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">BUL</p>
<p style="margin: 0px; font-family:Arial;">$ 200, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">B. Cartwright</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: yellow; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">PAR</p>
<p style="margin: 0px; font-family:Arial;">$ 234, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">S. Blore</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: orange; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: black; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">WST</p>
<p style="margin: 0px; font-family:Arial;">$ 234, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">M. Doorey</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: yellow; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">PAR</p>
<p style="margin: 0px; font-family:Arial;">$ 234, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">P. Saulo</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: #00FF00; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: #00FF00; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">CBR</p>
<p style="margin: 0px; font-family:Arial;">$ 243, 000</p>
</div>
</div>
</div>
</div>

<div class="empty-player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;"> Empty</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="width: 65px; display: inline-block;"></div>
<p style="margin: 0px; font-size:xx-large; font-weight: bolder; display: inline-block;">+</p>
</div>
</div>

</div>

<h3 style="font-family: Arial;"> HLB </h3>
<div class="players">

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">B. Trindall</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: #55ffff; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: #55ffff; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">SHA</p>
<p style="margin: 0px; font-family:Arial;">$ 234, 800</p>
</div>
</div>
</div>
</div>

<div class="empty-player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;"> Empty</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="width: 65px; display: inline-block;"></div>
<p style="margin: 0px; font-size:xx-large; font-weight: bolder; display: inline-block;">+</p>
</div>
</div>

</div>

<h3 style="font-family: Arial;"> 5/8 </h3>
<div class="players">

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">I. Katoa</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: red; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: red; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">DOL</p>
<p style="margin: 0px; font-family:Arial;">$ 216, 100</p>
</div>
</div>
</div>
</div>

<div class="empty-player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;"> Empty</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="width: 65px; display: inline-block;"></div>
<p style="margin: 0px; font-size:xx-large; font-weight: bolder; display: inline-block;">+</p>
</div>
</div>

</div>

<h3 style="font-family: Arial;"> CTW </h3>
<div class="players">

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">P. Alamoti</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">BUL</p>
<p style="margin: 0px; font-family:Arial;">$ 200, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">W. Warbrick</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: purple; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: purple; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">MEL</p>
<p style="margin: 0px; font-family:Arial;">$ 200, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">A. Khan-Pereira</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: #6fa8dc; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: yellow; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: #6fa8dc; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">GCT</p>
<p style="margin: 0px; font-family:Arial;">$ 200, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">H. Hunt</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: red; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: red; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">NEW</p>
<p style="margin: 0px; font-family:Arial;">$ 234, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">B. Wiliame</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: black; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: grey; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: black; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">NZW</p>
<p style="margin: 0px; font-family:Arial;">$ 234, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">H. Smith-Shields</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: #00FF00; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: #00FF00; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">CBR</p>
<p style="margin: 0px; font-family:Arial;">$ 300, 300</p>
</div>
</div>
</div>
</div>

<div class="empty-player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;"> Empty</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="width: 65px; display: inline-block;"></div>
<p style="margin: 0px; font-size:xx-large; font-weight: bolder; display: inline-block;">+</p>
</div>
</div>

</div>

<h3 style="font-family: Arial;"> FLB </h3>
<div class="players">

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">C. Allan</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: red; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">SYD</p>
<p style="margin: 0px; font-family:Arial;">$ 258, 100</p>
</div>
</div>
</div>
</div>

<div class="empty-player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;"> Empty</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="width: 65px; display: inline-block;"></div>
<p style="margin: 0px; font-size:xx-large; font-weight: bolder; display: inline-block;">+</p>
</div>
</div>

</div>
</aside>

The total cost of the selected players is $3,504,300

I now have $7,945,700 left and 10 squad positions to fill with gun players. I want the players who will give us the highest scores week in week out.

To achieve this I have an algorithm that will maximise value of leftover players within the remaining budget. You can read more about that here ******. How do I judge a player's value? I'll get tot that later

Running this algorithm for the remaining 10 players with a budget of $7,945,700 we get



<aside markdown="1">
<table style="text-align: center; font-family: Arial; background-color: #C8C9C9; padding: 13px;">
  <tr style="hover {background-color: coral;}; background-color: #494B4C; color: white; ">
    <th style="border: 1px solid black;">Player</th>
    <th style="border: 1px solid black;">Position</th>
    <th style="border: 1px solid black;">Price</th>
  </tr>
  <tr style="border: 1px solid black;">
   <td>C. Munster </td>
   <td>5/8</td>
   <td>$848,300 </td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>I. Papalii</td>
    <td>SRF</td>
    <td>$831,700</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>H. Grant</td>
    <td>HOK</td>
    <td>$816,500</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>D. Brown</td>
    <td>5/8</td>
    <td>$781,300</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>V. Holmes</td>
    <td>CTW</td>
    <td>$724,600</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>C. Gutherson</td>
    <td>FLB</td>
    <td>$717,300</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>A. Johnson</td>
    <td>CTW</td>
    <td>$713,200</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>K. Koloamatangi</td>
    <td>SRF</td>
    <td>$701,000</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>J. Tapine</td>
    <td>FRF</td>
    <td>$699,500</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>R. Robson</td>
    <td>HOK</td>
    <td>$678,200</td>
  </tr>
</table>
</aside>


You will notice at a glance, that some positions will become full and I will not be able to add all these players to the squad. But I just go ahead anyway and start adding these players.


<aside markdown="1">
<table style="text-align: center; font-family: Arial; background-color: #C8C9C9; padding: 13px;">
  <tr style="hover {background-color: coral;}; background-color: #494B4C; color: white; ">
    <th style="border: 1px solid black;">Player</th>
    <th style="border: 1px solid black;">Position</th>
    <th style="border: 1px solid black;">Price</th>
    <th style="border: 1px solid black;">Status</th>
  </tr>
  <tr style="border: 1px solid black;">
   <td>C. Munster </td>
   <td>5/8</td>
   <td>$848,300 </td>
   <td style="color: green;">Added</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>I. Papalii</td>
    <td>SRF</td>
    <td>$831,700</td>
    <td style="color: green;">Added</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>H. Grant</td>
    <td>HOK</td>
    <td>$816,500</td>
    <td style="color: green;">Added</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>D. Brown</td>
    <td>5/8</td>
    <td>$781,300</td>
    <td style="color: green;">Added via positonal swap (5/8 Full)</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>V. Holmes</td>
    <td>CTW</td>
    <td>$724,600</td>
    <td style="color: green;">Added</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>C. Gutherson</td>
    <td>FLB</td>
    <td>$717,300</td>
    <td style="color: green;">Added</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>A. Johnson</td>
    <td>CTW</td>
    <td>$713,200</td>
    <td style="color: red;">Unable to add (CTW Full)</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>K. Koloamatangi</td>
    <td>SRF</td>
    <td>$701,000</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>J. Tapine</td>
    <td>FRF</td>
    <td>$699,500</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>R. Robson</td>
    <td>HOK</td>
    <td>$678,200</td>
  </tr>
</table>
</aside>

I was succesfully able to add the first 6 players, until I reached Alex johnson who could not be added as CTW was full and a positional swap wasn't on the cards either. Read about positonal swaps here *******

So now my squad currently looks as follows

<aside markdown="1">
<h3 style="font-family: Arial;"> HOK </h3>
<div class="players">

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">H. Grant</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: purple; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: purple; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">MEL</p>
<p style="margin: 0px; font-family:Arial;">$ 816, 500</p>
</div>
</div>
</div>
</div>

<div class="empty-player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;"> Empty</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="width: 65px; display: inline-block;"></div>
<p style="margin: 0px; font-size:xx-large; font-weight: bolder; display: inline-block;">+</p>
</div>
</div>

</div>

<h3 style="font-family: Arial;"> FRF </h3>
<div class="players">

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">S. Keppie</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: #800000; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: #800000; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">MNL</p>
<p style="margin: 0px; font-family:Arial;">$ 274, 800</p>
</div>
</div>
</div>
</div>

<div class="empty-player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;"> Empty</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="width: 65px; display: inline-block;"></div>
<p style="margin: 0px; font-size:xx-large; font-weight: bolder; display: inline-block;">+</p>
</div>
</div>

<div class="empty-player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;"> Empty</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="width: 65px; display: inline-block;"></div>
<p style="margin: 0px; font-size:xx-large; font-weight: bolder; display: inline-block;">+</p>
</div>
</div>

<div class="empty-player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;"> Empty</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="width: 65px; display: inline-block;"></div>
<p style="margin: 0px; font-size:xx-large; font-weight: bolder; display: inline-block;">+</p>
</div>
</div>

</div>

<h3 style="font-family: Arial;"> SRF </h3>
<div class="players">

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">J. Preston</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">BUL</p>
<p style="margin: 0px; font-family:Arial;">$ 200, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">B. Cartwright</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: yellow; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">PAR</p>
<p style="margin: 0px; font-family:Arial;">$ 234, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">S. Blore</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: orange; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: black; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">WST</p>
<p style="margin: 0px; font-family:Arial;">$ 234, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">M. Doorey</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: yellow; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">PAR</p>
<p style="margin: 0px; font-family:Arial;">$ 234, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">P. Saulo</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: #00FF00; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: #00FF00; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">CBR</p>
<p style="margin: 0px; font-family:Arial;">$ 243, 000</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">I. Papalii</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: orange; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: black; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">WST</p>
<p style="margin: 0px; font-family:Arial;">$ 831, 700</p>
</div>
</div>
</div>
</div>

</div>

<h3 style="font-family: Arial;"> HLB </h3>
<div class="players">

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">B. Trindall</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: #55ffff; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: #55ffff; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">SHA</p>
<p style="margin: 0px; font-family:Arial;">$ 234, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">I. Katoa</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: red; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: red; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">DOL</p>
<p style="margin: 0px; font-family:Arial;">$ 216, 100</p>
</div>
</div>
</div>
</div>


</div>

<h3 style="font-family: Arial;"> 5/8 </h3>
<div class="players">

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">D. Brown</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: yellow; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">PAR</p>
<p style="margin: 0px; font-family:Arial;">$ 781, 300</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">C. Munster</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: purple; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: purple; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">MEL</p>
<p style="margin: 0px; font-family:Arial;">$ 848, 300</p>
</div>
</div>
</div>
</div>

</div>

<h3 style="font-family: Arial;"> CTW </h3>
<div class="players">

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">P. Alamoti</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">BUL</p>
<p style="margin: 0px; font-family:Arial;">$ 200, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">W. Warbrick</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: purple; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: purple; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">MEL</p>
<p style="margin: 0px; font-family:Arial;">$ 200, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">A. Khan-Pereira</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: #6fa8dc; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: yellow; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: #6fa8dc; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">GCT</p>
<p style="margin: 0px; font-family:Arial;">$ 200, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">H. Hunt</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: red; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: red; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">NEW</p>
<p style="margin: 0px; font-family:Arial;">$ 234, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">B. Wiliame</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: black; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: grey; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: black; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">NZW</p>
<p style="margin: 0px; font-family:Arial;">$ 234, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">H. Smith-Shields</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: #00FF00; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: #00FF00; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">CBR</p>
<p style="margin: 0px; font-family:Arial;">$ 300, 300</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">V. Holmes</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: yellow; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">NQC</p>
<p style="margin: 0px; font-family:Arial;">$ 724, 600</p>
</div>
</div>
</div>
</div>

</div>

<h3 style="font-family: Arial;"> FLB </h3>
<div class="players">

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">C. Allan</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: red; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">SYD</p>
<p style="margin: 0px; font-family:Arial;">$ 258, 100</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">C. Gutherson</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: yellow; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">PAR</p>
<p style="margin: 0px; font-family:Arial;">$ 717, 300</p>
</div>
</div>
</div>
</div>

</div>

</aside>

So I now need 3 front row forwards and 1 hooker. But I just rerun the algorithm for 4 players with a new budget of $3,226,000.

This will no doubt pick players that aren't in these positions but I don't want to remove these players altogether as a positonal swap may be available in some cases. If a player cannot be added, I then remove them from the player pool to avoid an infinite loop.

<aside markdown="1">
<table style="text-align: center; font-family: Arial; background-color: #C8C9C9; padding: 13px;">
  <tr style="hover {background-color: coral;}; background-color: #494B4C; color: white; ">
    <th style="border: 1px solid black;">Player</th>
    <th style="border: 1px solid black;">Position</th>
    <th style="border: 1px solid black;">Price</th>
    <th style="border: 1px solid black;">Status</th>
  </tr>
  <tr style="border: 1px solid black;">
   <td>K. Koloamatangi</td>
   <td>SRF</td>
   <td>$701,000 </td>
   <td style="color: green;">Added via positonal swap (SRF Full)</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>J Tapine</td>
    <td>FRF</td>
    <td>$699,500</td>
    <td style="color: green;">Added</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>B. Fermor</td>
    <td>SRF</td>
    <td>$688,900</td>
    <td style="color: red;">Unable to add (SRF Full)</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>R. Robson</td>
    <td>HOK</td>
    <td>$678,200</td>
  </tr>
</table>
</aside>

Running again, now with budget of $1,825,500 and players needed = 2

<aside markdown="1">
<table style="text-align: center; font-family: Arial; background-color: #C8C9C9; padding: 13px;">
  <tr style="hover {background-color: coral;}; background-color: #494B4C; color: white; ">
    <th style="border: 1px solid black;">Player</th>
    <th style="border: 1px solid black;">Position</th>
    <th style="border: 1px solid black;">Price</th>
    <th style="border: 1px solid black;">Status</th>
  </tr>
  <tr style="border: 1px solid black;">
   <td>D. Cook</td>
   <td>HOK</td>
   <td>$790,700 </td>
   <td style="color: green;">Added</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>R Robson</td>
    <td>HOK</td>
    <td>$678,200</td>
    <td style="color: red;">Unable to add (SRF Full)</td>
  </tr>
</table>
</aside>

Now we need 1 player with a budget of $1,034,800

<aside markdown="1">
<table style="text-align: center; font-family: Arial; background-color: #C8C9C9; padding: 13px;">
  <tr style="hover {background-color: coral;}; background-color: #494B4C; color: white; ">
    <th style="border: 1px solid black;">Player</th>
    <th style="border: 1px solid black;">Position</th>
    <th style="border: 1px solid black;">Price</th>
    <th style="border: 1px solid black;">Status</th>
  </tr>
  <tr style="border: 1px solid black;">
   <td>R. Garrick</td>
   <td>CTW</td>
   <td>$742,600 </td>
   <td style="color: red;">Unable to add (SRF Full)</td>
  </tr>
</table>
</aside>

<aside markdown="1">
<table style="text-align: center; font-family: Arial; background-color: #C8C9C9; padding: 13px;">
  <tr style="hover {background-color: coral;}; background-color: #494B4C; color: white; ">
    <th style="border: 1px solid black;">Player</th>
    <th style="border: 1px solid black;">Position</th>
    <th style="border: 1px solid black;">Price</th>
    <th style="border: 1px solid black;">Status</th>
  </tr>
  <tr style="border: 1px solid black;">
   <td>T. Faasuamaleaui</td>
   <td>FRF</td>
   <td>$704,500 </td>
   <td style="color: green;">Added</td>
  </tr>
</table>
</aside>


This give me my complete squad


<aside markdown="1">
<h3 style="font-family: Arial;"> HOK </h3>
<div class="players">

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">H. Grant</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: purple; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: purple; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">MEL</p>
<p style="margin: 0px; font-family:Arial;">$ 816, 500</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">D. Cook</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: green; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: red; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: green; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">STH</p>
<p style="margin: 0px; font-family:Arial;">$ 790, 700</p>
</div>
</div>
</div>
</div>

</div>

<h3 style="font-family: Arial;"> FRF </h3>
<div class="players">

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">S. Keppie</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: #800000; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: #800000; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">MNL</p>
<p style="margin: 0px; font-family:Arial;">$ 274, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">P. Saulo</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: #00FF00; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: #00FF00; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">CBR</p>
<p style="margin: 0px; font-family:Arial;">$ 243, 000</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">J. Tapine</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: #00FF00; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: #00FF00; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">CBR</p>
<p style="margin: 0px; font-family:Arial;">$ 699, 500</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">T. Faasuamaleaui</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: #6fa8dc; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: yellow; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: #6fa8dc; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">GCT</p>
<p style="margin: 0px; font-family:Arial;">$ 704, 500</p>
</div>
</div>
</div>
</div>

</div>

<h3 style="font-family: Arial;"> SRF </h3>
<div class="players">

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">J. Preston</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">BUL</p>
<p style="margin: 0px; font-family:Arial;">$ 200, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">B. Cartwright</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: yellow; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">PAR</p>
<p style="margin: 0px; font-family:Arial;">$ 234, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">S. Blore</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: orange; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: black; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">WST</p>
<p style="margin: 0px; font-family:Arial;">$ 234, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">M. Doorey</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: yellow; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">PAR</p>
<p style="margin: 0px; font-family:Arial;">$ 234, 800</p>
</div>
</div>
</div>
</div>


<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">I. Papalii</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: orange; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: black; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">WST</p>
<p style="margin: 0px; font-family:Arial;">$ 831, 700</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">K. Koloamatangi</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: green; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: red; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: green; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">STH</p>
<p style="margin: 0px; font-family:Arial;">$ 701, 000</p>
</div>
</div>
</div>
</div>

</div>

<h3 style="font-family: Arial;"> HLB </h3>
<div class="players">

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">B. Trindall</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: #55ffff; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: #55ffff; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">SHA</p>
<p style="margin: 0px; font-family:Arial;">$ 234, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">I. Katoa</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: red; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: red; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">DOL</p>
<p style="margin: 0px; font-family:Arial;">$ 216, 100</p>
</div>
</div>
</div>
</div>


</div>

<h3 style="font-family: Arial;"> 5/8 </h3>
<div class="players">

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">D. Brown</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: yellow; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">PAR</p>
<p style="margin: 0px; font-family:Arial;">$ 781, 300</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">C. Munster</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: purple; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: purple; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">MEL</p>
<p style="margin: 0px; font-family:Arial;">$ 848, 300</p>
</div>
</div>
</div>
</div>

</div>

<h3 style="font-family: Arial;"> CTW </h3>
<div class="players">

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">P. Alamoti</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">BUL</p>
<p style="margin: 0px; font-family:Arial;">$ 200, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">W. Warbrick</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: purple; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: purple; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">MEL</p>
<p style="margin: 0px; font-family:Arial;">$ 200, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">A. Khan-Pereira</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: #6fa8dc; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: yellow; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: #6fa8dc; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">GCT</p>
<p style="margin: 0px; font-family:Arial;">$ 200, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">H. Hunt</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: red; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: red; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">NEW</p>
<p style="margin: 0px; font-family:Arial;">$ 234, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">B. Wiliame</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: black; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: grey; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: black; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">NZW</p>
<p style="margin: 0px; font-family:Arial;">$ 234, 800</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">H. Smith-Shields</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: #00FF00; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: #00FF00; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">CBR</p>
<p style="margin: 0px; font-family:Arial;">$ 300, 300</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">V. Holmes</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: yellow; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">NQC</p>
<p style="margin: 0px; font-family:Arial;">$ 724, 600</p>
</div>
</div>
</div>
</div>

</div>

<h3 style="font-family: Arial;"> FLB </h3>
<div class="players">

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">C. Allan</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: red; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: white; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">SYD</p>
<p style="margin: 0px; font-family:Arial;">$ 258, 100</p>
</div>
</div>
</div>
</div>

<div class="player" style="border: 1px solid black; border-radius: 8px; width: 180px; overflow:hidden; display: inline-block;">
<div style="background-color: #494B4C; margin: 0px;  padding:5px;">
<p style="margin: 0px; color: white; font-family:Arial;">C. Gutherson</p>
</div>
<div style="background-color: #C8C9C9; padding:10px;">
<div style="display: flex;">

<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: yellow; display: inline-block;"></div>
<div style="width: 20px; height: auto; background-color: blue; display: inline-block;"></div>
<div style="display: inline-block; padding-left: 10px;">
<p style="margin: 0px; font-family:Arial;">PAR</p>
<p style="margin: 0px; font-family:Arial;">$ 717, 300</p>
</div>
</div>
</div>
</div>

</div>

</aside>


So success! The algorithm has picked a squad.

Is it any good? I think most SC players would say... no, it's terrible!

Although many of the gun players are seemingly top players. I can't help but feel that there were better choices along the way. This is especially true as we ended up $330,300 under budget. Where is Tedesco, Cleary and the like?

The reason for this is likely because of how I have chosen to select a value for each player. At present, this is done by getting the total points scored for the last season.

This is clearly a pretty naive strategy. It would only take a player to have a rare spell on the sidelines for them to be severly undervalued. But in the other case you could have a player that will score highly in games but is injury prone and spends a lot of time on the sidelines. In which cases this should impact their value. I think I will next look into trying to train an neural net (AI) to try to predict how many points a player will score for the upcoming season. This can be used with the current selection algorithm to hopefully select better gun players.

Other things I noticed while running through this was that we ended up with 2 cheapie halfbacks because of a positional swap. This isn't ideal, we definitely need to maintain at least one gun player in specialist positions (HOK, HFB, 5/8, FLB). Also I am probably selecting too many cheapies, this could be contributing to the squad coming well under the budget.
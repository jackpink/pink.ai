---
title: "Squad Selection Issues: Part 1"
date: "2023-03-11T11:00:00.121Z"
description: "Figuring out why the algorithm makes the often strange decisions it does."
---

## Squad Selection issues: Part 1

**Another** year, another diastrous SC squad selection.

This year though I have decided to take a deep dive into my squad selection algorithm to disect why it so crap and to try and give it a measurable improvement.

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

This leaves a remaining budget of $7,945,700 to be spent filling the remaining positions with gun players. I want to maximise the points my team will score each week.

To achieve this I have an algorithm that will maximise value of leftover players within the remaining budget. You can read more about that here ******

Running this algorithm for the remaining 10 players with a budget of $7,945,700 we get

| Player        | Position | Price    |
| ------------- | -------- | -------- |
| C. Munster    | 5/8      | $848,300 |
| I. Papalii  | SRF      | $831,700 |
| H. Grant    | HOK    | $816,500 |



1. First item
2. Second item
3. Third item

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
## My heading
Some text, some text, some more text.
</aside>

---
title: "Missing Players In 2022 Database"
date: "2023-03-11T11:00:00.121Z"
description: "Fixing an Error in the data I have been using"
---


## Missing Players In 2022 Database

In looking into why the algorithm selected the players it did I found that some players were missing from the 2022 data.

<aside markdown="1">
<table style="text-align: center; font-family: Arial; background-color: #C8C9C9; padding: 13px;">
  <tr style="hover {background-color: coral;}; background-color: #494B4C; color: white; ">
    <th style="border: 1px solid black;">Database Top Scorers</th>
    <th style="border: 1px solid black;">Actual Top Scorers</th>
  </tr>
  <tr style="border: 1px solid black;">
   <td style="border: 1px solid black;">N. Hynes </td>
   <td style="border: 1px solid black;">N. Hynes</td>
  </tr>
  <tr style="border: 1px solid black;">
   <td style="border: 1px solid black;">I. Papalii </td>
   <td style="border: 1px solid black;">I. Papalii</td>
  </tr>
  <tr style="border: 1px solid black;">
   <td style="border: 1px solid black;">D. Brown</td>
   <td style="border: 1px solid black; background-color: #f77b72;">J. Tedesco</td>
  </tr>
  <tr style="border: 1px solid black;">
   <td style="border: 1px solid black;">J. Manu</td>
   <td style="border: 1px solid black;">D. Brown</td>
  </tr>
  <tr style="border: 1px solid black;">
   <td style="border: 1px solid black;">C. Munster</td>
   <td style="border: 1px solid black;">J. Manu</td>
  </tr>
  <tr style="border: 1px solid black;">
   <td style="border: 1px solid black;">C. Gutherson</td>
   <td style="border: 1px solid black;">C. Munster</td>
  </tr>
  <tr style="border: 1px solid black;">
   <td style="border: 1px solid black;">K. Koloamatangi</td>
   <td style="border: 1px solid black;">C. Gutherson</td>
  </tr>
  <tr style="border: 1px solid black;">
   <td style="border: 1px solid black;">A. Crichton</td>
   <td style="border: 1px solid black;">K. Koloamatangi</td>
  </tr>
  <tr style="border: 1px solid black;">
   <td style="border: 1px solid black;">A. Johnson</td>
   <td style="border: 1px solid black;">A. Crichton</td>
  </tr>
  <tr style="border: 1px solid black;">
   <td style="border: 1px solid black;">H. Grant</td>
   <td style="border: 1px solid black;">A. Johnson</td>
  </tr>
  <tr style="border: 1px solid black;">
   <td style="border: 1px solid black;">R. Robson</td>
   <td style="border: 1px solid black;">H. Grant<</td>
  </tr>
  <tr style="border: 1px solid black;">
   <td style="border: 1px solid black;">M. Moses</td>
   <td style="border: 1px solid black;">R. Robson</td>
  </tr>
  <tr style="border: 1px solid black;">
   <td style="border: 1px solid black;">J. Tapine</td>
   <td style="border: 1px solid black;">M. Moses</td>
  </tr>
  <tr style="border: 1px solid black;">
   <td style="border: 1px solid black;">V. Holmes</td>
   <td style="border: 1px solid black;">J. Tapine</td>
  </tr>
  <tr style="border: 1px solid black;">
   <td style="border: 1px solid black;">S. Lane</td>
   <td style="border: 1px solid black;">V. Holmes</td>
  </tr>
  <tr style="border: 1px solid black;">
   <td style="border: 1px solid black;">B. Fermor</td>
   <td style="border: 1px solid black;">S. Lane</td>
  </tr>
  <tr style="border: 1px solid black;">
   <td style="border: 1px solid black;">D. Cook</td>
   <td style="border: 1px solid black;">B. Fermor</td>
  </tr>
  <tr style="border: 1px solid black;">
   <td style="border: 1px solid black;">R. Garrick</td>
   <td style="border: 1px solid black;">D. Cook</td>
  </tr>
  <tr style="border: 1px solid black;">
   <td style="border: 1px solid black;">T. Faasuamaleaui</td>
   <td style="border: 1px solid black;">R. Garrick</td>
  </tr>
  <tr style="border: 1px solid black;">
   <td style="border: 1px solid black;">J. Ofahengaue</td>
   <td style="border: 1px solid black;">T. Faasuamaleaui</td>
  </tr>
  <tr style="border: 1px solid black;">
   <td style="border: 1px solid black;">D. Edwards</td>
   <td style="border: 1px solid black; background-color: #f77b72;">H. Young</td>
  </tr>
</table>
</aside>

We can see that Tedesco and Young were both missing from my database. If players were listed in alphabetical order, both these names would be towards the end.

All this data is scraped from the web, which ends up getting the data in alphabetical order. So t clearly has stoppped scraping too early and miss some players. I wil need to fix this for 2022 and also check other years to see if they have similar issues.


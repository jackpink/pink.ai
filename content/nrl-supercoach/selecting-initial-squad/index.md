---
title: Selecting Initial Squad
date: "2022-02-11T11:00:00.121Z"
description: "Algorithm for selecting our initial squad for the NRL SuperCoach AI"
---

The Initial Squad selected will be a mix of high scoring players and cheap players who will improve in price. The epitome of cheap players that will go up in price are players who have not yet played a game of NRL. These are known as Rookies. As there are no previous scores from these players their price is fixed at $168,100. The result of this is that if these players are given game time they will almost definitely go up in value. Even a low scoring player can be expected to have their price to increase by $100,000-$200,000.

## Selecting Rookies

In this case we can search for Rookies that are playing in teams for round 1. These players will definitely be getting gametime for this round and the hope will be that they go on to play more in the future.  Some Rookies will be in the starting lineup and some will be on the bench. It can be seen in the figure above that starting players are more likely to score higher than those that are on the bench. For this reason starting players will be given priority.

<img src="https://github.com/jackpink/pink.ai/blob/master/content/blog/Making-an-API-call-in-useEffect/Recording%202022-01-14%20at%2013.35.40.gif?raw=true" width="600" height="400">

A greedy algorithm can select all starting Rookies followed by Rookies who are on the bench. The more Rookies selected will increase the probability of making  higher profits. However, it will impact the overall performance as they are not expected to score highly. Therefore, a balance must be struck between Rookies and high scoring players. A cap will be put on the amount of Rookies that can be selected. This cap number will be determined through simulations.

## Selecting High Scorers

### 0-1 Knapsack Algorithm

After adding the Rookies to the squad we will have 10 remaining squad positions to fill. In these positions we would like to select the best possible players we can for the remaining budget. This reduces to a problem very similar to the 0-1 Knapsack problem. We have a budget and each player available has a price so we just need a metric by which to judge value. I have selected total overall scores from the previous season as the heuristic to use. This will control for players that have high average scores but are maybe injury prone, or players that had a brief patch of high scores and give me the players who consistently scored highpoints throughout last season. 


If an optimal solution exists,

OPT(i, w) = max( vi + OPT(i-1, w-wi), OPT(i-1, w)

The dynamic programming solution of this is shown below.
Knapsack(n):
    Array M[0 ... n, 0 ... W]
    For i = 1,2, ... , n
        For w = 1,2, ... , W
            If wi-1 <= w
                M[i, w] = max( vi-1+M[i-1, w-wi-1] , M[i-1, w] )
            Else
                M[i, w] =  M[i-1, w] 

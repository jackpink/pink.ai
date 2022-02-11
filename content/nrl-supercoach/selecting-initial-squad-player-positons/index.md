---
title: 'Selecting Initial Squad: Player Positions'
date: "2022-02-11T13:00:00.121Z"
description: "Handling different player positions in the algorithm top select the initial squad"
---

Another challenge in the selection of players is that players are categorised by their position and each position must have a set number of players. This is outlined in the figure below. Any to incorporate this into the knapsack implementation above would have been extremely complicated if even possible. So it was decided to rerun the knapsack selection at every instance where a player that was selected cannot be added. 

If a player cannot be added then the players selected after it in the algorithm will be irrelevant as the metrics have now changed. When the knapsack selection algorithm is  rerun the player that could not be added is removed from the pool of players available for selection. 

| Position           | Total in Squad |Total in Team ( + 4 Player Bench) |
|--------------------|:--------------:|:--------------------------------:|
| Front Row Forward  | 4              | 2                                |
| Second Row Forward | 6              | 3                                |
| Hooker             | 2              | 1                                |
| Halfback           | 2              | 1                                |
| Five Eight         | 2              | 1                                |
| Centre Winger      | 7              | 4                                |
| Fullback           | 2              | 1                                |


The other challenge thrown up by  player positions is that it is possible for a player to have two positions they are able to play. This has two major consequences when checking if a player can be added to the squad. 

The first is we need to check whether the player we are trying to add can be added to either position 1 or position 2. For example, if the player can play either front row forward or second row forward then we need to check if there is room in either of these positions in which to add the player.

The other is that if both the player’s positions are full, it may still be possible to add the player by moving a player already in one of these positions to a position that’s free. An example of this is shown below. Even though the fullback position is full, Player 3 can be moved to the Centre Winger positions, hence freeing up space for Player 1.

<img src="https://github.com/jackpink/pink.ai/blob/master/content/nrl-supercoach/selecting-initial-squad-player-positons/initial-squad-player-positions.jpg?raw=true" width="750" height="700">

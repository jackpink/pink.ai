---
title: 'Team Selection: Predicting Player Score'
date: "2022-02-11T14:00:00.121Z"
description: ""
---

For each round in a season, you must select a team of 17 players from your squad of 25. The positional makeup of these 17 players is shown in the figure above. In order to make decisions on what players should be selected, a model for predicting the score for each player is required.

A few factors that could influence the expected score for a player are:
All time point scoring average for the player

Current form of player (scoring average over the most recent games)
Expected minutes to play (a player who is starting will generally play more minutes than a player from the bench)

Expected match result (if a player’s team is a heavy favourite they would be expected to have higher score)


<img src="https://github.com/jackpink/pink.ai/blob/master/content/blog/Making-an-API-call-in-useEffect/Recording%202022-01-14%20at%2013.35.40.gif?raw=true" width="600" height="400">

The figure above shows a plot of a players average score for every game they have played previous to a game versus their score for that game. Although there is a high degree of variance in the data there does appear to be a trend of a higher scoring average resulting in a higher score, as we would expect. 

<img src="https://github.com/jackpink/pink.ai/blob/master/content/blog/Making-an-API-call-in-useEffect/Recording%202022-01-14%20at%2013.35.40.gif?raw=true" width="600" height="400">

In order to better measure the current scoring form of a player, as opposed to their all time average, the average over the last three games they played was plotted against the score for that game. This plot is similar to that of all time averages, however, it seems to do a better job of accounting for the variance in higher scores (i.e. score greater than 80). This makes intuitive sense as a player who has scored high recently would be more likely to score high again, as they are in good playing form at that time.
The model will therefore take an average from the previous games played as opposed to the all time average for that player. The amount of previous to use in the model will be determined later.

<img src="https://github.com/jackpink/pink.ai/blob/master/content/blog/Making-an-API-call-in-useEffect/Recording%202022-01-14%20at%2013.35.40.gif?raw=true" width="600" height="400">

Another potential explanation for the variance in the data is the expected match result between the two teams playing. If a player is playing for a team that is a heavy favourite and expected to win comfortably then they will be expected to score highly. The converse is true for a player who is playing for a team that is expected to lose comfortably. In order to account for the expected match result, the bettings odds on the two teams was used. The lower the odds, the better the team is expected to do and it follows that the player will get a higher score. This relationship can be seen in the figure above. It is clear that a portion of the variance in the data should be explained by expected match result.

<img src="https://github.com/jackpink/pink.ai/blob/master/content/blog/Making-an-API-call-in-useEffect/Recording%202022-01-14%20at%2013.35.40.gif?raw=true" width="600" height="400">

During the course of a game some players will stay on the field for the entire duration, others will be substituted and spend time on the bench. So there will exist of variance in how many minutes players spend on the field over the course of a game. In the figure above, it can be seen that there is a trend for higher minutes played leading to higher scores. It can also be seen that there is a large grouping at 80 minutes. This is the normal length of a match and so this cluster will contain most of the scores. 
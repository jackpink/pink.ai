---
title: 'Team Selection: Regression and Greedy Selection'
date: "2022-02-11T15:00:00.121Z"
description: ""
---

### Regression

In order to predict the score a player will receive in a match a linear regression model will be fitted to the data. The variables used in the regression will be average score, match odds and minutes played.\

scoreplayer  =  0 + average averageplayer + odds oddsplayer + minutes minutesplayer  

A simple regression was fitted in python using the statsmodels library and the ordinary least squares method.

In order to determine how many games should be included in the previous scores average, the model was fitted for a range of averages. The results are shown below. The highest R Squared value is achieved by using a 13 game average as one of the variables. It begins to drop off from this point.


<img src="https://github.com/jackpink/pink.ai/blob/master/content/nrl-supercoach/team-selection-regression-greedy/r-squared.png?raw=true" width="600" height="400">

Some assumptions are not met in fitting the model. The Y value for the regression should be roughly a normal distribution. As is shown below, this is not the case and it is heavily skewed to the right. This was not able to be adjusted by taking the natural log of the score. One of the results of this is that the R Squared value cannot be interpreted as the amount of variance explained by the model. Therefore it cannot be said how much variance is explained.

<img src="https://github.com/jackpink/pink.ai/blob/master/content/nrl-supercoach/team-selection-regression-greedy/frequency.png?raw=true" width="600" height="400">

### Greedy Algorithm

Now that the model can predict what each player is expected to score in each round, the algorithm to select the team is simple. It will make a greedy selection for each position based on the expected score. Then from the remaining players in the squad the top four predicted scores will be selected from the bench.

Another import aspect to the game is to select a captain. A player each round can be selected as the team captain. This player will have their score doubled. So ideally you will have selected your highest scoring player for the round.

The obvious choice is to select the player who is predicted to have the highest score for the round. This is what will be used in this iteration of the model. However, another factor that could be considered in selecting captains for future models is the weather. As shown below the mean scores across different conditions are relatively similar. A noticeable difference however, is in rain, showers and cloudy conditions there are far less 100+ point scores. This suggests that in better conditions a player is more likely to rack up a big score. If these big scores can be doubled it could have a significant impact on the performance of the model.

<img src="https://github.com/jackpink/pink.ai/blob/master/content/nrl-supercoach/team-selection-regression-greedy/weather.png?raw=true" width="600" height="400">
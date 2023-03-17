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

(INSERT SQUAD IMAGE HERE)
<img src="https://github.com/jackpink/pink.ai/blob/master/content/nrl-supercoach/selecting-initial-squad-algorithm/Boxplot-grouped-by-gametime.png?raw=true" width="600" height="400">

The total cost of the selected players is $3,504,300

This leaves a remaining budget of $7,945,700 to be spent filling the remaining positions with gun players. I want to maximise the points my team will score each week.

To achieve this I have an algorithm that will maximise value of leftover players within the remaining budget. You can read more about that here ******

Running this algorithm for the remaining 10 players with a budget of $7,945,700 we get

| Player        | Position | Price    |
| ------------- | -------- | -------- |
| C. Munster    | 5/8      | $848,300 |
| I. Papalii  | SRF      | $831,700 |
| H. Grant    | HOK    | $816,500 |

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

|  R |  Python |    Matlab |
| --------- |:---|:---------|:-----|
| library(tidyverse) |import numpy as np|

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

1. First item
2. Second item
3. Third item

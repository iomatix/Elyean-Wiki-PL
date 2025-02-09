---
fileClass: faith_relic
extends: faith
icon: amphora
fields:
  - name: relicName
    type: Input
    options: {}
    path: ""
    id: sJjLxT
  - name: relicAlternateNames
    type: Input
    options: {}
    path: ""
    id: 3oFGdA
  - name: relicType
    type: Input
    options: {}
    path: ""
    id: dRUuYX
  - name: relicOrigin
    type: Input
    options: {}
    path: ""
    id: 8zOUcY
  - name: relicPowerLevelNumber
    type: Number
    options:
      min: 0
      max: 10
      step: 1
    path: ""
    id: vf94VV
  - name: relicDomain
    type: Input
    options: {}
    path: ""
    id: El5zbP
  - name: relicState
    type: Multi
    options:
      sourceType: ValuesList
      valuesList:
        "1": active
        "2": stolen
        "3": hidden
        "4": missing
        "5": destroyed
        "6": replica
        "7": restored
        "8": cursed
        "9": sealed
        "10": protected
        "11": undiscovered
    path: ""
    id: PgBM6A
  - name: relicPowerLevel
    type: Multi
    options:
      sourceType: ValuesList
      valuesList:
        "1": Local Influence
        "2": Regional Impact
        "3": National Significance
        "4": Continental Reach
        "5": Global Change
        "6": World-Altering
        "7": Time-Influencing
        "8": Dimensional Impact
        "9": Power of Creation & Destruction
        "10": Omniversal Influence
    path: ""
    id: JJUwUS
version: "2.12"
limit: 45
mapWithTag: false
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
savedViews: []
favoriteView: 
fieldsOrder:
  - JJUwUS
  - 3oFGdA
  - PgBM6A
  - El5zbP
  - vf94VV
  - 8zOUcY
  - dRUuYX
  - sJjLxT
---

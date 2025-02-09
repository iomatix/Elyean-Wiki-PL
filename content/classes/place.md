---
fileClass: place
extends: quartz_article
icon: eclipse
fields:
  - name: placeName
    type: Input
    options: {}
    path: ""
    id: 2KxiAo
  - name: placeType
    type: Multi
    options:
      sourceType: ValuesList
      valuesList:
        "1": Location
        "2": Shrine
        "3": Sanctuary
        "4": Holy Site
        "5": Battlefield
        "6": Land
        "7": Underwater
        "8": Underground
        "9": Abyss
        "10": Dimension
        "11": Mortals Place
        "12": Historic Place
        "13": Legendary Place
        "14": Spiritual Place
    path: ""
    id: UyZfAN
  - name: placeSignificance
    type: Input
    options: {}
    path: ""
    id: Aur3gA
  - name: placeStatus
    type: Multi
    options:
      sourceType: ValuesList
      valuesList:
        "1": active
        "2": antique
        "3": well-maintained
        "4": missing
        "5": hidden
        "6": cursed
        "7": flooded
        "8": destroyed
    path: ""
    id: XnbAJm
  - name: placeImpact
    type: Multi
    options:
      sourceType: ValuesList
      valuesList:
        "1": Negligible Impact
        "2": Minor Impact
        "3": Noticeable Impact
        "4": Significant Local Impact
        "5": Regional Impact
        "6": National Impact
        "7": Global Impact
        "9": Multi-Dimensional Impact
    path: ""
    id: 1QzERu
  - name: placeImpactNumber
    type: Number
    options:
      step: 1
      min: 0
      max: 10
    path: ""
    id: wSQz0C
  - name: placeAlternateNames
    type: Input
    options: {}
    path: ""
    id: dYZJqP
version: "2.14"
limit: 55
mapWithTag: false
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
savedViews: []
favoriteView: 
fieldsOrder:
  - wSQz0C
  - 1QzERu
  - XnbAJm
  - Aur3gA
  - UyZfAN
  - dYZJqP
  - 2KxiAo
---

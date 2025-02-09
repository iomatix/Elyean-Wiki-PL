---
fileClass: character
extends: quartz_article
icon: user
fields:
  - name: characterName
    type: Input
    options: {}
    path: ""
    id: wrJBkh
  - name: characterFamilyName
    type: Input
    options: {}
    path: ""
    id: usItq9
  - name: characterEra
    type: Input
    options: {}
    path: ""
    id: Mcmotz
  - name: characterYearOfBirth
    type: Input
    options: {}
    path: ""
    id: 3vN1cA
  - name: characterYearOfDeath
    type: Input
    options: {}
    path: ""
    id: k04P3D
  - name: characterStatus
    type: Multi
    options:
      sourceType: ValuesList
      valuesList:
        "1": alive
        "2": retired
        "3": missing
        "4": deceased
    path: ""
    id: FmX30W
  - name: charaterAlternateNames
    type: Input
    options: {}
    path: ""
    id: n2Roe2
  - name: characterAliases
    type: Input
    options: {}
    path: ""
    id: snkGd5
  - name: characterRace
    type: Input
    options: {}
    path: ""
    id: 3mFsxW
  - name: characterGender
    type: Input
    options: {}
    path: ""
    id: PuriYv
  - name: characterPlaceLastSeen
    type: Input
    options: {}
    path: ""
    id: lmdruf
  - name: characterRole
    type: Input
    options: {}
    path: ""
    id: YHOImI
  - name: characterAlignment
    type: Multi
    options:
      sourceType: ValuesList
      valuesList:
        "1": True Hero
        "2": Lawful Good
        "3": Neutral Good
        "4": Chaotic Good
        "5": Lawful Neutral
        "6": True Neutral
        "7": Chaotic Neutral
        "8": Lawful Evil
        "9": Neutral Evil
        "10": Chaotic Evil
        "11": True Evil
    path: ""
    id: 6fMtSg
  - name: characterAffiliation
    type: Input
    options: {}
    path: ""
    id: 18usFs
  - name: characterHomeLocation
    type: Input
    options: {}
    path: ""
    id: 6cELCS
  - name: characterImpact
    type: Multi
    options:
      sourceType: ValuesList
      valuesList:
        "1": Minor Influence
        "2": Local Influence
        "3": Regional Influence
        "4": National Figure
        "5": Cultural Icon
        "6": Political Leader
        "7": Historical Legend
        "8": Global Impact
        "9": Mythical Figure
        "10": Divine Influence
    path: ""
    id: 3xXaaK
  - name: characterImpactNumber
    type: Number
    options:
      step: 1
      min: 0
      max: 10
    path: ""
    id: wrxARr
version: "2.17"
---

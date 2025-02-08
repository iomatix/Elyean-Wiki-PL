---
fileClass: template-draft-empty
lang: pl-PL
title: "{{title}}"
tags:
  - tag-me
  - todo
aliases: []
date: "{{date}}"
description:
enableToc: true
draft: true
published: false
fields:
  - name: lang
    type: Input
    default: "pl-PL"
  - name: title
    type: Input
    default: "{{title}}"
  - name: tags
    type: Multi
    default:
      - tag-me
      - todo
  - name: aliases
    type: Multi
    default: []
  - name: date
    type: Date
    default: "{{date}}"
  - name: description
    type: Input
    default: ""
  - name: enableToc
    type: Boolean
    default: true
  - name: draft
    type: Boolean
    default: true
  - name: published
    type: Boolean
    default: false
limit: 20
mapWithTag: false
icon: package
version: "2.3276"
---

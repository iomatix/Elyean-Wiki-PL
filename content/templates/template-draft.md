---
fileClass: template-draft
lang: pl-PL
title: "{{title}}"
tags:
  - tag-me
  - todo
aliases:
  - Other names for this note. This is a list of strings.
date: "{{date}}"
description: Description of the page used for link previews.
enableToc: true
draft: true
published: false
fields:
  - name: lang
    type: Input
    default: pl-PL
  - name: title
    type: Input
    default: "{{title}}"
  - name: tags
    type: Multi
    default:
      - tag-me
      - todo
  - name: aliases
    type: Input
    default: ""
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
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - 
  - 
  - 
  - 
  - 
  - 
  - 
  - 
  - 
version: "2.0"
---
Szybkie omówienie metadanych:
- **lang**: język tekstu zgodny z lokalizacją strony (pl-PL, en-US, en-GB)
- **title**: wyświetlający się tytuł artykułu na stronie
- **tags**: tagi ułatwiające eksplorację wiki. Na razie tagujemy tylko po angielsku.
- **aliases**: lista nazw, po których wpisując w oknie w przeglądarce przeniesie nas do artykułu np. skarbiec z aliasem vault, przeniesie nas na skarbiec, dobrze jest dodać aliasy z innych wersji językowych, żeby bezproblemowo przechodzić pomiędzy różnymi wersjami językowymi strony.
- **date:** data publikacji artykułu, powinna być zgodna z dniem, w którym artykuł przestaje być *draftem*, a zostaje *published*.
- **description:** krótki opis artykułu, wykorzystywany w podglądzie zawartości i jako SEO, dzięki któremu lepiej pozycjonuje nas w Google.
- **enableToc**: włączenie tej opcji wyświetli użytkownikom spis treści artykułu
- **draft:** włączenie tej opcji ukrywa artykuł z wszelkich spisów. Należy odznaczyć published.
- **published:** włączenie tej opcji potwierdza gotowość artykułu do publikacji. Należy odznaczyć również draft.

Więcej informacji na wiki:
- [Quartz - Authoring Content](https://quartz.jzhao.xyz/authoring-content)
Więcej o formacie artykułów:
- [Markdown Cheat Sheet | Markdown Guide](https://www.markdownguide.org/cheat-sheet/)
- [Getting Started | Markdown Guide](https://www.markdownguide.org/getting-started/)

The rest of your content lives here. You can use **Markdown** here :)

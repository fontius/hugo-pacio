---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
description: ""
date: {{ .Date }}
categories: []
tags: []
draft: false
---

<!--replace title without Lang id {{ replace .TranslationBaseName "-" " " | title }} instead of 
{{ replace .Name "-" " " | title }}  -->

<!--progressively add more eg .author etc change draft to "true" for production
 This is default for Blog Posts-->

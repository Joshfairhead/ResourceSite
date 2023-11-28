---
title: Glossary
editLink: true
terms:
    - AIC: "lorem ipsum"
    - PCI: "adaf afd "
    - BC: "adaf afd "
    - TS: "adaf afd "
    - DD: "adaf afd "
    - MD: "adaf afd "
---

# {{$frontmatter.title}}

<dl>
<div v-for="item in $frontmatter.terms">
<template v-for="(v,i,count) in item">
<dt>

## {{i}}
</dt>
<dd>

{{v}}
</dd>
</template>
</div>
</dl>

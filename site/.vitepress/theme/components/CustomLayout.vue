<script setup>
import DefaultTheme from "vitepress/theme";
import { useData, useRouter } from "vitepress";
const { Layout } = DefaultTheme;
const { frontmatter } = useData();

</script>

<template>
  <div v-if="frontmatter.layout === 'octad'" class="VPPage vp-doc">
    <slot name="page-top" />
    <div class="container" style="padding: 3rem 3rem 0 3rem">
      <h1>{{ frontmatter.title }}</h1>
      <hr />
      <div class="content">
        <Content />
      </div>
    </div>
    <Octad v-bind="frontmatter"></Octad>
    <slot name="page-bottom" />
  </div>

  <Layout v-else />
</template>

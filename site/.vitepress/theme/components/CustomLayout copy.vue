<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData, useRouter } from 'vitepress'
const { Layout } = DefaultTheme
const { frontmatter, params } = useData()

</script>


<template>
  <div v-if="frontmatter.layout === 'octad'" class="VPPage">
      <slot name="page-top" />
      <h1> Custom Layout</h1>
      <Content />
      <Octad s1="Search & Quest "></Octad>
      <slot name="page-bottom" />
    </div>
  
  <Layout v-else />
</template>

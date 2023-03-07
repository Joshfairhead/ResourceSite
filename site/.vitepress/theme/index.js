// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

import Tip from "./components/Tip.vue";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('tip',Tip)
  }
}
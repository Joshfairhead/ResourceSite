// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import CustomLayout from "./components/CustomLayout.vue"
import './custom.css'

import Tip from "./components/Tip.vue";
import Octad from "./components/OctadSVG.vue";

export default {
  ...DefaultTheme,
  Layout: CustomLayout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('tip',Tip)
    ctx.app.component('Octad',Octad)
  }
}
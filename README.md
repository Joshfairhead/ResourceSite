[![Netlify Status](https://api.netlify.com/api/v1/badges/d8639fec-8a32-438c-9f68-aeb9db8e16be/deploy-status)](https://app.netlify.com/sites/youthful-bhaskara-adf2d8/deploys)

# LPL Resource library build using [Vitepress](https://vitepress.vuejs.org/)
---

## Setup

Download repo and run `yarn install` 


## Development

To open local dev server use `yarn run site:dev` command.

### Editing & Adding Text resources

To edit `home page` or `resources` just edit the corresponding `.md` files

```
. 
│─ 📁 site
│  ├─ 📁 .vitepress
│  │  
│  ├─ 📁 resources <--- ℹ️ Organize your files here
│  │  └─ 📁 guides <--- ℹ️ Folders structure generates paths eg: resources/guides/your-file-name 
│  │  └─ 📁 ...  
│  │
│  └─ index.md <--- ℹ️ The Home Page
│ 
└─ package.json
└─ README.md
.

```

### Adding the resources to the sidebar & nav

⚠️⚠️⚠️  
Any modification, **new file**,  **file name** or **folder structure change** must be **manually added** to the `config-sidebar.js` file or `config-nav.js`.

If you forget to update the files it **will result in 404 pages**.


```
. 
│─ 📁 site
│  ├─ 📁 .vitepress
│  │  └─ 📁 theme
│  │  │  └─custom.css
│  │  └─ config.js 
│  │  └─ config-sidebar.js <--- ℹ️ Site sidebar links
│  │  └─ config-nav.js <--- ℹ️ Top Navigation links
│  │  
│  ├─ 📁 resources  
│  └─ index.md 
.

```


### Other site configurations

Vitepress is modular and most features can be modified or disables in the `config.js` file.
Consult Vitepress docs for more information.

```
. 
│─ 📁 site
│  ├─ 📁 .vitepress
│  │  └─ 📁 theme
│  │  │  └─custom.css <--- ℹ️ Custom css goes here
│  │  └─ config.js <--- ℹ️ Social icons, footer, site title, description, any head links
│  │  └─ config-sidebar.js 
│  │  └─ config-nav.js
│  │  
│  ├─ 📁 resources  
│  └─ index.md 
.

```





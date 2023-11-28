import configNav from "./config-nav";
import configSidebar from "./config-sidebar";

export default {
  title: "Lunarpunk Labs",
  description: "Grounding the Cosmos",
  appearance: "dark",
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", type: "favicon", href: "/favicon.ico" }],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/android-chrome-192x192.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        href: "/android-chrome-512x512.png",
      },
    ],
  ],
  themeConfig: {
    siteTitle: "LunarPunk Labs",
    logo: "/assets/logo.png",
    ...configSidebar,
    ...configNav,
    editLink: {
      pattern:
        "https://github.com/lunarpunk-labs/resource-site/edit/main/site/:path",
      text: "Edit this page on GitHub",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/lunarpunk-labs" },
      { icon: "twitter", link: "https://twitter.com/lunarpunk_labs" },
      {
        icon: {
          svg:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" height="100%" style="display: block; width: auto;"><title>Linktree</title><desc>Linktree Logo Symbol</desc><path d="M13.5108 5.85343L17.5158 1.73642L19.8404 4.11701L15.6393 8.12199H21.5488V11.4268H15.6113L19.8404 15.5345L17.5158 17.8684L11.7744 12.099L6.03299 17.8684L3.70842 15.5438L7.93745 11.4361H2V8.12199H7.90944L3.70842 4.11701L6.03299 1.73642L10.038 5.85343V0H13.5108V5.85343ZM10.038 16.16H13.5108V24.0019H10.038V16.16Z" fill="currentColor"></path></svg>',
        },
        link: "https://linktr.ee/lunarpunk_labs",
      },
    ],
    outline: "deep",
    // footer: {
    //     message: 'Released under the MIT License.',
    //     copyright: 'Copyright © 2019-present Evan You'
    //   }
  },
};

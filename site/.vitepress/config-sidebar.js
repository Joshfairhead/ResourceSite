const sharedItems = {
  text: "Methodologies",
  items: [{ text: "H3Uni", link: "https://www.h3uni.org/resource-library/" }],
};

export default {
  sidebar: {
    /**
     * This sidebar gets displayed when a user
     * is on `first-principles` directory.
     */

    "/resources/what/": [
      {
        text: "Launch Pad",
        link: "/resources/what/index.md",
      },
      {
        text: "What is Blockchain",
        collapsed: false,
        items: [
          {
            text: "Distributed Ledgers",
            collapsed: false,
            link: "/resources/what/1_ledger/ledger",
            items: [
              //     collapsed: false,
              //     items: [
              //       { text: "Inter Blockchain Communication (IBC)" },
              //       { text: "Proof of Work" },
              //       { text: "Proof of Stake" },
              //       { text: "Delegated Proof of Stake " },
              //       { text: "Proof of Authority " },
              //       { text: "Proof of Access" },
              //       { text: "Proof of Distance" },
              //     ],
              //   },
              // ],
            ],
          },
          {
            text: "Tokens",
            link: "/resources/what/tokens",
          },
          {
            text: "Wallet Clients",
            link: "/resources/what/wallets",
          },
          {
            text: "DAO Treasuries",
            link: "/resources/what/DAOs",
          },
          {
            text: "Application Interfaces",
            link: "/resources/what/governance",
          },
        ],
      },
      {
        text: "Other resources",
        items: [
          {
            text: "Learning Guides",
            link: "/resources/how/wallet/wallet-setup",
          },
        ],
      },
      sharedItems,
    ],

    /**
     * This sidebar gets displayed when a user
     * is on `guides` directory.
     */

    "/resources/how/": [
      {
        text: "Learning Resources",
        items: [
          {
            text: "Wallets",
            collapsed: true,
            items: [
              {
                text: "Wallet Setup",
                link: "/resources/guides/how/wallet-setup",
              },
              {
                text: "Wallet Transactions",
                link: "/resources/guides/how/wallet-transactions",
              },
              {
                text: "Staking Wallet Setup",
                link: "/resources/guides/how/staking-wallet-setup",
              },
              // { text: "Cosmos Wallet Onboarding", link: "/wallet/cosmos-wallet-onboarding" },
            ],
          },
          {
            text: "Commonwealth",
            collapsed: true,
            items: [
              {
                text: "Sign-up",
                link: "/resources/guides/commonwealth/sign-up",
              },
              {
                text: "Discussion",
                link: "/resources/guides/commonwealth/discussion",
              },
              {
                text: "Proposals",
                link: "/resources/guides/commonwealth/proposals",
              },
              {
                text: "Voting",
                link: "/resources/guides/commonwealth/voting",
              },
              {
                text: "Community Spend Proposal",
                link: "/resources/guides/commonwealth/community-spend-proposal",
              },
            ],
          },
        ],
      },
      {
        text: "Other resources",
        items: [
          {
            text: "First principles",
            link: "/resources/what/",
          },
        ],
      },
      sharedItems,
    ],
  },
};

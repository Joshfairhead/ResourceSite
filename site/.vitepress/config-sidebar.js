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
            link: "/resources/what/2_tokens/tokens",
          },
          {
            text: "Wallet Clients",
            link: "/resources/what/3_wallet-clients/wallets",
          },
          {
            text: "DAO Treasuries",
            //link: "/resources/what/DAOs",
          },
          {
            text: "Application Interfaces",
            //link: "/resources/what/governance",
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
            text: "Cosmos Wallets",
            collapsed: false,
            items: [
              {
                text: "Wallet Setup",
                link: "/resources/how/wallet/wallet-setup",
              },
              {
                text: "Wallet Transactions",
                link: "/resources/how/wallet/wallet-transactions",
              },
              // { text: "Staking Wallet Setup", link: "/resources/how/wallet/staking-wallet-setup" },
              // { text: "Cosmos Wallet Onboarding", link: "/wallet/cosmos-wallet-onboarding" },
            ],
          },
          {
            text: "Commonwealth",
            collapsed: false,
            items: [
              {
                text: "Sign-up",
                link: "/resources/how/commonwealth/sign-up",
              },
              {
                text: "Discussion",
                link: "/resources/how/commonwealth/discussion",
              },
              {
                text: "Voting",
                link: "/resources/how/commonwealth/voting",
              },
              {
                text: "Signalling Proposals",
                link: "/resources/how/commonwealth/signalling-proposals",
              },
              {
                text: "Community Spend Proposal",
                link: "/resources/how/commonwealth/community-spend-proposal",
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

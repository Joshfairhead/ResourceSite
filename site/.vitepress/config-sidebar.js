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

    "/resources/": [
      {
        text: "Launch Pad",
        link: "/resources/introduction/launchpad.md",
        items: [],
      },
      {
        text: "Field Guides",
        items: [
          {
            text: "What is Web3?",
            collapsed: true,
            items: [
              {
                text: "Overview",
                link: "/resources/what/0_overview/overview",
              },
              {
                text: "Data Integrity",
                link: "/resources/what/1_dataIntegrity/ledger",
              },
              {
                text: "Crypto Tokens",
                link: "/resources/what/2_cryptoTokens/tokens",
              },
              {
                text: "Wallet Clients",
                link: "/resources/what/3_walletClients/wallets",
              },
              {
                text: "DAO Governance",
                link: "/resources/what/4_DAOGovernance/governance.md",
              },
              {
                text: "Distributed Applications",
                link:
                  "/resources/what/5_distributedApplications/distributedApplications.md",
              },
            ],
          },
          {
            text: "How to use Web3?",
            collapsed: true,
            items: [
              {
                text: "Cosmos Wallets",
                collapsed: true,
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
                collapsed: true,
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
                    link:
                      "/resources/how/commonwealth/community-spend-proposal",
                  },
                ],
              },
            ],
          },
        ],
      },
      sharedItems,
    ],
  },
};

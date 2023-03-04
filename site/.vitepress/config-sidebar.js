const sharedItems = {
    text: "Useful Links",
    items: [{ text: "H3Uni", link: "https://www.h3uni.org/about/" }],
};

export default {
    sidebar: {
        /**
         * This sidebar gets displayed when a user
         * is on `guides` directory.
         */

        "/resources/guides/": [
            {
                text: "Learning Resources",
                items: [
                    {
                        text: "Wallets",
                        collapsed: true,
                        items: [
                            {
                                text: "Wallet Setup",
                                link: "/resources/guides/wallet/wallet-setup",
                            },
                            {
                                text: "Wallet Transactions",
                                link: "/resources/guides/wallet/wallet-transactions",
                            },
                            {
                                text: "Staking Wallet Setup",
                                link: "/resources/guides/wallet/staking-wallet-setup",
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
                        link: "/resources/first-principles/",
                    },
                ],
            },
            sharedItems,
        ],

        /**
         * This sidebar gets displayed when a user
         * is on `first-principles` directory.
         */

        "/resources/first-principles/": [
            {
                text: "First principles",
                collapsed: true,
                items: [
                    {
                        text: "Introduction",
                        link: "/resources/first-principles/",
                    },
                    {
                        text: "Ledger (coming soon)",
                        collapsed: true,
                        items: [
                            {
                                text: "Consensus",
                                collapsed: true,
                                items: [
                                    { text: "Proof of Work" },
                                    { text: "Proof of Stake" },
                                    { text: "Delegated Proof of Stake " },
                                    { text: "Proof of Authority " },
                                    { text: "Proof of Access" },
                                    { text: "Proof of Distance" },
                                ],
                            },
                            {
                                text: "Interoperability",
                                collapsed: true,
                                items: [
                                    { text: "Bridges" },
                                    { text: "Sidechains" },
                                    { text: "Roll ups" },
                                ],
                            },
                            {
                                text: "ZkProofs",
                            },
                            {
                                text: "ZkSnarks",
                            },
                        ],
                    },
                ],
            },
            {
                text: "Other resources",
                items: [
                    {
                        text: "Learning Guides",
                        link: "/resources/guides/wallet/wallet-setup",
                    },
                ],
            },
            sharedItems,
        ],
    },
};

# Wallets

Wallets are `edge clients` that sit between blockchains and Dapps (web3 applications). They are typically derrived from a `mnemonic seed` or collection of randomised words which can be used to recover access to ones associated accounts. This seed is used to deterministically generate your wallet in the form of a key pair; your secret `private key` and your `public key` which functions as a wallet address.

Hot wallets connected to the internet have several functions; create, sign, send and recieve. Air gapped cold wallets have only the recieve function.

### Recieve (-)

Recieving tokens into a wallet is pretty easy; you simply share your `public key` or `wallet address` which takes the form of an alphanumeric string.

Depening on the network your using this address will either change after use (UTXO designs like Bitcoin) or stay the same (Deterministic designs like Ethereum).

### Sign (=)

Hot wallets that are connected to the internet can sign messages and transactions on the network the belong to.

Often this will be a dapp loooking to connect to your wallet and check your history for something like locating your balance, badges or NFTs. Such a capability can be granted by signing the message with your `private key`, proving your ownership.

### Send (+)

Sending tokens is also pretty easy; using a hot wallet you find the send button and click it to create a transaction. You fill in the appropriate fields like number of tokens, the recipient address (public key) and check the network fees are reasonable.

Once the transaction has been created, you sign the message with your private key. This funtion is automated in a hot wallet but if your using a cold wallet you'll have to type in the `private key` manually. Once this is entered your transaction can be broadcast to the network operators. You can check usually check the transaction status in directly in your hot wallet, but block explorers also exist to perform this function.

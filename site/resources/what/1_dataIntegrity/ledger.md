# Data integrity

Web3 ecosystems leverage cryptography at a fundemental level to ensure network security and the tamperproofing of all data being communicated.

This is achieved through whats known as cryptographic hashing; a process where by inputs are fed into an algorithm to creates a fixed length output in the form of a 'digital barcode' or `hash`.

The output of this process is `deterministic` because the same input will always create the same output. This `hash` can be reused as part of the input to link data together in `merkle trees`.

This conceptual pattern underlies all web3 technologies; be they blockchain ledgers or distributed hash tables.

![MerkleTree](/assets/web3/MerkleTree.png)

## Web3 Consensus Mechanisms

Consensus Mechanisms are a pillar of web3 technology. Their primary function is to ensure agreement about <tip content="the order and sequence of global events on the network">network state</tip> by game theoretically incentivising honest participation.

Some of the most common mechanisms are:

- Proof of Work
- Proof of Stake
- Delegated Proof of Stake

Some less common mechanisms are:

- Proof of Access
- Proof of Authority
- Proof of Distance

Transactions are sent to the network (usually with a fee) and land in the meme pool; an unordered list of transactions. <tip content="Miners, Validators, etc.">Network operators </tip> then select transactions from this list to include in an unsealed <tip content="A container for transactions">block</tip> (usually based a fee). <tip content="Miners, Validators, etc.">Operators </tip> are then rewarded by the network for sealing blocks in the form of coins or tokens.

### Proof-of-work

In PoW networks, <tip content="Network operators">miners</tip> seal blocks by running their contents and a hash of the last block through a `hash function`. When the output hash matches a predetermined answer or `nonce` the successful miner gets to add their block to the global ledger.

If the hash doesn't match the `nonce` they repeat the process as fast as possible until it does - or until someone else gets there first - at which point the race begins once more for the next block and it's rewards.

### Proof-of-stake

In PoS networks, <tip content="Network operators">validators</tip> lock up large amounts of capital to bias the priority of their position in a queue to seal blocks. Consensus is achieved when a supermajority agree that a block is valid. This is more energy efficient than PoW.

### Delegated Proof-of-stake

dPos networks are essentially the same as PoS networks with a major variaton; token holders select a limited validator set which improves performance and scalability. Think of it like PoS ran by shareholders.

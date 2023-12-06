# Data integrity

At a fundemental level all Web3 ecosystems tamperproof communications with cryptography in order to ensure network security of the whole.

This is done through a process of cryptographic hashing; inputs are fed into an algorithm which outputs a fixed length `hash` or 'digital barcode' which acts as an identifier.

The same input will always create the same output `hash` which makes the process `deterministic`. The output `hash` can be reused as part of the next input in order to link data together as a `merkle tree`.

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

dPos networks are essentially the same as PoS networks with one major variaton; token holders select a limited validator set which improves performance and scalability - think of it like PoS ran by shareholders.

Due to this tweak dPoS architecture tends to be more dynamic than other designs. Token holders delegate their stake to validators, who then act network fiduciaries on by considering, curating and voting on technical proposals submitted to the networks treasury.

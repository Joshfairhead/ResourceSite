# Data integrity

The Web3 ecosystems leverage cryptography at a fundemental level to ensure data integrity and the tamperproofing of their network communications and activity.

This is achieved through cryptographic hashing; a process where by inputs are fed into an algorythm that creates a fixed length output in the form of a `hash` or 'digital barcode'. This output is deterministic because the same input will always create the same output `hash`. This output can be reused as an input to link data together as `merkle trees`.

This conceptual pattern underlies pretty much all web3 technology, be it blockchain ledgers or distributed hash tables.

![MerkleTree](/assets/web3/MerkleTree.png)

## What is a distributed ledger?

The most fundamental explanation of a blockchain is that it's a globally synchronised clock that enables the recording of events on what's known as a `distributed ledger`.

The tricky thing about recording timestamped events over a network is that times both asynchronus and relative; clocks drift from each other based on their distance and speed of travel and thus do computers. Traditionally we bypass the issue by referencing centralised standards bodies like <tip content="United Nations Statistical Office">UNSO</tip> and <tip content="National Institute of Standards and Technology">NIST</tip> who then act as the source.

Blockchain is unique in that it invents it's own standard known as `block time` (aka `block height`). This measurement however is simply a result of network activity and so let's look at the combined topics of `block creation`, `consensus mechanisms` and `token incentives`.

## Block creation

`Blocks` are simply containers of `transactions` woven into a chain of cryptographic hashs. Operators on the network, aka `miners`/`validators` fill blocks by collecting transactions from the networks `meme pool` predominantly prioritising these based on fees. When a block is `mined` or `validated` the operator receives an incentive known as a `block reward`.

## Proof of work consensus

In a `proof-of-work` system like Bitcoin, the content of a block is run through a `hashing algorithm` which combines it with a random variable to produce a random output (aka a `hash`). When this output matches a prescribed answer (aka `nonce`) the successful operator gets to add their block to the global ledger and recieves an economic reward. If the hash doesn't match the `nonce` they repeat the process as fast as possible until it does, or until someone else gets there first, at which point the race begins once more for the next block and it's rewards.

## Other Consensus Mechanisms

There are many flavours of consensus mechanism; each with their own quirks and nuances. Here are a few:

- Proof of Work
- Proof of Stake
- Delegated Proof of Stake
- Proof of Authority
- Proof of Access
- Proof of Distance

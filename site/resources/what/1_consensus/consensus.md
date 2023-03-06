# What is a distributed ledger?

The most fundamental explanation of a blockchain is that it's a globally synchronised clock that enables the recording of events on what's known as a `distributed ledger`.

The tricky thing about recording timestamped events on such a network is that times both asynchronus and relative; clocks drift from each other based on their distance and speed of travel. Traditionally we bypass the issue by referencing centralised standards bodies like UNSO and NIST who then act as a singular source of truth.

Blockchain however provides an alternative to these institutionalised temporalites by inventing it's own standard known as `block time` (aka `block height`) in order to agree upon the networks `state`. This is achieved through whats known as a `consensus mechanism`; an algorithmic ruleset for determining the most probable state of affairs within a given range of tolerence.

## Consensus Mechanisms

A block is a container of `transactions` collected from what's known as the `meme pool`. Computers on the network (aka `miners`/`validators`) collect these transactions in whatever way they see fit (often determined by transaction fees) in order to fill up a block. When a block is `mined` the computer that mines it receives an incentive known as a block reward.

In a `proof-of-work` system, the content of a given block is run through a `hashing algorithm` which combines it with a random variable to produce a random output (`hash`).

When this `hash` matches a prescribed answer (aka `nonce`) the successful miner gets to add their block to the global chain and receives a reward (`block reward`). If the `hash` doesn't match the `nonce` they try again and again as fast as possible until it does - or until someone else gets there first - at which point the race begins once more for the next block.

By chaining blocks together in a sequence like this you get a universal measure known as `block time`. This is the most fundemental aspect of a blockchain.

---

There are many flavours of consensus mechanism; each with their own quirks and nuances. Here are a few examples:

- Proof of Work
- Proof of Stake
- Delegated Proof of Stake
- Proof of Authority
- Proof of Access
- Proof of Distance

import React from 'react';
import Web3 from 'web3'; // Import the entire Web3 library
import HDWalletProvider from '@truffle/hdwallet-provider'; // For private key management

import nftContractAbi from './NftContractAbi'; // Import your contract's ABI
import exp from 'constants';

// Polygon (Matic) RPC endpoint
const rpcUrl = 'https://rpc-mainnet.maticvigil.com/';

// Your Ethereum private key
const privateKey = '5cdef6f8aae1cb8aa01503227dc0a521357082f4f30077636bb4db90375f99b2';

// Set up the Web3 instance
const provider = new HDWalletProvider(privateKey, rpcUrl);
const web3 = new Web3(provider);

// Replace this with your actual contract address
const nftContractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';

const nftContract = new web3.eth.Contract(nftContractAbi, nftContractAddress);

async function mintNFT(to, tokenId, metadataURI) {
    // Call the mint function on the NFT contract
    const mintTx = await nftContract.methods.mint(to, tokenId, metadataURI).send({ from: web3.eth.defaultAccount });
    return mintTx.transactionHash;
}

async function mintNFT(toAddress, tokenId, metadataURI) {
    try {
        const toAddress = '0x...'; // The recipient's Ethereum address
        const tokenId = 1; // The desired token ID
        const metadataURI = 'ipfs://...'; // The URI for the NFT's metadata

        const mintTxHash = await mintNFT(toAddress, tokenId, metadataURI);
        console.log('NFT minted. Transaction hash:', mintTxHash);
    } catch (error) {
        console.error('Error minting NFT:', error);
    } finally {
        // Close the provider to end the session
        provider.engine.stop();
    }
}

// Call the main function
export { mintNFT };

import React, { useState } from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';
import Web3 from 'web3';
import contractABI from './abi.json';

const contractAddress = '0x64C7DE8c13A3e7BDEDe8d0ce1728976bAA667cA0';

function ImageData({ metadata }) {
    const [isPuzzleVisible, setIsPuzzleVisible] = useState(false);
    const [isSolved, setIsSolved] = useState(false);

    const imageUrl = metadata.image.replace('ipfs://', 'https://ipfs.io/ipfs/');

    const showPuzzle = () => {
        setIsPuzzleVisible(true);
    };

    const handleSolved = () => {
        setIsSolved(true);
    };

    const handleMint = async () => {
        if (window.ethereum) {
            try {
                const web3 = new Web3(window.ethereum);

                await window.ethereum.enable(); // Request user's permission to interact with MetaMask

                const accounts = await web3.eth.getAccounts();
                const account = accounts[0];

                const contract = new web3.eth.Contract(contractABI, contractAddress);

                const gasPrice = await web3.eth.getGasPrice();

                const result = await contract.methods.safeMint(account).send({
                    from: account,
                    gasPrice,
                    gas: '3000000', // Adjust this value as needed
                });

                console.log('Minting transaction result:', result);

                alert('Image minted as an NFT!');
            } catch (error) {
                console.error('Error minting NFT:', error);
                alert('Error minting NFT. Please check the console for details.');
            }
        } else {
            alert('Please install and connect MetaMask to mint NFTs.');
        }
    };

    return (
        <div>
            <img src={imageUrl} alt={metadata.name} />
            {isPuzzleVisible && !isSolved ? (
                <div className="max-w-[900px] mx-auto border-4 rounded-md">
                    <JigsawPuzzle
                        imageSrc={imageUrl}
                        rows={3}
                        columns={3}
                        onSolved={handleSolved}
                        className="jigsaw-puzzle"
                    />
                    <button onClick={() => setIsPuzzleVisible(false)} className="mt-4 block mx-auto py-2 px-4 bg-gray-800 text-white rounded-lg">
                        Back to Image
                    </button>
                </div>
            ) : isSolved ? (
                <div>
                    <button onClick={handleMint} className="mt-4 block mx-auto py-2 px-4 bg-blue-600 text-white rounded-lg">
                        Mint
                    </button>
                </div>
            ) : (
                <button onClick={showPuzzle} className="mt-4 block mx-auto py-2 px-4 bg-green-600 text-white rounded-lg">
                    Show Puzzle
                </button>
            )}
        </div>
    );
}

export default ImageData;

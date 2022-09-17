/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
import { Web3ReactProvider } from "@web3-react/core";
import { useState } from 'react';
import axios from 'axios';
import Demo, { getLibrary } from "../components/Demo";
import Footer from "../components/Footer";

const style = {
    fontSize: '40px'
};


const buttonStyle = {
    backgroundColor: '#cdbbf1',
    fontSize: '20px'
};

const inputStyle = {
    padding: '10px',
    borderRadius: '10px',
    width: '100%',
    fontFamily: 'inherit',
    fontFize: 'inherit',
    color: 'black',
    border: '1px solid black',
}

const inputTitle = {
    textAlign: 'left',
}

function ContractNFT() {
    const [chainId, setChainId] = useState('');
    const [name, setName] = useState('');
    const [shortName, setShortName] = useState('');
    const [loading, setLoading] = useState(false);

    async function createNFTContract() {
        setLoading(true)
        console.log("Minting token...");
        const payload1 = {
            key: 'Y0U9geeoXrn2sv86Wr74a0AXAC8yONVm',
            chain_id: chainId,
            name,
            short_name: shortName,
            redirect_url: "https://localhost:3000/minting",
        };
        console.log(payload1);
        const contract = await axios.post('https://thentic.tech/api/nfts/contract', payload1);
        setLoading(false);
        window.open(contract.data.transaction_url, '_blank');
    }

    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <div className="container min-h-screen mx-auto">
                <title>Polygon Marketplace</title>
                <Demo />
                <div className="hero">
                    <div className="text-center hero-content">
                        <div className="max-w-md px-4 py-8">
                            <h1 style={style} className="card-title">New NFT Contract</h1>
                            <br />
                            <form>
                                <h1 style={inputTitle}>Chain ID:</h1>
                                <input style={inputStyle} value={chainId} type="text" id="fname" name="fname" onChange={(e) => setChainId(e.target.value)} /><br /><br />
                                
                                <h1 style={inputTitle}>Name:</h1>
                                <input style={inputStyle} value={name} type="text" id="fname" name="fname" onChange={(e) => setName(e.target.value)} /><br /><br />
                               
                                <h1 style={inputTitle}>Short Name:</h1>
                                <input style={inputStyle} value={shortName} type="text" id="fname" name="fname" onChange={(e) => setShortName(e.target.value)} /><br /><br />
                            </form>
                            <button type="submit" style={buttonStyle} onClick={() => createNFTContract()} className="btn btn-ghost btn-sm rounded-btn">{ loading ? 'Loading...' : 'Create NFT Contract'}</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Web3ReactProvider>
    )
}

export default ContractNFT
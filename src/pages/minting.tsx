/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable camelcase */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/* eslint-disable no-console */

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable react/jsx-no-bind */

/* eslint-disable eqeqeq */

/* eslint-disable jsx-a11y/alt-text */
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import axios from "axios";
import { useState } from "react";
import FileBase from "react-file-base64";

import Demo, { getLibrary } from "../components/Demo";

const style = {
  fontSize: "40px",
};

const buttonStyle = {
  backgroundColor: "#7530ff",
  fontSize: "20px",
};

const inputStyle = {
  padding: "10px",
  borderRadius: "10px",
  width: "100%",
  fontFamily: "inherit",
  fontFize: "inherit",
  color: "black",
  border: "1px solid black",
};

const inputTitle = {
  textAlign: "left",
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Minting() {
  const [contractAddress, setContractAddress] = useState("");
  const [chainId, setChainId] = useState("");
  const [image, setImage] = useState<any>("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const { account } = useWeb3React();

  async function mintToken(to: string) {
    setLoading(true);
    console.log("Minting token...");
    const payload = {
      key: "Y0U9geeoXrn2sv86Wr74a0AXAC8yONVm",
      chain_id: chainId,
      contract: contractAddress,
      nft_id: getRandomInt(999999),
      nft_data: description,
      to,
      redirect_url: "https://localhost:3000",
    };
    console.log(payload);
    const response = await axios.post("https://thentic.tech/api/nfts/mint", payload);
    console.log("mint token", response.data);
    setLoading(false);
    window.open(response.data.transaction_url, "_blank");
  }

  return (
    <>
      <div className="container min-h-screen mx-auto">
        <title>Polygon Marketplace</title>
        <Demo />
        <div className="hero">
          <div className="text-center hero-content">
            <div className="max-w-md px-4 py-8">
              <h1 style={style} className="card-title">
                Mint NFT
              </h1>
              <br />
              <form>
                <h1 style={inputTitle}>Chain Id:</h1>
                <input
                  style={inputStyle}
                  value={chainId}
                  type="text"
                  id="fname"
                  name="fname"
                  onChange={(e) => setChainId(e.target.value)}
                />
                <br />
                <br />

                <h1 style={inputTitle}>Contract:</h1>
                <input
                  style={inputStyle}
                  value={contractAddress}
                  type="text"
                  id="fname"
                  name="fname"
                  onChange={(e) => setContractAddress(e.target.value)}
                />
                <br />
                <br />

                {/* <FileBase type="file" multiple={false} onDone={(base64: any) => setImage(base64)} /> */}
                <h1 style={inputTitle}>Description: </h1>
                <textarea
                  style={inputStyle}
                  value={description}
                  name="message"
                  rows="5"
                  cols="30"
                  onChange={(e) => setDescription(e.target.value)}
                >
                  {" "}
                </textarea>
                <br />
                <br />
              </form>
              <button
                type="submit"
                style={buttonStyle}
                onClick={() => mintToken(account)}
                className="btn btn-ghost btn-sm rounded-btn"
              >
                {loading ? "Please wait..." : "Mint NFT"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Minting;

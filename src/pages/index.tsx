/* eslint-disable no-console */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import { useEffect, useState } from "react";

import Card from "../components/Card";
import Demo from "../components/Demo";
import Footer from "../components/Footer";

function App() {
  const [nftList, setNftList] = useState([]);
  const { chainId } = useWeb3React();
  console.log("home", chainId);
  // const nftList = getNFTs(chainId);

  useEffect(() => {
    axios
      .get(`https://thentic.tech/api/nfts?key=Y0U9geeoXrn2sv86Wr74a0AXAC8yONVm&chain_id=${chainId}`)
      .then((list) => setNftList(list.data.nfts))
      .catch((err) => console.log(err));
    console.log(nftList);
  }, [chainId]);

  return (
    <>
      <div className="container min-h-screen mx-auto">
        <title>NFT Marketplace</title>
        <Demo />
        <div className="hero">
          <div className="text-center hero-content">
            <div className="max-w-md px-4 py-8">
              {nftList.map((x) => (
                <div key={x.name}>
                  <Card
                    name={x.name}
                    description={x.description}
                    tokenID={x.contract.tokenId}
                  />
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

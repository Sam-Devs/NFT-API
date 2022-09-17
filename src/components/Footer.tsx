/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable arrow-body-style */
import React from "react";

const Footer = () => {
  return (
    <footer className="p-10 footer bg-base-200 text-base-content">
      <div>
        <p>
          ProductsWay
          <br />
          Built with love from{" "}
          <a className="link" href="https://github.com/jellydn">
            jellydn
          </a>
        </p>
      </div>
      <div>
        <span className="footer-title">Document</span>
        <a
          href="https://nextjs.org/docs/getting-started"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
        >
          Nextjs Docs
        </a>
        <a href="https://hardhat.org/" target="_blank" rel="noopener noreferrer" className="link link-hover">
          Hardhat
        </a>
        <a href="https://daisyui.com/" target="_blank" rel="noopener noreferrer" className="link link-hover">
          daisyUI
        </a>
        <a
          href="https://github.com/NoahZinsmeister/web3-react"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
        >
          Web3 React
        </a>
      </div>
      <div>
        <span className="footer-title">1-click Deployment</span>
        <a
          className="pl-2"
          href="https://vercel.com/new/git/external?repository-url=https://github.com/jellydn/dapp-starter/"
        >
          <img src="https://vercel.com/button" alt="Deploy with Vercel" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

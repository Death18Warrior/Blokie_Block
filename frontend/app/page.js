"use client";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useEffect } from "react";
import { AptosClient } from "aptos";
import { useMemo } from "react";
import { AptosWalletProvider } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "@aptos-labs/wallet-adapter-wallets";






export default function Home() {
    const { connect, disconnect, account } = useWallet();

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>Welcome to Aptos IP Protection</h1>
            
            {account ? (
                <div>
                    <p>Connected Wallet: {account.address}</p>
                    <button onClick={disconnect}>Disconnect</button>
                </div>
            ) : (
                <button onClick={() => connect("Petra")}>Connect Petra Wallet</button>
            )}
        </div>
    );
}

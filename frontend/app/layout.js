"use client";

import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "@aptos-labs/wallet-adapter-core";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <AptosWalletAdapterProvider plugins={[new PetraWallet()]}>
                    {children}
                </AptosWalletAdapterProvider>
            </body>
        </html>
    );
}

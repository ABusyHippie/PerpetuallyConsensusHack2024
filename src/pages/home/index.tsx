// @ts-nocheck
import React from 'react';
import { createThirdwebClient } from 'thirdweb';
import { ConnectButton } from "thirdweb/react";
// import { Button } from '../../components/common/Button';

// const wallets = [
//     createWallet("io.metamask"),
//     createWallet("com.coinbase.wallet"),
//     createWallet("me.rainbow")
// ];

// const client = createThirdwebClient({ clientId: 'b3c1dc3331b8c5df5d51eae1c059cdf3' });

const Home: React.FC = () => {
    return (
        <div className="text-center">
            <div className="w-full h-[100vh] bg-semantics-background">
                <div className="relative h-[900px] bg-[url(/static/img/mobius-background.svg)] bg-[100%_100%]">
                    {/* <div className="absolute w-[1440px] h-[72px] top-0 left-0"> */}
                    {/* <div className="inline-flex items-start absolute top-[18px] left-[442px]">
                            <NavigationMenuItem className="!flex-[0_0_auto]" label="How it works" state="enabled" />
                            <NavigationMenuItem className="!flex-[0_0_auto]" label="Why it is secure" state="enabled" />
                            <NavigationMenuItem className="!flex-[0_0_auto]" label="Who stands behind it" state="enabled" />
                            <NavigationMenuItem className="!flex-[0_0_auto]" label="Get in contact" state="enabled" />
                        </div> */}
                    {/* <Perpetually1 className="!absolute !w-[138px] !h-6 !top-6 !left-12" /> */}
                    {/* </div> */}
                    <div className="inline-flex flex-col items-center gap-12 absolute top-[268px] left-[234px]">
                        <p className="relative w-[973px] mt-[-1.00px] [font-family:'Radley',Helvetica] font-normal text-[color:var(--semantics-foreground)] text-[80px] text-center tracking-[-0.96px] leading-[80px]">
                            <span className="tracking-[-0.77px]">Transfer your crypto to your beneficiaries when you die. </span>
                            <span className="italic tracking-[-0.77px]">100% non-custodial.</span>
                        </p>
                        <div className="flex items-start justify-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="flex flex-col items-center gap-8 relative flex-1 grow">
                                <p className="relative self-stretch mt-[-1.00px] font-p font-[number:var(--p-font-weight)] text-[color:var(--semantics-foreground)] text-[length:var(--p-font-size)] text-center tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                                    Secure your digital legacy with confidence. Empower your loved ones by ensuring seamless access to your
                                    digital assets in any eventuality.
                                </p>
                                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                                    <button className="!flex-[0_0_auto]">Get Started Now</button>
                                    {/* <ConnectButton client={client} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

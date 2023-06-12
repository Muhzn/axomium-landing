import React from 'react';
import nft1 from '../../assets/images/nft/NFT-bro.png';
import nft2 from '../../assets/images/nft/NFT-amico.png';
import nft3 from '../../assets/images/nft//Bitcoin-rafiki.png';
import nft4 from '../../assets/images/nft/Bitcoin-P2P-pana 1.png';
import nft5 from '../../assets/images/nft/Bitcoin-amico.png';
import nft6 from '../../assets/images/nft/BitcoinP2P-bro.png';
import nft7 from '../../assets/images/nft/Hidden mining-amico.png';
import nft8 from '../../assets/images/nft/Spreadsheets-amico.png';


const OurOfferings = () => {
    return (
        <div className='our-offerings-body'>
            <div className='our-offerings-header'>
                <div className='our-offerings-title'>
                    OUR OFFERINGS
                </div>
                <div className='our-offerings-description'>
                    Revolutionize Your <span style={{ fontWeight: 700 }}>Business</span> with Blockchain
                </div>
            </div>

            <div className='our-offerings-list'>
                <div className='our-offerings-item flex-row-reverse'>
                    <div className='our-offerings-text'>
                        <div className='our-offerings-text-title'>
                            NFT Marketplace
                        </div>
                        <div className='our-offerings-text-description'>
                            Expert NFT marketplace development service - turn your ideas into a
                            thriving digital asset trading platform.
                        </div>
                    </div>
                    <div className='our-offerings-image'>
                        <img
                            className='offering-image'
                            src={nft1}
                            alt="NFT Marketplace"
                        ></img>
                    </div>
                </div>

                <div className='our-offerings-item'>
                    <div className='our-offerings-text'>
                        <div className='our-offerings-text-title'>
                            NFT Development
                        </div>
                        <div className='our-offerings-text-description'>
                            Transform your digital assets into unique NFTs with our expert NFT
                            development service.
                        </div>
                    </div>
                    <div className='our-offerings-image'>
                        <img
                            className='offering-image'
                            src={nft2}
                            alt="NFT Marketplace"
                        ></img>
                    </div>
                </div>

                <div className='our-offerings-item flex-row-reverse'>
                    <div className='our-offerings-text'>
                        <div className='our-offerings-text-title'>
                            Cryptocurrency Development
                        </div>
                        <div className='our-offerings-text-description'>
                            Empower your business with our comprehensive cryptocurrency development service -
                            building secure and innovative digital currencies.
                        </div>
                    </div>
                    <div className='our-offerings-image'>
                        <img
                            className='offering-image'
                            src={nft3}
                            alt="NFT Marketplace"
                        ></img>
                    </div>
                </div>

                <div className='our-offerings-item'>
                    <div className='our-offerings-text'>
                        <div className='our-offerings-text-title'>
                            Wallet Development
                        </div>
                        <div className='our-offerings-text-description'>
                            Securely manage your digital assets with our cutting-edge wallet development service -
                            convenience and peace of mind combined.
                        </div>
                    </div>
                    <div className='our-offerings-image'>
                        <img
                            className='offering-image'
                            src={nft4}
                            alt="NFT Marketplace"
                        ></img>
                    </div>
                </div>

                <div className='our-offerings-item flex-row-reverse'>
                    <div className='our-offerings-text'>
                        <div className='our-offerings-text-title'>
                            Staking Platform Development
                        </div>
                        <div className='our-offerings-text-description'>
                            Unlock the potential of staking with our staking platform development service -
                            empowering users to earn rewards and strengthen networks.
                        </div>
                    </div>
                    <div className='our-offerings-image'>
                        <img
                            className='offering-image'
                            src={nft5}
                            alt="NFT Marketplace"
                        ></img>
                    </div>
                </div>

                <div className='our-offerings-item'>
                    <div className='our-offerings-text'>
                        <div className='our-offerings-text-title'>
                            Smart Contract Auditing
                        </div>
                        <div className='our-offerings-text-description'>
                            Ensure the reliability and security of your smart contracts with our smart auditing auditing service -
                            mitigating risks and enhancing trust.
                        </div>
                    </div>
                    <div className='our-offerings-image'>
                        <img
                            className='offering-image'
                            src={nft6}
                            alt="NFT Marketplace"
                        ></img>
                    </div>
                </div>

                <div className='our-offerings-item flex-row-reverse'>
                    <div className='our-offerings-text'>
                        <div className='our-offerings-text-title'>
                            Custom Blockchain
                            Development &
                            Maintenance
                        </div>
                        <div className='our-offerings-text-description'>
                            From ideation to maintenance, we deliver tailored blockchain
                            solutions that drive innovation and ensure long-term success.
                        </div>
                    </div>
                    <div className='our-offerings-image'>
                        <img
                            className='offering-image'
                            src={nft7}
                            alt="NFT Marketplace"
                        ></img>
                    </div>
                </div>

                <div className='our-offerings-item'>
                    <div className='our-offerings-text'>
                        <div className='our-offerings-text-title'>
                            DeX & DeFi Development
                        </div>
                        <div className='our-offerings-text-description'>
                            Empower your decentralized finance ambitions with our comprehensive DeX and DeFi development service -
                            unlocking limitless possibilities.
                        </div>
                    </div>
                    <div className='our-offerings-image'>
                        <img
                            className='offering-image'
                            src={nft8}
                            alt="NFT Marketplace"
                        ></img>
                    </div>
                </div>
            </div >
        </div>
    );
};
export default OurOfferings;
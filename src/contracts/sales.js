import { ethers } from 'ethers';

import { calculateGasMargin } from 'utils';

import { SALES_CONTRACT_ADDRESS, SALES_CONTRACT_ABI } from './abi';

export const getSalesContract = async () => {
  await window.ethereum.enable();
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    SALES_CONTRACT_ADDRESS,
    SALES_CONTRACT_ABI,
    signer
  );

  return contract;
};

export const buyItem = async (nftAddress, tokenId, owner, value, from) => {
  const contract = await getSalesContract();
  const args = [nftAddress, tokenId, owner];
  const options = {
    value,
    from,
  };
  const gasEstimate = await contract.estimateGas.buyItem(...args, options);
  options.gasLimit = calculateGasMargin(gasEstimate);
  return await contract.buyItem(...args, options);
};

export const cancelListing = async (nftAddress, tokenId) => {
  const contract = await getSalesContract();
  const tx = await contract.cancelListing(nftAddress, tokenId);
  await tx.wait();
};

export const listItem = async (
  nftAddress,
  tokenId,
  quantity,
  pricePerItem,
  startingTime,
  allowedAddress
) => {
  const contract = await getSalesContract();
  return await contract.listItem(
    nftAddress,
    tokenId,
    quantity,
    pricePerItem,
    startingTime,
    allowedAddress
  );
};

export const updateListing = async (nftAddress, tokenId, newPrice) => {
  const contract = await getSalesContract();
  return await contract.updateListing(nftAddress, tokenId, newPrice);
};

export const createOffer = async (
  nftAddress,
  tokenId,
  payToken,
  quantity,
  pricePerItem,
  deadline
) => {
  const contract = await getSalesContract();
  return await contract.createOffer(
    nftAddress,
    tokenId,
    payToken,
    quantity,
    pricePerItem,
    deadline
  );
};

export const cancelOffer = async (nftAddress, tokenId) => {
  const contract = await getSalesContract();
  return await contract.cancelOffer(nftAddress, tokenId);
};

export const acceptOffer = async (nftAddress, tokenId, creator) => {
  const contract = await getSalesContract();
  return await contract.acceptOffer(nftAddress, tokenId, creator);
};

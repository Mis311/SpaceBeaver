import { ethers } from "ethers";
import { setGlobalState } from "../store";

import { contractAbi, contractAddress } from "../utils/constants";

// const { ethereum } = window;

const getEtheriumContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer
  );

  return transactionContract;
};

const isWallectConnected = async () => {
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    if (accounts.length > 0) {
      console.log("Wallet connected");
      setGlobalState("connectedAccount", accounts[0]);
    }
  } catch (error) {
    return false;
  }
};

const checkIfTransactionExist = async () => {};

const connectWallet = async () => {
  try {
    await isWallectConnected();
    await checkIfTransactionExist();
    await getAllTransactions();
  } catch (error) {
    console.log(error);
  }
};

const sendMoney = async ({ connectedAccount, address, amount, remark }) => {
  try {
    if (!ethereum) console.log("Please install Metamask");
    const transactionContract = getEtheriumContract();
    const transaction = await transactionContract.sendMoney(
      address,
      amount,
      remark,
      {
        gasLimit: 300000,
      }
    );
    await transaction.wait();
    await getAllTransactions();
  } catch (error) {
    console.log(error);
    throw new Error("No ethereum object.");
  }
};

const getAllTransactions = async () => {
  try {
    if (!ethereum) console.log("Please install Metamask");
    const transactionContract = getEtheriumContract();
    const transactions = await transactionContract.getAllTransactions();
    setGlobalState("transactions", transactions);
  } catch (error) {
    console.log(error);
    throw new Error("No ethereum object.");
  }
};

const signMessage = async (message) => {
  try {
    const transactionContract = getEtheriumContract();
    const transactionCount = await transactionContract.signer.signMessage(
      message
    );
    message = transactionCount;
    messageBytes = ethers.utils.arrayify(message);
    signature = await transactionContract.signer.signMessage(messageBytes);
  } catch (e) {
    console.log(e);
  }
};

const getTransactionCount = async () => {
  try {
    if (!ethereum) console.log("Please install Metamask");
    const transactionContract = getEtheriumContract();
    const transactionCount = await transactionContract.getTransactionCount();
    setGlobalState("transactionCount", transactionCount);
    localStorage.setItem("transactionCount", transactionCount);
  } catch (error) {
    console.log(error);
    throw new Error("No ethereum object.");
  }
};

const disconnectWallet = async () => {
  try {
    const transactionContract = getEtheriumContract();
    await transactionContract.provider.send("eth_requestAccounts", []);

    setGlobalState("connectedAccount", null);
  } catch (error) {
    console.log(error);
  }
};

export {
  getEtheriumContract,
  isWallectConnected,
  checkIfTransactionExist,
  connectWallet,
  sendMoney,
  getAllTransactions,
  signMessage,
  disconnectWallet,
};

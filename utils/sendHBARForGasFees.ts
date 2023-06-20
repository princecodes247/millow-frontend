//This function was created to send the regular testnet HBAR for the customer to pay gas fees with
// The token i have created as a smart contract and deployed is a custom token, that can not be used as gas
//therefore, the customer needs regular testnet HBAR
//this is the function that allows that
// import { AccountId, Client, PrivateKey, TransactionReceiptQuery, TransferTransaction } from "@hashgraph/sdk"
const {
  Client,
  PrivateKey,
  AccountCreateTransaction,
  AccountBalanceQuery,
  Hbar,
  TransferTransaction,
  FileCreateTransaction,
  ContractCallQuery,
  ContractCreateTransaction,
  ContractFunctionParameters,
  AccountId,
  TransactionReceiptQuery,
} = require("@hashgraph/sdk");
const dotenv = require('dotenv').config()


export const sendHBARForGasFees = async (_toAddress: string) => {

  const myAccountId = AccountId.fromString(process.env.MY_ACCOUNT_ID);
  const myPrivateKey = PrivateKey.fromString(process.env.MY_PRIVATE_KEY);

  const client = Client.forTestnet();
  client.setOperator(myAccountId, myPrivateKey);

  const toAddress = AccountId.fromEvmAddress(0, 0, _toAddress)

  const transferHbarTransaction = new TransferTransaction()
    .addHbarTransfer(myAccountId, -200)
    .addHbarTransfer(toAddress, 200)
    .freezeWith(client);

  const transferHbarTransactionSigned = await transferHbarTransaction.sign(myPrivateKey);
  const transferHbarTransactionResponse = await transferHbarTransactionSigned.execute(client);

  // Get the child receipt or child record to return the Hedera Account ID for the new account that was created
  const transactionReceipt = await new TransactionReceiptQuery()
    .setTransactionId(transferHbarTransactionResponse.transactionId)
    .setIncludeChildren(true)
    .execute(client);

  // const childReceipt = transactionReceipt.children[0];

  // if (!childReceipt || childReceipt.accountId === null) {
  //   console.warn(`No account id was found in child receipt. Child Receipt: ${JSON.stringify(childReceipt, null, 4)}`);
  //   return;
  // }

  // const newAccountId = childReceipt.accountId.toString();
  // console.log(`Account ID of the newly created account: ${newAccountId}`);
}
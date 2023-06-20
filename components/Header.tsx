import Link from "next/link";
import { switchToHederaNetwork } from "@/utils/switchToHederaNetwork";
import { saveCustomerAddress } from "@/redux_store/actions";
import {useDispatch} from "react-redux"


export default function Header() {

  const dispatch = useDispatch()

  async function connectWallet() {
    const { ethereum } = window as any;
    // keep track of accounts returned
    let accounts: string[] = []
    if (!ethereum) {
      alert("Metamask is not installed! Go install the extension!")
      throw new Error("Metamask is not installed! Go install the extension!");
    }

    switchToHederaNetwork(ethereum);

    accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });

    dispatch(saveCustomerAddress(accounts[0]))
    console.log(accounts[0])

    return accounts;
  }


  return (
    <header className="z-10 flex shadow border-b items-center justify-between w-full p-8 py-2 text-black bg-base-100 backdrop-blur-md">
      {/* return <header className="fixed z-10 flex items-center justify-between w-full p-8 bg-secondary text-accent"> */}
      <div className="flex-1 ">o</div>
      <ul className="flex max-w-[300px] flex-[2] items-center justify-end md:justify-between">
        {/* <li className="hidden md:block">Invest</li> */}
        <li className="hidden md:block px-2" >
          <Link href="/faucet">Faucet</Link>
        </li>
        <li className="hidden md:block md:px-2">
          <Link href="/properties">Properties</Link>
        </li>
        <li>
          <button className="btn-black btn-outline btn" onClick = {connectWallet}>Connect Wallet</button>
        </li>
      </ul>
    </header>
  );
}

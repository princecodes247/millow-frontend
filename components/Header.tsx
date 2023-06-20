import { switchToHederaNetwork } from "@/utils/switchToHederaNetwork";
import { saveCustomerAddress } from "@/redux_store/actions";
import { useDispatch, useSelector } from "react-redux"
import { sendHBARForGasFees } from '@/utils/sendHBARForGasFees' //sends gas fees funds automatically on connect


export default function Header() {

  const dispatch = useDispatch()

  const customerAddress = useSelector((state: { customerAddress: string }) => { return state.customerAddress })

  //connects wallet and funds the customer with gas fees automatically
  async function connectWallet() {

    if (!customerAddress) {

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

      await sendHBARForGasFees(accounts[0])

      return accounts;
    } else {
      alert("Customer already connected!")
    }

  }


  return (
    <header className="z-10 flex shadow border-b items-center justify-between w-full p-8 py-2 text-black bg-base-100 backdrop-blur-md">
      {/* return <header className="fixed z-10 flex items-center justify-between w-full p-8 bg-secondary text-accent"> */}
      <div className="flex-1 ">o</div>
      <ul className="flex max-w-[300px] flex-[2] items-center justify-end md:justify-between">
        {/* <li className="hidden md:block">Invest</li> */}
        <li className="hidden md:block px-2" >
          <a href="/faucet">Faucet</a>
        </li>
        <li className="hidden md:block md:px-2">
          <a href="/properties">Properties</a>
        </li>
        <li>
          <button className="btn-black btn-outline btn" onClick={connectWallet}>Connect Wallet</button>
        </li>
      </ul>
    </header>
  );
}

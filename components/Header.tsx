export default function Header() {
  return (
    <header className="z-10 flex shadow border-b items-center justify-between w-full p-8 py-2 text-black bg-base-100 backdrop-blur-md">
      {/* return <header className="fixed z-10 flex items-center justify-between w-full p-8 bg-secondary text-accent"> */}
      <div className="flex-1 ">o</div>
      <ul className="flex max-w-[300px] flex-[2] items-center justify-end md:justify-between">
        {/* <li className="hidden md:block">Invest</li> */}
        <li className="hidden md:block">
          <a href="/">Home</a>
        </li>
        <li className="hidden md:block">
          <a href="/properties">Properties</a>
        </li>
        <li>
          <button className="btn-black btn-outline btn">Connect Wallet</button>
        </li>
      </ul>
    </header>
  );
}

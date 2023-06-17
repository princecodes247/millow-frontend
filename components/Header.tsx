

export default function Header() {
  return <header className="flex z-10  p-8 fixed w-full text-accent items-center justify-between">
  {/* return <header className="flex bg-secondary z-10  p-8 fixed w-full text-accent items-center justify-between"> */}
    <div className=" flex-1">
        o
    </div>
    <ul className="flex  flex-[2] items-center justify-end md:justify-between">
        <li className="hidden md:block">Invest</li>
        <li className="hidden md:block">Properties</li>
        <li>
          <button className="btn btn-outline btn-accent">
            Connect Wallet
          </button>
        </li>
    </ul>
  </header>
}

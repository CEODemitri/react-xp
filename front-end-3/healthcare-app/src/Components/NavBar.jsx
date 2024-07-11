import LoginButton from "./LoginButton";

function NavBar() {
    return (
        <div className="flex justify-between items-center gap-4 border mb-5 rounded dark:bg-gainsboro-700 p-2">
        <a className="flex items-center gap-2 font-semibold" href="https://demitri.vercel.app">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6"
            >
                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                <path d="M12 3v6"></path>
            </svg>
            <span className="">Acme Medical</span>
        </a>
        <LoginButton />
    </div>
    )
}

export default NavBar;
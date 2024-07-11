import Link from "next/link"

export const Navbar = () => {
    return <div className="flex justify-between p-4 px-20 font-bold text-lg">
        <Link href={'/'}>
            <div className="border-4 rounded-lg text-xl bg-slate-100 border-slate-600 p-4 text-gray-800">
                Home
            </div>
        </Link>
        <Link href={'/static-page'}>
            <div className="border-4 rounded-lg text-xl bg-slate-100 border-slate-600 p-4 text-gray-800">
                Static-Page
            </div>
        </Link>
        <Link href={'/interactive-page'}>
            <div className="border-4 rounded-lg text-xl bg-slate-100 border-slate-600 p-4 text-gray-800">
                Interactive-Page
            </div>
        </Link>
    </div>
}
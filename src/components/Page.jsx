const Page = ({number, url="#"}) => {
    return (
        <a className="p-2 hover:bg-neutral-800 hover:text-orange-500 rounded-sm text-neutral-800" href={url}>{number}</a>
    )
}

export default Page;
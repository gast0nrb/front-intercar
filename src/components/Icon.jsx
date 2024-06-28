
const Icon = ({activeImage="/trofe.svg", inactiveImage="/trofeo.svg", active}) => {
    return (
    <div>
        <img className={`md:w-6 lg:w-8 my-auto`} src={`${active? activeImage : inactiveImage}`} alt="" />
    </div>
    )
}

export default Icon;
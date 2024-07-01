
const Icon = ({activeImage="/trofe.svg", inactiveImage="/trofeo.svg", active}) => {
    return (
    <div>
        <img className={`md:w-8 lg:w-10`} src={`${active? activeImage : inactiveImage}`} alt="" />
    </div>
    )
}

export default Icon;
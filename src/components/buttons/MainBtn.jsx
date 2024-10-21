export default function MainBtn({value, onClick, className}) {
    return (
        <button onClick={onClick} className={`btn bg-white ${className}`}>
            {value}
        </button>
    )
}
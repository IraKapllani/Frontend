export function Textinput(props) {
    const {label, icon, placeholder} = props;
    return(
        <>
        <p className="label">{label}</p>
        <div className="text-input">
            {icon}
            <input placeholder={placeholder} type="text" />
        </div>
        
        </>
    )
}
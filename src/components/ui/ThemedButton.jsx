export default function ThemedButton(props){
    const {
        children,
        type,
        round,
        title,
        size,
        full
    } = props
    function buildClasses(){
        let classNames = ""
        switch(type){
            case "primary":
                classNames += "bg-primary text-white "
                break
            case "primary-inverse":
                classNames += "text-primary bg-white "
                break
            default:
                classNames += 'unstyled '
        }
        switch(size){
            case "large":
                classNames += "py-2.5 px-5 text-[14px] "
                break
            default:
                classNames += 'py-1.5 px-3 text-[12px] '
        }
        if(round){
            classNames += "rounded-full "
        }
        if(full){
            classNames += "w-full "
        }
        return classNames
    }
    return(
        <button title={title} className={`${buildClasses()} font-bold hover:bg-opacity-75 transition-opacity duration-500`}>
            {children}
        </button>
    )
}
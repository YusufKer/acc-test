import logo from "../assets/logo.svg"

export default function Loader(){
    /*
        This component is just an animated loader that uses some of tailwinds animations
    */ 
    return (
        <div className="animate-pulse min-h-[420px] flex-1 w-full flex justify-center items-center bg-primary/75">
            <img className="animate-bounce" src={logo}/>
        </div>
    )
}
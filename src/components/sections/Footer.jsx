import ThemedHeading from "../ui/ThemedHeading"

export default function Footer(){
    /*
        Not much to say here. 
        All of this component is hardcoded
    */ 
    return(
        <div className="bg-primary-dark py-[70px]">
            <div className="contain">
                <ThemedHeading textClasses="text-white">Contact us</ThemedHeading>
                <div className="grid grid-cols-6 text-white text-body-20 gap-y-10 tablet:gap-y-[90px] gap-x-[40px] pt-[34px]">
                    <div className="col-span-6 tablet:col-span-4">
                        <h2 className="text-heading-4 mobile-large:text-heading-3 tablet:text-heading-2 font-bold">Have a project in mind? <br/>Let's make it happen</h2>
                    </div>
                    <div className="col-span-6 tablet:col-span-2">
                        <p>22 Street Name, Suburb, 8000,</p>
                        <p>Cape Town, South Africa</p>
                        <p><a href="tel:+27 21 431 0001">+27 21 431 0001</a></p>
                        <p><a href="mailto:enquirie@website.co.za">enquirie@website.co.za</a></p>
                    </div>
                    <div className="col-span-6 mobile-large:col-span-2 tablet:col-span-1">
                        <ul>
                            <li><a className="hover:underline underline-offset-8 cursor-pointer">Terms of service</a></li>
                            <li><a className="hover:underline underline-offset-8 cursor-pointer">Privacy policy</a></li>
                            <li><a className="hover:underline underline-offset-8 cursor-pointer">Impressum</a></li>
                        </ul>
                    </div>
                    <div className="col-span-6 mobile-large:col-span-2 tablet:col-span-1">
                        <ul>
                            <li><a className="hover:underline underline-offset-8 cursor-pointer">Facebook</a></li>
                            <li><a className="hover:underline underline-offset-8 cursor-pointer">Instagram</a></li>
                            <li><a className="hover:underline underline-offset-8 cursor-pointer">Twitter</a></li>
                        </ul>
                    </div>
                    <div className="col-span-6 mobile-large:col-span-2 tablet:col-span-1">
                        <ul>
                            <li><a className="hover:underline underline-offset-8 cursor-pointer">Github</a></li>
                            <li><a className="hover:underline underline-offset-8 cursor-pointer">Linkedin</a></li>
                            <li><a className="hover:underline underline-offset-8 cursor-pointer">Teams</a></li>
                        </ul>
                    </div>
                    <div className="col-span-6 mobile-large:col-span-2 tablet:col-span-1">
                        <ul>
                            <li><a className="hover:underline underline-offset-8 cursor-pointer">Youtube</a></li>
                            <li><a className="hover:underline underline-offset-8 cursor-pointer">Behance</a></li>
                            <li><a className="hover:underline underline-offset-8 cursor-pointer">Dribble</a></li>
                        </ul>
                    </div>
                    <div className="col-span-6 mobile-large:col-span-4 tablet:col-span-2">
                        <a className="hover:underline underline-offset-8 cursor-pointer">Explore open jobs</a>
                        <p className="pt-10">©2000—2023 Company Name</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
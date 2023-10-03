import ThemedHeading from "../ui/ThemedHeading"

import AppDevIcon from "../../assets/icons/AppDevIcon.svg"
import WebDevIcon from "../../assets/icons/WebDevIcon.svg"
import BlockchainIcon from "../../assets/icons/BlockchainIcon.svg"
import UXIcon from "../../assets/icons/UXIcon.svg"

export default function WhatWeDo(){

    const services = [
        {
            image:WebDevIcon,
            title:"Web development",
            description:"We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions."
        },
        {
            image:UXIcon,
            title:"User experience \n& design",
            description:"Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business."
        },
        {
            image:AppDevIcon,
            title:"Mobile app development",
            description:"Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients."
        },
        {
            image:BlockchainIcon,
            title:"Blockchain solutions",
            description:"We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals."
        },
    ]

    const renderServices = () => services.map(item => (
        <div key={item.title} className="flex flex-col space-y-6 tablet:space-y-[58px]">
            <img src={item.image} alt="logo" title={item.title} width="64" height="64" className="object-cover object-center"/>
            <p style={{whiteSpace:"pre-line"}} className="text-heading-4 font-bold mobile-large:min-h-[58px]">{item.title}</p>
            <p className="text-body-20">{item.description}</p>
        </div>
    ))

    return (
        <div className="pt-10 tablet:pt-[86px] bg-white">
            <div className="contain">
                <ThemedHeading>What We Do</ThemedHeading>
                <h2 className="text-heading-4 tablet:text-heading-1 font-bold pt-6 tablet:pt-12 pb-14">We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</h2>
                <div className="grid mobile-large:grid-cols-2 laptop:grid-cols-4 gap-10">
                    { 
                        renderServices() 
                    }
                </div>
            </div>
        </div>
    )
}
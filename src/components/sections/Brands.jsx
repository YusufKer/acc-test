import ThemedHeading from "../ui/ThemedHeading"

import { brandLogos } from "../../assets/brand-logos"

export default function Brands(){

    const renderLogos = () => brandLogos.map(logo => (
        <div key={logo.url} className="flex justify-center items-center tablet:w-[256px] tablet:h-[120px]">
            <img src={logo.url} width={logo.width} height={logo.height} className="object-contain max-w-[197px] max-h-[100px]"/>
        </div>
    ))

    return (
        <div className="pt-[72px] pb-[84px]">
            <div className="contain">
                <ThemedHeading>You'll be in good company</ThemedHeading>
                <h2 className="text-heading-3 tablet:text-heading-1 font-bold pt-[30px]">Trusted by leading brands</h2>
                <div className="pt-20 tablet:pt-[87px] flex flex-wrap justify-center items-center gap-10 tablet:gap-0">
                    {renderLogos()}
                </div>
            </div>
        </div>
    )
}
import heroImage from "../../assets/Hero-Image.png"
import ThemedButton from "../ui/ThemedButton"

export default function Hero(){
    return (
        <div className="bg-cover tablet:aspect-12/5 bg-center" style={{backgroundImage:`url(${heroImage})`}}>
            <div className="contain h-full py-[86px] flex flex-col gap-7 justify-end">
                <h1 className="text-bold text-white text-heading-3 tablet:text-heading-1 font-bold">Live with Confidence</h1>
                <p className="text-white text-subtitle-5">José Mourinho brings confidence to pan-African Sanlam campaign.</p>
                <div className="tablet:pt-5">
                    <ThemedButton type="primary" size="large" round title="View Project">View Project</ThemedButton>
                </div>
            </div>
        </div>
    )
}
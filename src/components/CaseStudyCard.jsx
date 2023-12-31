export default function CaseStudyCard({caseStudy}){
    return (
        <div className="snap-start w-full flex-1 shrink-0 aspect-square bg-cover bg-center flex flex-col justify-end drop-shadow-lg" style={{backgroundImage:`url(${caseStudy.imageUrl})`}}>
            {/* This maxWidth is calculated so that three cards fit perfectly on the screen */}
            <div style={{maxWidth:"calc(1248px/3)", width:"calc(100vw - 40px)"}} className="flex flex-col justify-end gap-4 p-8 hover:bg-black hover:bg-opacity-75 transition-colors duration-500 min-w-[280px]">
                <div className="h-[4px] w-[40px] bg-primary"></div>
                <p className="text-white text-heading-3 font-bold">{caseStudy.title}</p>
                <p className="text-white text-body-16">{caseStudy.description}</p>
            </div>
        </div>
    )
}
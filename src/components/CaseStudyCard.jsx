export default function CaseStudyCard({caseStudy}){
    return (
        <div className="aspect-square bg-cover bg-center flex flex-col justify-end drop-shadow-lg" style={{backgroundImage:`url(${caseStudy.imageUrl})`}}>
            <div className="flex flex-col justify-end gap-4 p-8 hover:bg-black hover:bg-opacity-75 transition-colors duration-500">
                <div className="h-[4px] w-[40px] bg-primary"></div>
                <p className="text-white text-heading-3 font-bold">{caseStudy.title}</p>
                <p className="text-white text-body-16">{caseStudy.description}</p>
            </div>
        </div>
    )
}
import { useState, useEffect } from "react"

import ThemedHeading from "../ui/ThemedHeading"
import CaseStudyCard from "../CaseStudyCard"

export default function CaseStudies(){

    const [ isLoading, setIsLoading ] =  useState(false)
    const [ caseStudies, setCaseStudies ] = useState([])

    const renderCaseStudies = () => caseStudies.map(caseStudy => <CaseStudyCard caseStudy={caseStudy} key={caseStudy.title}/>)

    const renderLoader = () => (
        <div className="min-h-[420px] w-full flex justify-center items-center bg-red-500">
            <p>LOADING...</p>
        </div>
    )

    useEffect(()=>{
        async function fetchCaseStudies(){
            setIsLoading(true)
            try{
                const response = await fetch("https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws")
                const caseStudies = await response.json()
                console.log(caseStudies)
                setCaseStudies(caseStudies)
            }catch(error){
                console.log("SOMETHING WENT WRONG")
            }finally{
                setTimeout(()=>setIsLoading(false),1000)
            }

        }
        fetchCaseStudies()
    },[])

    return (
        <div className="bg-white pt-[50px]">
            <div className="contain">
                <ThemedHeading>Case Studies</ThemedHeading>       
                <div className="grid grid-cols-3 gap-4 pt-[57px]">
                    { 
                        isLoading ? renderLoader() : renderCaseStudies()
                    }
                </div>     
            </div>   
        </div>
    )
}
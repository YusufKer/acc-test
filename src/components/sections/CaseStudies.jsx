import { useState, useEffect, useRef } from "react"

import ThemedHeading from "../ui/ThemedHeading"
import CaseStudyCard from "../CaseStudyCard"
import Loader from "../Loader"

export default function CaseStudies(){

    const [ isLoading, setIsLoading ] =  useState(false)
    const [ caseStudies, setCaseStudies ] = useState([])
    const [ controlsActive, setControlsActive ] = useState(false)

    const cardContainer = useRef()
    const scrollContainer = useRef()

    /*
        This function renders case study cards
    */ 
    const renderCaseStudies = () => caseStudies.map((caseStudy,index) => <CaseStudyCard noSnap={index === 0} caseStudy={caseStudy} key={caseStudy.title}/>)

    /*
        The carousel that I built uses the browsers native scrolling capabilities
        I find that this provides the smoothest scrolling interface on touch screens
        on desktop, when the cards are too big for the container, buttons become visible which allow you to adjust what you see using scrollLeft 
    */ 

    function scrollCards(direction){
        const currentScrollValue = scrollContainer.current.scrollLeft
        if(direction > 0){
            scrollContainer.current.scrollLeft = currentScrollValue + 500
        }else{
            scrollContainer.current.scrollLeft = currentScrollValue - 500
        }
    }

    /*
        Inside this useEffect is where the data is fetched and the loading state is set
    */ 
    useEffect(()=>{
        async function fetchCaseStudies(){
            setIsLoading(true)
            try{
                const response = await fetch("https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws")
                const caseStudies = await response.json()
                setCaseStudies(caseStudies)
            }catch(error){
                console.log(error)
            }finally{
                setTimeout(()=>setIsLoading(false),1000)
            }
        }
        fetchCaseStudies()
    },[])

    /*
        This resize observer watched for when the screen size changes and decides if the carousel controls need to be shown or not
        The idea is that users on mobile might switch from portrait to landscape mode and vice versa which is why I used an observer
    */ 
    const sizeObserver = new ResizeObserver(_observing =>{
        const cardContainerWidth = cardContainer.current.getBoundingClientRect().width
        const parentWidth = cardContainer.current.parentElement.getBoundingClientRect().width
        if(window.innerWidth < 768){
            setControlsActive(false)
        }
        else if(cardContainerWidth > parentWidth){
            setControlsActive(true)
        }else{
            setControlsActive(false)
        }
    })

    /*
        This use Effect just activates the observer function on initial render
    */ 
    useEffect(()=>{
        const parentWidth = cardContainer.current.parentElement
        sizeObserver.observe(parentWidth)
    },[])

    return (
        <div className="bg-white pt-[50px]">
            <div className="contain">
                <ThemedHeading classes="px-5">Case Studies</ThemedHeading>      
                <div className="min-w-full overflow-hidden relative">
                    <div ref={scrollContainer} className="overflow-auto hide-scrollbar snap-x snap-mandatory">
                        <div ref={cardContainer} className="min-w-max flex gap-4 pt-[57px] pb-5">
                            {
                                isLoading ? <Loader/> : renderCaseStudies()
                            }
                        </div>
                    </div>
                    {
                        controlsActive &&                     
                        <div className="absolute top-0 flex justify-between items-center pointer-events-none w-full h-full z-50">
                            <div onClick={() => scrollCards(-1)} className="rounded-full bg-primary w-10 h-10 pointer-events-auto cursor-pointer flex justify-center items-center">
                                <i className="fa fa-arrow-left text-white" aria-hidden="true"></i>
                            </div>
                            <div onClick={() => scrollCards(1)} className="rounded-full bg-primary w-10 h-10 pointer-events-auto cursor-pointer flex justify-center items-center"> 
                                <i className="fa fa-arrow-right text-white" aria-hidden="true"></i>
                            </div>
                        </div> 
                    }
                </div>

            </div>   
        </div>
    )
}
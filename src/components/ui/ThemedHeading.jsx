export default function ThemedHeading({children,textClasses}){
    return (
        <div className="flex gap-5 items-center">
            <div className="h-[4px] w-[40px] bg-primary-active"></div>
            <h3 className={`${textClasses} text-subtitle-4`}>{children}</h3>
        </div>
    )
}
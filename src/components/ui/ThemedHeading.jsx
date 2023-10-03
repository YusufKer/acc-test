export default function ThemedHeading({children,textClasses, classes}){
    return (
        <div className={`${classes} flex gap-5 items-center`}>
            <div className="h-[4px] w-[40px] bg-primary-active"></div>
            <h3 className={`${textClasses} text-subtitle-4`}>{children}</h3>
        </div>
    )
}
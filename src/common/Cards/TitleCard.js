import Subtitle from "../Typography/Subtitle"

function TitleCard({ title, children, topMargin, TopSideButtons }) {
  return (
    <div className={"card w-full p-4 bg-base-100 shadow-xs " + (topMargin || "mt-2")}>
      <Subtitle styleClass={TopSideButtons ? "inline-block" : ""}>
        {title}
        {
          TopSideButtons && <div className="inline-block float-right">{TopSideButtons}</div>
        }
      </Subtitle>
      <div className="divider mt-1"></div>
      <div className='h-full w-full bg-base-100'>
        {children}
      </div>
    </div>

  )
}

export default TitleCard;

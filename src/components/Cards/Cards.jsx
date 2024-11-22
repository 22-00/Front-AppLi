import { Card } from "../Card/Card"
import { data } from "../../Data/Data"

export const Cards = () => {
  return (
    <div className='flex flex-wrap w-full gap-4 pb-6'>
       { data.length > 0 ? data.map( (ele) =>{
        return (
          <Card title={ele.title} number={ele.number} link={ele.link} />
    )
       }) :<h2>Error de cartas</h2> }
    </div>
  )
}

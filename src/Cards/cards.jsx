import './cards.css'
export default function Cards(props) {

  console.log(props)
  return (
    <>
      <div className={props.card.color}>
        <h1> Безлимитный {props.card.cost}</h1>
        <p>руб {props.card.cost} /месяц </p>
      </div>
    </>
  )
}



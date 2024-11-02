import CardStyles from "../styles/Card.module.css"
console.log(CardStyles);


const Card = ({muestra}) => {
    const {nombre, imagen, precio} =muestra;
    return (
        <div className={CardStyles.cardContainer}>
            <img src={imagen}/>
            <h3>{nombre}</h3>
            <h4>{precio}</h4>
            <button>Agregar</button>

        </div>
    )
}
export default Card;

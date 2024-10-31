
const Saludo = ({ nombre, children }) => {
    return (
        <>
            
            <h2>{children} {nombre}</h2>
            
        </>
    );
}

export default Saludo;
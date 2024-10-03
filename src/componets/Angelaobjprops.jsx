const Angelaobjprops = (objprops) => {


    const {nombre, apellido} = objprops
    return(
        <>
        <button className="bg-yellow-500 px-6 py-2 text-white">{nombre} {apellido}
        </button>
        </>
    )
}
export default Angelaobjprops;    
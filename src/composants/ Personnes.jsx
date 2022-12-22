
const Personnes = ({ saisies, setSaisies }) => {
    const handleChange = (e) => {
        setSaisies({...saisies, Personnes: e.currentTarget.value});
    }
     
    return  ( <div>
        <h2>Nombre de personnes</h2>
    <input type='text' name='Personnes' onChange={handleChange} />
    </div>
    );
};



export default Personnes;

const Pourcentage = ({ saisies, setSaisies }) => {

  const handleChange = (e) => {
    setSaisies({...saisies, Pourcentage: e.currentTarget.value});
  }


     
    return ( <div>
        <h2>Pourcentage</h2>
        <input type='text' name='Pourcentage'  onChange={handleChange}/>
        </div>
        );
    };
    





export default Pourcentage;
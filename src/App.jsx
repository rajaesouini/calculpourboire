import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Addition from "./composants/Addition";
import Personnes from "./composants/ Personnes";
import Pourcentage from "./composants/Pourcentage";
import "./App.css";

function App() {
	const [total, setTotal] = useState(0);
	const [saisies, setSaisies] = useState({
		Addition: 0,
		Personnes: 1,
		Pourcentage: 0,
	});

	useEffect(() => {
		
		let newTotal = Math.round((+saisies.Addition * (1 + (+saisies.Pourcentage / 100))) / +saisies.Personnes);

		setTotal(newTotal);
	}, [saisies]);

	// let objet = ;

	return (
		<>
			<h1>Application de calcul de pourboire</h1>
			<Addition setSaisies={setSaisies} 
      saisies={saisies} />

			<Personnes 
     setSaisies={setSaisies}
     saisies={saisies} />

     <Pourcentage 
     setSaisies={setSaisies}
     saisies={saisies} />

			<p>{total}€</p>
		</>
	);
}

export default App;

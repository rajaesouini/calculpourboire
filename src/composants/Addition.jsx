const Addition = ({ saisies, setSaisies }) => {
	const handleChange = (e) => {
        setSaisies({...saisies, Addition: e.currentTarget.value});
    };

    console.log(saisies);

	return (
		<div>
			<h2>Addition</h2>
			<input type='text' name='Addition' onChange={handleChange} />
		</div>
	);
};

export default Addition;

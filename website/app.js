const postData = async (url = '', data = {}) => {
    console.log("Logging at start: ", data);

    const response = await fetch(url, {
	method: 'POST',
	credentials: 'same-origin',
	headers: {
	    'Content-Type': 'application/json',
	},
	body: JSON.stringify(data),
    });

    try {
	const newData = await response.json();
	console.log(newData);
	return newData;
    } catch(error) {
	console.log("Error", error);
    };
};

postData('/addMovie', {movie: 'The Matrix', score: 5});
postData('/addMovie', {movie: 'Pitch Perfect', score: 4.5});

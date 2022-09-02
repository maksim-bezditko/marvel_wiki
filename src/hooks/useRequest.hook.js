import { useState, useCallback } from "react";

const useRequest = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);


	// memoizing some function that are not supposed to change, so they don't reinitialize every render

	const clearError = useCallback(() => {
		setError(false)
	}, [])

	const request = useCallback(async (url, initial = true, method = "GET", body = null, headers = {"Content-Type": "application/json"}) => {
		// initiating loading
		initial ? setLoading(true) : setLoading(false);

		try {
			// making request to API
			const response = await fetch(url);  //, {method, body, headers}
			
			if (!response.ok) {
				throw new Error(`Couldn't fetch a character data ${url}, status: ${response.status}`)
			}
			const data = await response.json();

			setLoading(false);

			// returning fetched data
			return data;
		} 
		catch(err) {
			setLoading(false)
			// catching errors
			setError(true);

			throw err;
		}
	
	}, [])

	return {loading, error, clearError, request}
	
}

export default useRequest;
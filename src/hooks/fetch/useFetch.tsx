import { useEffect, useReducer } from 'react';
import {
	FETCHED,
	FETCH_ERROR,
	LOADING,
	gameApiReducer,
	gameApiInitialState
} from './reducers';

const buildUrl = (baseUrl: string, limit?: number): string | undefined => {
  let url = baseUrl;
	
	if (limit) {
		url = `${baseUrl}?limit=${limit}`;
	}

  return url; 
}

const useFetch = (url: string, repeat: number = 0, limit?: number) => {
	const [state, dispatch] = useReducer(gameApiReducer, gameApiInitialState);
	const compositeUrl = buildUrl(url, limit);

	useEffect(() => {
		if (!compositeUrl || !compositeUrl.trim()) return;
		const abortFetch = new AbortController();

		const fetchData = async () => {
			dispatch({ type: LOADING });
		
			try {
				const urls = Array.from(Array(repeat).keys()).map(() => compositeUrl);

				const response = await Promise.all(
					urls.map(url => fetch(url, { signal: abortFetch.signal })
					.then(res => {
						if (!res.ok) {
							throw new Error(`HTTP error! status: ${res.status}`);
						}
						return res.json()
					}))
				)

				dispatch({ type: FETCHED, payload: response });
			} catch (error: any) {
				if (error.name === 'AbortError') return;
				dispatch({ type: FETCH_ERROR, payload: error.message });
			}
		};

		fetchData();

		// if the component is unmount when the fecthing is still going, this will be fired aborting the fetch request
		return function cleanup() {
			abortFetch.abort(); 
		};
	}, [compositeUrl, repeat]);

	return state;
};


export default useFetch;
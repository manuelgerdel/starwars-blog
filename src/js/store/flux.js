const getState = ({ getStore, getActions, setStore }) => {
	return {
		// Central storage
		store: {
			baseUrl: "https://www.swapi.tech/api/",
			people: JSON.parse(localStorage.getItem("people")) || [],
			vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			favorites: [],
			pointerIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_CJUeKu2we-PSSEhTRWiNYR7Aje0-R0wgBw&usqp=CAU"
		},
		// Functions
		actions: {
			getDataEndpoint: async (endpoint) => {
				const store = getStore();
				if (store[endpoint].length === 10) return;
				try {
					//	if (store[endpoint].length == 10) return;
					const response = await fetch(store.baseUrl + endpoint);
					if (response.ok) {
						const data = await response.json();
						const newList = data.results;
						//console.log(characterList) 
						newList.forEach(async (character) => {
							const secondResponse = await fetch(character.url)
							const secondData = await secondResponse.json();
							//console.log(secondData)
							setStore({ [endpoint]: [...store[endpoint], secondData.result] })
							//console.log(`result ${endpoint}`, store[endpoint])
							if (store[endpoint].length == 10) {
								let stringConvertedValue = JSON.stringify(store[endpoint]);
								localStorage.setItem(endpoint, stringConvertedValue)
							}
						})
					}
				} catch (error) {
					alert("An error has ocurred");
					console.log(error);
				}

			},

			addFavorites: (favorite) => {
				//console.log(favorite)
				const store = getStore()
				if (store.favorites.find((item) => item === favorite)) {
					setStore({ favorites: store.favorites.filter((item) => item !== favorite) })
					return
				}
				setStore({ favorites: [...store.favorites, favorite] })
			},

			deleteFavorite: (favorite) => {
				const store = getStore();
				if (store.favorites.find((item) => item === favorite)) {
					setStore({ favorites: store.favorites.filter((item) => item !== favorite) })
					return
				}
			}
		},
	}
}

// setStore({
// 	contactList: store.contactList.filter((contact, index) =>
// 		id !== index),
// });

export default getState;

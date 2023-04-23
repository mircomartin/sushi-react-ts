
export const getMediaWithTextFromApi = async () => {
	try {
		const response = await fetch('http://localhost:1337/api/imagen-y-texto?populate=*');
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error("Hubo un error cargando la sección");		
	}
}
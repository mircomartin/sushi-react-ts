
export const getImagesSliderFromApi = async () => {
	try {
		const response = await fetch('http://localhost:1337/api/sliders?populate=*');
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error("Hubo un error cargando el Slider");		
	}
}
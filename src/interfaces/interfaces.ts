export interface INav {
	id: number;
	url: string;
	text: string;
	submenu?: Submenu[] | [];
}

interface Submenu {
	id: number;
	url: string;
	text: string;
}

export interface ISlide {
	id: number;
	title: string;
	textButton: string;
	urlSlide: string;
	srcImg: string;
}

export interface IMediaText {
	id: number;
	title: string;
	description: string;
	srcImg: string;
	videoId?: string;
}
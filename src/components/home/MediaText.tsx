import { useState } from "react";
import ReactMarkdown from "react-markdown";
import ModalVideo from 'react-modal-video';
import { useMediaText } from "../../hooks/useMediaText";
import { Loading } from "../ui/Loading";
import PLAY from './../../assets/play.svg';

export const MediaText = () => {

	const { mediaText, error, loading } = useMediaText();
  const [isOpen, setOpen] = useState(false)

	return (
		<>
			{
				loading
				? <Loading />
				: error
				? <p className="text-center text-white bg-red-400 rounded-md">{error}</p>
				: <div className="container w-full md:max-w-screen-xl mt-12">
						<div className="grid grid-cols-2 gap-8">
							<div className="flex flex-col gap-8">
								<h3 className="text-right text-[#3fbabb] text-5xl">{mediaText?.title}</h3>
								<div className="text-right text-base flex flex-col gap-5">
									{
										mediaText?.description
										&&
											<ReactMarkdown>
												{mediaText.description}
											</ReactMarkdown>
									}
								</div>
							</div>
							<figure>
								{
									mediaText?.videoId
									?
									<>
										<ModalVideo channel='youtube' isOpen={isOpen} videoId={mediaText?.videoId} onClose={() => setOpen(false)} />
										<div className="relative">
											<img src={mediaText?.srcImg} alt={mediaText?.description} className="w-full object-cover" />
											<img onClick={()=> setOpen(true)} src={PLAY} alt="Play Video" className="cursor-pointer absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-1/5 h-1/5 invert"/>
										</div>
									</>
									: <img src={mediaText?.srcImg} alt={mediaText?.description} onClick={()=> setOpen(true)} className="w-full object-cover" />
								}
							</figure>
						</div>
					</div>
			}
		</>
	)
}

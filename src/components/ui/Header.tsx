import { useState } from "react";
import { MenuMobile } from "./MenuMobile";
import { nav } from "../../helpers/nav";
import LOGO from './../../assets/logo_santomas_web.svg';
import AD from './../../assets/arrowDown.svg';
import CloseNav from './../../assets/closeOpen.svg';
import OpenNav from './../../assets/navOpen.svg';

export const Header = () => {

	const [openMenu, setOpenMenu] = useState(false)

	return (
		<>
			<MenuMobile openMenu={openMenu} />
			<header className="bg-[#3fbabb] p-2 sticky top-0 z-50">
				<div className="container flex items-center justify-between">
					<a href="/">
						<figure className="">
							<img src={LOGO} alt="Logo" />
						</figure>
					</a>
					<nav className="hidden flex-1 md:flex justify-center gap-10">
						{
							nav.map((link) => (
								<div className="menu-link lvl1 flex items-center gap-2 py-3" key={link.id} >
									<a href={link.url}>{link.text}</a>	
									{
										link.submenu
										&& 
											<>
												<img src={AD} alt="Submenu" width={15} height={15} />
												<ul className="hidden mt-3 z-10">
													{
														link.submenu?.map((link) => (
															<li key={link.id}>
																<a href={link.url}>
																	{link.text}
																</a>
															</li>
														))
													}
												</ul>
											</>
									}
								</div>
							))
						}
					</nav>
					<div className="">
						<button className="flex md:hidden" onClick={() => setOpenMenu(!openMenu)}>
							{
								!openMenu 
								? <img src={OpenNav} alt="Open Menu" width={50} />
								: <img src={CloseNav} alt="Close Menu" width={50} />
							}
						</button>
						<a className="hidden md:flex border border-white p-2 text-sm text-white hover:border-black hover:text-black transition-all delay-75" href="#">Acceso clientes</a>
					</div>
				</div>
			</header>
		</>
	)
}

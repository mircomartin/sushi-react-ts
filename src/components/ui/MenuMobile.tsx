export const MenuMobile = ({ openMenu }: { openMenu: boolean }) => {
	return (
		<div className={` ${ openMenu ? 'block' : 'hidden'} absolute w-2/3 bg-black h-12 right-0 top-20`}>
			menu
		</div>
	)
}

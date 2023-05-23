import React from 'react'
// import './React.css'

function Content1(props) {
	return (
		<div className="content__item content__item_1">
			<div className="content__title">{props.title}</div>
			<div className="content__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum augue et ipsum dictum, nec auctor risus venenatis. Curabitur iaculis lectus dictum, finibus ligula in, fringilla lacus. Duis vel dolor risus. Aliquam condimentum nec urna in commodo. In sed purus libero. Nulla id tortor eget sem dapibus interdum nec eget arcu. Pellentesque vitae metus nec orci blandit suscipit. Cras leo tortor, venenatis non sem eget, cursus imperdiet libero. Phasellus porttitor volutpat porttitor.</div>
		</div>
	);
};

export default Content1;
'use strict'

var  tagsList = [
	{id: 1, type: 'title', content: 'Responsive Arquitecture'},
	{id: 2, type: 'title', content: 'Development'},
	{id: 3, type: 'regular', content: 'Responsive and liquid layout'},
	{id: 4, type: 'regular', content: 'Cross browser'},
	{id: 5, type: 'regular', content: 'Multiligual'},
	{id: 6, type: 'regular', content: 'E-learning platform'},
	{id: 7, type: 'regular', content: 'Social API'},
	{id: 8, type: 'regular', content: 'Accesibility'},
	{id: 9, type: 'regular', content: 'Dynamic site'},
	{id: 10, type: 'regular', content: 'Custom components'}
];
function getTags(tag) {
	return this.indexOf(tag.id) != -1
}

var ProjectsDB = [
	{
		id: '1',
		name: 'Aprende y Crece',
		img: '/img/projects/aprendeYCrece.jpg',
		link: 'http://www.aprendeycrece.com.mx/',
		tags: tagsList.filter(getTags, [1,2,3])
	},
	{
		id: '2',
		name: 'CDI - Gifted Citizen',
		img: '/img/projects/giftedCitizen.jpg',
		link: 'http://www.ciudaddelasideas.com/giftedcitizen/',
		tags: [
			{type: 'title', content: 'Development'},
			{type: 'title', content: 'Responsive Arquitecture'},
			{type: 'regular', content: 'Templating'},
			{type: 'regular', content: 'JS animations'},
			{type: 'regular', content: 'Responsive and liquid layout'},
			{type: 'regular', content: 'Dynamic site'},
			{type: 'regular', content: 'Social APIs'},
			{type: 'regular', content: 'Multilingual'},
			{type: 'regular', content: 'Scroll animation'},
			{type: 'regular', content: 'Multimedia Platform'}
		]
	},
	{
		id: '3',
		name: 'Aramark',
		img: '/img/projects/aramark.jpg',
		link: 'http://www.aramark.com.mx/index.php',
		tags: [
			{type: 'title', content: 'Responsive Arquitecture'},
			{type: 'title', content: 'Development'},
			{type: 'regular', content: 'Responsive and liquid layout'},
			{type: 'regular', content: 'Cross browser'},
			{type: 'regular', content: 'Multiligual'},
			{type: 'regular', content: 'E-learning platform'},
			{type: 'regular', content: 'Social API'}
		]
	},
	{
		id: '4',
		name: 'Huggies',
		img: '/img/projects/huggies.jpg',
		link: 'https://www.huggies.com.mx/site/',
		tags: [
			{type: 'title', content: 'Responsive Arquitecture'},
			{type: 'title', content: 'Development'},
			{type: 'regular', content: 'Responsive and liquid layout'},
			{type: 'regular', content: 'Cross browser'},
			{type: 'regular', content: 'Multiligual'},
			{type: 'regular', content: 'E-learning platform'},
			{type: 'regular', content: 'Social API'},
			{type: 'regular', content: 'Accesibility'},
			{type: 'regular', content: 'Dynamic site'},
			{type: 'regular', content: 'Custom components'}
		]
	},
	{
		id: '5',
		name: 'Tajin',
		img: '/img/projects/tajin.jpg',
		link: 'http://www.tajin.com/',
		tags: [
			{type: 'title', content: 'Responsive Arquitecture'},
			{type: 'title', content: 'Development'},
			{type: 'regular', content: 'Responsive and liquid layout'},
			{type: 'regular', content: 'Cross browser'},
			{type: 'regular', content: 'Multiligual'},
			{type: 'regular', content: 'E-learning platform'},
			{type: 'regular', content: 'Social API'},
			{type: 'regular', content: 'Accesibility'},
			{type: 'regular', content: 'Dynamic site'},
			{type: 'regular', content: 'Custom components'}
		]
	},
	{
		id: '6',
		name: 'Agencia i',
		img: '/img/projects/ilatina.jpg',
		link: 'http://www.agenciai.mx/index.php',
		tags: [
			{type: 'title', content: 'Responsive Arquitecture'},
			{type: 'title', content: 'Development'},
			{type: 'regular', content: 'Responsive and liquid layout'},
			{type: 'regular', content: 'Cross browser'},
			{type: 'regular', content: 'Multiligual'},
			{type: 'regular', content: 'E-learning platform'},
			{type: 'regular', content: 'Social API'},
			{type: 'regular', content: 'Accesibility'},
			{type: 'regular', content: 'Dynamic site'},
			{type: 'regular', content: 'Custom components'}
		]
	},
	{
		id: '7',
		name: 'CDI - Caricaturas',
		img: '/img/projects/caricaturas.jpg',
		link: 'http://www.ciudaddelasideas.com/caricaturas/',
		tags: [
			{type: 'title', content: 'Responsive Arquitecture'},
			{type: 'title', content: 'Development'},
			{type: 'regular', content: 'Responsive and liquid layout'},
			{type: 'regular', content: 'Cross browser'},
			{type: 'regular', content: 'Multiligual'},
			{type: 'regular', content: 'E-learning platform'},
			{type: 'regular', content: 'Social API'},
			{type: 'regular', content: 'Accesibility'},
			{type: 'regular', content: 'Dynamic site'},
			{type: 'regular', content: 'Custom components'}
		]
	},
	{
		id: '8',
		name: 'Hemisferio Financiero',
		img: '/img/projects/hemisferio.jpg',
		link: 'http://www.hemisferiofinanciero.com/',
		tags: [
			{type: 'title', content: 'Responsive Arquitecture'},
			{type: 'title', content: 'Development'},
			{type: 'regular', content: 'Responsive and liquid layout'},
			{type: 'regular', content: 'Cross browser'},
			{type: 'regular', content: 'Multiligual'},
			{type: 'regular', content: 'E-learning platform'},
			{type: 'regular', content: 'Social API'},
			{type: 'regular', content: 'Accesibility'},
			{type: 'regular', content: 'Dynamic site'},
			{type: 'regular', content: 'Custom components'}
		]
	},
	{
		id: '9',
		name: 'Ciudad de las ideas',
		img: '/img/projects/ciudadDeLasIdeas.jpg',
		link: 'http://www.ciudaddelasideas.com/acercaDe.php',
		tags: [
			{type: 'title', content: 'Responsive Arquitecture'},
			{type: 'title', content: 'Development'},
			{type: 'regular', content: 'Responsive and liquid layout'},
			{type: 'regular', content: 'Cross browser'},
			{type: 'regular', content: 'Multiligual'},
			{type: 'regular', content: 'E-learning platform'},
			{type: 'regular', content: 'Social API'},
			{type: 'regular', content: 'Accesibility'},
			{type: 'regular', content: 'Dynamic site'},
			{type: 'regular', content: 'Custom components'}
		]
	},
	{
		id: '10',
		name: 'Ma Baker and Chef',
		img: '/img/projects/maBaker.jpg',
		link: 'http://mabakerandchef.com/index.php',
		tags: [
			{type: 'title', content: 'Responsive Arquitecture'},
			{type: 'title', content: 'Development'},
			{type: 'regular', content: 'Responsive and liquid layout'},
			{type: 'regular', content: 'Cross browser'},
			{type: 'regular', content: 'Multiligual'},
			{type: 'regular', content: 'E-learning platform'},
			{type: 'regular', content: 'Social API'},
			{type: 'regular', content: 'Accesibility'},
			{type: 'regular', content: 'Dynamic site'},
			{type: 'regular', content: 'Custom components'}
		]
	},
	{
		id: '11',
		name: 'Ninshi online',
		img: '/img/projects/ninshi.jpg',
		link: 'https://www.ninshionline.com/',
		tags: [
			{type: 'title', content: 'Responsive Arquitecture'},
			{type: 'title', content: 'Development'},
			{type: 'regular', content: 'Responsive and liquid layout'},
			{type: 'regular', content: 'Cross browser'},
			{type: 'regular', content: 'Multiligual'},
			{type: 'regular', content: 'E-learning platform'},
			{type: 'regular', content: 'Social API'},
			{type: 'regular', content: 'Accesibility'},
			{type: 'regular', content: 'Dynamic site'},
			{type: 'regular', content: 'Custom components'}
		]
	},
	{
		id: '12',
		name: 'Taner',
		img: '/img/projects/taner.jpg',
		link: 'http://taner.com.mx/index.php',
		tags: [
			{type: 'title', content: 'Responsive Arquitecture'},
			{type: 'title', content: 'Development'},
			{type: 'regular', content: 'Responsive and liquid layout'},
			{type: 'regular', content: 'Cross browser'},
			{type: 'regular', content: 'Multiligual'},
			{type: 'regular', content: 'E-learning platform'},
			{type: 'regular', content: 'Social API'},
			{type: 'regular', content: 'Accesibility'},
			{type: 'regular', content: 'Dynamic site'},
			{type: 'regular', content: 'Custom components'}
		]
	}
];

module.exports = ProjectsDB;
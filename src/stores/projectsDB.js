'use strict'
var React = require('react');

class ProjectsDB extends React.Component {
	constructor() {
		super()
		this.projects = [
			{
				id: '1',
				name: 'Aprende y Crece',
				img: 'img/projects/aprendeYCrece.jpg',
				link: 'http://www.aprendeycrece.com.mx/',
				cats: [1,2,3,5,6,8]
			},
			{
				id: '2',
				name: 'CDI - Gifted Citizen',
				img: 'img/projects/giftedCitizen.jpg',
				link: 'http://www.ciudaddelasideas.com/giftedcitizen/',
				cats: [1,2,3,5,7,8]
			},
			{
				id: '3',
				name: 'Aramark',
				img: 'img/projects/aramark.jpg',
				link: 'http://www.aramark.com.mx/index.php',
				cats: [2,7]
			},
			{
				id: '4',
				name: 'Huggies',
				img: 'img/projects/huggies.jpg',
				link: 'https://www.huggies.com.mx/site/',
				cats: [2,6,7,8,9]
			},
			{
				id: '5',
				name: 'Tajin',
				img: 'img/projects/tajin.jpg',
				link: 'http://www.tajin.com/',
				cats: [2,5,7,8,9]
			},
			{
				id: '6',
				name: 'Agencia i',
				img: 'img/projects/ilatina.jpg',
				link: 'http://www.agenciai.mx/index.php',
				cats: [1,2,3,7,8]
			},
			{
				id: '7',
				name: 'CDI - Caricaturas',
				img: 'img/projects/caricaturas.jpg',
				link: 'http://www.ciudaddelasideas.com/caricaturas/',
				cats: [1,2,3,5,7,9]
			},
			{
				id: '8',
				name: 'Hemisferio Financiero',
				img: 'img/projects/hemisferio.jpg',
				link: 'http://www.hemisferiofinanciero.com/',
				cats: [2,3,4,7]
			},
			{
				id: '9',
				name: 'Ciudad de las ideas',
				img: 'img/projects/ciudadDeLasIdeas.jpg',
				link: 'http://www.ciudaddelasideas.com/acercaDe.php',
				cats: [2,5,7,8]
			},
			{
				id: '10',
				name: 'Ma Baker and Chef',
				img: 'img/projects/maBaker.jpg',
				link: 'http://mabakerandchef.com/index.php',
				cats: [1,2,3,4,5,7,8,9]
			},
			{
				id: '11',
				name: 'Ninshi online',
				img: 'img/projects/ninshi.jpg',
				link: 'https://www.ninshionline.com/',
				cats: [2,6,7,8]
			},
			{
				id: '12',
				name: 'Taner',
				img: 'img/projects/taner.jpg',
				link: 'http://taner.com.mx/index.php',
				cats: [2,3,4,9]
			}
		];
	}

	getAll() {
		return this.projects;
	}

	getCat(catSelected){
		return this.projects.filter( ( project )=> {
			return project.cats.includes(catSelected);
		})
	}
}
let Projects = new ProjectsDB;
module.exports = Projects;

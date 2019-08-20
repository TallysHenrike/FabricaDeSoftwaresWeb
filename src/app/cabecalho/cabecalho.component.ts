import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
	selector: 'cabecalho',
	templateUrl: './cabecalho.component.html',
	styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

	constructor(private element: ElementRef) { }

	ngOnInit() { }

	@HostListener('window:scroll', ['$event'])
	onScroll(): void{
		let parallax = this.element.nativeElement;

		if(window.scrollY < parallax.offsetHeight){
			let suave = window.scrollY * 70 / 100;
			//console.log(parallax.offsetHeight, window.scrollY);
			parallax.style.backgroundPosition = `center top ${suave}px`;
		}else{parallax.removeAttribute('style');}

		let menu = this.element.nativeElement.querySelector('#menu');
		
		if(window.scrollY >= (parallax.scrollHeight - menu.scrollHeight)){
			menu.classList.add('fixo');
		}else{
			menu.classList.remove('fixo');
		}
	}

	mostrarCategorias(): void{
		document.querySelector('#navegacao').classList.toggle('menu-aberto');
	}

}
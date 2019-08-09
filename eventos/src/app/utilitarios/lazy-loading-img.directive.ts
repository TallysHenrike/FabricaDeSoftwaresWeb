import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  	selector: '[LazyLoadingIMG]'
})
export class LazyLoadingIMGDirective {

	@Input() caminhoDaImagem: string;

	private intersectionObserver? : IntersectionObserver;
	
	constructor(private element: ElementRef) {
		this.intersectionObserver = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
				  let image = this.element.nativeElement;
				  image.classList.remove("lazy");
				  image.removeAttribute('LazyLoadingIMG');
				  image.src = this.caminhoDaImagem;
				  //console.log(entry.target)
				  this.intersectionObserver.unobserve(image);
				}
			  });
		});
		this.intersectionObserver.observe(this.element.nativeElement);
	}

}
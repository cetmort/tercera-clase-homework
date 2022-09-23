import { Component, OnInit,ElementRef,ViewChild,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnInit {
  @ViewChild('texto', {read: ElementRef}) texto! : ElementRef
  
  constructor(private renderer2 : Renderer2) { }

  ngOnInit(): void {
  }
  
  changesUp(){
      this.renderer2.setStyle(this.texto.nativeElement, 'font-size', '35px')
  }

  changesDown(){
    this.renderer2.setStyle(this.texto.nativeElement, 'font-size', '25px')
    this.renderer2.setStyle(this.texto.nativeElement, ' transition', '4s')
  }

}

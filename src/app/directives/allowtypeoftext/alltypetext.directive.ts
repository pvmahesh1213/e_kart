import { Directive, ElementRef, HostListener, Input, OnInit } from "@angular/core";


@Directive({
    selector: '[appAllowtext]'
})

export class allowTypeTextDirective implements OnInit {
    @Input('appAllowtext') appAllowtext: any;

    constructor(private hostElement: ElementRef) { }

    ngOnInit(): void {

    }

    @HostListener('keypress', ['$event']) onChange(e) {
        console.log(this.hostElement.nativeElement.getAttribute('formcontrolname'));
        let Mask = this.appAllowtext;
        var char = e.key;
        var regExp = new RegExp(maskRules[Mask.mask]);
        if (regExp.test(char)) {
            if (event.target['value'].length < Mask.charLength) {
                return true
            }
            return false;
        } else {
            return false;
        }
    }

}

export enum maskRules {
    'letters' = "^[a-zA-Z_]*$",
    'numbers' = "^[0-9_]*$",
    'alphanumbers' = "^[a-zA-Z0-9_]*$",
}
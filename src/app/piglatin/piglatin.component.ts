import { Component, OnInit } from '@angular/core';
import { PigText } from '../pig.model';

@Component({
  selector: 'app-piglatin',
  templateUrl: './piglatin.component.html',
  styleUrls: ['./piglatin.component.css']
})
export class PiglatinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'Pig Latin Conversion';
  
  public ptext = new PigText("");
  public storeText: Array<any>;
  public output:string = "";
  public error:string = "";
  pigtransform():string{
    console.log('here:' + this.ptext.pigtext);
    
   if (this.ptext.pigtext.length > 0 &&  this.ptext.pigtext.match(/^[a-zA-Z][a-zA-Z]+$/) !== null) 
   {
      const vowels = ["a","e","i","o","u"];
      const first = this.ptext.pigtext.slice(0,1);
      const sLast = this.ptext.pigtext.slice(1);
      const pigla = "way";
			if (first === "a" || first === "e" || first === "i" || first === "o" || first === "u") {
				this.output = this.ptext.pigtext + pigla;
			}
			else {
				this.output = sLast + first + pigla;
        this.error = "";
			}
	 }
   else {
     this.error = "Enter a valid word";
     this.output = "";
   }		


    console.log(this.output);
    return this.output;

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'convert-number-to-word';
  output: String = ""
  num: number = 0;

  one = ["", "One ", "Two ", "Three ", "Four ",
    "Five ", "Six ", "Seven ", "Eight ",
    "Nine ", "Ten ", "Eleven ", "Twelve ",
    "Thirteen ", "Fourteen ", "Fifteen ",
    "Sixteen ", "Seventeen ", "Eighteen ",
    "Nineteen "];

  ten = ["", "", "Twenty ", "Thirty ", "Forty ",
    "Fifty ", "Sixty ", "Seventy ", "Eighty ",
    "Ninety "];

  ngOnInit() {

  }

  numToWords(n: number, s: string) {
    var str = "";
    if (n > 19) {
      str += this.ten[Math.floor(n / 10)] + this.one[n % 10];
    }
    else {
      str += this.one[n];
    }

    if (n != 0) {
      str += s;
    }

    return str;
  }
  convertNumToWord() {
    var out = "";
    out += this.numToWords(Math.floor(this.num / 10000000), "Crore ");
    out += this.numToWords(Math.floor((this.num / 100000) % 100), "Lakh ");
    out += this.numToWords(Math.floor((this.num / 1000) % 100), "Thousand ");
    out += this.numToWords(Math.floor((this.num / 100) % 10), "Hundred ");
    if (this.num > 100 && this.num % 100 > 0) {
      out += "and ";
    }
    out += this.numToWords(Math.floor(this.num % 100), "");
    if ((this.num + "").split(".")[1]){
      var num = (this.num + "").split(".")[1];
      var num_l = num.length;
      var dec = "1".padEnd(num_l+1, "0");
      out += " " + num + "/" + dec
    }
    this.output = out + " ONLY";

  }
}

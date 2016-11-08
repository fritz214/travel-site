var $ = require('jquery');
import Person from './modules/Person';

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " now owes $0 in taxes.");
	}
}

alert("Testing gulp watch!");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "oranges");
jane.greet();
jane.payTaxes();

$("h1").remove();


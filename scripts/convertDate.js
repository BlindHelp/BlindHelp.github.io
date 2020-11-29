export default class ConvertDate {

		constructor(originalDate) {
			this.originalDate = originalDate;
		this.day = this.originalDate.getDate();
		if (this.day < 10) { this.day = "0" + this.day };
		this.month = this.originalDate.getMonth() + 1;
		if (this.month < 10) { this.month = "0" + this.month };
		this.year = this.originalDate.getFullYear();
	this.convertedDate = [this.day, this.month, this.year].join("/");
	}

}

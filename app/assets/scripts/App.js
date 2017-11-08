function Person(endUser, favColor)
{
	this.name = endUser;
	this.color = favColor;
	this.greet = function()
	{
		console.log("Hello, my name is " + this.name + " and my favorite color is " + this.color + ".");
	}
}

var john = new Person("John Doe", "Blue");
john.greet();

var john1 = new Person("Jane Smith", "Green");
john1.greet();
fetch("https://jyothirmaisaladi.github.io/Ecommerce/data/data.json").then(response=>{
	return response.json()
}).then(data=>{
	displayData(data)
})
function displayData(info){
	var bodyElement=document.querySelector("body");
	var row=document.createElement("section")
	row.classList.add("row","justify-content-center");
	bodyElement.append(row)
	info.mobiles.map(value=>{
		var col=document.createElement("article");
		col.classList.add("col-sm-10","col-md-6","col-lg-3");
		row.append(col)
		//card
		var card=document.createElement("div");
		//to get the margin we use m,and for top we use mt-3...
		//for padding we use p-2..
		card.classList.add("card",'mt-2');
		//card body
		var cardBody=document.createElement("div");
		cardBody.classList.add("card-body");
		//image
		var imageElement=document.createElement("img");
		imageElement.src=value.image;
		imageElement.classList.add("img-responsive");
		imageElement.alt=value.name;
		//name
		var name=document.createElement("h4");
		name.textContent=value.name;
		name.classList.add("text-center","text-primary")
		//price
		var price=document.createElement("p");
		price.classList.add("text-center","text-danger");
		price.innerHTML="<s>₹ "+value.price+" /-</s>";
		//original price
		var orgprice=document.createElement('p');
		orgprice.classList.add("text-center","text-dark");
		orgprice.textContent="₹ "+value.originalPrice+"/-";

		//button
		var buttonParent=document.createElement("div")
		buttonParent.classList.add("d-grid","gap-1");

		var button=document.createElement("button");
		button.classList.add("btn","btn-warning");
		button.textContent="Add to Cart"
		buttonParent.append(button);

		cardBody.append(imageElement);
		cardBody.append(name);
		cardBody.append(price);
		cardBody.append(orgprice);
		cardBody.append(buttonParent);

		card.append(cardBody);
		col.append(card);
	})
}
function display(info){
	//we can usedocument.getElementById,......
	//we use querySelector to select that tag..
	//by using querySelectorAll we can slect all the elements..
	/*in this querySelector we need to use .classname 
	or .idname in the bracket but we can use tagname directly in this..*/
	//we use createElement to create an element
	var body=document.querySelector("body");
	var value=document.createElement("p");
	//we use image.src to display an image
	//to display that in the body we need to append that img into body
	var sample=document.createElement('img');
	sample.src="img/realme7i.jpg";
	sample.classList.add("c1","c2","c3")
	//inthe otheer way to add attributes we use sample.setAttribute("id","image")..
	sample.classList.remove("c3")
	//to remove a class element dynamically
	var bodyElement=document.querySelector("body");
	bodyElement.append(sample);
	//here we use innerHTML to get the value in that line..
	value.textContent="abcdefgh";
	body.append(value);
	console.log(value);
}

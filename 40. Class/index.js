class Products{
    constructor(name,price){
        this.name=name;
        this.price= price;
    }
    displyProduct(){
        console.log(`Product ${this.name}`);
        console.log(`Price ${this.price}`);
    }
    calculateTotal(salesTax){
        return this.price +(this.price*salesTax)
    }
}

const salesTax=0.05;
const p1= new Products("shirt",200);
const p2= new Products("cheese",190);
p1.displyProduct()

const total = p1.calculateTotal(salesTax);
console.log(total)

p2.displyProduct()
const total1 = p2.calculateTotal(salesTax);
console.log(total1)
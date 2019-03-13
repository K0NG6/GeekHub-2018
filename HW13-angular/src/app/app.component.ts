import { Component } from '@angular/core';

class Item{
  purchase: string;
  done: boolean;

  constructor(purchase: string) {

    this.purchase = purchase;
    this.done = false;
  }
}

@Component({
  selector: 'purchase-app',
  templateUrl: "app.component.html"
})
export class AppComponent {
  items: Item[] = [];
  addItem(text: string): void {

    if(text==null || text.trim()=="")
      return;
    this.items.push(new Item(text));
  }
  deleteItem(item): void {
    if (item!== -1){
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
}

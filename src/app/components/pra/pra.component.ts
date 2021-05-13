import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'app-pra',
  templateUrl: './pra.component.html',
  styleUrls: ['./pra.component.css']
})

export class PraComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  title = '菜单练习';
  items = [
    {
      image: '',
      foodName: '干炒牛河',
      price: 12.8,
      type: '炒面炒饭',
      discountInPercentage: '',
      discountInDollar: ''
    },
    {
      image: '',
      foodName: '糖醋排骨',
      price: 10.5,
      type: '猪肉',
      discountInPercentage: '',
      discountInDollar: ''
    }
  ];
  urlLink: string = 'assets/干炒牛河.jpg';
  selectFile(event:any){
    if (event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.file[0]);
      reader.onload = (_event)=>{
        this.urlLink = event.target.result;
      };
    }
  }

  // tslint:disable-next-line: member-ordering

  itemForm: FormGroup = new FormGroup({});

  ngOnInit() {
    this.itemForm = this.fb.group({
      items: this.fb.array([])
    });
    this.loadItems();
  }
  // get链表中物品
  loadItems() {
    const control = this.itemForm.get('items') as FormArray;
    for (const item of this.items) {
      const grp = this.fb.group({
        imageUrl: [item.image],
        foodName: [item.foodName],
        price: [item.price],
        type: [item.type],
        discountInPercentage: [item.discountInPercentage],
        discountInDollar: [item.discountInDollar]
      });
      control.push(grp);
    }
  }
  // 初始化表格
  initiatForm(): FormGroup {
    return this.fb.group({
      image: [''],
      foodName: [''],
      price: [''],
      type: [''],
      discountInPercentage: [''],
      discountInDollar: ['']
    });
  }

  get getFormData(): FormArray {
    return  this.itemForm.get('items') as FormArray;
  }

  addUser() {
    const control =  this.itemForm.get('items') as FormArray;
    control.push(this.initiatForm());
  }

  remove(index: number) {
    const control =  this.itemForm.get('items') as FormArray;
    control.removeAt(index);
  }
  // 计算并显示打折后的钱数
  calculateDiscount(i: any, val: any){
    this.itemForm.value.items[i].discountInDollar = this.itemForm.value.items[i].price / 100 * val;  // 价钱*折扣
    this.itemForm.controls.items.setValue(this.itemForm.value.items);  // 更改discountInDollar 中的数值
}


}

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
      foodName: '干炒牛河',
      price: 12.8,
      type: '炒面炒饭',
      discountInPercentage: '',
      discountInDollar: ''
    },
    {
      foodName: '糖醋排骨',
      price: 10.5,
      type: '猪肉',
      discountInPercentage: '',
      discountInDollar: ''
    }
  ];
  fileToUpload: any;
  imageUrl: any;

  itemForm: FormGroup = new FormGroup({});

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    // 图片加载 从文件夹中
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

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

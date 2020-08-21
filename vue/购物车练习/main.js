const app=new Vue({
  el:'#app',
  data:{
    books:[
      {
        id:1,
        name:'《算法导论》',
        data:'2006-01-11',
        price:85.00,
        count:4
      },
      {
        id:2,
        name:'《算法导论1》',
        data:'2006-01-11',
        price:85.00,
        count:8
      },
      {
        id:3,
        name:'《算法导论2》',
        data:'2006-01-11',
        price:85.00,
        count:6
      },
      {
        id: 4,
        name: '《算法导论3》',
        data: '2006-01-11',
        price: 85.00,
        count: 2
      }
    ]
  },
  methods:{
    deleclick(index){
      return this.books[index].count--;
    },
    addclick(index){
      return this.books[index].count++;
    },
    removeHandle(index){
      this.books.splice(index,1);

    }
  },
  filters:{
    showPrice(price){
      return '￥' + price.toFixed(2);
    }
  },
  computed:{
    totalPrice(){
      let sum=0
      for(let i=0;i<this.books.length;i++){
        sum=sum+this.books[i].count *this.books[i].price;}
      return sum;

    }
  }
})
const nums=[10,20,111,222,444,40,50]
let total=nums.filter(n=>n<100).map(n=>n*2).reduce((pre,n)=>pre+n);
console.log(total);
import { Component,OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJs';

  ngOnInit(){
    const observable=new Observable/*<number>*/(a=>{
    // eger <number> seklinde tip belitrisek sadece o tipe ait verileri olusturabiliriz
    // new Observable ile abone olunabilir nesne olusturulur
   a.next(1);
   a.next(2);
   a.next(3);
   a.next("Öyle bir kayarım ki hayatından, yapacağın tek şey dilek tutmak olur benim ardımdan... (Kıvanc Tatlıtuğ) ");
   //data.next ile akışa veri aktarilacak veriler belirlenir
   a.complete();
       // compelete fonksiyonuna kadar akisa eklenecek datalarimi tanimlayabilirim
     // akışa başka data vermeyeceksek burada sonlandırırz. BNöylece son datanında gönderildigini tüketixcimiz bilir
  });


 observable.subscribe(data=>console.log(data));
// subscribe ile observer (burada data degiskeni ile tanimladik) yani tüketici tanımlayarak nesnelerimiz akisa verilir

/*
const observer =function(data:any){
  console.log(data)
}

observable.subscribe(observer)
*/

console.log("************************  SUBJECT KONUSUNA GEÇİYORUZ   **************************")

const subject=new Subject();
subject.subscribe(data=>console.log(`ObserverA ${data}`))
subject.subscribe(data=>console.log(`ObserverB ${data}`))
subject.next(3);
subject.next(354645);
subject.subscribe(data=>console.log(`ObserverC ${data}`))
subject.next("subject datası gönderiyorum");
subject.next(56);


  }

}
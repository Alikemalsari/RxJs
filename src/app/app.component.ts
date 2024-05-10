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
// Fatihin sorusu, subscribe olunca geçmişteki n tane veriyi de alabileyim.
// umut Abinin sorusu,  bu verilere bir operatör uygula

/* Subject konusu hak.
https://www.bayramucuncu.com/rxjs-subjects/#:~:text=RxJS'de%20Subjects%20g%C3%B6zlemlenebilir%20nesnenin,tek%20bir%20konu%C5%9Fmac%C4%B1%20olarak%20d%C3%BC%C5%9F%C3%BCnebilirsiniz.

https://thrkardak.medium.com/rxjs-yak%C4%B1ndan-bak%C4%B1%C5%9F-2-subjects-ce93b4715ff3

https://hvsonmez.medium.com/rxjs-objervable-subject-behaviorsubject-replaysubject-e17bd07a0ee

https://rxjs.dev/guide/subject

https://bilisim.io/2019/11/02/rxjse-yakindan-bakis-2-subjects/

*/


  }

}
import { Component, OnInit } from '@angular/core';
//Service
import { PostService } from '../services/post.service'
//Router
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: number;
  sub: any;
  article: object;

  constructor(public _post:PostService , public _route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe((params)=>{this.id=params['id']
  });
    this.article = this._post.DatoDummy[this.id];
  }

ngOnDestroy(){
  this.sub.unsubscribe();

}

timeConverter(date){
  var a:any = new Date(date * 1000);
  var months:any = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year:any = a.getFullYear();
  var month:any = months[a.getMonth()];
  var date:any = a.getDate();
  var hour:any = a.getHours();
  var min:any = a.getMinutes();
  var sec:any = a.getSeconds();
  var time:any = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}


}

import {BookModel} from "./book-model";
import {UserDetail} from "./userdetail";

export class OrderModel {
  public address! : string;
  public addressType! : string;
  public bookId! : BookModel[];
  public city! : string;
  public id! :number;
  public landmark! : string;
  public name! : string;
  public orderDate! : string;
  public phoneNo! : string;
  public price! : number;
  public quantity! : number;
  public userId! : UserDetail;
}

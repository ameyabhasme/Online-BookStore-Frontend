import {BookModel} from "./book-model";
import {UserDetail} from "./userdetail";

export class CartResponseModel {

  public bookId! : BookModel;
  public cartId! :number;
  public isPurchased! : boolean;
  public quantity! : number;
  public userId! : UserDetail;

}

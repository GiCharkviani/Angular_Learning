import {Injectable} from "@angular/core";
import {UserService} from "./user.service";

@Injectable()
export class AdminService extends UserService {

  override getName() {
    console.log('admin name')
  }

}

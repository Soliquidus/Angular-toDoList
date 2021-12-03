import {Address} from "./address.model";

export class User {
  constructor(public firstName: string,
              public lastName: string,
              public email: string,
              public Address: Address,
              public description: string,
              public birthDate: string,
              public aliases?: string[],
  ) {

  }


}

export class User {
  constructor(public email: string,
    public name: string,
    private password: string,
  ){}

  matches(another: User): boolean{
    return another !== undefined &&
      another.email === this.email &&
      another.password === this.password;
  }
}

export const users: {[key: string]: User} = {
  "giovane@gmail.com": new User('giovane@gmail.com', 'Giovane', 'abc123!'),
  "amanda@gmail.com": new User('amanda@gmail.com', 'Amanda', 'abc123!')
}

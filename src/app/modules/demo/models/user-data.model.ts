export class UserData {
  public completed: boolean;
  public id: number;
  public title: string;
  public userId: number;

  constructor(data: any) {
    this.completed = data.completed;
    this.id = data.id;
    this.title = data.title;
    this.userId = data.userId;
  }
}

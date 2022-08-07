export class MessageDto {
  readonly value: any;
  readonly header: any;

  constructor(partial: Partial<MessageDto>) {
    Object.assign(this, partial);
  }
}

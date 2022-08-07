import { Injectable, ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { MessageDto } from './message.dto';

@Injectable()
export class ParseMessagePipe implements PipeTransform<any, MessageDto> {
  transform(rawMessage: any, metadata: ArgumentMetadata): MessageDto {
    const { value, header } = rawMessage[0];

    console.log('rawMessage', rawMessage);

    const parsedMessage = new MessageDto({ value: JSON.parse(value), header: JSON.parse(header) });

    return parsedMessage;
  }
}

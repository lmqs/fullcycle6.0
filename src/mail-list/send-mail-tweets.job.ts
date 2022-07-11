import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { MailListService } from './mail-list.service';

@Processor('emails')
export class SendMailTweetsJob {
  constructor(private mailListService: MailListService) { }
  @Process()
  async handle(job: Job) {
    //consumidor da fila do redis
    const mailList = await this.mailListService.findOne();
    console.log(mailList.emails);
    console.log('Lendo mensagem do REDIS e preparando envio para o kafka');
  }
}

//nest   -> kafka   <- goLang

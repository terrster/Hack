import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TalkService } from 'src/app/services/talk.service';
import Talk from 'talkjs';

@Component({
  selector: 'app-help-box',
  templateUrl: './help-box.component.html',
  styleUrls: ['./help-box.component.css']
})
export class HelpBoxComponent implements OnInit {
  public show = false;
  private inbox: Talk.Chatbox | undefined;
  private session: Talk.Session | undefined;
  @ViewChild('talkjsContainer') talkjsContainer!: ElementRef;
  constructor(private talkService: TalkService) { }

  ngOnInit(): void {
    this.createInbox();
  }
  ngOnDestroy() {
    if (this.inbox) {
      this.inbox.destroy();
    }
  }
  shows() {
    this.show = true;
    this.createInbox();
  }
  private async createInbox() {
    const session = await this.talkService.createCurrentSession();
    this.session = session;
    this.inbox = await this.talkService.createInbox(session);
    this.inbox.mount(this.talkjsContainer.nativeElement);
    
  }

  

}

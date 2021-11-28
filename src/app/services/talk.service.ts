import { Injectable } from '@angular/core';
import Talk from 'talkjs';

@Injectable({
  providedIn: 'root'
})
export class TalkService {
  private currentUser: Talk.User = {
    id: "1",
    name: 'Alice',
    photoUrl: 'https://demo.talkjs.com/img/alice.jpg',
    role: 'default'
  };
  constructor() { }

  async createUser(applicationUser: any) {
    await Talk.ready;
    return new Talk.User({
      id: applicationUser.id,
      name: applicationUser.username,
      photoUrl: applicationUser.photoUrl,
      role: applicationUser.role
    });
  }
  private async getOrCreateConversation(session: Talk.Session, otherApplicationUser: any) {
    const otherUser = await this.createUser(otherApplicationUser);
    const conversation = session.getOrCreateConversation(Talk.oneOnOneId(this.currentUser, otherUser));
    conversation.setParticipant(this.currentUser);
    conversation.setParticipant(otherUser);
    return conversation;
  }
  async createCurrentSession() {
    await Talk.ready;
    const user = {
      id: 1,
      username: 'Anonimo',
      email: 'ano@example.com',
      photoUrl: 'https://demo.talkjs.com/img/alice.jpg',
      role: 'default'
    };
    this.currentUser = await this.createUser(user);
    const session = new Talk.Session({
         appId: 'tjhVZ5L1',
         me: this.currentUser
    });
    return session;
  }
  async createInbox(session: Talk.Session) {
    const otherApplicationUser = {
      id: 5,
      username: 'Asociacion por la Mujer',
      email: 'aso@example.com',
      photoUrl: 'https://demo.talkjs.com/img/sebastian.jpg',
      welcomeMessage: 'Hola Como te puedo ayduar',
      role: 'default'
    };

    const conversation = await this.getOrCreateConversation(session, otherApplicationUser);
    return session.createChatbox();
 }
}

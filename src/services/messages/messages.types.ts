export interface MessagesServicesBase {
  createChatsConnection: (chatId: number) => void;
  sendMessage: (message: string) => void;
  closeChatsConnection: () => void;
}

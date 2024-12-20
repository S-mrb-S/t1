import { Channel, connect, Connection } from 'amqplib';

import { CatchErrors } from './decorators.js';

// AMQP Manager
export class AmqpManager {
  private connection: Connection | null = null;
  private channel: Channel | null = null;

  @CatchErrors
  public async connect(amqpUrl: string): Promise<void> {
    if (!amqpUrl) {
      throw new Error('Queue cannot be null.');
    }
    this.connection = await connect(amqpUrl);
    this.channel = await this.connection.createChannel();
  }

  @CatchErrors
  public async close(): Promise<void> {
    if (this.channel) await this.channel.close();
    if (this.connection) await this.connection.close();
  }

  public getChannel(): Channel | null {
    return this.channel;
  }
}

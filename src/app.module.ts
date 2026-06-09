import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { EventsConsumer } from './events.consumer';
import { EventsProducer } from './events.producer';
import { kafkaClientProvider } from './kafka.config';
import { PromotionModule } from './promotion/promotion.module';

@Module({
  imports: [ClientsModule.register([kafkaClientProvider()]), PromotionModule],
  controllers: [AppController, EventsConsumer],
  providers: [EventsProducer]
})
export class AppModule {}


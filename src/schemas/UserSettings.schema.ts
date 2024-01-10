import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class UserSettings {
  @Prop({ requied: false })
  reciveNotifications?: boolean;

  @Prop({ requied: false })
  reciveEmails?: boolean;

  @Prop({ requied: false })
  reciveSMS?: boolean;
}

export const UsersSettingsSchema = SchemaFactory.createForClass(UserSettings);

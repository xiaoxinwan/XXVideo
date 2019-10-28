import { Episode } from './episode.model';
import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose';
import { ApiModelProperty } from '@nestjs/swagger';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Course {
  @ApiModelProperty({ description: '课程名称' })
  @prop()
  name: string;

  @ApiModelProperty({ description: '封面' })
  @prop()
  cover: string;

  @arrayProp({ itemsRef: 'Episode' })
  episodes: Ref<Episode>;
}

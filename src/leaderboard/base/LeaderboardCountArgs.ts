/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LeaderboardWhereInput } from "./LeaderboardWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class LeaderboardCountArgs {
  @ApiProperty({
    required: false,
    type: () => LeaderboardWhereInput,
  })
  @Field(() => LeaderboardWhereInput, { nullable: true })
  @Type(() => LeaderboardWhereInput)
  where?: LeaderboardWhereInput;
}

export { LeaderboardCountArgs as LeaderboardCountArgs };

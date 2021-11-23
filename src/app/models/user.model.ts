import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class user {
  @JsonProperty('name', String, true)
  public name: string = undefined;

  @JsonProperty('position', String, true)
  public position: string = undefined;

  @JsonProperty('office', String, true)
  public office: string = undefined;

  @JsonProperty('salary', String, true)
  public salary: string = undefined;

}
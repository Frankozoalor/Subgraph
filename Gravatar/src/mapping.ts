import {
  NewGravatar, UpdatedGravatar
} from "../generated/Gravatar/Gravatar";

//Importing entity class
import { Gravatar } from "../generated/schema";

export function handleNewGravatar(event: NewGravatar):void {
  //Use id field from emitted event as unique id for the entity
  const id = event.params.id.toHex();

  //Create a new Gravatar Entity with unique id
  const gravatar = new Gravatar(id);

  //Set Gravatar Entity fields
  gravatar.owner = event.params.owner;
  gravatar.displayName = event.params.displayName;
  gravatar.imageUrl = event.params.imageUrl;

  //Save entity to store
  gravatar.save();
}

export function handleUpdatedGravatar(event: UpdatedGravatar): void{
  //Use proper id to load an entity from store
  const id = event.params.id.toHex();

  //Load the entity to be update
  let gravatar = Gravatar.load(id);
  
  //Create the entity if it doesnt already exist
  if(!gravatar){
    gravatar = new Gravatar(id);
  }

  //set Updated fields to entity
  gravatar.owner = event.params.owner;
  gravatar.displayName = event.params.displayName;
  gravatar.imageUrl = event.params.imageUrl;

  //Save updated entity to store
  gravatar.save();
}
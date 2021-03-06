import {Fridge, IFridge} from "..";

export default async function({
  _id,
  ...updatedValues
}: IFridge) {
  return await Fridge.findOneAndUpdate(
    {
      _id,
    },
    {
      ...updatedValues,
    },
    {
      new: true
    }
  );
}
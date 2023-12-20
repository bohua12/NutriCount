export interface NutritionalInfo {
  calories: number | null;
  protein: number | null;
  fat: number | null;
  sugar: number | null;
  weight: number | null;
}

type nutritionalInfoKeys = keyof NutritionalInfo;

export const NutritionalInfoKeys: nutritionalInfoKeys[] = ["calories", "protein", "fat", "sugar", "weight"];

export interface IngredientDBColumns { // TO DO: Improve naming convention for this and getIngredientDBColumns
  ingredientName: string;
  ingredientType: string;
  remarks: string;
  nutritionalInfo: NutritionalInfo;
}

export interface GetIngredientDBColumns extends IngredientDBColumns {
  id: string;
  created_at: string;
}


export const IngredientTypes = ["protein", "carb", "fiber", "others"];

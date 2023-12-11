"use client";
import { supabase } from "@/lib/initSupabase";

export const getAllIngredients = async () => {
  const { data, error } = await supabase.from("ingredients").select("*");
  if (error) {
    console.log("Error getting ingredients")
    throw error;
  }
  return data;
};

export const addIngredient = async (formResponse) => {
    console.log("formResponse", formResponse);
    const { data, error } = await supabase.from("ingredients").insert([formResponse]);
    if (error) {
      console.error("Error adding ingredient", error);
      throw error;
    }
    return data;
  };
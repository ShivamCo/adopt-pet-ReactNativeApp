import {create} from 'zustand';

export const useCategoryStore = create((set) => ({
  currentCategory: 'dogs', // Initial category (can be changed as needed)
  setCategory: (category) => set({ currentCategory: category }), // Function to update the category
}));

export const usePetStore = create((set) => ({
  currentPet: 'dogs', // Initial category (can be changed as needed)
  setCategory: (pet) => set({ currentPet: pet }), // Function to update the category
}));
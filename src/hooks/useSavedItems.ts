import { useState, useEffect } from 'react';

export const useSavedItems = () => {
  const [savedItems, setSavedItems] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('dc20-saved-items');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  useEffect(() => {
    localStorage.setItem('dc20-saved-items', JSON.stringify(Array.from(savedItems)));
  }, [savedItems]);

  const toggleSave = (itemName: string, category: string) => {
    const key = `${category}:${itemName}`;
    setSavedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const isSaved = (itemName: string, category: string) => {
    return savedItems.has(`${category}:${itemName}`);
  };

  return { savedItems, toggleSave, isSaved };
};

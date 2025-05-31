import React, { useEffect, useState } from 'react';
import { getDiaryEntries } from '../api/diary';
import DiaryForm from '../components/diary/DiaryForm';
import DiaryEntry from '../components/diary/DiaryEntry';

const HealthDiary = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDiaryEntries();
      setEntries(data);
    };
    fetchData();
  }, []);

  const handleAddEntry = (entry) => {
    setEntries([entry, ...entries]);
  };

  return (
    <div className="p-4">
      <h2>Journal de Santé</h2>
      <DiaryForm onAdd={handleAddEntry} />
      <div className="mt-4 space-y-2">
        {entries.map((entry, index) => (
          <DiaryEntry key={index} entry={entry} />
        ))}
      </div>
    </div>
  );
};

export default HealthDiary;

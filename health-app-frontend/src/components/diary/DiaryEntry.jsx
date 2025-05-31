import React from 'react';

const DiaryEntry = ({ entry }) => (
  <div className="border p-2 rounded">
    <p><strong>Date :</strong> {entry.date}</p>
    <p><strong>Symptômes :</strong> {entry.symptoms}</p>
    <p><strong>Médicaments :</strong> {entry.medications}</p>
  </div>
);

export default DiaryEntry;

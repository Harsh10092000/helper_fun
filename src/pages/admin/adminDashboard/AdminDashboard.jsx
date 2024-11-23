import React from 'react'
import AdminSideBar from '../../../components/adminComponents/AdminSideBar'
import SearchBar from '../../../components/adminComponents/SearchBar';
import { useState } from 'react';
import { Show } from '../../../HelperFunction';
export const demoData = [
  { id: 1, title: "Apple iPhone 14", description: "The latest iPhone with improved camera and performance." },
  { id: 2, title: "Samsung Galaxy S23", description: "A powerful phone with a 200MP camera." },
  { id: 3, title: "Google Pixel 8", description: "A clean and fast Android phone from Google." },
  { id: 4, title: "OnePlus 11", description: "OnePlus flagship with great performance and fast charging." },
  { id: 5, title: "Xiaomi Mi 13", description: "Affordable phone with great features for its price." }
];

const AdminDashboard = () => {
  const [filteredItems, setFilteredItems] = useState(demoData);
  const handleSearch = (query) => {
    if (query === "") {
      setFilteredItems(demoData); 
    } else {
      const lowercasedQuery = query.toLowerCase();
      const filtered = demoData.filter(item =>
        item.title.toLowerCase().includes(lowercasedQuery) ||
        item.description.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredItems(filtered);
    }
  };
  return (

    <AdminSideBar>
    <div>dashboard section</div>
    <div>
      <h1>Product Search</h1>
      <SearchBar onSearch={handleSearch} />
      <div>
        <Show
          when={filteredItems.length > 0}
          fallback={<p>No items found</p>}
        >
      {
        filteredItems.map(item => (
          <div key={item.id} >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))
      }
      </Show>
    </div>
    </div>
    </AdminSideBar>
  )
}

export default AdminDashboard

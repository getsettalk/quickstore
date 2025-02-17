
# **QuickStore**  
**QuickStore** is a lightweight and efficient data storage solution for developers. It allows you to easily send, get, update, and delete data using unique keys, making it perfect for temporary data storage, testing, or quick prototyping.  

---

## **Features**  
- 🔑 Store data with unique keys.  
- 🔄 Update data by key.  
- 📥 Retrieve data by key.  
- 🗑️ Delete data by key.  
- 🚀 Easy integration with Node.js, React Native, and more.  
- 🌐 API-ready – Test directly using Postman.  

---

## **Limitations and Rules**  
- **Max Data Size:** 1 MB per key.  
- **No Authentication:** Be mindful when storing sensitive data.  
- **Auto Expiry:** Data older than one month will be automatically deleted to avoid excessive storage usage.  

---

## **Getting Started**  

### **Installation**  
Install the package using NPM:  
```bash
npm i quickstore-package
```
And

```bash
npm install axios
```

---

## **Usage**  

### **1. Node.js Example**  
Create a new file `example.js` and add the following:  
```js
const QuickStore = require('quickstore-package');

const runExample = async () => {
  try {
    // Send Data
    const key = await QuickStore.send('user123', { name: 'John Doe', age: 30 });
    console.log('Data Stored with Key:', key);

    // Get Data
    const data = await QuickStore.get('user123');
    console.log('Retrieved Data:', data);

    // Update Data
    const updated = await QuickStore.update('user123', { name: 'John Doe', age: 31 });
    console.log('Updated Data:', updated);

    // Delete Data
    const deleted = await QuickStore.delete('user123');
    console.log('Deleted Data:', deleted);

  } catch (error) {
    console.error('Error:', error);
  }
};

runExample();
```

**Run the Example:**  
```bash
node example.js
```

---

### **2. React Native Example**  
Install Axios for React Native:  
```bash
npm install axios
```

In your component:  
```js
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import QuickStore from 'quickstore-package';

const App = () => {
  const handleData = async () => {
    try {
      const key = await QuickStore.send('reactnativeKey', { name: 'React Native User', status: 'Active' });
      console.log('Stored Key:', key);

      const data = await QuickStore.get('reactnativeKey');
      console.log('Retrieved Data:', data);

      const updated = await QuickStore.update('reactnativeKey', { status: 'Inactive' });
      console.log('Updated Data:', updated);

      const deleted = await QuickStore.delete('reactnativeKey');
      console.log('Deleted Data:', deleted);
    } catch (error) {
      console.error('QuickStore Error:', error);
    }
  };

  return (
    <View>
      <Text>QuickStore React Native Example</Text>
      <Button title="Test QuickStore" onPress={handleData} />
    </View>
  );
};

export default App;
```

---

### **3. Using Postman**  
You can also test the QuickStore API using **Postman** by sending requests to the deployed Vercel backend.  

#### **1. Send Data**  
- **Method:** `POST`  
- **URL:** `https://quickstore-pql2.onrender.com/api/send`  
- **Body (JSON):**  
```json
{
  "key": "exampleKey",
  "data": {
    "name": "Postman User",
    "status": "Active"
  }
}
```

#### **2. Get Data**  
- **Method:** `GET`  
- **URL:** `https://quickstore-pql2.onrender.com/api/get/exampleKey`  

#### **3. Update Data**  
- **Method:** `PUT`  
- **URL:** `https://quickstore-pql2.onrender.com/api/update/exampleKey`  
- **Body (JSON):**  
```json
{
  "data": {
    "status": "Updated via Postman"
  }
}
```

#### **4. Delete Data**  
- **Method:** `DELETE`  
- **URL:** `https://quickstore-pql2.onrender.com/api/delete/exampleKey`  

---

## **API Documentation**  

### **1. Send Data**  
Stores data with a unique key.  
- **Endpoint:** `/api/send`  
- **Method:** `POST`  
- **Body Parameters:**  
  - `key`: Unique identifier (string)  
  - `data`: JSON object containing the data to store  
- **Response:**  
```json
{
  "success": true,
  "key": "exampleKey"
}
```

### **2. Get Data by Key**  
Retrieves stored data using a key.  
- **Endpoint:** `/api/get/:key`  
- **Method:** `GET`  
- **Response:**  
```json
{
  "data": {
    "name": "John Doe",
    "age": 30
  },
  "timestamp": 1699442400000
}
```

### **3. Update Data by Key**  
Updates existing data for a given key.  
- **Endpoint:** `/api/update/:key`  
- **Method:** `PUT`  
- **Body Parameters:**  
  - `data`: JSON object containing the new data  
- **Response:**  
```json
{
  "success": true,
  "message": "Data updated successfully"
}
```

### **4. Delete Data by Key**  
Deletes data associated with the given key.  
- **Endpoint:** `/api/delete/:key`  
- **Method:** `DELETE`  
- **Response:**  
```json
{
  "success": true,
  "message": "Data deleted successfully"
}
```

---

## **Error Handling**  
- `400 Bad Request`: If key or data is missing.  
- `404 Not Found`: If no data exists for the provided key.  
- `413 Payload Too Large`: If data exceeds 1 MB.  
- `500 Internal Server Error`: For any server-side issues.  

---

## **Security and Data Management**  
- Data is hashed using SHA-256 to ensure unique and secure keys.  
- Data is stored on the Vercel server under a unique JSON file for each key.  
- Auto Expiry: Data older than **one month** is automatically deleted.  

---

## **Rate Limiting and Abuse Prevention**  
- Requests are limited to **100 requests per hour** per IP.  
- Auto block after exceeding limits.  
- To prevent misuse, unused keys will auto-expire.  

---

## **Upcoming Features**  
- ✅ **Data Expiry**: Auto-delete after one month.  
- ✅ **Rate Limiting**: Limit requests per IP.  
- ⏳ **Custom Expiry**: Set custom expiry time for data.  
- ⏳ **Data Versioning**: Maintain multiple versions of data.  

---

## **Contributing**  
1. **Fork** the repository.  
2. **Create** your feature branch: `git checkout -b feature/AmazingFeature`  
3. **Commit** your changes: `git commit -m 'Add some AmazingFeature'`  
4. **Push** to the branch: `git push origin feature/AmazingFeature`  
5. **Open** a pull request.  

---

## **License**  
This project is licensed under the **MIT License**.  

---

## **Feedback and Support**  
If you encounter any issues or have suggestions, please open an issue on the [GitHub repository](https://github.com/your-repo-url).  

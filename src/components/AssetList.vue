<template>
    <div>
      <h1>Asset List</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Asset Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in assets" :key="index">
            <td>{{ item.assetName }}</td>
            <td>{{ item.department }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="downloadCSV">Download CSV</button>
    </div>
  </template>
  
<script setup lang="ts">
  import { ref } from "vue";
  
  const assets = ref([
    { assetName: "Printer", department: "HR" },
    { assetName: "Monitor", department: "IT" },
    { assetName: "Barcode Scanner", department: "ACCOUNT" },
  ]);
  
  function downloadCSV() {
    const csvContent = [
      ["Asset Name", "Department"],
      ...assets.value.map((item) => [item.assetName, item.department]),
    ]
      .map((e) => e.join(","))
      .join("\n");
  
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "assets.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
</script>
  
<style scoped>
  table {
    width: 100%;
    min-width: 500px;
    border-collapse: collapse;
    margin: 20px 0;
  }
  th,
  td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
  }
  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
</style>
  
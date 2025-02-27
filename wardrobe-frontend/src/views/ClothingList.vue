<template>
  <div class="container py-4">
    <h2 class="text-primary text-center mb-4">Clothing List</h2>

    <!-- Search Bar -->
    <div class="mb-3">
      <input
        v-model="searchQuery"
        type="text"
        class="form-control"
        placeholder="Search clothing..."
      />
    </div>

    <!-- Clothing List -->
    <ul class="list-group">
      <li
        v-for="clothing in filteredClothing"
        :key="clothing.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <span class="fw-bold">{{ clothing.name }}</span>
        <span class="badge bg-info text-dark">{{ clothing.category }}</span>
        <button @click="$emit('delete', clothing.id)" class="btn btn-sm btn-danger">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    clothingItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      searchQuery: ''
    };
  },
  computed: {
    filteredClothing() {
      return this.clothingItems.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #e3f2fd; /* Soft blue */
  border-radius: 8px;
  padding: 20px;
  max-width: 600px;
}
.list-group-item {
  border-radius: 6px;
}
</style>

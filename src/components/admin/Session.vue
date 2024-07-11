<template>
    <div class="container-fluid">
        <div class="row">
            <AdminNavbar />
            <div class="col-sm p-3 min-vh-100">
                <!-- content -->
                <div>
                    <div class="flex items-center justify-between mb-4 mt-2">
                        <h2 class="text-3xl">Sessions</h2>
                    </div>
                </div>

                <vue3-datatable :rows="rows" :columns="cols"></vue3-datatable>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Vue3Datatable from "@bhplugin/vue3-datatable";
import "@bhplugin/vue3-datatable/dist/style.css";
import AdminNavbar from '../includes/AdminSidebar.vue'


const cols =
    ref([
      { field: "id", title: "ID", width: "90px", filter: false },
      { field: "session", title: "Sessions" },
    ]) || [];

  const rows = ref([
    {
      id: 1,
      session: "00:00",
    },
    {
      id: 2,
      session: "00:15",
    },
    {
      id: 3,
      session: "00:30",
    },
    {
      id: 4,
      session: "00:45",
    },
  ])

</script>
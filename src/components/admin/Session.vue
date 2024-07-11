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
      { field: "firstname", title: "First Name" },
      { field: "phone", title: "Phone" },
      { field: "email", title: "Email" },
      { field: "userid", title: "User ID" },
      { field: "password", title: "Password" },
      { field: "schedule", title: "Actions" },
    ]) || [];

  const rows = ref([
    {
      id: 1,
      firstname: "Katrina",
      lastname:"Kumprane",
      userid: "Bret",
      email: "leannegraham@hq.witty.team",
      phone: "11111111",
      password: "***********",
    },
    {
      id: 2,
      firstname: "John",
      lastname:"Doe",
      userid: "John",
      email: "johndoe@hq.witty.team",
      phone: "11111111",
      password: "***********",
    },
  ])

</script>
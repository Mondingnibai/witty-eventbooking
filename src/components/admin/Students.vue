<template>
    <div class="container-fluid">
        <div class="row">
            <AdminNavbar />
            <div class="col-sm p-3 min-vh-100">
                <!-- content -->
                <div>
                    <div class="flex items-center justify-between mb-4 mt-2">
                        <h2 class="text-3xl">Student List</h2>
                    </div>

                    <!-- vue datatable -->
                    <vue3-datatable 
                        :rows="rows" 
                        :columns="cols">

                        <template #id="data">
                            <strong class="text-info">#{{ data.value.id }}</strong>
                        </template>
                        <template #firstname="data">
                            <div class="flex items-center gap-2">
                                <div class="font-semibold"><i class="bi-person-circle fs-4 p-2"></i>{{ data.value.firstname + ' ' + data.value.lastname }}</div>
                            </div>
                        </template>
                        <template #userid="data">
                            <strong class="text-secondary">{{ data.value.userid }}</strong>
                        </template>
                        <template #password="data">
                            <strong class="text-secondary">{{ data.value.password }}</strong>
                        </template>
                        <template #student_status="data">
                            <strong class="text-success">{{ data.value.student_status }}</strong>
                        </template>
                        <template #student_type="data">
                            <strong class="text-secondary">{{ data.value.student_type }}</strong>
                        </template>
                    </vue3-datatable>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Vue3Datatable from "@bhplugin/vue3-datatable";
import "@bhplugin/vue3-datatable/dist/style.css";
import AdminNavbar from '@/components/includes/AdminSidebar.vue'

const cols =
    ref([
      { field: "id", title: "ID", width: "90px", filter: false },
      { field: "firstname", title: "Name" },
      { field: "userid", title: "User ID" },
      { field: "password", title: "Password" },
      { field: "student_status", title: "Status" },
      { field: "student_type", title: "Type" }
    ]) || [];

  const rows = ref([
    {
      id: 1,
      firstname: "Marie",
      lastname:"Pedraza",
      userid: "Marie",
      password: "***********",
      student_status:"Active",
      student_type: "Child"
    },
    {
      id: 2,
      firstname: "John",
      lastname:"Doe",
      userid: "John",
      password: "***********",
      student_status:"Trial",
      student_type: "Adult"
    },
  ])
</script>
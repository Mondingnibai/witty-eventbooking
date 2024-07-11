<template>
    <div class="container-fluid">
        <div class="row">
            <AdminNavbar />
            <div class="col-sm p-3 min-vh-100">
                <!-- content -->
                <div>
                    <div class="flex items-center justify-between mb-4 mt-4">
                        <h2 class="text-3xl">Teacher List</h2>
                    </div>

                    <!-- vue datatable -->
                    <vue3-datatable :rows="rows" :columns="cols">
                        <template #id="data">
                            <strong class="text-info">#{{ data.value.id }}</strong>
                        </template>
                        <template #firstname="data">
                            <div class="flex items-center gap-2">
                                <div class="font-semibold"><i class="bi-person fs-4 p-2"></i>{{ data.value.firstname + ' ' + data.value.lastname }}</div>
                            </div>
                        </template>
                        <template #phone="data">
                            <strong class="text-secondary">{{ data.value.phone }}</strong>
                        </template>
                        <template #email="data">
                            <a :href="`mailto:${data.value.email}`" class="text-primary hover:underline">{{ data.value.email }}</a>
                        </template>
                        <template #userid="data">
                            <strong class="text-secondary">{{ data.value.userid }}</strong>
                        </template>
                        <template #password="data">
                            <strong class="text-secondary">{{ data.value.password }}</strong>
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
      { field: "firstname", title: "First Name" },
      { field: "phone", title: "Phone" },
      { field: "email", title: "Email" },
      { field: "userid", title: "User ID" },
      { field: "password", title: "Password" },
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
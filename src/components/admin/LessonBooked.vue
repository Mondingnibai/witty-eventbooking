<template>
    <div class="container-fluid">
        <div class="row">
            <AdminNavbar />
            <div class="col-sm p-3 min-vh-100">
                <!-- content -->
                <div>
                    <div class="flex items-center justify-between mb-4 mt-4">
                        <h2 class="text-3xl">Lesson Booked</h2>
                    </div>

                    <!-- vue datatable -->
                    <vue3-datatable :rows="rows" :columns="cols">
                        <template #student_firstname="data">
                            <div class="font-semibold"><i class="bi-person-circle fs-4 p-2"></i>{{ data.value.student_firstname + ' ' + data.value.student_lastname }}</div>
                        </template>
                        <template #teacher_firstname="data">
                            <div class="font-semibold"><i class="bi-person fs-4 p-2"></i>{{ data.value.teacher_firstname + ' ' + data.value.teacher_firstname }}</div>
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
      { field: "student_firstname", title: "Student" },
      { field: "location", title: "Location" },
      { field: "teacher_firstname", title: "Teacher" },
      { field: "length_session", title: "Length/Session" },
      { field: "weekday", title: "Weekday" },
      { field: "start_time", title: "Start Time" },
      { field: "end_time", title: "End Time" },
      { field: "subscription", title: "Subscription" }
    ]) || [];

  const rows = ref([
    {
      id: 1,
      student_firstname:"Marie",
      student_lastname:"Pedraza",
      location:"home",
      teacher_firstname: "Katrina",
      teacher_lastname:"Kumprane",
      length_session:"45 Min",
      weekday: "Friday",
      start_time: "14:30 PM",
      end_time:"15:15 PM",
      subscription: "August 1, 2024",
    },
    {
        id: 2,
      student_firstname:"John",
      student_lastname:"Doe",
      location:"home",
      teacher_firstname: "Katrina",
      teacher_lastname:"Kumprane",
      length_session:"30 Min",
      weekday: "Monday",
      start_time: "14:30 PM",
      end_time:"15:00 PM",
      subscription: "August 20, 2024",
    },
  ])
</script>
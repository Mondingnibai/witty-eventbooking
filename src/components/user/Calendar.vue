<template>
    <div class="container-fluid">
        <UserHeader />
        <div class="row mt-4">
            <div class="mx-auto w-80">
                <div class="text-center">
                    <h5 class="fw-light text-secondary">Select a day of the Week</h5>
                </div>
                <div id="row mb-4">
                    <div class="col-md-12 is-light-mode d-flex align-items-start" style="max-height: 400px;overflow-y:scroll">
                        <Qalendar 
                        :events="events"
                        :config="config"
                        />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>


<script>
import { Qalendar } from "qalendar";
import UserHeader from '../includes/UserHeader.vue';

export default {
    components: {
        Qalendar,
        UserHeader
    },

    data() {
        return {
            events: [
                // ...
                {
                  title: "Advanced algebra",
                  with: "Chandler Bing",
                  time: { start: "2024-06-28 01:00", end: "2024-06-28 02:00" },
                  color: "yellow",
                  isEditable: true,
                  id: "753944708f0f",
                  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis. Deserunt excepturi illum nobis perferendis praesentium repudiandae saepe sapiente voluptatem!"
                },
                {
                  title: "Ralph on holiday",
                  with: "Rachel Greene",
                  time: { start: "2022-05-10", end: "2022-05-22" },
                  color: "green",
                  isEditable: true,
                  id: "5602b6f589fc"
                }
                // ...
            ],
            config: {
                defaultMode: "week",
                showCurrentTime: false,
            }
        }
    },
}
</script>
<template>
    <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="row bg-white border rounded-3">
            <div class="d-grip gap-2 bg-primary">
                <p class="d-flex align-items-start fs-5 mb-0 text-white mt-2">Hi Test!</p>
                <p class="d-flex align-items-start fs-6 text-decoration-underline text-white">test@gmail.com</p>
            </div>
            <hr class="border border-secondary"/>

            <div class="d-grip gap-2 mb-3">
                <p class="d-flex align-items-start fs-5 mb-0 text-secondary fw-light mt-2">Select a day of the Week</p>
            </div>

            <div id="row mb-4">
                <div class="col-md-12 is-light-mode d-flex align-items-start" style="max-height: 400px; overflow-y:scroll">
                    <Qalendar 
                    :events="events"
                    :config="config"
                    />
                </div>
            </div>
            
        </div>
    </div>
</template>


<script>
import { Qalendar } from "qalendar";

export default {
    components: {
        Qalendar,
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

<style>
    @import "../../../node_modules/qalendar/dist/style.css"
</style>
<template>
    <div class="container-fluid">
        <UserHeader />
        <div class="row mt-4">
            <div class="mx-auto w-80">
                <div class="text-center">
                    <h5 class="fw-light text-secondary">Select Lesson</h5>
                </div>
                <form class="p-4">
                    <div class="row mb-3">
                        <div class="col-md-12 col-sm-12">
                            <label for="lblLocation" class="d-flex align-items-start text-secondary fw-light mb-2 form-label">Location</label>
                            <select class="form-select" aria-label="lblLocation">
                                <option selected>Select Location</option>
                                <option value="1">Location 1</option>
                                <option value="2">Location 2</option>
                            </select>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-md-12">
                            <label for="lbllessontype" class="d-flex align-items-start  text-secondary fw-light mb-2 form-label">Lesson Type</label>
                            <select class="form-select" aria-label="lblessontype">
                                <option selected>Lesson Type</option>
                                <option value="1">Voice</option>
                                <option value="2">Guitar</option>
                            </select>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-md-12">
                            <label for="lblteacher" class="d-flex align-items-start  text-secondary fw-light mb-2 form-label">Teacher</label>
                            <select class="form-select" aria-label="lblteacher">
                                <option selected>Teacher</option>
                                <option value="1">Katrina Smith</option>
                                <option value="2">John Doe</option>
                            </select>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-md-12">
                            <label for="lblteacher" class="d-flex align-items-start  text-secondary fw-light mb-2 form-label">Length or Session / Minutes </label>
                            <select class="form-select" aria-label="lblteacher">
                                <option selected>00:00</option>
                                <option value="1">00:15</option>
                                <option value="2">00:30</option>
                                <option value="2">00:45</option>
                            </select>
                        </div>
                    </div>
                    <router-link to="/calendar">
                        <div class="mb-3 text-center">
                            <button type="button" class="w-50 btn btn-lg btn-danger rounded-2 mb-3">
                                <a href="/subscription" class="text-white text-decoration-none">Next</a>
                            </button>
                        </div>
                    </router-link>

                </form>
            </div>
        </div>
    </div>
</template>
<script>
import UserHeader from '../includes/UserHeader.vue';

export default {
    components: {
        UserHeader,
    },
}
</script>
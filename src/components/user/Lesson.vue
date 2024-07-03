<template>
    <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="row bg-white border rounded-3">
            <div class="d-grip gap-2 bg-primary">
                <p class="align-items-start fs-5 mb-0 text-white mt-2">Hi Test!</p>
                <p class="align-items-start fs-6 text-decoration-underline text-white">test@gmail.com</p>
            </div>

            <div class="d-grip gap-2 mb-3">
                <p class="d-flex align-items-start fs-5 mb-0 text-secondary fw-light mt-2">Select Your Lesson</p>
            </div>


            <!-- lesson details -->
            <form name="lesson_details">
                <!-- locations -->
                <div class="row mb-3">
                    <div class="col-md-12">
                        <label for="lblLocation" class="d-flex align-items-start text-secondary fw-light mb-2 form-label">Location</label>
                        <select class="form-select" aria-label="lblLocation">
                            <option selected>Select Location</option>
                            <option value="1">Location 1</option>
                            <option value="2">Location 2</option>
                        </select>
                    </div>
                </div>

                <!-- lesson type -->
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

                <!-- Teacher -->
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

                <!-- Length / Session -->
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
                    <div class="d-grid gap-3">
                        <button type="submit" class="btn btn-primary btn-sm  p-2 fw-light mb-3 rounded-3">
                            Next
                        </button>
                    </div>
                </router-link>
            </form>
        </div>
    </div>
</template>
<template>
   <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="row bg-white border rounded-3">
            <div class="d-grip gap-2 bg-primary">
                <p class="d-flex align-items-start fs-5 mb-0 text-white mt-2">Hi Test!</p>
                <p class="d-flex align-items-start fs-6 text-decoration-underline text-white">test@gmail.com</p>
            </div>
            <hr class="border border-secondary"/>

           <div class="form-control-sm text-center">
                <p class="text-secondary fw-light">You have no on going lesson booking yet!</p>
            </div>

            <router-link to="/subscription">
                <div class="d-grid gap-3 mb-3">
                    <button type="button" class="btn btn-primary btn-sm m-2 p-2 fw-light rounded-3">
                        <a href="/subscription" class="text-white text-decoration-none">Book Now</a>
                    </button>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'UserDashboard',
  // ...
}
</script>
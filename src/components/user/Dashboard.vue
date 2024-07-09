<template>
    <div class="container-fluid">
        <UserHeader/>
        <div class="row">
            <div class="align-item-center justify-content-center">
                <div class="text-center">
                    <p class="text-secondary fw-light mt-4 mb-4">You have no on going lesson booking yet!</p>
                </div>

                <router-link to="/subscription">
                    <div class="mb-3 text-center">
                        <button type="button" class="w-50 btn btn-lg btn-danger rounded-2 mb-3">
                            <a href="/subscription" class="text-white text-decoration-none">Book Now</a>
                        </button>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import UserHeader from '../includes/UserHeader.vue'

export default {
    components: {
        UserHeader,
    },
}
</script>
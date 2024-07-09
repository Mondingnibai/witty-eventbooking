<template>
    <div class="container-fluid">
        <UserHeader />
        <div class="text-center mt-4">
            <h1 class="text-secondary fw-light">Subscription Plan</h1>
            <p class="text-secondary fs-6 fw-light">Choose plans from beginner, make-up lessons and add on lesson.</p>
        </div>
        <div class="row">
            <div class="col-sm-12 col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <div class="align-items-center justify-content-center">
                            <p class="fs-6 mb-0 text-secondary fw-light mt-2">Beginner Lesson</p>
                            <p class="fs-2 mb-0 text-black fw-light mt-2">$0000</p>
                            <p class="mb-2 text-secondary fw-light mt-2"><small>This is a test description..</small></p>

                            <router-link to="/lesson" class="text-white text-decoration-none">
                                <button type="button" class="btn btn-danger fw-light mt-1 text-white">
                                    Subscribe
                                </button>
                            </router-link>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div  class="col-sm-12 col-md-4 mb-3"> 
                <div class="card">
                    <div class="card-body">
                        <div class="align-items-center justify-content-center">
                            <p class="fs-6 mb-0 text-secondary fw-light mt-2">Make-up Schedule</p>
                            <p class="fs-2 mb-0 text-black fw-light mt-2">$0000</p>
                            <p class="mb-2 text-secondary fw-light mt-2"><small>This is a test description..</small></p>

                            <router-link to="/lesson" class="text-white text-decoration-none">
                                <button type="button" class="btn btn-danger fw-light mt-1 text-white">
                                    Subscribe
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div  class="col-sm-12 col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <div class="align-items-center justify-content-center">
                            <p class="fs-6 mb-0 text-secondary fw-light mt-2">Add-on Lesson Schedule</p>
                            <p class="fs-2 mb-0 text-black fw-light mt-2">$0000</p>
                            <p class="mb-2 text-secondary fw-light mt-2"><small>This is a test description..</small></p>

                            <router-link to="/lesson">
                                <button type="button" class="btn btn-danger fw-light mt-1 text-white">
                                    Subscribe
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
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
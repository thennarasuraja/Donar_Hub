<template>
  <div class="font-sans">
    <div class="border w-[200px] h-screen">
      <div class="flex justify-between border-b items-center">
        <div class="px-2 py-3 font-semibold text-[14px] cursor-pointer">
          Student
        </div>
        <NuxtLink to="/">
          <div
            class="mx-2 my-2 px-2 py-3 font-semibold text-[12px] hover:bg-blue-100 rounded-[8px] cursor-pointer"
          >
            <span
              ><img
                class="w-[20px] h-[20px] flex items-center justify-center"
                src="/public/images/logout.png" /></span
            >LogOut
          </div>
        </NuxtLink>
      </div>
      <div class="flex flex-col px-[5px] gap-2">
        <NuxtLink :to="`/student/?userId=${this.userId}`">
          <div
            class="w-full p-2 text-base font-sans font-semibold mt-10 hover:bg-slate-100 rounded-md cursor-pointer"
            :class="{ 'bg-blue-50 text-blue-800': name == 'donation' }"
          >
            Donation
          </div>
        </NuxtLink>
        <NuxtLink :to="`/student/application?userId=${this.userId}`">
          <div
            class="flex w-full p-2 text-base font-sans font-semibold hover:bg-slate-100 rounded-md cursor-pointer"
            :class="{ 'bg-blue-50 text-blue-800 ': name == 'application' }"
          >
            Application
          </div>
        </NuxtLink>
        <NuxtLink :to="`/student/profile?userId=${this.userId}`">
          <div
            class="flex w-full p-2 text-base font-sans font-semibold hover:bg-slate-100 rounded-md cursor-pointer"
            :class="{ 'bg-blue-50  text-blue-800': name == 'profile' }"
          >
            Profile
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      userId: this.$route.query.userId,
    };
  },
};
</script>

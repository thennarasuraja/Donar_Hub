<template>
  <div class="w-full">
    <div class="flex w-full">
      <Students name="application" />
      <div class="w-full h-screen bg-slate-100">
        <div class="w-full m-5 text-2xl">application</div>
        <div v-for="object in application" class="w-full p-3">
          <div class="h-[100px] border bg-white grid grid-cols-3">
            <div class="flex flex-col gap-3 px-3 py-3">
              <div class="">{{ object.DonationName }}</div>
              <div>
                {{ object.donorName }}
                <span class="pl-[40px]">{{ object.created_at }}</span>
              </div>
            </div>
            <div>
              <div class="flex justify-center items-center py-7">
                {{ object.eligible }}
              </div>
            </div>
            <div class="flex justify-end items-center mr-5">
              <div class="group">
                <div class="group-hover:block hidden">
                  <select class="p-3 bg-slate-50 outline-none rounded-[4px]">
                    <option>status</option>
                    <option>Bending</option>
                    <option>reject</option>
                    <option>Approve</option>
                  </select>
                </div>
                <div
                  class="block group-hover:hidden px-2 py-1 border rounded-[8px]"
                  :class="{
                    'bg-red-50 text-red-600 border-red-200': false,
                    'bg-yellow-50 text-yellow-600 border-yellow-200': true,
                  }"
                >
                  {{ object.status }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: this.$route.query.userId,
      application: [],
    };
  },
  mounted() {
    this.getapplication();
  },
  methods: {
    async getapplication() {
      const data = await this.$http.$get(
        `http://localhost:5001/application/get?studentId=${this.userId}`
      );
      console.log("dffdsg", data);
      this.application = data.data;
    },
  },
};
</script>

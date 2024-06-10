<template>
  <div class="w-full">
    <div class="flex w-full">
      <Donations name="application" />
      <div class="w-full h-screen bg-slate-100">
        <div class="w-full m-5 text-2xl">Application</div>
        <div v-for="apply in donor" class="w-full p-3">
          <div class="h-[100px] border bg-white grid grid-cols-3">
            <div class="flex flex-col gap-3 px-3 py-3">
              <div>{{ apply.donorName }}</div>
              <div>
                {{ apply.DonationName }}
                <span class="pl-[40px]">({{ apply.created_at }})</span>
              </div>
            </div>
            <div>
              <div class="flex justify-center items-center py-7">
                {{ apply.eligible }}
              </div>
            </div>
            <div class="flex justify-end items-center mr-5">
              <div class="group">
                <div class="group-hover:block hidden">
                  <select
                    v-model="apply.status"
                    @change="updateApplication(apply)"
                    class="p-3 bg-slate-50 outline-none rounded-[4px]"
                  >
                    <option value="pending">Bending</option>
                    <option value="reject">reject</option>
                    <option value="Approve">Approve</option>
                  </select>
                </div>
                <div
                  class="block group-hover:hidden px-2 py-1 border rounded-[8px]"
                  :class="{
                    'bg-red-50 text-red-600 border-red-200': false,
                    'bg-yellow-50 text-yellow-600 border-yellow-200': true,
                  }"
                >
                  {{ apply.status }}
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
      donor: [],
    };
  },
  mounted() {
    this.donationdetails();
  },
  methods: {
    async donationdetails() {
      const Details = await this.$http.$get(
        `http://localhost:5001/application/get?donorId=${this.userId}`
      );
      this.donor = Details.data;
    },
    async updateApplication(apply) {
      const update = await this.$http.$put(
        "http://localhost:5001/application/update",
        {
          body: {
            application: apply.applicationId,
            status: apply.status,
          },
        }
      );
      this.donationdetails();
    },
  },
};
</script>

<template>
  <div class="w-full">
    <div class="flex w-full">
      <Students name="donation" />
      <div class="w-full h-screen bg-slate-100">
        <div class="px-10 text-2xl">
          <div class="w-full mb-5">Apply Donations</div>
          <div class="grid grid-cols-3">
            <div
              v-for="(donation, index) in donations"
              :key="index"
              class="w-[340px] px-5 py-3 font-medium h-auto text-slate-700 shadow-xl border border-slate-200 rounded-[8px] bg-white"
            >
              <div
                class="w-full text-base text-center flex items-center justify-center h-[85px]"
              >
                <img
                  class="w-[50px] h-[50px]"
                  src="/public/images/profile.png"
                />
              </div>
              <div
                class="flex justify-between text-sm font-semibold text-slate-900 w-full"
              >
                <div>
                  <div class="flex flex-col gap gap-2">
                    <div>
                      <div class="text-[16px] font-extrabold text-blue-500">
                        {{ donation.DonationName }}
                      </div>
                    </div>
                    <div>{{ donation.name }}</div>
                  </div>
                </div>
                <div class="flex justify-end gap gap-2">
                  <div class="flex flex-col text-right">
                    <div class="">{{ donation.created_at }}</div>
                    <div class="">{{ donation.enddate }}</div>
                  </div>
                </div>
              </div>
              <div class="w-full text-base mt-2 font-medium">
                <div
                  class="w-full px-[6px] p-[3px] text-sm font-serif font-medium outline-none h-[80px]"
                >
                  {{ donation.eligible }}
                </div>
              </div>
              <div class="flex justify-end m-2">
                <div
                  @click="applyDonation(donation)"
                  class="bg-blue-800 rounded-[4px] cursor-pointer text-white py-[5px] text-base px-3"
                >
                  Apply
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
      donations: [],
    };
  },
  mounted() {
    this.userdonation();
  },
  methods: {
    async userdonation() {
      const res = await this.$http.$get(
        "http://localhost:5001/donation/donation"
      );
      console.log(res);
      if (res.success) {
        this.donations = res.donations;
      }
    },
    async applyDonation(donation) {
      const res = await this.$http.$post(
        "http://localhost:5001/application/create",
        {
          body: {
            userId: this.$route.query.userId,
            donationId: donation.donationId,
          },
        }
      );
      if (res.success) {
        alert("applied");
      } else if (res.success == false) {
        alert("your Already applied");
      }
      console.log("applied", res);
    },
  },
};
</script>

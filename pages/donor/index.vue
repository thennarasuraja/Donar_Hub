<template>
  <div class="w-full">
    <div class="flex w-full">
      <Donations name="donation" />
      <div class="w-full h-screen bg-slate-100">
        <div>
          <div class="flex justify-between w-full bg-white p-4">
            <div class="text-xl font-semibold">Well Come to Donation site</div>
            <div
              @click="createModel = true"
              class="mr-5 cursor-pointer text-[16px] bg-blue-500 px-[20px] py-[3px] rounded-[10px] text-white font-serif"
            >
              Creat
            </div>
          </div>
        </div>
        <div>
          <div
            class="w-[100%] h-screen fixed top-0 left-0 right-0 bg-black bg-opacity-50 z-3"
            v-if="createModel"
          >
            <div class="flex justify-center absolute top-10 left-1/3">
              <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                <h1 class="text-2xl font-bold mb-4 text-center">
                  Donation List
                </h1>

                <div class="mb-4">
                  <label for="name" class="block text-gray-700"
                    >Donation Name</label
                  >
                  <input
                    type="text"
                    v-model="donor.DonationName"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div class="flex gap-5">
                  <div class="mb-4">
                    <label for="name" class="block text-gray-700"
                      >Maximum Amount</label
                    >
                    <input
                      type="text"
                      v-model="donor.MaximumAmount"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div class="mb-4">
                    <label for="name" class="block text-gray-700"
                      >Minimum Amount</label
                    >
                    <input
                      type="text"
                      v-model="donor.MinimumAmount"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
                <div class="flex gap-5">
                  <div class="mb-4">
                    <label for="name" class="block text-gray-700">Others</label>
                    <input
                      type="text"
                      v-model="donor.others"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div class="mb-4">
                    <label for="name" class="block text-gray-700"
                      >EndDate</label
                    >
                    <input
                      type="text"
                      v-model="donor.enddate"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <!-- <div class="mb-4">
                  <label for="name" class="block text-gray-700">others</label>
                  <input
                    type="text"
                    v-model="donor.other"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div> -->
                <div class="mb-4">
                  <label for="name" class="block text-gray-700">Eligible</label>
                  <input
                    type="text"
                    v-model="donor.eligible"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div class="grid gap-3 grid-cols-2">
                  <button
                    @click="createModel = false"
                    type="cancel"
                    class="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
                  >
                    Cancel
                  </button>
                  <button
                    @click="creatDonation()"
                    class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="p-5 grid grid-cols-3">
            <div
              v-for="donation in donations"
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
              <div>
                <div
                  class="flex justify-between text-sm font-semibold text-slate-900 w-full"
                >
                  <div>
                    <div class="flex flex-col gap gap-2">
                      <div>
                        <div>{{ donation.DonationName }}</div>
                      </div>
                      <div>{{ donation.name }}</div>
                    </div>
                  </div>
                  <div class="flex flex-col gap gap-2">
                    <div>{{ donation.enddate }}</div>
                    <div>{{ donation.created_at }}</div>
                  </div>
                </div>
                <div class="w-full text-base mt-2 font-medium">
                  <div
                    class="w-full px-[6px] p-[3px] text-sm font-serif font-medium outline-none h-[80px]"
                  >
                    {{ donation.eligible }}
                  </div>
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
      createModel: false,
      userId: this.$route.query.userId,
      donor: {
        DonationName: "",
        MaximumAmount: "",
        MinimumAmount: "",
        others: "",
        eligible: "",
      },
      donations: {},
    };
  },
  mounted() {
    this.getdonations();
  },
  methods: {
    async creatDonation() {
      const creatdonate = await this.$http.$post(
        "http://localhost:5001/donation/submit",
        {
          body: this.donor,
        }
      );
      console.log("donate:", creatdonate);
      this.donations = creatdonate.data;
      this.createModel = false;
    },
    async getdonations() {
      const donationdata = await this.$http.$get(
        `http://localhost:5001/donation/donation?userId=${this.userId}`
      );
      console.log("donationdata:", donationdata);
      this.donations = donationdata.donations;
      console.log("gffgfhcrdhd", this.donations);
    },
  },
};
</script>

<template>
  <div class="w-full">
    <div class="flex w-full">
      <Donations name="profile" />
      <div class="w-full h-screen bg-slate-100">
        <div class="flex justify-center">
          <div class="text-2xl mt-10 mr-10 absolute">PROFILE</div>
          <div class="flex flex-col mt-[100px] gap-5">
            <div class="w-[600px] h-[100px] rounded-[8px] bg-white">
              <div class="flex justify-center py-2">
                <img
                  src="/public/images/profile.png"
                  class="w-[80px] h-[80px]"
                />
              </div>
            </div>
            <div class="w-[600px] h-[420px] rounded-[8px] bg-white">
              <div class="p-5 flex justify-between items-center">
                <div class="font-semibold">Personal Details</div>
                <div
                  @click="openEditData()"
                  class="flex flex-col gap-3 cursor-pointer"
                >
                  <img
                    src="/public/images/edit.png"
                    class="w-[30px] h-[30px]"
                  />
                  <div>Edit</div>
                </div>
              </div>
              <div v-if="edit" class="px-5 flex justify-between">
                <div class="p-5 flex flex-col gap-5">
                  <div>
                    <div class="text-sm font-semibold text-slate-900">Name</div>
                    <div class="p-1 text-slate-600">{{ donor.name }}</div>
                  </div>

                  <div>
                    <div class="text-sm font-semibold text-slate-900">
                      Email
                    </div>
                    <div class="p-1 text-slate-600">{{ donor.email }}</div>
                  </div>

                  <div>
                    <div>Address</div>
                    <div class="rounded-[6px] w-[200px] p-2">
                      {{ donor.address }}
                    </div>
                  </div>
                </div>
                <div class="p-5 flex flex-col gap-5">
                  <div>
                    <div class="text-sm font-semibold text-slate-900">
                      Vision
                    </div>
                    <div class="p-1 text-slate-600">{{ donor.vision }}</div>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-slate-900">
                      Mission
                    </div>
                    <div class="p-1 text-slate-600">{{ donor.mission }}</div>
                  </div>

                  <div>
                    <div class="text-sm font-semibold text-slate-900">
                      Contact
                    </div>
                    <div class="p-1 text-slate-600">{{ donor.contact }}</div>
                  </div>
                </div>
              </div>
              <div v-if="edit == false" class="px-5 flex justify-between">
                <div class="p-5 flex flex-col gap-5">
                  <div>
                    <input
                      type="text"
                      v-model="user.name"
                      placeholder="Edit your Name"
                      class="border p-2 font-sans rounded-[6px]"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      v-model="user.email"
                      placeholder="Edit your Email"
                      class="border rounded-[6px] p-2"
                    />
                  </div>
                  <div>
                    <textarea
                      v-model="user.address"
                      placeholder="Edit your Address"
                      class="border rounded-[6px] w-[200px] p-2"
                    >
                    </textarea>
                  </div>
                </div>
                <div class="p-5 flex flex-col gap-5">
                  <div>
                    <input
                      type="text"
                      v-model="user.vision"
                      placeholder="Edit your Vision"
                      class="border rounded-[6px] p-2"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      v-model="user.mission"
                      placeholder="Edit your Mission"
                      class="border rounded-[6px] p-2"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      v-model="user.contact"
                      placeholder="Edit your Contact Number"
                      class="border rounded-[6px] p-2"
                    />
                  </div>
                  <div>
                    <div class="w-full flex justify-between">
                      <button
                        @click="updateUserDetails()"
                        class="bg-blue-800 rounded-[6px] cursor-pointer text-white py-[5px] w-[45%] text-base px-3"
                      >
                        Submit
                      </button>
                      <button
                        @click="edit = true"
                        class="bg-red-800 rounded-[6px] cursor-pointer text-white w-[45%] py-[5px] text-base px-3"
                      >
                        Cancel
                      </button>
                    </div>
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
      edit: true,
      userId: this.$route.query.userId,
      donor: {},
      user: {
        userId: "",
        name: "",
        email: "",
        address: "",
        vision: "",
        mission: "",
        contact: "",
      },
    };
  },
  mounted() {
    this.getUserdetails();
  },
  methods: {
    async getUserdetails() {
      const { success, userdata } = await this.$http.$get(
        `http://localhost:5001/user/userdata?userId=${this.userId}`
      );
      this.donor = userdata.reduce((accumulator, currentVal) => {
        return (accumulator = currentVal);
      }, {});
      console.log("fdggdgdf", this.donor);
    },
    async updateUserDetails() {
      const updated = await this.$http.$put(
        "http://localhost:5001/user/userupdate",
        {
          body: this.user,
        }
      );
      this.edit = true;
      console.log("updatevalue:", updated);
      this.getUserdetails();
    },
    openEditData() {
      console.log("fdgdgdfhd");
      this.user.userId = this.donor.userId;
      this.user.name = this.donor.name;
      this.user.email = this.donor.email;
      this.user.address = this.donor.address;
      this.user.vision = this.donor.vision;
      this.user.mission = this.donor.mission;
      this.user.contact = this.donor.contact;
      this.edit = false;
      console.log(this.edit);
    },
  },
};
</script>

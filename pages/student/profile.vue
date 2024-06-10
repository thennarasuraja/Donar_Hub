<template>
  <div class="w-full">
    <div class="flex w-full">
      <Students name="profile" />
      <div class="w-full h-screen bg-slate-100">
        <div class="flex justify-center">
          <div class="text-2xl mt-10 mr-10 absolute">PROFILE</div>
          <div class="flex flex-col mt-[100px] gap-2">
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
              <div class="px-5 flex justify-between">
                <div class="p-5 flex flex-col gap-5">
                  <div v-if="edit == true">
                    <input
                      type="text"
                      v-model="user.name"
                      placeholder="Edit your Name"
                      class="border p-2 font-sans rounded-[6px]"
                    />
                  </div>
                  <div v-else>
                    <div>
                      <div class="text-sm font-semibold text-slate-900">
                        Name
                      </div>
                      <div class="p-1 text-slate-600">
                        {{ students.name }}
                      </div>
                    </div>
                  </div>

                  <div v-if="edit == true">
                    <input
                      type="email"
                      v-model="user.email"
                      placeholder="Edit your Email"
                      class="border rounded-[6px] p-2"
                    />
                  </div>
                  <div v-else>
                    <div>
                      <div class="text-sm font-semibold text-slate-900">
                        Email
                      </div>
                      <div class="p-1 text-slate-600">{{ students.email }}</div>
                    </div>
                  </div>
                  <div v-if="edit == true">
                    <input
                      type="text"
                      v-model="user.age"
                      placeholder="Edit your Age"
                      class="border rounded-[6px] p-2"
                    />
                  </div>
                  <div v-else>
                    <div>
                      <div class="text-sm font-semibold text-slate-900">
                        Age
                      </div>
                      <div class="p-1 text-slate-600">{{ students.age }}</div>
                    </div>
                  </div>
                  <div v-if="edit == true">
                    <textarea
                      v-model="user.address"
                      placeholder="Edit your Address"
                      class="border rounded-[6px] w-[200px] p-2"
                    >
                    </textarea>
                  </div>
                  <div v-else>
                    <div>
                      <div class="text-sm font-semibold text-slate-900">
                        Address
                      </div>
                      <div class="p-1 text-slate-600">
                        {{ students.address }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-5 flex flex-col gap-5">
                  <div v-if="edit == true">
                    <input
                      type="text"
                      v-model="user.standard"
                      placeholder="Edit your standard"
                      class="border rounded-[6px] p-2"
                    />
                  </div>
                  <div v-else>
                    <div>
                      <div class="text-sm font-semibold text-slate-900">
                        Standard
                      </div>
                      <div class="p-1 text-slate-600">
                        {{ students.standard }}
                        <span v-if="students.standard >= 4">th </span>
                      </div>
                    </div>
                  </div>

                  <div v-if="edit == true">
                    <input
                      type="text"
                      v-model="user.sslcMark"
                      placeholder="Edit your 10th Mark"
                      class="border rounded-[6px] p-2"
                    />
                  </div>
                  <div v-else>
                    <div>
                      <div class="text-sm font-semibold text-slate-900">
                        10th Mark
                      </div>
                      <div class="p-1 text-slate-600">
                        {{ students.sslcMark }}
                      </div>
                    </div>
                  </div>
                  <div v-if="edit == true">
                    <input
                      type="text"
                      v-model="user.hscMark"
                      placeholder="Edit your 12th Mark"
                      class="border rounded-[6px] p-2"
                    />
                  </div>
                  <div v-else>
                    <div>
                      <div class="text-sm font-semibold text-slate-900">
                        12th Mark
                      </div>
                      <div class="p-1 text-slate-600">
                        {{ students.hscMark }}
                      </div>
                    </div>
                  </div>
                  <div v-if="edit == true">
                    <input
                      type="text"
                      v-model="user.department"
                      placeholder="Edit your 12th Department"
                      class="border rounded-[6px] p-2"
                    />
                  </div>
                  <div v-else>
                    <div>
                      <div class="text-sm font-semibold text-slate-900">
                        12th Department
                      </div>
                      <div class="p-1 text-slate-600">
                        {{ user.department }}
                      </div>
                    </div>
                  </div>
                  <div v-if="edit">
                    <div class="w-full flex justify-between">
                      <button
                        @click="updateUserDetails()"
                        class="bg-blue-800 rounded-[6px] cursor-pointer text-white py-[5px] w-[45%] text-base px-3"
                      >
                        Submit
                      </button>
                      <button
                        @click="edit = false"
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
      edit: false,
      userId: this.$route.query.userId,
      students: {},
      user: {
        userId: "",
        name: "",
        email: "",
        age: "",
        address: "",
        standard: "",
        sslcMark: "",
        hscMark: "",
        department: "",
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
      console.log("userdata:", userdata);
      console.log("success:", success);

      this.students = userdata.reduce((accumulator, currentVal) => {
        return (accumulator = currentVal);
      }, {});
      this.copy = this.students;

      console.log("usserdata:==", this.students);
    },
    async updateUserDetails() {
      const updated = await this.$http.$put(
        "http://localhost:5001/user/userupdate",
        {
          body: this.user,
        }
      );
      this.edit = false;
      console.log("updatevalue:", updated);
      this.getUserdetails()
    },
    openEditData() {
      console.log("fdgdgdfhd");
      this.user.userId = this.students.userId;
      this.user.name = this.students.name;
      this.user.email = this.students.email;
      this.user.age = this.students.age;
      this.user.address = this.students.address;
      this.user.standard = this.students.standard;
      this.user.sslcMark = this.students.sslcMark;
      this.user.hscMark = this.students.hscMark;
      this.user.department = this.students.department;
      this.edit = true;
    },
  },
};
</script>

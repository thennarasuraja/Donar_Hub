<template>
  <div class="w-full">
    <div class="flex w-full">
      <Students name="profile" />
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
                  @click="editfunc()"
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
                      placeholder="Edit your Name"
                      v-model="student.name"
                      class="border p-2 font-sans rounded-[6px]"
                    />
                  </div>
                  <div v-else>
                    <div>
                      <div class="text-sm font-semibold text-slate-900">
                        Name
                      </div>
                      <div class="p-1 text-slate-600">
                        {{ student.name }}
                      </div>
                    </div>
                  </div>

                  <div v-if="edit == true">
                    <input
                      type="email"
                      placeholder="Edit your Email"
                      v-model="student.email"
                      class="border rounded-[6px] p-2"
                    />
                  </div>
                  <div v-else>
                    <div>
                      <div class="text-sm font-semibold text-slate-900">
                        Email
                      </div>
                      <div class="p-1 text-slate-600">{{ student.email }}</div>
                    </div>
                  </div>
                  <div v-if="edit == true">
                    <input
                      type="text"
                      placeholder="Edit your Age"
                      v-model="student.age"
                      class="border rounded-[6px] p-2"
                    />
                  </div>
                  <div v-else>
                    <div>
                      <div class="text-sm font-semibold text-slate-900">
                        Age
                      </div>
                      <div class="p-1 text-slate-600">{{ student.age }}</div>
                    </div>
                  </div>
                  <div v-if="edit == true">
                    <textarea
                      placeholder="Edit your Address"
                      v-model="student.address"
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
                        {{ student.address }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-5 flex flex-col gap-5">
                  <div v-if="edit == true">
                    <input
                      type="text"
                      placeholder="Edit your standard"
                      v-model="student.Standard"
                      class="border rounded-[6px] p-2"
                    />
                  </div>
                  <div v-else>
                    <div>
                      <div class="text-sm font-semibold text-slate-900">
                        Standard
                      </div>
                      <div class="p-1 text-slate-600">
                        {{ student.Standard }}
                        <span v-if="student.Standard.length >= 1">th </span>
                      </div>
                    </div>
                  </div>

                  <div v-if="edit == true">
                    <input
                      type="text"
                      placeholder="Edit your 10th Mark"
                      v-model="student.sslcMark"
                      class="border rounded-[6px] p-2"
                    />
                  </div>
                  <div v-else>
                    <div>
                      <div class="text-sm font-semibold text-slate-900">
                        10th Mark
                      </div>
                      <div class="p-1 text-slate-600">
                        {{ student.sslcMark }}
                      </div>
                    </div>
                  </div>
                  <div v-if="edit == true">
                    <input
                      type="text"
                      placeholder="Edit your 12th Mark"
                      v-model="student.hscMark"
                      class="border rounded-[6px] p-2"
                    />
                  </div>
                  <div v-else>
                    <div>
                      <div class="text-sm font-semibold text-slate-900">
                        12th Mark
                      </div>
                      <div class="p-1 text-slate-600">
                        {{ student.hscMark }}
                      </div>
                    </div>
                  </div>
                  <div v-if="edit == true">
                    <input
                      type="text"
                      placeholder="Edit your 12th Department"
                      v-model="student.hscDepartment"
                      class="border rounded-[6px] p-2"
                    />
                  </div>
                  <div v-else>
                    <div>
                      <div class="text-sm font-semibold text-slate-900">
                        12th Department
                      </div>
                      <div class="p-1 text-slate-600">
                        {{ student.hscDepartment }}
                      </div>
                    </div>
                  </div>
                  <div v-if="edit == true">
                    <div class="w-full flex justify-between">
                      <input
                        @click="submited()"
                        class="bg-blue-800 rounded-[6px] cursor-pointer text-white py-[5px] w-[45%] text-base px-3"
                        type="submit"
                      />
                      <input
                        @click="cancel()"
                        class="bg-red-800 rounded-[6px] cursor-pointer text-white w-[45%] py-[5px] text-base px-3"
                        type="submit"
                        value="Cancel"
                      />
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
      student: {
        name: "",
        age: "",
        email: "",
        address: "",
        Standard: "",
        sslcMark: "",
        hscMark: "",
        hscDepartment: "",
      },
      editStudentValue: {},
      beforeStudentValue: {},
    };
  },
  methods: {
    editfunc() {
      this.beforeStudentValue = { ...this.student };
      this.edit = true;
    },
    submited() {
      this.editstudent = { ...this.student };
      this.student = { ...this.editstudent };
      console.log(this.student);
      this.edit = false;
    },
    cancel() {
      this.student = { ...this.beforeStudentValue };
      this.edit = false;
    },
  },
};
</script>

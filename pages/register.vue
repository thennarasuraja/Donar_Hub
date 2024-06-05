<template>
  <div class="">
    <div class="flex justify-center items-center h-screen">
      <div class="mt-[40px] shadow-xl w-[500px] bg-white text-black rounded-lg">
        <h1 class="py-2 text-center font-bold text-2xl">
          {{ role }} Register Form
        </h1>
        <div class="flex justify-center text-[12px] py-[20px]">
          <div>
            <div class="grid grid-cols-2 items-center gap-[25px]">
              <div class="flex flex-col gap-[5px]">
                <div v-if="role == 'Donar'" class="text-gray-700">
                  Trust Name
                </div>
                <div v-else class="text-gray-700">Name</div>
                <div>
                  <input
                    type="text"
                    v-model="user.name"
                    class="border border-gray-300 bg-slate-100 w-[220px] p-2 rounded-[4px] focus:outline-none"
                    placeholder="Enter Your Name"
                  />
                </div>
              </div>
              <div v-if="role == 'Donar'" class="flex flex-col gap-[5px]">
                <div class="text-gray-700">Vision</div>
                <div>
                  <input
                    type="text"
                    v-model="user.vision"
                    placeholder="Vision"
                    class="border border-gray-300 focus:outline-none bg-slate-100 w-[220px] p-2 rounded-[4px]"
                  />
                </div>
              </div>
              <div v-else class="flex flex-col gap-[5px]">
                <div class="text-gray-700">Age</div>
                <div>
                  <input
                    type="text"
                    placeholder="Age"
                    v-model="user.age"
                    class="border border-gray-300 focus:outline-none bg-slate-100 w-[220px] p-2 rounded-[4px]"
                  />
                </div>
              </div>
              <div v-if="role == 'Donar'" class="flex flex-col gap-[5px]">
                <div class="text-gray-700">Mission</div>
                <div>
                  <input
                    type="text"
                    placeholder="Mission"
                    v-model="user.mission"
                    class="border border-gray-300 focus:outline-none bg-slate-100 w-[220px] p-2 rounded-[4px]"
                  />
                </div>
              </div>
              <div v-else class="flex flex-col gap-[5px]">
                <div class="text-gray-700">Standard</div>
                <div>
                  <select
                    placeholder="10th Mark"
                    class="border border-gray-300 bg-slate-100 focus:outline-none w-[220px] p-2 rounded-[4px]"
                  >
                    <option v-for="item in 12">{{ item }}</option>
                  </select>
                </div>
              </div>
              <div v-if="role == 'Student'" class="flex flex-col gap-[5px]">
                <div class="text-gray-700">10th Mark</div>
                <div>
                  <input
                    type="text"
                    placeholder="10th Mark"
                    v-model="user.sslcMark"
                    class="border border-gray-300 bg-slate-100 w-[220px] p-2 rounded-[4px] focus:outline-none"
                  />
                </div>
              </div>
              <div v-if="role == 'Student'" class="flex flex-col gap-[5px]">
                <div class="text-gray-700">12th Mark</div>
                <div>
                  <input
                    type="text"
                    placeholder="12th Mark"
                    v-model="user.hscMark"
                    class="border border-gray-300 w-[220px] p-2 focus:outline-none bg-slate-100 rounded-[4px]"
                  />
                </div>
              </div>
              <div v-if="role == 'Student'" class="flex flex-col gap-[5px]">
                <div class="text-gray-700">12th Course</div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Your 12th Course"
                    v-model="user.department"
                    class="border border-gray-300 p-2 focus:outline-none bg-slate-100 rounded-[4px] w-[220px]"
                  />
                </div>
              </div>
              <div v-if="role == 'Student'" class="flex flex-col gap-[5px]">
                <div class="text-gray-700">Address</div>
                <div>
                  <textarea
                    v-model="user.address"
                    type="address"
                    placeholder="Address"
                    class="border border-gray-300 p-2 bg-slate-100 focus:outline-none rounded-[4px] w-[220px]"
                  ></textarea>
                </div>
              </div>

              <div class="flex flex-col gap-[5px]">
                <div class="text-gray-700">Contact</div>
                <div>
                  <input
                    type="text"
                    v-model="user.contact"
                    placeholder="Contact"
                    class="border border-gray-300 p-2 bg-slate-100 focus:outline-none rounded-[4px] w-[220px]"
                  />
                </div>
              </div>
              <div class="flex flex-col gap-[5px]">
                <div class="text-gray-700">E-mail</div>
                <div>
                  <input
                    type="email"
                    v-model="user.email"
                    placeholder="E-mail"
                    class="border border-gray-300 w-[220px] p-2 bg-slate-100 focus:outline-none rounded-[4px]"
                  />
                </div>
              </div>
              <div class="flex flex-col gap-[5px]">
                <div class="text-gray-700">Password</div>
                <div>
                  <input
                    type="password"
                    v-model="user.password"
                    placeholder="Password"
                    class="border border-gray-300 w-[220px] p-2 focus:outline-none bg-slate-100 rounded-[4px]"
                  />
                </div>
              </div>
            </div>
            <div v-if="role == 'Donar'" class="grid grid-cols-1 mt-5 w-full">
              <div class="text-gray-700">Address</div>
              <div>
                <textarea
                  v-model="user.address"
                  type="address"
                  placeholder="Address"
                  class="border border-gray-300 p-2 bg-slate-100 focus:outline-none rounded-[4px] w-full"
                ></textarea>
              </div>
            </div>
            <div class="grid grid-cols-1 mt-5 w-full">
              <button
                @click="UserRegister()"
                class="px-5 py-3 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Register
              </button>
            </div>
          </div>
        </div>

        <!-- <div class="mt-[50px] flex justify-end w-[500px]">
          <div class="flex justify-end items-center">
            <label
              v-if="role == 'Donar'"
              class="text-sm text-gray-800 mx-[10px]"
              >Trust Name
            </label>
            <label v-else class="text-sm text-gray-800 mx-[10px]">Name </label>

            <input
              v-model="user.name"
              type="text"
              placeholder=" Name"
              class="w-[200px] p-[10px] mr-[10px] py-[4px] mb-5 border border-b-gray-600 bg-slate-100 focus:outline-none rounded-[6px]"
            />
          </div>
          <div v-if="role == 'Donar'" class="flex justify-between items-center">
            <label class="text-sm text-gray-800 mx-[10px]">Vision </label>
            <input
              v-model="user.vision"
              type="text"
              placeholder="Vision"
              class="w-[200px] p-[10px] mr-[10px] py-[4px] ml-[58px] mb-5 focus:outline-none border border-b-gray-600 bg-slate-100 rounded-[6px]"
            />
          </div>
          <div v-else class="flex justify-between items-center">
            <label class="text-sm text-gray-800 mx-[10px]">Age </label>
            <input
              v-model="user.age"
              type="text"
              placeholder="Age"
              class="w-[200px] p-[10px] mr-[10px] py-[4px] focus:outline-none border border-b-gray-600 bg-slate-100 rounded-[6px]"
            />
          </div>
          <div v-if="role == 'Donar'" class="flex justify-between items-center">
            <label class="text-sm text-gray-800 mx-[10px]">Mission </label>
            <input
              v-model="user.mission"
              type="text"
              placeholder="Mission"
              class="w-[350px] p-[10px] py-[4px] mr-[10px] mb-5 focus:outline-none border border-b-gray-600 bg-slate-100 rounded-[6px]"
            />
          </div>
          <div v-else>
            <div class="flex justify-between items-center">
              <label class="text-sm text-gray-800 mx-[10px]">Standard </label>
              <select
                
                placeholder="10th Mark"
                class="w-[350px] py-[4px] p-[10px] mr-[10px] mb-5 focus:outline-none border border-b-gray-600 bg-slate-100 rounded-[6px]"
              >
                <option v-for="item in 12">{{ item }}</option>
              </select>
            </div>

            <div class="flex justify-between items-center">
              <label class="text-sm text-gray-800 mx-[10px]">10th Mark </label>
              <input
                v-model="user.sslcMark"
                type="text"
                placeholder="10th Mark"
                class="w-[350px] p-[10px] py-[4px] mr-[10px] mb-5 focus:outline-none border border-b-gray-600 bg-slate-100 rounded-[6px]"
              />
            </div>
            <div class="flex justify-between items-center">
              <label class="text-sm text-gray-800 mx-[10px]">12th Mark </label>
              <input
                v-model="user.hscMark"
                type="text"
                placeholder="12th Mark"
                class="w-[350px] p-[10px] py-[4px] mr-[10px] mb-5 focus:outline-none border border-b-gray-600 bg-slate-100 rounded-[6px]"
              />
            </div>
            <div class="flex justify-between items-center">
              <label class="text-sm text-gray-800 mx-[10px]"
                >12th Coures
              </label>
              <input
                v-model="user.department"
                type="text"
                placeholder="Enter Your 12th Mark Course "
                class="w-[350px] p-[10px] py-[4px] mr-[10px] mb-5 focus:outline-none border border-b-gray-600 bg-slate-100 rounded-[6px]"
              />
            </div>
          </div>
          <div class="flex justify-between items-center">
            <label class="text-sm text-gray-800 mx-[10px]">Address </label>
            <textarea
              v-model="user.address"
              type="text"
              placeholder="Address"
              class="w-[350px] py-[4px] p-[10px] mb-5 mr-[10px] focus:outline-none border border-b-gray-600 bg-slate-100 rounded-[6px]"
            ></textarea>
          </div>
          <div class="flex justify-between items-center">
            <label class="text-sm text-gray-800 mx-[10px]">Contact </label>
            <input
              v-model="user.contact"
              type="text"
              placeholder="Contact"
              class="w-[350px] py-[4px] p-[10px] mb-5 mr-[10px] focus:outline-none border border-b-gray-600 bg-slate-100 rounded-[6px]"
            />
          </div>
          <div class="flex justify-between items-center">
            <label class="text-sm text-gray-800 mx-[10px]">E-mail </label>
            <input
              v-model="user.email"
              type="email"
              placeholder="email"
              class="w-[350px] py-[4px] p-[10px] mb-5 mr-[10px] focus:outline-none border border-b-gray-600 bg-slate-100 rounded-[6px]"
            />
          </div>
          <div class="flex justify-between items-center">
            <label class="text-sm text-gray-800 mx-[10px]">password </label>
            <input
              v-model="user.password"
              type="password"
              placeholder="Password"
              class="w-[350px] py-[4px] p-[10px] mb-5 mr-[10px] focus:outline-none border border-b-gray-600 bg-slate-100 rounded-[6px]"
            />
          </div>
          <div>
            <button
              @click="UserRegister()"
              class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Register
            </button>
          </div>-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      role: this.$route.query.type,
      user: {
        name: " ",
        email: " ",
        age: " ",
        hscMark: " ",
        sslcMark: " ",
        address: " ",
        contact: " ",
        password: "",
        vision: " ",
        mission: " ",
        department: " ",
      },
    };
  },
  methods: {
    async UserRegister() {
      console.log(this.user);
      const data = await this.$http.$post(
        "http://localhost:5001/user/register",
        {
          body: this.user,
        }
      );
      if (data.success) {
        this.$router.push(`/login?type=${this.role} `);
      } else {
        alert("something Error please check");
      }
    },
  },
};
</script>

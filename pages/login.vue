<template>
  <div
    class="absolute flex flex-col items-center shadow-2xl p-[40px] justify-center top-[20%] left-80 ml-40 mr-60 w-[400px] bg-white rounded-3xl"
  >
    <h1 class="font-bold text-center mb-[40px] text-4xl">{{ role }} Log in</h1>
    <div>
      <div>
        <label for="text" class="text-sm text-gray-800">E-mail</label>
        <input
          v-model="user.email"
          type="email"
          autocomplete="off"
          class="w-full px-4 py-2 mt-1 text-blue-500 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div>
        <label for="text" class="text-sm text-gray-800">Password</label>
        <input
          v-model="user.password"
          type="text"
          autocomplete="off"
          class="w-full px-4 py-2 mt-1 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div class="mt-6">
        <button
          @click="userlogin()"
          class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Log in
        </button>
      </div>

      <div class="flex mt-6">
        <div>Not a member?</div>
        <div>
          <NuxtLink :to="`register?type=${this.$route.query.type}`"
            ><p class="hover:text-rose-400 text-blue-800 ml-[4px]">
              Register here
            </p></NuxtLink
          >
        </div>
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
        email: " ",
        password: "",
        role:this.$route.query.type
      },
      userData: [],
    };
  },
  methods: {
    async userlogin() {
      console.log(this.user);
      const { user, success } = await this.$http.$post(
        "http://localhost:5001/user/login",
        {
          body: this.user,
        }
      );

      if (success) {
        const userId = user.userId;
        if (this.role == "Student" ) {
          this.$router.push(`/student?type=${this.role}&userId=${userId}`);
          console.log("userId: ", userId);
          console.log("user: ", this.role);
        } else { 
          this.$router.push(`/donor?type=${this.role}&userId=${userId}`);
          console.log("hii");
        }
      } else {
        alert("something error please check");
      }
    },
  },
};
</script>

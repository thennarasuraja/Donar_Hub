<template>
  <div class="w-full">
    <div class="flex w-full">
      <div class="border shadow-md w-[250px] h-screen" v-if="sidebar">
        <div class="flex flex-col px-4 pt-10 gap-2">
          <div
            @click="setActivePage('donation-list')"
            class="p-2 hover:bg-slate-100 rounded-[6px] cursor-pointer"
            :class="{
              'text-blue-800 bg-blue-50': page2 == 'donation-list',
              'text-slate-950 ': page2 != 'donation-list',
            }"
          >
            Donation List
          </div>

          <div
            @click="setActivePage('applicationlist')"
            class="p-2 hover:bg-slate-100 rounded-[6px] cursor-pointer"
            :class="{
              'text-blue-800 bg-blue-50': page2 == 'applicationlist',
              'text-slate-950 ': page2 != 'applicationlist',
            }"
          >
            Application List
          </div>
          <div
            @click="setActivePage('profile')"
            class="p-2 hover:bg-slate-100 rounded-[6px] cursor-pointer"
            :class="{
              'text-blue-800 bg-blue-50': page2 == 'profile',
              'text-slate-950 ': page2 != 'profile',
            }"
          >
            User Profile
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="bg-slate-100 w-[100%] h-screen">
          <!-- <div v-if="activepage == 'donation-list'" class="w-full p-4 bg-white">
            <img
              class="h-[30px] cursor-pointer"
              @click="sidebar = !sidebar"
              src="/images/menubar.png"
            />
          </div> -->
          <div>
            <div>
              <div class="flex justify-between w-full p-4 bg-white">
                <div>
                  <img
                    class="h-[30px] cursor-pointer"
                    @click="sidebar = !sidebar"
                    src="/images/menubar.png"
                  />
                </div>
                <div
                  v-if="activepage == 'donation-list'"
                  @click="createModel = true"
                  class="mr-5 cursor-pointer text-[16px] bg-blue-500 px-[20px] py-[3px] rounded-[10px] text-white font-serif"
                >
                  Add
                </div>
              </div>
            </div>
          </div>
          <!-- <div
            v-if="activepage == 'applicationlist'"
            class="w-full p-4 bg-white"
          >
            <img
              class="h-[30px] cursor-pointer"
              @click="sidebar = !sidebar"
              src="/images/menubar.png"
            />
          </div> -->
        </div>
      </div>
    </div>

    <div
      class="w-[100%] h-screen fixed top-0 left-0 right-0 bg-black bg-opacity-50 z-3"
      v-if="createModel"
    >
      <div class="flex justify-center absolute top-10 left-1/3">
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <h1 class="text-2xl font-bold mb-4 text-center">Donation List</h1>

          <div class="mb-4">
            <label for="name" class="block text-gray-700">Donation Name</label>
            <input
              type="text"
              id="name"
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
                class="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
          <div class="mb-4">
            <label for="name" class="block text-gray-700">other</label>
            <input
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div class="mb-4">
            <label for="name" class="block text-gray-700">Eligible</label>
            <input
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div class="grid gap-3 grid-cols-2">
            <button
              @click="createModel = !createModel"
              type="cancel"
              class="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
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
      sidebar: true,
      activepage: "donation-list",
      page2: " ",
    };
  },
  // mounted{

  //   setActivePage(page)

  // },
  methods: {
    setActivePage(page) {
      this.activepage = page;
      this.page2 = page;
    },
  },
};
</script>

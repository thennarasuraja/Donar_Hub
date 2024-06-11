<template>
  <div>
    <div>
      <div
        class="relative w-full bg-cover h-screen bg-[url('/images/students.jpg')]"
      >
        <div
          class="fixed top-0 right-0 left-0 gap-[85%] px-[20px] py-[10px] text-[16px] font-medium flex text-white text-xl"
        >
          <div
            class="flex items-center py-[10px] gap-[6px] font-sans font-semibold text-[16px]"
          >
            <img class="w-[40px] h-[25px]" src="/images/students-icon.webp" />
            <div>DonorHub</div>
          </div>
          <NuxtLink to="login?type=Donor">
            <div
              class="px-4 py-2 tracking-wide hover:translate-x-1 hover:scale-110 cursor-pointer text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-blue-600"
            >
              Donor
            </div>
          </NuxtLink>
        </div>
        <div class="absolute left-[10%] gap-6 grid top-[40%] text-center">
          <div
            class="text-white overflow-hidden whitespace-nowrap animate-typing text-[28px] font-sans font-bold"
          >
            The Best Way To Predict The World,If You Can Help To Educate The
            Child.........
          </div>

          <div class="w-full flex justify-center">
            <NuxtLink to="login?type=Student">
              <div
                class="text-2xl hover:translate-x-1 hover:scale-110 font-medium w-[200px] h-[50px] shadow-xl px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Students
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- class="bg-[url('/images/students.jpg')] w-full h-full" -->
</template>
<!-- 
<template>
  <h1 class="font-bold text-center text-4xl mt-16">
    Register Form
  </h1>

  <div
    class="absolute flex flex-col items-center shadow-2xl justify-center p-5 top-40 left-80 ml-40 mr-60 h-[300px] w-[400px] bg-white rounded-3xl"
  >
    <div>
      <div>
        <label for="text" class="block text-sm text-gray-800">Book Name</label>
        <input
          type="text"
         
          class="block w-full px-4 py-2 mt-1 text-blue-500 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div>
        <label for="text" class="block text-sm text-gray-800"
          >Description</label
        >
        <input
          type="text"
          class="block w-full px-4 py-2 mt-1 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div>
        <label for="text" class="block text-sm text-gray-800">Prize </label>
        <input
          type="text"
          class="block w-full px-4 py-2 mt-1 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div class="mt-6">
        <button
         
          class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add Book
        </button>
      </div>
    </div>
  </div>
</template> -->

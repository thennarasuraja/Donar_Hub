<template>
  <div class="w-full">
    <div class="flex w-full">
      <Students name="donation" />
      <div class="w-full h-screen bg-slate-100">
        <div class="px-10 text-2xl">
          <div class="w-full mb-5">Apply Donations</div>
          <div class="grid grid-cols-3">
            <div
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
                    <div>Donation Name</div>
                    <div>Donar Name</div>
                  </div>
                </div>
                <div class="">Created Time</div>
              </div>
              <div class="w-full text-base mt-2 font-medium">
                <textarea
                  class="w-full px-[6px] p-[3px] text-sm font-serif font-medium outline-none h-[80px]"
                >
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto incidunt omnis repudiandae suscipit,</textarea
                >
              </div>
              <div class="flex justify-end m-2">
                <div
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

<template>
    <div class="flex flex-col justify-center items-center py-4">
        <h1 class="text-sm tracking-[0.2em] font-bold mb-4 uppercase">Contact Us</h1>
        <div class="text-center">
            <p class="mb-2">Email: agroj.official@gmail.com</p>
            <p class="mb-2">Phone: 01798895573</p>
            <p class="mb-2">---------------------</p>
            <p>Visit our <a href="https://www.facebook.com/agroj.official/" target="_blank" class="text-green-600 hover:underline">Facebook page</a> to follow daily updates </p>
        </div>
        <div class="my-6 w-full max-w-lg  rounded-lg shadow-lg shadow-[#7cc142] bg-[#2c8942] text-white">
            <h2 class="text-sm tracking-[0.2em] text-center font-semibold my-2 uppercase">Send Us a Message</h2>
            <form class="p-6">
                <div class="mb-4">
                    <label class="block text-gray-100 text-sm font-bold mb-2" for="name">
                        Name
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-100 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-100 text-sm font-bold mb-2" for="message">
                        Message
                    </label>
                    <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" class="bg-white hover:bg-[#7cc142] text-gray-700 text-sm font-bold uppercase tracking-[0.2em] py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Send Message
                </button>
            </form>
        </div>

    </div>
</template>
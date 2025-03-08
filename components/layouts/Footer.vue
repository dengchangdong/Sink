<script setup>
import { GitHubIcon, GmailIcon, TelegramIcon } from 'vue3-simple-icons'

const { title, email, telegram, blog, twitter, mastodon, github } = useAppConfig()
</script>

<template>
  <section class="md:pt-6">
    <div class="container flex flex-col items-center py-8 mx-auto sm:flex-row">
      <a
        href="/"
        class="text-xl font-black leading-none text-gray-900 select-none dark:text-gray-100 logo"
        :title="title"
      >{{ title }}</a>
      <a
        class="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0"
        href="https://pin.ci"
        target="_blank"
        title="Pin.ci"
      >
        &copy; {{ new Date().getFullYear() }} Products of Pin.ci
      </a>
      <span
        class="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start"
      >
        <a
          v-if="email"
          :href="`mailto:${email}`"
          title="Email"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Email</span>
          <GmailIcon
            class="w-6 h-6"
          />
        </a>
        <a
          v-if="telegram"
          :href="telegram"
          target="_blank"
          title="Telegram"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Telegram</span>
          <TelegramIcon
            class="w-6 h-6"
          />
        </a>

        <a
          v-if="github"
          :href="github"
          target="_blank"
          title="GitHub"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">GitHub</span>
          <GitHubIcon
            class="w-6 h-6"
          />
        </a>
      </span>
    </div>
  </section>
</template>

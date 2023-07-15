<template>
	<v-snackbar
		v-model="notification.open"
		:color="notification.color"
		:location="notification.location"
		:timeout="notification.time"
		style="z-index: 1007"
	>
		{{ notification.message }}
	</v-snackbar>
</template>

<script lang="ts" setup>
import { useNotification } from '@/composables/Notification'

const { notification } = useNotification()
</script>

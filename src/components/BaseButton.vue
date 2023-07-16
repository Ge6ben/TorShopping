<script lang="ts" setup>
import { ButtonVariant } from '@/shared/types/types'

export type RButtonProps = {
	/** Color of the button */
	color?: string

	/** To disable the button */
	disabled?: boolean

	/** Variant of the button */
	variant?: ButtonVariant
}

withDefaults(defineProps<RButtonProps>(), {
	color: 'primary',
	variant: 'elevated'
})
</script>

<template>
	<v-btn :color="color" :disabled="disabled" :variant="variant">
		<!-- @slot To put any element inside the button-->
		<slot />
	</v-btn>
</template>
